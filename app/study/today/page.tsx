import { BookOpen, Headphones, Mic, Clock, ChevronLeft, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import TTSButton from "@/components/TTSButton";
import { UNITS } from "@/lib/units-data";
import { notFound } from "next/navigation";

export const metadata = { title: "השיעור היומי — ESL Pals IL" };

export default function TodayLessonPage({ searchParams }: { searchParams: { unit?: string } }) {
  const unitId = parseInt(searchParams.unit || "1");
  const unit = UNITS.find((u) => u.id === unitId);
  if (!unit) notFound();

  return (
    <div dir="rtl" className="mx-auto max-w-2xl space-y-6 pb-24">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900">
        <ArrowLeft className="h-4 w-4" /> חזרה למסלול
      </Link>

      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">📖</div>
          <div>
            <div className="text-[11px] text-emerald-100">יחידה {unit.id} · A2-B1</div>
            <h1 className="text-2xl font-extrabold tracking-tight">{unit.title}</h1>
            <p className="text-sm text-emerald-100">{unit.titleEn}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-emerald-100">
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 דקות</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {unit.words.length} מילים</span>
        </div>
      </div>

      {/* Anki Download */}
      <div className="flex gap-3">
        <a href={`/api/anki/export?unit=${unitId}&format=csv`} className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 text-sm font-bold text-blue-700 shadow-sm transition hover:shadow-md">
          <Download className="h-4 w-4" /> 📥 הורד לאנקי ({unit.words.length} כרטיסיות)
        </a>
        <Link href="/anki" className="flex items-center justify-center rounded-2xl border border-zinc-100 bg-white px-4 text-sm text-zinc-600 shadow-sm transition hover:shadow-md">הוראות ↗</Link>
      </div>

      {/* Vocab */}
      <div className="rounded-2xl border border-zinc-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-zinc-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100"><BookOpen className="h-4 w-4 text-blue-600" /></div>
            <div>
              <div className="font-bold text-zinc-900">אוצר מילים</div>
              <div className="text-[11px] text-zinc-400">{unit.words.length} מילים</div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {unit.words.map((word) => (
              <details key={word.en} className="group rounded-xl border border-zinc-100 bg-zinc-50 p-3 transition hover:bg-white">
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center">
                    <span className="font-bold text-zinc-900">{word.en}</span>
                    <span className="mr-2 text-[11px] text-zinc-400">{word.ipa}</span>
                    <TTSButton word={word.en} />
                  </div>
                  <div className="text-[12px] text-zinc-500">{word.he}</div>
                </summary>
                <div className="mt-2 space-y-1 border-t border-zinc-100 pt-2 text-[12px]">
                  <div className="italic text-zinc-600">"{word.example_en}"</div>
                  <div className="text-zinc-500">{word.example_he}</div>
                  {word.collocation && <div className="text-blue-600">🔗 {word.collocation}</div>}
                  {word.mnemonic && <div className="text-purple-600">💡 {word.mnemonic}</div>}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Finish */}
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 text-center shadow-sm">
        <div className="text-3xl">🎉</div>
        <div className="mt-2 text-lg font-bold text-emerald-900">כל הכבוד!</div>
        <p className="mt-1 text-sm text-emerald-700">סיימת את השיעור של היום</p>
        <Link href="/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700">
          חזרה למסלול <ChevronLeft className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
