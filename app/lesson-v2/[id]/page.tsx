import { getLessonV2, getLessonVocab } from "@/lib/lessonsV2";
import { notFound } from "next/navigation";
import Link from "next/link";
import CompleteButton, { CopyPrompt } from "./CompleteButton";

export const revalidate = 60;

export default async function LessonV2Page({ params }: { params: { id: string } }) {
  const lesson = await getLessonV2(params.id);
  if (!lesson) notFound();
  const vocab = await getLessonVocab(lesson.id);
  const keys: string[] = Array.isArray(lesson.keys_json) ? lesson.keys_json : [];
  return (
    <div className="mx-auto max-w-3xl space-y-6" dir="rtl">
      <Link href="/study/today" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900">
        ← היום
      </Link>
      <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-zinc-400">{lesson.level}-{lesson.number}</span>
          <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600">{lesson.duration} דק׳</span>
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">{lesson.title}</h1>
        {lesson.description && <p className="mt-2 text-sm leading-relaxed text-zinc-500">{lesson.description}</p>}
        <CompleteButton lessonId={lesson.id} />
      </div>

      {keys.length > 0 && (
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold">🔑 משפטי מפתח</h2>
          <ul className="mt-3 space-y-2">
            {keys.map((k, i) => (
              <li key={i} className="rounded-xl bg-blue-50 px-4 py-2.5 text-sm text-blue-900" dir="ltr">{k}</li>
            ))}
          </ul>
        </div>
      )}

      {vocab.length > 0 && (
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold">📚 אוצר מילים ({vocab.length})</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {vocab.map((v: any) => (
              <div key={v.id} className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-2.5">
                <span className="text-sm font-medium" dir="ltr">{v.en}</span>
                <span className="text-sm text-zinc-500">{v.he || ""}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {lesson.dialogue && (
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold">💬 Dialogue</h2>
          <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-zinc-50 p-4 text-sm leading-relaxed" dir="ltr">{lesson.dialogue}</pre>
        </div>
      )}

      {lesson.video_url && (
        <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">
          <div className="flex aspect-video items-center justify-center bg-zinc-100">
            {lesson.video_url.includes("youtu") ? (
              <iframe src={lesson.video_url.replace("youtu.be", "www.youtube.com/embed")} className="h-full w-full" allowFullScreen />
            ) : (
              <span className="text-sm text-zinc-400">Video placeholder</span>
            )}
          </div>
        </div>
      )}

      {lesson.ai_prompt && (
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
          <h2 className="text-sm font-semibold text-emerald-900">🎙️ תרגל דיבור</h2>
          <p className="mt-2 text-xs text-emerald-700">העתק לצ׳אט AI כלשהו (ChatGPT / Gemini / Claude) ודבר אנגלית:</p>
          <pre className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-xs leading-relaxed" dir="ltr">{lesson.ai_prompt}</pre>
          <CopyPrompt />
        </div>
      )}
    </div>
  );
}
