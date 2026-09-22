import { BookOpen, Headphones, MessageCircle, Mic, Lock, ChevronLeft, Trophy, Flame, Star } from "lucide-react";
import Link from "next/link";

/* ── Course Data: 12 Units A2→B1 ── */
const UNITS = [
  {
    id: 1,
    title: "היכרות ויום-יום",
    titleEn: "Introductions & Daily Life",
    unlocked: true,
    progress: 100,
    skills: [
      { type: "vocab", label: "Vocabulary", icon: BookOpen, done: true },
      { type: "grammar", label: "Grammar", icon: BookOpen, done: true },
      { type: "reading", label: "Reading", icon: BookOpen, done: true },
      { type: "listening", label: "Listening", icon: Headphones, done: true },
      { type: "speaking", label: "Speaking", icon: Mic, done: true },
    ],
  },
  {
    id: 2,
    title: "משפחה וחברים",
    titleEn: "Family & Friends",
    unlocked: true,
    progress: 60,
    skills: [
      { type: "vocab", label: "Vocabulary", icon: BookOpen, done: true },
      { type: "grammar", label: "Grammar", icon: BookOpen, done: true },
      { type: "reading", label: "Reading", icon: BookOpen, done: false },
      { type: "listening", label: "Listening", icon: Headphones, done: false },
      { type: "speaking", label: "Speaking", icon: Mic, done: false },
    ],
  },
  {
    id: 3,
    title: "חוויות ורגשות",
    titleEn: "Experiences & Feelings",
    unlocked: true,
    active: true,
    progress: 0,
    vocab: ["embarrassed", "although", "achieve", "proud", "nervous", "confident", "disappointed", "grateful", "anxious", "curious", "jealous", "relieved", "frustrated", "amazed", "exhausted", "thrilled", "ashamed", "overwhelmed", "inspired", "content"],
    grammarTopic: "Present Perfect vs Past Simple",
    skills: [
      { type: "vocab", label: "Vocabulary", icon: BookOpen, done: false },
      { type: "grammar", label: "Grammar", icon: BookOpen, done: false },
      { type: "reading", label: "Reading", icon: BookOpen, done: false },
      { type: "listening", label: "Listening", icon: Headphones, done: false },
      { type: "speaking", label: "Speaking", icon: Mic, done: false },
    ],
  },
  {
    id: 4,
    title: "נסיעות ותחבורה",
    titleEn: "Travel & Transport",
    unlocked: false,
    skills: [],
  },
  {
    id: 5,
    title: "אוכל ומסעדות",
    titleEn: "Food & Restaurants",
    unlocked: false,
    skills: [],
  },
  {
    id: 6,
    title: "בריאות וגוף",
    titleEn: "Health & Body",
    unlocked: false,
    skills: [],
  },
  {
    id: 7,
    title: "עבודה וקריירה",
    titleEn: "Work & Career",
    unlocked: false,
    skills: [],
  },
  {
    id: 8,
    title: "קניות וכסף",
    titleEn: "Shopping & Money",
    unlocked: false,
    skills: [],
  },
  {
    id: 9,
    title: "טכנולוגיה ומדיה",
    titleEn: "Technology & Media",
    unlocked: false,
    skills: [],
  },
  {
    id: 10,
    title: "חינוך ולמידה",
    titleEn: "Education & Learning",
    unlocked: false,
    skills: [],
  },
  {
    id: 11,
    title: "תרבות ופנאי",
    titleEn: "Culture & Leisure",
    unlocked: false,
    skills: [],
  },
  {
    id: 12,
    title: "מטרות ושאיפות",
    titleEn: "Goals & Ambitions",
    unlocked: false,
    skills: [],
  },
];

const SKILL_COLORS: Record<string, string> = {
  vocab: "bg-blue-100 text-blue-700",
  grammar: "bg-purple-100 text-purple-700",
  reading: "bg-emerald-100 text-emerald-700",
  listening: "bg-amber-100 text-amber-700",
  speaking: "bg-rose-100 text-rose-700",
};

/* ── Page Component ── */
export const metadata = {
  title: "ESL Pals IL — מסלול A2-B1",
  description: "מסלול לימודי אנגלית A2-B1 לישראלים — 12 יחידות, 7 דקות ביום",
};

