import StudyApp from "./StudyApp";
import Link from "next/link";

export const metadata = { title: "Study — ESL Pals IL" };

export default function StudyPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm" dir="rtl">
        <h1 className="text-xl font-bold tracking-tight">🎯 אזור הלימוד האישי</h1>
        <p className="mt-1 text-sm text-zinc-500">
          חזרות SRS, רצפים ומעקב התקדמות — משולב עם תוכנית הלימוד של ESL Pals IL
        </p>
      </div>
      <div className="mb-6" dir="rtl">
        <Link href="/study/today" className="block rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 shadow-sm transition hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-emerald-900">🎯 השיעור שלך היום</div>
              <div className="mt-0.5 text-xs text-emerald-700">12 דקות — בלי תירוצים</div>
            </div>
            <span className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white">▶️ התחל</span>
          </div>
        </Link>
      </div>
      <StudyApp />
    </div>
  );
}
