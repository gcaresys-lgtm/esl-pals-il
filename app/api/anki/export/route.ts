import { NextResponse } from "next/server";
import { UNITS } from "@/lib/units-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const unitId = parseInt(searchParams.get("unit") || "0"); // 0 = all
  const format = searchParams.get("format") || "csv";

  const units = unitId === 0 ? UNITS : UNITS.filter((u) => u.id === unitId);
  if (units.length === 0) {
    return NextResponse.json({ error: `Unit ${unitId} not found` }, { status: 404 });
  }

  if (format === "json") {
    return NextResponse.json({
      count: units.reduce((s, u) => s + u.words.length, 0),
      units: units.map((u) => ({
        id: u.id,
        title: u.title,
        titleEn: u.titleEn,
        count: u.words.length,
        cards: u.words,
      })),
    });
  }

  // CSV/TSV format for Anki import
  const header = "English\tHebrew\tIPA\tExample_EN\tExample_HE\tPOS\tCollocation\tMnemonic\tUnit\tTags";
  const rows = units.flatMap((u) =>
    u.words.map(
      (w) =>
        `${w.en}\t${w.he}\t${w.ipa}\t${w.example_en}\t${w.example_he}\t${w.pos}\t${w.collocation}\t${w.mnemonic}\t${u.id}\tesl-pals unit-${String(u.id).padStart(2, "0")}`
    )
  );
  const csv = [header, ...rows].join("\n");
  const filename = unitId === 0 ? "esl-pals-all-units" : `esl-pals-unit-${unitId}`;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}-anki.tsv"`,
    },
  });
}
