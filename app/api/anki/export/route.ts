import { NextResponse } from "next/server";

/* ── Unit 3 Vocab Data ── */
const UNIT_3_VOCAB = [
  { en: "embarrassed", he: "נבוך", example_en: "I felt embarrassed when I fell in front of everyone.", example_he: "הרגשתי נבוך כשנפלתי מול כולם.", pos: "adjective" },
  { en: "although", he: "למרות ש", example_en: "Although it was hard, I kept trying.", example_he: "למרות שזה היה קשה, המשכתי לנסות.", pos: "conjunction" },
  { en: "achieve", he: "להשיג", example_en: "She achieved her goal of learning English.", example_he: "היא השיגה את המטרה שלה ללמוד אנגלית.", pos: "verb" },
  { en: "proud", he: "גאה", example_en: "I'm proud of my progress.", example_he: "אני גאה בהתקדמות שלי.", pos: "adjective" },
  { en: "nervous", he: "לחוץ", example_en: "I get nervous before exams.", example_he: "אני נהיה לחוץ לפני מבחנים.", pos: "adjective" },
  { en: "confident", he: "בטוח", example_en: "He feels confident speaking English now.", example_he: "הוא מרגיש בטוח לדבר אנגלית עכשיו.", pos: "adjective" },
  { en: "disappointed", he: "מאוכזב", example_en: "She was disappointed with her grade.", example_he: "היא הייתה מאוכזבת מהציון שלה.", pos: "adjective" },
  { en: "grateful", he: "אסיר תודה", example_en: "I'm grateful for your help.", example_he: "אני אסיר תודה על העזרה שלך.", pos: "adjective" },
  { en: "anxious", he: "חרד", example_en: "I feel anxious about the interview.", example_he: "אני מרגיש חרד לגבי הראיון.", pos: "adjective" },
  { en: "curious", he: "סקרן", example_en: "Children are naturally curious.", example_he: "ילדים הם באופן טבעי סקרנים.", pos: "adjective" },
  { en: "jealous", he: "מקנא", example_en: "Don't be jealous of others' success.", example_he: "אל תהיה מקנא בהצלחה של אחרים.", pos: "adjective" },
  { en: "relieved", he: "מרגיש הקלה", example_en: "I was relieved when the exam was over.", example_he: "הרגשתי הקלה כשהמבחן נגמר.", pos: "adjective" },
  { en: "frustrated", he: "מתוסכל", example_en: "Learning a new language can be frustrating.", example_he: "למוד שפה חדשה יכול להיות מתסכל.", pos: "adjective" },
  { en: "amazed", he: "מופתע", example_en: "I was amazed by the view.", example_he: "הייתי מופתע מהנוף.", pos: "adjective" },
  { en: "exhausted", he: "מותש", example_en: "After the marathon, I was exhausted.", example_he: "אחרי המרתון, הייתי מותש.", pos: "adjective" },
  { en: "thrilled", he: "נרגש מאוד", example_en: "She was thrilled to get the job.", example_he: "היא הייתה נרגשת מאוד לקבל את העבודה.", pos: "adjective" },
  { en: "ashamed", he: "מתבייש", example_en: "He felt ashamed of lying.", example_he: "הוא הרגיש מתבייש מהשקר.", pos: "adjective" },
  { en: "overwhelmed", he: "מוטרד/עמוס", example_en: "I felt overwhelmed by all the information.", example_he: "הרגשתי עמוס מכל המידע.", pos: "adjective" },
  { en: "inspired", he: "מלא השראה", example_en: "The speech inspired everyone.", example_he: "הנאום מילא את כולם בהשראה.", pos: "adjective" },
  { en: "content", he: "מרוצה", example_en: "She felt content with her life.", example_he: "היא הרגישה מרוצה מהחיים שלה.", pos: "adjective" },
];

const UNITS_MAP: Record<number, { title: string; vocab: typeof UNIT_3_VOCAB }> = {
  3: { title: "חוויות ורגשות", vocab: UNIT_3_VOCAB },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const unit = parseInt(searchParams.get("unit") || "3");
  const format = searchParams.get("format") || "csv";

  const unitData = UNITS_MAP[unit];
  if (!unitData) {
    return NextResponse.json({ error: `Unit ${unit} not available yet` }, { status: 404 });
  }

  if (format === "json") {
    return NextResponse.json({
      unit,
      title: unitData.title,
      count: unitData.vocab.length,
      cards: unitData.vocab,
    });
  }

  // CSV format for Anki import
  const header = "English\tHebrew\tExample_EN\tExample_HE\tPOS\tUnit\tTags";
  const rows = unitData.vocab.map(
    (v) =>
      `${v.en}\t${v.he}\t${v.example_en}\t${v.example_he}\t${v.pos}\t${unit}\tesl-pals unit-${unit}`
  );
  const csv = [header, ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="esl-pals-unit-${unit}-anki.tsv"`,
    },
  });
}
