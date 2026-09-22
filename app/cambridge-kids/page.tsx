import Link from "next/link";
import { ArrowLeft, BookOpen, Download } from "lucide-react";

export const metadata = {
  title: "Cambridge Pre-A1 Kids — ESL Pals IL",
  description: "60 מילים לילדים — 6 נושאים בהשראת Cambridge Pre-A1 Starters",
};

const TOPICS = [
  { slug: "animals", name: "Animals", nameHe: "חיות", icon: "🐾", color: "orange", count: 10 },
  { slug: "family", name: "Family & People", nameHe: "משפחה ואנשים", icon: "👨‍👩‍👧‍👦", color: "pink", count: 10 },
  { slug: "school", name: "School", nameHe: "בית ספר", icon: "🏫", color: "blue", count: 10 },
  { slug: "food", name: "Food & Drink", nameHe: "אוכל ושתייה", icon: "🍎", color: "green", count: 10 },
  { slug: "home", name: "Home", nameHe: "בית", icon: "🏠", color: "amber", count: 10 },
  { slug: "sports", name: "Sports & Leisure", nameHe: "ספורט ופנאי", icon: "⚽", color: "purple", count: 10 },
];

export default function CambridgeKidsPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-3xl space-y-6 pb-24">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900">
        <ArrowLeft className="h-4 w-4" /> חזרה למסלול
      </Link>

      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl">🎓</div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Cambridge Pre-A1 Kids</h1>
            <p className="text-sm text-amber-100">60 מילים · 6 נושאים · בהשראת Cambridge Starters</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href="/anki/cambridge-pre-a1-kids-60-cards.apkg" download className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold transition hover:bg-white/30">
            📥 הורדת APKG (60 כרטיסיות)
          </a>
          <a href="/data/cambridge-pre-a1-60-words.json" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold transition hover:bg-white/30">
            📄 JSON
          </a>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {TOPICS.map((t) => (
          <Link key={t.slug} href={`/cambridge-kids/${t.slug}`} className={`group rounded-2xl border-2 border-${t.color}-100 bg-${t.color}-50 p-5 transition hover:shadow-lg hover:border-${t.color}-300`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{t.icon}</span>
              <div>
                <div className="font-extrabold text-zinc-900 group-hover:text-${t.color}-700">{t.nameHe}</div>
                <div className="text-[12px] text-zinc-500">{t.name} · {t.count} מילים</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-zinc-400">
              <BookOpen className="h-3 w-3" /> לחץ לפעילויות אינטראקטיביות
            </div>
          </Link>
        ))}
      </div>

      {/* Features */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-900">🎯 מה יש בכל נושא?</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          <li>🖼️ <strong>תמונות עם hotspots</strong> — לחץ על אזורים בתמונה</li>
          <li>🎵 <strong>Sing & Learn</strong> — שירי לימוד לכל נושא</li>
          <li>📖 <strong>קריאה וכתיבה</strong> — תרגילים אינטראקטיביים</li>
          <li>❓ <strong>חידון</strong> — בחר את התשובה הנכונה</li>
          <li>🔊 <strong>האזנה</strong> — שמיעה + מענה</li>
          <li>📥 <strong>כרטיסיות Anki</strong> — הורדה לכל נושא</li>
        </ul>
      </div>

      {/* Legal */}
      <div className="rounded-xl bg-zinc-50 p-4 text-[11px] text-zinc-500">
        <p>Inspired by Cambridge English Pre-A1 Starters word list. Original activities from CambridgeEnglish.org. This is original educational content based on general topics, not a copy of Cambridge materials. Cambridge is a trademark of Cambridge University Press & Assessment.</p>
      </div>
    </div>
  );
}
