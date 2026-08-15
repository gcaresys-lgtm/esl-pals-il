import StudyApp from "./StudyApp";

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
      <StudyApp />
    </div>
  );
}
