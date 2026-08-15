"use client";
import { useState } from "react";
import FilterTabs from "@/components/FilterTabs";
import LessonCard from "@/components/LessonCard";

export default function LevelClient({ lessons, levelInfo, level }: any) {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const shown = lessons.filter(
    (l: any) =>
      (filter === "All" || l.type === filter) &&
      (q === "" || l.title.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <>
      <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {level} — {levelInfo?.title || "General English"}
            </h1>
            <p className="mt-1 text-sm text-zinc-500">{levelInfo?.description}</p>
          </div>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
            {lessons.length} lessons
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <FilterTabs active={filter} onChange={setFilter} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder='Search • חיפוש'
            className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-sm outline-none ring-blue-500/30 transition focus:ring-2 sm:w-64"
          />
        </div>
      </div>
      {shown.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-200 p-10 text-center text-sm text-zinc-400">
          No lessons match your search — Try another level or clear the filter • נסו חיפוש אחר
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((l: any) => <LessonCard key={l.id} lesson={l} />)}
        </div>
      )}
    </>
  );
}
