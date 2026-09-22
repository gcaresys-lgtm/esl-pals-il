import { BookOpen, Headphones, Mic, Lock, ChevronLeft, Trophy, Flame, Download } from "lucide-react";
import Link from "next/link";
import { UNITS } from "@/lib/units-data";

export const metadata = {
  title: "ESL Pals IL — מסלול A2-B1",
  description: "מסלול לימודי אנגלית A2-B1 לישראלים — 14 יחידות, 280 מילים, 7 דקות ביום",
};

const UNIT_ICONS: Record<number, string> = {
  1: "🌅", 2: "👨‍👩‍👧", 3: "💭", 4: "✈️", 5: "🍕", 6: "🏥",
  7: "💼", 8: "🛒", 9: "💻", 10: "📚", 11: "🎭", 12: "🎯",
};

export default function HomePage() {
  const totalWords = UNITS.reduce((s, u) => s + u.words.length, 0);

  return (
    <div dir="rtl" className="mx-auto max-w-2xl space-y-6 pb-24">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">🎯</div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">מסלול A2 → B1</h1>
            <p className="text-sm text-emerald-100">12 יחידות · {totalWords} מילים · 7 דקות ביום</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-[11px] text-emerald-100">יחידות</div>
          </div>
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <div className="text-2xl font-bold">{totalWords}</div>
            <div className="text-[11px] text-emerald-100">מילים</div>
          </div>
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold">
              <Flame className="h-5 w-5 text-orange-300" /> 0
            </div>
            <div className="text-[11px] text-emerald-100">רצף ימים</div>
          </div>
        </div>
      </div>

      {/* Cambridge Kids Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎓</span>
          <div>
            <div className="font-extrabold">NEW: Cambridge Kids Pre-A1</div>
            <div className="text-[12px] text-amber-100">6 נושאים · 60 כרטיסיות · בהשראת Cambridge Starters</div>
          </div>
        </div>
        <a href="/cambridge-kids" className="mt-2 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold transition hover:bg-white/30">
          🎯 כניסה לפעילויות
        </a>
      </div>

      {/* V5 Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🆕</span>
          <div>
            <div className="font-extrabold">V5 ULTIMATE — 280 כרטיסיות</div>
            <div className="text-[12px] text-purple-100">2 באגים תוקנו · 14 יחידות (כולל Dating & System) · 585 מדיה</div>
          </div>
        </div>
        <a href="/anki" className="mt-2 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold transition hover:bg-white/30">
          📥 הורדת APKG V5
        </a>
      </div>

      {/* CTA */}
      <Link href="/study/today?unit=1" className="block rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 shadow-sm transition hover:shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-emerald-900">▶️ השיעור שלך היום</div>
            <div className="mt-0.5 text-xs text-emerald-700">יחידה 1: חיי יומיום · 7 דקות</div>
          </div>
          <ChevronLeft className="h-5 w-5 text-emerald-600" />
        </div>
      </Link>

      {/* All Units */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">📚 כל היחידות</h2>
        {UNITS.map((unit) => (
          <Link
            key={unit.id}
            href={`/study/today?unit=${unit.id}`}
            className="block rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-lg">
                  {UNIT_ICONS[unit.id] || "📖"}
                </div>
                <div>
                  <div className="font-bold text-zinc-900">{unit.title}</div>
                  <div className="text-[11px] text-zinc-500">{unit.titleEn} · {unit.words.length} מילים</div>
                </div>
              </div>
              <ChevronLeft className="h-4 w-4 text-zinc-400" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {unit.words.slice(0, 5).map((w) => (
                <span key={w.en} className="rounded-full bg-zinc-50 px-2.5 py-1 text-[11px] text-zinc-600">{w.en}</span>
              ))}
              {unit.words.length > 5 && <span className="text-[11px] text-zinc-400">+{unit.words.length - 5}</span>}
            </div>
          </Link>
        ))}
      </div>

      {/* Anki Download */}
      <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-5 shadow-sm">
        <div className="flex items-center gap-2 text-lg font-bold text-blue-900">
          <Download className="h-5 w-5" />
          הורדת כרטיסיות אנקי
        </div>
        <p className="mt-1 text-sm text-blue-700">{totalWords} כרטיסיות מוכנות ללימוד עם Anki</p>
        <div className="mt-3 flex gap-2">
          <a href="/api/anki/export?format=csv" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700">📥 הורד CSV</a>
          <Link href="/anki" className="rounded-full border border-blue-300 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-100">פרטים ↗</Link>
        </div>
      </div>

      {/* Footer */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 text-center text-sm text-zinc-500">
        <div className="flex items-center justify-center gap-2 text-lg">
          <Trophy className="h-5 w-5 text-amber-500" />
          <span className="font-bold text-zinc-900">סיימת את כל 12 היחידות?</span>
        </div>
        <p className="mt-2 text-xs">תהיה מוכן לרמת B1 — שיחה שוטפת, קריאת מאמרים, וכתיבת מיילים</p>
      </div>
    </div>
  );
}
