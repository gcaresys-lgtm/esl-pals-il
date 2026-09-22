import { BookOpen, Headphones, MessageCircle, Mic, Clock, ChevronLeft, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

/* ── Lesson Data: Unit 3 — Experiences & Feelings ── */
const LESSON = {
  unit: 3,
  title: "חוויות ורגשות",
  titleEn: "Experiences & Feelings",
  duration: 7,
  level: "A2-B1",
  grammarTopic: "Present Perfect vs Past Simple",
};

const VOCAB = [
  { en: "embarrassed", he: "נבוך", example: "I felt embarrassed when I fell in front of everyone." },
  { en: "although", he: "למרות", example: "Although it was hard, I kept trying." },
  { en: "achieve", he: "להשיג", example: "She achieved her goal of learning English." },
  { en: "proud", he: "גאה", example: "I'm proud of my progress." },
  { en: "nervous", he: "לחוץ", example: "I get nervous before exams." },
  { en: "confident", he: "בטוח", example: "He feels confident speaking English now." },
  { en: "disappointed", he: "מאוכזב", example: "She was disappointed with her grade." },
  { en: "grateful", he: "אסיר תודה", example: "I'm grateful for your help." },
  { en: "anxious", he: "חרד", example: "I feel anxious about the interview." },
  { en: "curious", he: "סקרן", example: "Children are naturally curious." },
  { en: "jealous", he: "מקנא", example: "Don't be jealous of others' success." },
  { en: "relieved", he: "מופתע/מרגיע", example: "I was relieved when the exam was over." },
  { en: "frustrated", he: "מתוסכל", example: "Learning a new language can be frustrating." },
  { en: "amazed", he: "מופתע", example: "I was amazed by the view." },
  { en: "exhausted", he: "מותש", example: "After the marathon, I was exhausted." },
  { en: "thrilled", he: "נרגש", example: "She was thrilled to get the job." },
  { en: "ashamed", he: "מתבייש", example: "He felt ashamed of lying." },
  { en: "overwhelmed", he: "מוטרד", example: "I felt overwhelmed by all the information." },
  { en: "inspired", he: "מעורר השראה", example: "The speech inspired everyone." },
  { en: "content", he: "מרוצה", example: "She felt content with her life." },
];

const GRAMMAR = {
  topic: "Present Perfect vs Past Simple",
  rules: [
    {
      title: "Present Perfect",
      structure: "have/has + past participle",
      use: "משמש לחוויה כללית, תוצאה שממשיכה להווה",
      examples: [
        "I have visited Jerusalem three times. (חוויה כללית)",
        "She has already finished her homework. (תוצאה עד עכשיו)",
        "Have you ever been embarrassed? (חוויה אי פעם)",
      ],
    },
    {
      title: "Past Simple",
      structure: "verb + ed / irregular",
      use: "משמש לאירוע ספציפי בעבר שסתיים",
      examples: [
        "I visited Jerusalem last summer. (זמן ספציפי)",
        "She finished her homework at 8 PM. (זמן מדויק)",
        "I was embarrassed yesterday. (מקרה ספציפי)",
      ],
    },
  ],
  tip: 'מילה כמו "yesterday", "last week", "in 2020" → תמיד Past Simple. מילים כמו "ever", "never", "already", "yet" → בדרך כלל Present Perfect.',
};

const READING = {
  title: "My Trip to Jerusalem",
  titleHe: "הטיול שלי לירושלים",
  content: `Last year, I visited Jerusalem for the first time. I was nervous because I didn't know what to expect. Although I had studied Hebrew for two years, I was still embarrassed to speak with locals.

I walked through the Old City and was amazed by the beautiful buildings. I have never seen anything like the Western Wall — it was incredible. A kind old man helped me find my way, and I felt grateful for his kindness.

At a small restaurant, I tried hummus for the first time. I was curious about all the different spices. The food was delicious, and I was content sitting there, watching people walk by.

On the last day, I achieved something important — I had a full conversation in Hebrew with a shopkeeper. I felt proud and relieved. Although my Hebrew wasn't perfect, she understood me. I was thrilled!

I have been back to Jerusalem twice since then. Each time, I feel more confident. Traveling teaches you that being nervous is normal — and that's okay.`,
  questions: [
    { q: "Why was the writer nervous in Jerusalem?", a: "Because they didn't know what to expect" },
    { q: "What did the writer achieve on the last day?", a: "They had a full conversation in Hebrew" },
    { q: "How many times has the writer visited Jerusalem in total?", a: "Three times" },
  ],
};

const LISTENING = {
  title: "An Embarrassing Experience",
  titleHe: "חוויה מביכה",
  transcript: `Hi, I'm Yael from Tel Aviv. I want to tell you about an embarrassing experience I had last month.

I was at a coffee shop, studying English. I was wearing headphones and listening to a podcast. Suddenly, I realized I was speaking out loud — repeating the English words from the podcast!

Everyone was looking at me. I felt so embarrassed! I wanted to disappear. Although I was nervous, I tried to laugh about it.

A woman sitting next to me said, "Don't worry! I do the same thing." She was learning Arabic and had the same experience. I felt relieved.

Now I always check if my headphones are working properly. I have learned that embarrassing moments are normal when you're learning a language. Be proud of yourself for trying!`,
  questions: [
    { q: "Where was Yael studying?", a: "At a coffee shop" },
    { q: "What was she doing that was embarrassing?", a: "Speaking English words out loud from a podcast" },
    { q: "What did the woman next to her say?", a: "Don't worry, I do the same thing" },
  ],
};

const SPEAKING = {
  title: "Talk About Pride",
  titleHe: "דבר/י על גאווה",
  prompts: [
    "Tell me about a time you felt proud of yourself. What did you achieve?",
    "Have you ever been embarrassed in public? What happened?",
    "Describe a moment when you felt grateful. Who helped you?",
    "What makes you feel confident when speaking English?",
    "Have you ever felt overwhelmed? How did you handle it?",
  ],
  modelAnswer: "I felt proud last week when I passed my English exam. I studied hard for three months. Although I was nervous before the test, I stayed calm. I achieved a score of 85! My family was thrilled. I'm grateful for their support.",
};

/* ── Skill Sections Config ── */
const SECTIONS = [
  { id: "vocab", label: "אוצר מילים", icon: BookOpen, color: "blue", minutes: 2 },
  { id: "grammar", label: "דקדוק", icon: BookOpen, color: "purple", minutes: 1 },
  { id: "reading", label: "קריאה", icon: BookOpen, color: "emerald", minutes: 2 },
  { id: "listening", label: "האזנה", icon: Headphones, color: "amber", minutes: 1 },
  { id: "speaking", label: "דיבור", icon: Mic, color: "rose", minutes: 1 },
];

/* ── Page Component (SSR — No useEffect) ── */
export const metadata = {
  title: "השיעור היומי — ESL Pals IL",
  description: "7 דקות ביום — יחידה 3: חוויות ורגשות",
};

export default function TodayLessonPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-2xl space-y-6 pb-24">
      {/* ── Back Link ── */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4" />
        חזרה למסלול
      </Link>

      {/* ── Lesson Header ── */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">
            📖
          </div>
          <div>
            <div className="text-[11px] text-emerald-100">יחידה {LESSON.unit} · {LESSON.level}</div>
            <h1 className="text-2xl font-extrabold tracking-tight">{LESSON.title}</h1>
            <p className="text-sm text-emerald-100">{LESSON.titleEn}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-emerald-100">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {LESSON.duration} דקות
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            {VOCAB.length} מילים
          </span>
        </div>
      </div>

      {/* ── Skill Cards ── */}
      {SECTIONS.map((section) => (
        <div
          key={section.id}
          className="rounded-2xl border border-zinc-100 bg-white shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-zinc-50 p-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl bg-${section.color}-100`}
              >
                <section.icon className={`h-4 w-4 text-${section.color}-600`} />
              </div>
              <div>
                <div className="font-bold text-zinc-900">{section.label}</div>
                <div className="text-[11px] text-zinc-400">{section.minutes} דקות</div>
              </div>
            </div>
          </div>

          <div className="p-4">
            {section.id === "vocab" && <VocabSection />}
            {section.id === "grammar" && <GrammarSection />}
            {section.id === "reading" && <ReadingSection />}
            {section.id === "listening" && <ListeningSection />}
            {section.id === "speaking" && <SpeakingSection />}
          </div>
        </div>
      ))}

      {/* ── Finish Button ── */}
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 text-center shadow-sm">
        <div className="text-3xl">🎉</div>
        <div className="mt-2 text-lg font-bold text-emerald-900">כל הכבוד!</div>
        <p className="mt-1 text-sm text-emerald-700">סיימת את השיעור של היום</p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700"
        >
          חזרה למסלול
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

/* ── Vocab Section ── */
function VocabSection() {
  return (
    <div className="space-y-2">
      <p className="mb-3 text-sm text-zinc-500">
        למד/י את 20 המילים הבאות. לחץ/י על מילה כדי לראות דוגמה.
      </p>
      <div className="grid grid-cols-2 gap-2">
        {VOCAB.map((word) => (
          <details key={word.en} className="group rounded-xl border border-zinc-100 bg-zinc-50 p-3 transition hover:bg-white">
            <summary className="cursor-pointer list-none">
              <div className="font-bold text-zinc-900">{word.en}</div>
              <div className="text-[12px] text-zinc-500">{word.he}</div>
            </summary>
            <div className="mt-2 border-t border-zinc-100 pt-2 text-[12px] text-zinc-600 italic">
              "{word.example}"
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ── Grammar Section ── */
function GrammarSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-purple-900">{GRAMMAR.topic}</h3>
      {GRAMMAR.rules.map((rule) => (
        <div key={rule.title} className="rounded-xl bg-purple-50 p-4">
          <div className="font-bold text-purple-900">{rule.title}</div>
          <div className="mt-1 text-[12px] text-purple-700">
            <span className="font-medium">מבנה:</span> {rule.structure}
          </div>
          <div className="mt-1 text-[12px] text-purple-700">
            <span className="font-medium">שימוש:</span> {rule.use}
          </div>
          <div className="mt-2 space-y-1">
            {rule.examples.map((ex, i) => (
              <div key={i} className="text-[12px] text-zinc-600">
                • {ex}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="rounded-xl bg-amber-50 p-4">
        <div className="font-bold text-amber-900">💡 טיפ</div>
        <div className="mt-1 text-[12px] text-amber-800">{GRAMMAR.tip}</div>
      </div>
    </div>
  );
}

/* ── Reading Section ── */
function ReadingSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-emerald-900">{READING.titleHe}</h3>
      <div className="rounded-xl bg-emerald-50 p-4 text-[13px] leading-relaxed text-zinc-700">
        {READING.content.split("\n\n").map((para, i) => (
          <p key={i} className={i > 0 ? "mt-3" : ""}>
            {para}
          </p>
        ))}
      </div>
      <div className="space-y-2">
        <div className="font-bold text-zinc-900">📝 שאלות הבנה:</div>
        {READING.questions.map((q, i) => (
          <details key={i} className="rounded-xl border border-zinc-100 bg-zinc-50 p-3">
            <summary className="cursor-pointer list-none text-sm font-medium text-zinc-800">
              {q.q}
            </summary>
            <div className="mt-2 text-[12px] text-emerald-700">{q.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ── Listening Section ── */
function ListeningSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-amber-900">{LISTENING.titleHe}</h3>
      <div className="rounded-xl bg-amber-50 p-4 text-[13px] leading-relaxed text-zinc-700">
        {LISTENING.transcript.split("\n\n").map((para, i) => (
          <p key={i} className={i > 0 ? "mt-3" : ""}>
            {para}
          </p>
        ))}
      </div>
      <div className="space-y-2">
        <div className="font-bold text-zinc-900">🎧 שאלות הבנה:</div>
        {LISTENING.questions.map((q, i) => (
          <details key={i} className="rounded-xl border border-zinc-100 bg-zinc-50 p-3">
            <summary className="cursor-pointer list-none text-sm font-medium text-zinc-800">
              {q.q}
            </summary>
            <div className="mt-2 text-[12px] text-amber-700">{q.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ── Speaking Section ── */
function SpeakingSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-rose-900">{SPEAKING.titleHe}</h3>
      <div className="space-y-2">
        {SPEAKING.prompts.map((prompt, i) => (
          <div key={i} className="rounded-xl bg-rose-50 p-4">
            <div className="flex items-start gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-200 text-[11px] font-bold text-rose-800">
                {i + 1}
              </span>
              <span className="text-sm text-rose-900">{prompt}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-zinc-50 p-4">
        <div className="font-bold text-zinc-900">💬 תשובת מודל:</div>
        <div className="mt-2 text-[13px] text-zinc-600 italic">
          "{SPEAKING.modelAnswer}"
        </div>
      </div>
    </div>
  );
}
