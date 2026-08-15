const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function sbGet(table: string, params: Record<string, string>, profile = "public") {
  const qs = new URLSearchParams(params).toString();
  const r = await fetch(`${SB_URL}/rest/v1/${table}?${qs}`, {
    headers: {
      apikey: SB_KEY,
      Authorization: `Bearer ${SB_KEY}`,
      ...(profile !== "public" ? { "Accept-Profile": profile } : {}),
    },
    next: { revalidate: 60 } as any,
  });
  if (!r.ok) throw new Error(`${table}: ${r.status} ${await r.text()}`);
  return r.json();
}

export interface DailyLesson {
  type: "srs" | "lesson" | "ngsl" | "done";
  count?: number;
  lesson?: {
    id: string;
    level: string;
    number: number;
    title: string;
    duration: number;
    description: string;
    keys_json?: string[];
  };
  vocab?: { en: string; he: string }[];
  estimatedMinutes: number;
  headline: string;
  reason: string;
}

const LEVEL_ORDER = ["A0", "A1", "A2", "B1"];

export async function getDailyLesson(userId: string): Promise<DailyLesson> {
  const today = new Date().toISOString().slice(0, 10);

  // 1. streaks — learned today?
  const streaks = await sbGet("streaks", { "user_id": `eq.${userId}`, limit: "1" });
  const streak = streaks[0];
  if (streak?.last_study_date === today) {
    return {
      type: "done",
      estimatedMinutes: 0,
      headline: "סיימת היום, רוצה בונוס?",
      reason: `רצף: ${streak.current_streak} ימים | XP: ${streak.total_xp}`,
    };
  }

  // 2. SRS due?
  const due = await sbGet("srs_cards_v2", {
    user_id: `eq.${userId}`,
    next_review: `lte.${today}`,
    select: "id,front,back,example",
    limit: "20",
  });
  if (due.length >= 5) {
    return {
      type: "srs",
      count: Math.min(due.length, 20),
      vocab: due.map((c: any) => ({ en: c.front, he: c.back })),
      estimatedMinutes: 5,
      headline: `יש לך ${due.length} מילים לחזרה`,
      reason: "5 דקות וסיימת — המוח שלך יודה לך",
    };
  }

  // 3. next lesson: last completed + 1
  const prog = await sbGet("learning_progress_v2", {
    user_id: `eq.${userId}`,
    completed: "eq.true",
    select: "lesson_id",
    limit: "200",
  });
  const doneIds = new Set(prog.map((p: any) => p.lesson_id));
  const all = await sbGet("lessons_v2", {
    is_active: "eq.true",
    select: "id,level,number,title,duration,description,keys_json,sort_order",
    order: "sort_order.asc",
    limit: "200",
  });
  // find current level = level of last completed
  let currentLevel = "A0";
  const doneLessons = all.filter((l: any) => doneIds.has(l.id));
  if (doneLessons.length > 0) {
    const last = doneLessons[doneLessons.length - 1];
    currentLevel = last.level;
  }
  const next = all.find((l: any) => l.level === currentLevel && !doneIds.has(l.id));
  if (next) {
    const keys = Array.isArray(next.keys_json) ? next.keys_json : [];
    return {
      type: "lesson",
      lesson: next,
      estimatedMinutes: next.duration || 12,
      headline: `שיעור ${next.level}-${next.number}: ${next.title}`,
      reason: keys[0] ? `🎯 ${keys[0]}` : (next.description || "").slice(0, 90),
    };
  }
  // level up
  const idx = LEVEL_ORDER.indexOf(currentLevel);
  if (idx < LEVEL_ORDER.length - 1) {
    const up = LEVEL_ORDER[idx + 1];
    const first = all.find((l: any) => l.level === up);
    if (first) {
      return {
        type: "lesson",
        lesson: first,
        estimatedMinutes: first.duration || 12,
        headline: `🎉 סיימת את ${currentLevel}! עולים ל${up}: ${first.title}`,
        reason: "רמה חדשה, אותו קצב",
      };
    }
  }

  // 4. NGSL fallback — 10 unlearned words
  const ngsl = await sbGet("vocabulary_v2", {
    is_ngsl: "eq.true",
    select: "id,en,he",
    limit: "10",
    offset: String(Math.min(doneIds.size * 10, 490)),
  });
  if (ngsl.length > 0) {
    return {
      type: "ngsl",
      vocab: ngsl.map((v: any) => ({ en: v.en, he: v.he })),
      estimatedMinutes: 5,
      headline: `10 מילים NGSL שכיחות`,
      reason: "המילים שכיחות ביותר באנגלית — תמצא אותן בכל מקום",
    };
  }

  return {
    type: "done",
    estimatedMinutes: 0,
    headline: "הכל הושלם! 🏆",
    reason: "אין תירוצים — סיימת הכל. זמן לב1+",
  };
}
