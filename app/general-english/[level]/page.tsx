import { sbGet } from "@/lib/supabase";
import LevelTabs from "@/components/LevelTabs";
import LevelClient from "./LevelClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function LevelPage({ params }: { params: { level: string } }) {
  const level = params.level.toUpperCase();
  if (!["A0", "A1", "A2", "B1"].includes(level)) notFound();
  const [lessons, levels] = await Promise.all([
    sbGet("lessons", {
      select: "id,level_code,number,title,type,duration,description,vocab",
      level_code: `eq.${level}`,
      order: "number.asc",
    }),
    sbGet("levels", { select: "code,title,description", code: `eq.${level}`, limit: "1" }),
  ]);
  return (
    <div className="space-y-6">
      <LevelTabs active={level} />
      <LevelClient lessons={lessons} levelInfo={levels[0]} level={level} />
      <footer className="border-t border-zinc-100 pt-4 text-center text-xs text-zinc-500">
        Clone for teachers. Not affiliated with ESLPals. Inspiration:{" "}
        <a className="text-zinc-700 underline" href="https://eslpals.com/general-english/A1" target="_blank" rel="noopener">
          eslpals.com/general-english/A1
        </a>{" "}
        • בנייה מחדש עם 4 רמות
      </footer>
    </div>
  );
}
