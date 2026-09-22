import { Download, BookOpen, ArrowLeft, FileText, Smartphone, Monitor, Lightbulb } from "lucide-react";
import Link from "next/link";
import { UNITS } from "@/lib/units-data";

export const metadata = { title: "הורדת כרטיסיות אנקי — ESL Pals IL" };

export default function AnkiPage() {
  const totalWords = UNITS.reduce((s, u) => s + u.words.length, 0);

  return (
    <div dir="rtl" className="mx-auto max-w-2xl space-y-6 pb-24">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900">
        <ArrowLeft className="h-4 w-4" /> חזרה למסלול
      </Link>

      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">📥</div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">כרטיסיות אנקי</h1>
            <p className="text-sm text-blue-100">{totalWords} כרטיסיות מוכנות — 12 יחידות A2-B1</p>
          </div>
        </div>
      </div>

      {/* Download All */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">📦 הורדה — הכל</h2>
        <a href="/api/anki/export?format=csv" className="flex items-center justify-between rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 shadow-sm transition hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100"><FileText className="h-5 w-5 text-emerald-600" /></div>
            <div>
              <div className="font-bold text-emerald-900">📥 הורד הכל ({totalWords} כרטיסיות)</div>
              <div className="text-[12px] text-emerald-700">קובץ TSV לכל היחידות</div>
            </div>
          </div>
          <Download className="h-5 w-5 text-emerald-600" />
        </a>
      </div>

      {/* APKG Download */}
      <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-5 shadow-sm">
        <div className="flex items-center gap-2 text-lg font-bold text-purple-900">
          <Download className="h-5 w-5" />
          חבילה מוכנה (APKG)
        </div>
        <p className="mt-1 text-sm text-purple-700">240 כרטיסיות + 30 תמונות AI אמיתיות — דאבל קליק ל-Anki</p>
        <a href="/anki/esl-pals-v4-final-30-real.apkg" download className="mt-3 inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-purple-700">
          📦 הורד APKG (2.9MB)
        </a>
        <a href="https://drive.google.com/drive/folders/1--ANI8t5vdkvzDPWnWkL9GJJH-xj_ase" target="_blank" rel="noopener" className="mt-2 ml-2 inline-flex items-center gap-1 text-sm text-purple-600 underline">
          📄 גרסת HTML עצמאית (Drive) ↗
        </a>
      </div>

      {/* Per-Unit Downloads */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">📋 הורדה לפי יחידה</h2>
        {UNITS.map((unit) => (
          <a key={unit.id} href={`/api/anki/export?unit=${unit.id}&format=csv`} className="flex items-center justify-between rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">{unit.id}</div>
              <div>
                <div className="text-sm font-bold text-zinc-900">{unit.title}</div>
                <div className="text-[11px] text-zinc-500">{unit.titleEn} · {unit.words.length} מילים</div>
              </div>
            </div>
            <Download className="h-4 w-4 text-zinc-400" />
          </a>
        ))}
      </div>

      {/* Instructions */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-900">📋 איך לייבא ל-Anki?</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl bg-zinc-50 p-4">
            <div className="flex items-center gap-2 font-bold text-zinc-900"><Monitor className="h-4 w-4" /> במחשב</div>
            <ol className="mt-3 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">1</span><span>הורד את קובץ ה-CSV</span></li>
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">2</span><span>פתח Anki → <strong>File → Import</strong></span></li>
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">3</span><span>בחר את הקובץ, <strong>Field separator: Tab</strong></span></li>
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">4</span><span>לחץ Import — וזהו! 🎉</span></li>
            </ol>
          </div>
          <div className="rounded-xl bg-zinc-50 p-4">
            <div className="flex items-center gap-2 font-bold text-zinc-900"><Smartphone className="h-4 w-4" /> בטלפון</div>
            <ol className="mt-3 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-200 text-[10px] font-bold text-purple-800">1</span><span>הורד את הקובץ לטלפון</span></li>
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-200 text-[10px] font-bold text-purple-800">2</span><span>פתח AnkiDroid → <strong>⋮ → Import</strong></span></li>
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-200 text-[10px] font-bold text-purple-800">3</span><span>בחר את הקובץ — סיימת! 🎉</span></li>
            </ol>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
        <div className="flex items-center gap-2 font-bold text-amber-900"><Lightbulb className="h-4 w-4" /> טיפים ללימוד יעיל</div>
        <ul className="mt-3 space-y-2 text-sm text-amber-800">
          <li>• למד 5-10 כרטיסיות ביום — לא יותר!</li>
          <li>• השתמש במשפט הדוגמה כדי לזכור את ההקשר</li>
          <li>• חזור על כרטיסיות ישנות לפני חדשות</li>
          <li>• Anki משתמש ב-SRS — הספייס ריפטישן ידאג שתזכור</li>
        </ul>
      </div>
    </div>
  );
}
