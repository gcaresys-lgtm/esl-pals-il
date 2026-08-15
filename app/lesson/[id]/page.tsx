import { sbGet } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 60;

export default async function LessonPage({ params }: { params: { id: string } }) {
  const rows = await sbGet("lessons", { select: "*", id: `eq.${params.id}`, limit: "1" });
  const lesson = rows[0];
  if (!lesson) notFound();
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href={`/general-english/${lesson.level_code}`} className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900">
        ← {lesson.level_code}
      </Link>
      <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-zinc-400">#{String(lesson.number).padStart(2, "0")}</span>
          <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600">{lesson.type}</span>
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">{lesson.title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">{lesson.description}</p>
        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
          <span>{lesson.duration}</span>
          <span>•</span>
          <span>{lesson.level_code}</span>
        </div>
      </div>
      {lesson.video_url ? (
        <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">
          <div className="flex aspect-video items-center justify-center bg-zinc-100">
            {lesson.video_url.includes("youtu") ? (
              <iframe src={lesson.video_url.replace("youtu.be", "www.youtube.com/embed")} className="h-full w-full" allowFullScreen />
            ) : (
              <span className="text-sm text-zinc-400">Video placeholder • Replace with real lesson video</span>
            )}
          </div>
        </div>
      ) : null}
      {lesson.vocab && lesson.vocab.length > 0 && (
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold">Vocabulary • אוצר מילים</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {(lesson.vocab as string[]).map((v: string) => (
              <span key={v} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">{v}</span>
            ))}
          </div>
        </div>
      )}
      <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold">E-Lesson Slides — coming next</h2>
        <p className="mt-2 text-sm text-zinc-500">Lesson content and downloadable worksheet will land here.</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-zinc-100 p-4 text-xs text-zinc-600">
        <span>View original inspiration ↗</span>
        <a className="underline" href={lesson.eslpals_url || "https://eslpals.com/general-english/A1"} target="_blank" rel="noopener">
          {lesson.eslpals_url || "https://eslpals.com/general-english/A1"}
        </a>
      </div>
    </div>
  );
}
