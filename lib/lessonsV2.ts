import { sbGet } from "./supabase";

export interface LessonV2 {
  id: string;
  level: string;
  number: number;
  title: string;
  type: string;
  duration: number;
  description: string;
  video_url: string | null;
  dialogue: string | null;
  keys_json: string[] | null;
  ai_prompt: string | null;
}

export async function getLessonV2(id: string): Promise<LessonV2 | null> {
  const rows = await sbGet("lessons_v2", { id: `eq.${id}`, select: "*", limit: "1" });
  return rows[0] || null;
}

export async function getLessonVocab(lessonId: string) {
  return sbGet("vocabulary_v2", { lesson_id: `eq.${lessonId}`, select: "id,en,he,example", order: "en.asc" });
}
