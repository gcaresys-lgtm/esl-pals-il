import { NextResponse } from "next/server";

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const CRON_SECRET = process.env.CRON_SECRET || "";

export const dynamic = "force-dynamic";

async function sbPost(table: string, body: any) {
  const r = await fetch(`${SB_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(body),
  });
  return r.ok;
}

async function sbPatch(table: string, match: string, body: any) {
  const r = await fetch(`${SB_URL}/rest/v1/${table}?${match}`, {
    method: "PATCH",
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(body),
  });
  return r.ok;
}

export async function POST(req: Request) {
  // mark today learned: update streaks (+XP +streak), log
  const { uid, xp = 50 } = await req.json().catch(() => ({ uid: "default" }));
  const today = new Date().toISOString().slice(0, 10);

  // upsert streak
  const st = await fetch(`${SB_URL}/rest/v1/streaks?user_id=eq.${uid}&select=*`, {
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
  }).then(r => r.json());

  if (st && st.length > 0) {
    const row = st[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const streak = row.last_study_date === yesterday ? (row.current_streak || 0) + 1 : (row.last_study_date === today ? row.current_streak : 1);
    await sbPatch("streaks", `user_id=eq.${uid}`, {
      current_streak: streak,
      longest_streak: Math.max(row.longest_streak || 0, streak),
      last_study_date: today,
      total_xp: (row.total_xp || 0) + xp,
      total_reviews: (row.total_reviews || 0) + 1,
    });
  } else {
    await sbPost("streaks", {
      user_id: uid, current_streak: 1, longest_streak: 1,
      last_study_date: today, total_xp: xp, total_reviews: 1,
    });
  }
  return NextResponse.json({ ok: true, xp_gained: xp });
}

// cron entry: GET with ?slot=morning|evening — returns WhatsApp payload for the local bridge to send
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slot = searchParams.get("slot") || "morning";
  if (CRON_SECRET && searchParams.get("secret") !== CRON_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const uid = searchParams.get("uid") || "default";

  // streaks
  const st = await fetch(`${SB_URL}/rest/v1/streaks?user_id=eq.${uid}&select=*`, {
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
  }).then(r => r.json());
  const streak = st[0] || { current_streak: 0, total_xp: 0 };
  const today = new Date().toISOString().slice(0, 10);
  const studiedToday = streak.last_study_date === today;

  if (slot === "evening" && studiedToday) {
    return NextResponse.json({ skip: true, reason: "studied today" });
  }

  // daily lesson via engine
  const { getDailyLesson } = await import("@/lib/dailyEngine");
  const daily = await getDailyLesson(uid);

  let body: string;
  if (slot === "morning") {
    const first = daily.vocab?.[0]?.en || daily.lesson?.keys_json?.[0] || "אנגלית יומית";
    body = `☀️ *בוקר טוב ראובן - זמן אנגלית (${daily.estimatedMinutes} דק')*\n\n🔥 רצף: ${streak.current_streak} ימים | XP: ${streak.total_xp}\n\n📚 *היום שלך:*\n${daily.headline}\n\n🎯 *למה היום?*\n${first}\n\n▶️ כנס: https://esl-pals-il.vercel.app/study/today\n\n_בלי תירוצים. ${daily.estimatedMinutes} דקות וסיימת._`;
  } else {
    body = `🌙 ראובן, לא למדת היום - 7 דקות ותשמור על הרצף 🔥\nhttps://esl-pals-il.vercel.app/study/today`;
  }

  // log
  await sbPost("whatsapp_logs", {
    user_id: uid, type: slot,
    lesson_id: daily.lesson?.id || null,
  });

  return NextResponse.json({ send: true, phone: "972544223911", message: body });
}
