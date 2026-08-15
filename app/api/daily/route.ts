import { NextResponse } from "next/server";
import { getDailyLesson } from "@/lib/dailyEngine";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get("uid") || "default";
  try {
    const daily = await getDailyLesson(uid);
    return NextResponse.json(daily);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
