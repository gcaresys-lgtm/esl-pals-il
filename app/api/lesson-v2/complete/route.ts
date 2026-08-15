import { NextResponse } from "next/server";

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { uid, lessonId } = await req.json();
  // upsert learning_progress_v2
  const existing = await fetch(`${SB_URL}/rest/v1/learning_progress_v2?user_id=eq.${uid}&lesson_id=eq.${lessonId}&select=id`, {
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
  }).then(r => r.json());

  if (existing.length > 0) {
    await fetch(`${SB_URL}/rest/v1/learning_progress_v2?id=eq.${existing[0].id}`, {
      method: "PATCH",
      headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ completed: true, completed_at: new Date().toISOString() }),
    });
  } else {
    await fetch(`${SB_URL}/rest/v1/learning_progress_v2`, {
      method: "POST",
      headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ user_id: uid, lesson_id: lessonId, completed: true }),
    });
  }
  return NextResponse.json({ ok: true });
}
