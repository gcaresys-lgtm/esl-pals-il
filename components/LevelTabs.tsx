"use client";
import Link from "next/link";

const LEVELS = [
  { code: "A0", label: "Starter", color: "bg-emerald-500", light: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  { code: "A1", label: "Beginner", color: "bg-blue-500", light: "bg-blue-50 text-blue-700 ring-blue-200" },
  { code: "A2", label: "Elementary", color: "bg-violet-500", light: "bg-violet-50 text-violet-700 ring-violet-200" },
  { code: "B1", label: "Intermediate", color: "bg-orange-500", light: "bg-orange-50 text-orange-700 ring-orange-200" },
];

export default function LevelTabs({ active }: { active: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {LEVELS.map((l) => (
        <Link
          key={l.code}
          href={`/general-english/${l.code}`}
          className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition ${
            active === l.code ? `${l.light} ring-2` : "bg-white text-zinc-600 ring-zinc-200 hover:bg-zinc-100"
          }`}
        >
          {l.code} · {l.label}
        </Link>
      ))}
    </div>
  );
}
