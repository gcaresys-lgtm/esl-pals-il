import { Download, BookOpen, CheckCircle2, ArrowLeft, FileText, Smartphone, Monitor, Lightbulb } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "הורדת כרטיסיות אנקי — ESL Pals IL",
  description: "הורד כרטיסיות Anki ללימוד אוצר מילים אנגלית A2-B1",
};

export default function AnkiPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-2xl space-y-6 pb-24">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4" />
        חזרה למסלול
      </Link>

      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">
            📥
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">כרטיסיות אנקי</h1>
            <p className="text-sm text-blue-100">הורד כרטיסיות מוכנות ללימוד עם Anki</p>
          </div>
        </div>
      </div>

      {/* Download Cards */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">📦 הורדה — יחידה 3: חוויות ורגשות</h2>

        <a
          href="/api/anki/export?unit=3&format=csv"
          className="flex items-center justify-between rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
              <FileText className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <div className="font-bold text-emerald-900">📥 הורדת CSV (20 כרטיסיות)</div>
              <div className="text-[12px] text-emerald-700">קובץ TSV לייבוא ישיר ל-Anki</div>
            </div>
          </div>
          <Download className="h-5 w-5 text-emerald-600" />
        </a>

        <a
          href="/api/anki/export?unit=3&format=json"
          className="flex items-center justify-between rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="font-bold text-zinc-900">📄 הורדת JSON</div>
              <div className="text-[12px] text-zinc-500">למפתחים — אינטגרציה עם האתר</div>
            </div>
          </div>
          <Download className="h-5 w-5 text-zinc-400" />
        </a>
      </div>

      {/* Instructions */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-900">📋 איך לייבא ל-Anki?</h2>

        <div className="mt-4 space-y-4">
          {/* Desktop */}
          <div className="rounded-xl bg-zinc-50 p-4">
            <div className="flex items-center gap-2 font-bold text-zinc-900">
              <Monitor className="h-4 w-4" />
              במחשב (Anki Desktop)
            </div>
            <ol className="mt-3 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">1</span>
                <span>הורד את קובץ ה-CSV למעלה</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">2</span>
                <span>פתח את Anki Desktop</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">3</span>
                <span>לחץ על <strong>File → Import</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">4</span>
                <span>בחר את הקובץ שהורדת</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">5</span>
                <span>ודא שההגדרה: <strong>Field separator: Tab</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">6</span>
                <span>לחץ <strong>Import</strong> — וזהו! 🎉</span>
              </li>
            </ol>
          </div>

          {/* Mobile */}
          <div className="rounded-xl bg-zinc-50 p-4">
            <div className="flex items-center gap-2 font-bold text-zinc-900">
              <Smartphone className="h-4 w-4" />
              בטלפון (AnkiDroid / AnkiMobile)
            </div>
            <ol className="mt-3 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-200 text-[10px] font-bold text-purple-800">1</span>
                <span>הורד את הקובץ לטלפון</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-200 text-[10px] font-bold text-purple-800">2</span>
                <span>פתח את AnkiDroid / AnkiMobile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-200 text-[10px] font-bold text-purple-800">3</span>
                <span>לחץ על <strong>⋮ (תפריט) → Import</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-200 text-[10px] font-bold text-purple-800">4</span>
                <span>בחר את הקובץ — סיימת! 🎉</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
        <div className="flex items-center gap-2 font-bold text-amber-900">
          <Lightbulb className="h-4 w-4" />
          טיפים ללימוד יעיל
        </div>
        <ul className="mt-3 space-y-2 text-sm text-amber-800">
          <li>• למד 5-10 כרטיסיות ביום — לא יותר!</li>
          <li>• השתמש במשפט הדוגמה כדי לזכור את ההקשר</li>
          <li>• חזור על כרטיסיות ישנות לפני חדשות</li>
          <li>• Anki משתמש ב-SRS — הספייס ריפטישן ידאג שתזכור</li>
        </ul>
      </div>

      {/* Status */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 text-center">
        <div className="text-lg font-bold text-zinc-900">📊 סטטוס כרטיסיות</div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-emerald-50 p-3">
            <div className="text-2xl font-bold text-emerald-700">20</div>
            <div className="text-[11px] text-emerald-600">יחידה 3</div>
          </div>
          <div className="rounded-xl bg-zinc-50 p-3">
            <div className="text-2xl font-bold text-zinc-400">0</div>
            <div className="text-[11px] text-zinc-500">יחידות אחרות</div>
          </div>
          <div className="rounded-xl bg-blue-50 p-3">
            <div className="text-2xl font-bold text-blue-700">240</div>
            <div className="text-[11px] text-blue-600">יעד (12×20)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