export default function HomePage() {
  const activeUnit = UNITS.find((u) => u.active);
  const completedUnits = UNITS.filter((u) => u.progress === 100).length;
  const totalSkills = UNITS.reduce((sum, u) => sum + (u.skills?.length || 0), 0);
  const completedSkills = UNITS.reduce(
    (sum, u) => sum + (u.skills?.filter((s) => s.done).length || 0),
    0
  );

  return (
    <div dir="rtl" className="mx-auto max-w-2xl space-y-6 pb-24">
      {/* ── Hero Section ── */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">
            🎯
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">מסלול A2 → B1</h1>
            <p className="text-sm text-emerald-100">12 יחידות · 7 דקות ביום · מותאם לישראלים</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <div className="text-2xl font-bold">{completedUnits}</div>
            <div className="text-[11px] text-emerald-100">יחידות הושלמו</div>
          </div>
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <div className="text-2xl font-bold">{completedSkills}/{totalSkills}</div>
            <div className="text-[11px] text-emerald-100">מיומנויות</div>
          </div>
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold">
              <Flame className="h-5 w-5 text-orange-300" /> 0
            </div>
            <div className="text-[11px] text-emerald-100">רצף ימים</div>
          </div>
        </div>
      </div>

      {/* ── CTA: Today's Lesson ── */}
      {activeUnit && (
        <Link
          href="/study/today"
          className="block rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-emerald-900">
                ▶️ השיעור שלך היום
              </div>
              <div className="mt-0.5 text-xs text-emerald-700">
                יחידה {activeUnit.id}: {activeUnit.title} · 7 דקות
              </div>
            </div>
            <ChevronLeft className="h-5 w-5 text-emerald-600" />
          </div>
        </Link>
      )}

      {/* ── Units List ── */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">📚 כל היחידות</h2>

        {UNITS.map((unit) => (
          <div
            key={unit.id}
            className={`rounded-2xl border p-4 transition ${
              unit.active
                ? "border-emerald-300 bg-emerald-50 shadow-md ring-2 ring-emerald-200"
                : unit.unlocked
                ? "border-zinc-100 bg-white shadow-sm hover:shadow-md"
                : "border-zinc-100 bg-zinc-50 opacity-60"
            }`}
          >
            {/* Unit Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold ${
                    unit.unlocked
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-zinc-200 text-zinc-400"
                  }`}
                >
                  {unit.unlocked ? unit.id : <Lock className="h-4 w-4" />}
                </div>
                <div>
                  <div className="font-bold text-zinc-900">
                    {unit.title}
                  </div>
                  <div className="text-[11px] text-zinc-500">{unit.titleEn}</div>
                </div>
              </div>
              {unit.active && (
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold text-white">
                  נוכחי
                </span>
              )}
              {unit.progress === 100 && (
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-bold text-white">
                  ✅ הושלם
                </span>
              )}
            </div>

            {/* Progress Bar */}
            {unit.unlocked && (
              <div className="mt-3 h-2 rounded-full bg-zinc-100">
                <div
                  className="h-2 rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${unit.progress || 0}%` }}
                />
              </div>
            )}

            {/* Skills Grid */}
            {unit.unlocked && unit.skills && unit.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {unit.skills.map((skill) => (
                  <div
                    key={skill.type}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium ${
                      SKILL_COLORS[skill.type] || "bg-zinc-100 text-zinc-600"
                    } ${skill.done ? "opacity-60 line-through" : ""}`}
                  >
                    <skill.icon className="h-3 w-3" />
                    {skill.label}
                    {skill.done && " ✓"}
                  </div>
                ))}
              </div>
            )}

            {/* Vocab Preview for Active Unit */}
            {unit.vocab && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {unit.vocab.slice(0, 8).map((word) => (
                  <span
                    key={word}
                    className="rounded-full bg-white px-2.5 py-1 text-[11px] text-zinc-600 shadow-sm"
                  >
                    {word}
                  </span>
                ))}
                {unit.vocab.length > 8 && (
                  <span className="text-[11px] text-zinc-400">
                    +{unit.vocab.length - 8} מילים
                  </span>
                )}
              </div>
            )}

            {/* Grammar Topic for Active Unit */}
            {unit.grammarTopic && (
              <div className="mt-2 text-[12px] text-purple-700">
                📝 דקדוק: {unit.grammarTopic}
              </div>
            )}

            {/* Locked Units Teaser */}
            {!unit.unlocked && (
              <div className="mt-2 text-[12px] text-zinc-400">
                🔒 השלם יחידה {unit.id - 1} כדי לפתוח
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Footer Info ── */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 text-center text-sm text-zinc-500">
        <div className="flex items-center justify-center gap-2 text-lg">
          <Trophy className="h-5 w-5 text-amber-500" />
          <span className="font-bold text-zinc-900">סיימת את כל 12 היחידות?</span>
        </div>
        <p className="mt-2 text-xs">
          תהיה מוכן לרמת B1 — שיחה שוטפת, קריאת מאמרים, וכתיבת מיילים
        </p>
      </div>
    </div>
  );
}
