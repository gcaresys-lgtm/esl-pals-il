import { Download, BookOpen, ArrowLeft, FileText, Smartphone, Monitor, Lightbulb, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { UNITS } from "@/lib/units-data";

export const metadata = { title: "הורדת כרטיסיות אנקי — ESL Pals IL V5 ULTIMATE" };

export default function AnkiPage() {
  const totalWords = UNITS.reduce((s, u) => s + u.words.length, 0);

  return (
    <div dir="rtl" className="mx-auto max-w-2xl space-y-6 pb-24">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900">
        <ArrowLeft className="h-4 w-4" /> חזרה למסלול
      </Link>

      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 p-6 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">📥</div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">V5 ULTIMATE — 280 כרטיסיות</h1>
            <p className="text-sm text-purple-100">2 באגים תוקנו · 14 יחידות · עובד 100% ב-Anki 24+</p>
          </div>
        </div>
      </div>

      {/* Bug Fixes */}
      <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-5">
        <h3 className="flex items-center gap-2 font-bold text-green-900"><CheckCircle2 className="h-5 w-5" /> באגים תוקנו</h3>
        <ul className="mt-3 space-y-2 text-sm text-green-800">
          <li className="flex items-start gap-2"><span className="font-bold text-green-600">✅</span><span><strong>missing field sticky</strong> — תוקן (כל 20 השדות sticky:false)</span></li>
          <li className="flex items-start gap-2"><span className="font-bold text-green-600">✅</span><span><strong>152 missing from archive</strong> — תוקן (585 מדיה, 0 missing)</span></li>
        </ul>
      </div>

      {/* V5 Download */}
      <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-5 shadow-sm">
        <div className="flex items-center gap-2 text-lg font-bold text-purple-900">
          <Download className="h-5 w-5" />
          V6 ULTIMATE — 278 מילים + אודיו אמיתי!
        </div>
        <p className="mt-1 text-sm text-purple-700">14 יחידות · 278 MP3 אמיתיים (edge-tts) · 3.05MB</p>
        <a href="/anki/esl-pals-v6-278-words-REAL-TTS.apkg" download className="mt-3 inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-purple-700">
          📦 V6 ULTIMATE — 278 מילים + אודיו (3.05MB)
        </a>
        <div className="mt-3 flex flex-wrap gap-2">
          <a href="/v4-final-master.html" target="_blank" className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700">
            🎨 גרסת HTML עצמאית
          </a>
          <a href="https://drive.google.com/drive/folders/1--ANI8t5vdkvzDPWnWkL9GJJH-xj_ase" target="_blank" rel="noopener" className="inline-flex items-center gap-1 rounded-full border border-purple-300 px-4 py-2 text-sm font-bold text-purple-700 transition hover:bg-purple-50">
            📁 כל הקבצים (Drive) ↗
          </a>
        </div>
      </div>

      {/* New Units */}
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
        <h3 className="font-bold text-indigo-900">🆕 יחידות חדשות ב-V5</h3>
        <div className="mt-3 space-y-3">
          <div className="rounded-xl bg-white p-4">
            <div className="font-bold text-zinc-900">💕 יחידה 13: Dating (הכרויות)</div>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {['match', 'swipe', 'ghosting', 'Tinder', 'profile', 'date', 'crush', 'flirt', 'breakup', 'chemistry', 'attracted', 'texting', 'hook up', 'love at first sight', 'deal breaker', 'red flag', 'soulmate', 'heartbroken', 'jealous', 'committed'].map(w => (
                <span key={w} className="rounded-full bg-pink-100 px-2.5 py-1 text-[11px] text-pink-700">{w}</span>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-white p-4">
            <div className="font-bold text-zinc-900">🖥️ יחידה 14: System (מערכת)</div>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {['backup', 'server', 'RAID', 'Git', 'deploy', 'terminal', 'sudo', 'firewall', 'SSH', 'cron', 'log', 'monitor', 'restart', 'config', 'debug', 'patch', 'update', 'downtime', 'uptime', 'admin'].map(w => (
                <span key={w} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700">{w}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSV Downloads */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">📥 הורדה CSV (לייבוא ידני)</h2>
        <a href="/api/anki/export?format=csv" className="flex items-center justify-between rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 shadow-sm transition hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100"><FileText className="h-5 w-5 text-emerald-600" /></div>
            <div>
              <div className="font-bold text-emerald-900">📥 הורד CSV — {totalWords} מילים</div>
              <div className="text-[12px] text-emerald-700">קובץ TSV לכל היחידות</div>
            </div>
          </div>
          <Download className="h-5 w-5 text-emerald-600" />
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
            <div className="flex items-center gap-2 font-bold text-zinc-900"><Monitor className="h-4 w-4" /> במחשב (APKG)</div>
            <ol className="mt-3 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">1</span><span>הורד את קובץ ה-APKG</span></li>
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">2</span><span>לחץ דאבל קליק — Anki יפתח אוטומטית</span></li>
              <li className="flex items-start gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold text-blue-800">3</span><span>אישור — וזהו! 🎉</span></li>
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

      {/* Troubleshooting */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-bold text-amber-900">⚠️ פתרון בעיות</h3>
        <ul className="mt-2 space-y-2 text-sm text-amber-800">
          <li>• <strong>רואה רק כרטיסיה 1?</strong> → Deck Options → New cards/day → שנה ל-20</li>
          <li>• <strong>שגיאת sticky?</strong> → גרסה V5 תוקנה — תוריד מחדש</li>
          <li>• <strong>152 missing?</strong> → גרסה V5 תוקנה — 585 מדיה, 0 missing</li>
        </ul>
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
