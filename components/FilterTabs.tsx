"use client";

const TYPES = ["All", "E-Lesson", "Video", "Worksheet", "Article"] as const;

export default function FilterTabs({ active, onChange }: { active: string; onChange: (t: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {TYPES.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition ${
            active === t ? "bg-zinc-900 text-white ring-zinc-900" : "bg-white text-zinc-600 ring-zinc-200 hover:bg-zinc-100"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
