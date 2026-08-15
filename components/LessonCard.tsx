import Link from "next/link";

const TYPE_STYLES: Record<string, string> = {
  "E-Lesson": "bg-blue-50 text-blue-700 ring-blue-200",
  "Video": "bg-rose-50 text-rose-700 ring-rose-200",
  "Worksheet": "bg-amber-50 text-amber-700 ring-amber-200",
  "Article": "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

export default function LessonCard({ lesson }: { lesson: any }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-zinc-400">#{String(lesson.number).padStart(2, "0")}</span>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${TYPE_STYLES[lesson.type] || "bg-zinc-50 text-zinc-600 ring-zinc-200"}`}>
          {lesson.type}
        </span>
      </div>
      <h3 className="text-[15px] font-semibold leading-snug text-zinc-900">{lesson.title}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-zinc-500">{lesson.description}</p>
      <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3">
        <span className="text-xs text-zinc-400">{lesson.duration}</span>
        <Link
          href={`/lesson/${lesson.id}`}
          className="rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-700"
        >
          View Lesson
        </Link>
      </div>
    </div>
  );
}
