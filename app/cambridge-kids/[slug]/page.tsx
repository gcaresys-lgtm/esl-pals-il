import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TOPICS: Record<string, { name: string; nameHe: string; icon: string; color: string; words: { en: string; he: string; ipa: string; ex_en: string; ex_he: string }[] }> = {
  animals: {
    name: "Animals", nameHe: "חיות", icon: "🐾", color: "orange",
    words: [
      { en: "cat", he: "חתול", ipa: "/kæt/", ex_en: "The cat is sleeping on the sofa.", ex_he: "החתול ישן על הספה." },
      { en: "dog", he: "כלב", ipa: "/dɒɡ/", ex_en: "My dog likes to play in the park.", ex_he: "הכלב שלי אוהב לשחק בפארק." },
      { en: "bird", he: "ציפור", ipa: "/bɜːd/", ex_en: "Look! A bird is flying in the sky.", ex_he: "תראי! ציפור עפה בשמיים." },
      { en: "fish", he: "דג", ipa: "/fɪʃ/", ex_en: "The fish swims in the bowl.", ex_he: "הדג שוחה בקערה." },
      { en: "rabbit", he: "ארנב", ipa: "/ˈræbɪt/", ex_en: "The rabbit has long ears.", ex_he: "לארנב יש אוזניים ארוכות." },
      { en: "horse", he: "סוס", ipa: "/hɔːs/", ex_en: "The horse runs fast.", ex_he: "הסוס רץ מהר." },
      { en: "mouse", he: "עכבר", ipa: "/maʊs/", ex_en: "A small mouse is under the table.", ex_he: "עכבר קטן מתחת לשולחן." },
      { en: "elephant", he: "פיל", ipa: "/ˈelɪfənt/", ex_en: "The elephant is very big.", ex_he: "הפיל מאוד גדול." },
      { en: "monkey", he: "קוף", ipa: "/ˈmʌŋki/", ex_en: "The monkey eats a banana.", ex_he: "הקוף אוכל בננה." },
      { en: "snake", he: "נחש", ipa: "/sneɪk/", ex_en: "The snake is long and green.", ex_he: "הנחש ארוך וירוק." },
    ],
  },
  family: {
    name: "Family & People", nameHe: "משפחה ואנשים", icon: "👨‍👩‍👧‍👦", color: "pink",
    words: [
      { en: "mother", he: "אמא", ipa: "/ˈmʌðə/", ex_en: "My mother cooks dinner every day.", ex_he: "אמא שלי מבשלת ארוחת ערב כל יום." },
      { en: "father", he: "אבא", ipa: "/ˈfɑːðə/", ex_en: "My father reads me a story.", ex_he: "אבא שלי קורא לי סיפור." },
      { en: "sister", he: "אחות", ipa: "/ˈsɪstə/", ex_en: "My sister is five years old.", ex_he: "אחותי בת חמש." },
      { en: "brother", he: "אח", ipa: "/ˈbrʌðə/", ex_en: "My brother plays football.", ex_he: "האח שלי משחק כדורגל." },
      { en: "baby", he: "תינוק", ipa: "/ˈbeɪbi/", ex_en: "The baby is smiling.", ex_he: "התינוק מחייך." },
      { en: "friend", he: "חבר", ipa: "/frend/", ex_en: "She is my best friend.", ex_he: "היא החברה הכי טובה שלי." },
      { en: "teacher", he: "מורה", ipa: "/ˈtiːtʃə/", ex_en: "The teacher is very nice.", ex_he: "המורה מאוד נחמדה." },
      { en: "doctor", he: "רופא", ipa: "/ˈdɒktə/", ex_en: "The doctor helps sick people.", ex_he: "הרופא עוזר לאנשים חולים." },
      { en: "boy", he: "ילד", ipa: "/bɔɪ/", ex_en: "The boy is playing with a ball.", ex_he: "הילד משחק עם כדור." },
      { en: "girl", he: "ילדה", ipa: "/ɡɜːl/", ex_en: "The girl has a red dress.", ex_he: "לילדה יש שמלה אדומה." },
    ],
  },
  school: {
    name: "School", nameHe: "בית ספר", icon: "🏫", color: "blue",
    words: [
      { en: "book", he: "ספר", ipa: "/bʊk/", ex_en: "I read a book every night.", ex_he: "אני קורא ספר כל ערב." },
      { en: "pen", he: "עט", ipa: "/pen/", ex_en: "Can I borrow your pen?", ex_he: "אפשר לשאול את העט שלך?" },
      { en: "pencil", he: "עיפרון", ipa: "/ˈpensəl/", ex_en: "I draw with a pencil.", ex_he: "אני מצייר עם עיפרון." },
      { en: "desk", he: "שולחן כתיבה", ipa: "/desk/", ex_en: "My books are on the desk.", ex_he: "הספרים שלי על השולחן כתיבה." },
      { en: "chair", he: "כיסא", ipa: "/tʃeə/", ex_en: "Sit on the chair, please.", ex_he: "שב על הכיסא, בבקשה." },
      { en: "bag", he: "תיק", ipa: "/bæɡ/", ex_en: "My bag is very heavy.", ex_he: "התיק שלי מאוד כבד." },
      { en: "eraser", he: "מחק", ipa: "/ɪˈreɪzə/", ex_en: "I need an eraser for my mistake.", ex_he: "אני צריך מחק לטעות שלי." },
      { en: "ruler", he: "סרגל", ipa: "/ˈruːlə/", ex_en: "Draw a line with the ruler.", ex_he: "צייר קו עם הסרגל." },
      { en: "classroom", he: "כיתה", ipa: "/ˈklɑːsruːm/", ex_en: "Our classroom has 30 students.", ex_he: "בכיתה שלנו יש 30 תלמידים." },
      { en: "homework", he: "שיעורי בית", ipa: "/ˈhəʊmwɜːk/", ex_en: "I finish my homework at 4 o'clock.", ex_he: "אני מסיים שיעורי בית בארבע." },
    ],
  },
  food: {
    name: "Food & Drink", nameHe: "אוכל ושתייה", icon: "🍎", color: "green",
    words: [
      { en: "apple", he: "תפוח", ipa: "/ˈæpəl/", ex_en: "I eat an apple every morning.", ex_he: "אני אוכל תפוח כל בוקר." },
      { en: "bread", he: "לחם", ipa: "/bred/", ex_en: "I like bread with butter.", ex_he: "אני אוהב לחם עם חמאה." },
      { en: "milk", he: "חלב", ipa: "/mɪlk/", ex_en: "I drink milk before bed.", ex_he: "אני שותה חלב לפני השינה." },
      { en: "water", he: "מים", ipa: "/ˈwɔːtə/", ex_en: "Can I have some water, please?", ex_he: "אפשר לקבל מים, בבקשה?" },
      { en: "banana", he: "בננה", ipa: "/bəˈnɑːnə/", ex_en: "The banana is yellow.", ex_he: "הבננה צהובה." },
      { en: "cake", he: "עוגה", ipa: "/keɪk/", ex_en: "Happy birthday! Here is your cake.", ex_he: "יום הולדת שמח! הנה העוגה שלך." },
      { en: "egg", he: "ביצה", ipa: "/eɡ/", ex_en: "I have an egg for breakfast.", ex_he: "יש לי ביצה לארוחת בוקר." },
      { en: "rice", he: "אורז", ipa: "/raɪs/", ex_en: "We eat rice with chicken.", ex_he: "אנחנו אוכלים אורז עם עוף." },
      { en: "orange", he: "תפוז", ipa: "/ˈɒrɪndʒ/", ex_en: "The orange is sweet and juicy.", ex_he: "התפוז מתוק ומלא מיץ." },
      { en: "juice", he: "מיץ", ipa: "/dʒuːs/", ex_en: "I love orange juice.", ex_he: "אני אוהב מיץ תפוזים." },
    ],
  },
  home: {
    name: "Home", nameHe: "בית", icon: "🏠", color: "amber",
    words: [
      { en: "door", he: "דלת", ipa: "/dɔː/", ex_en: "Please close the door.", ex_he: "בבקשה סגור את הדלת." },
      { en: "window", he: "חלון", ipa: "/ˈwɪndəʊ/", ex_en: "Open the window, it's hot.", ex_he: "פתח את החלון, חם." },
      { en: "bed", he: "מיטה", ipa: "/bed/", ex_en: "I go to bed at 9 o'clock.", ex_he: "אני הולך למיטה בתשע." },
      { en: "table", he: "שולחן", ipa: "/ˈteɪbəl/", ex_en: "The food is on the table.", ex_he: "האוכל על השולחן." },
      { en: "bathroom", he: "שירותים", ipa: "/ˈbɑːθruːm/", ex_en: "The bathroom is on the left.", ex_he: "השירותים בצד שמאל." },
      { en: "kitchen", he: "מטבח", ipa: "/ˈkɪtʃɪn/", ex_en: "Mom is in the kitchen.", ex_he: "אמא במטבח." },
      { en: "garden", he: "גן", ipa: "/ˈɡɑːdən/", ex_en: "We play in the garden.", ex_he: "אנחנו משחקים בגן." },
      { en: "floor", he: "רצפה", ipa: "/flɔː/", ex_en: "The ball is on the floor.", ex_he: "הכדור על הרצפה." },
      { en: "clock", he: "שעון", ipa: "/klɒk/", ex_en: "The clock says it's 3 o'clock.", ex_he: "השעון מראה שלוש." },
      { en: "lamp", he: "מנורה", ipa: "/læmp/", ex_en: "Turn on the lamp, please.", ex_he: "הדלק את המנורה, בבקשה." },
    ],
  },
  sports: {
    name: "Sports & Leisure", nameHe: "ספורט ופנאי", icon: "⚽", color: "purple",
    words: [
      { en: "football", he: "כדורגל", ipa: "/ˈfʊtbɔːl/", ex_en: "We play football at school.", ex_he: "אנחנו משחקים כדורגל בבית ספר." },
      { en: "ball", he: "כדור", ipa: "/bɔːl/", ex_en: "Throw the ball to me!", ex_he: "זרוק לי את הכדור!" },
      { en: "swim", he: "לשחות", ipa: "/swɪm/", ex_en: "I swim in the pool every summer.", ex_he: "אני שוחה בבריכה כל קיץ." },
      { en: "run", he: "לרוץ", ipa: "/rʌn/", ex_en: "Can you run fast?", ex_he: "אתה יכול לרוץ מהר?" },
      { en: "jump", he: "לקפוץ", ipa: "/dʒʌmp/", ex_en: "The children jump on the trampoline.", ex_he: "הילדים קופצים על הטרמפולינה." },
      { en: "bike", he: "אופניים", ipa: "/baɪk/", ex_en: "I ride my bike to school.", ex_he: "אני רוכב על האופניים לבית ספר." },
      { en: "song", he: "שיר", ipa: "/sɒŋ/", ex_en: "Let's sing a song together!", ex_he: "בואו נשיר שיר ביחד!" },
      { en: "draw", he: "לצייר", ipa: "/drɔː/", ex_en: "I like to draw pictures.", ex_he: "אני אוהב לצייר תמונות." },
      { en: "game", he: "משחק", ipa: "/ɡeɪm/", ex_en: "This game is so much fun!", ex_he: "המשחק הזה ממש כיף!" },
      { en: "dance", he: "לרקוד", ipa: "/dɑːns/", ex_en: "She loves to dance.", ex_he: "היא אוהבת לרקוד." },
    ],
  },
};

const COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-900", badge: "bg-orange-100 text-orange-700" },
  pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-900", badge: "bg-pink-100 text-pink-700" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", badge: "bg-blue-100 text-blue-700" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-900", badge: "bg-green-100 text-green-700" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", badge: "bg-amber-100 text-amber-700" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-900", badge: "bg-purple-100 text-purple-700" },
};

export function generateStaticParams() {
  return Object.keys(TOPICS).map((slug) => ({ slug }));
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = TOPICS[slug];
  if (!topic) return <div className="p-8 text-center">נושא לא נמצא</div>;

  const c = COLORS[topic.color];

  return (
    <div dir="rtl" className="mx-auto max-w-3xl space-y-6 pb-24">
      <Link href="/cambridge-kids" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900">
        <ArrowLeft className="h-4 w-4" /> חזרה לנושאים
      </Link>

      {/* Header */}
      <div className={`rounded-3xl ${c.bg} border-2 ${c.border} p-6`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{topic.icon}</span>
          <div>
            <h1 className={`text-2xl font-extrabold ${c.text}`}>{topic.nameHe}</h1>
            <p className="text-sm text-zinc-500">{topic.name} · 10 מילים</p>
          </div>
        </div>
      </div>

      {/* Interactive Activity: Picture with Hotspots */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-zinc-900">🖼️ לחץ על המילים הנכונות</h2>
        <p className="mt-1 text-sm text-zinc-500">לחץ על כל מילה כדי לשמוע ולראות את התרגום</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {topic.words.map((w) => (
            <button key={w.en} className={`rounded-full ${c.badge} px-4 py-2 text-sm font-bold transition hover:scale-105 active:scale-95`} suppressHydrationWarning>
              {w.en}
            </button>
          ))}
        </div>
      </div>

      {/* Sing & Learn */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-zinc-900">🎵 Sing & Learn</h2>
        <p className="mt-1 text-sm text-zinc-500">שירים לילדים בנושא {topic.nameHe}</p>
        <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(topic.name + " song for kids")}`} target="_blank" rel="noopener" className={`mt-3 inline-block rounded-full ${c.badge} px-4 py-2 text-sm font-bold`}>
          🔍 חפש שירים ב-YouTube
        </a>
      </div>

      {/* Word Cards */}
      <div className="space-y-3">
        <h2 className="font-bold text-zinc-900">📚 {topic.nameHe} — 10 מילים</h2>
        {topic.words.map((w, i) => (
          <div key={w.en} className={`rounded-2xl border ${c.border} ${c.bg} p-4`}>
            <div className="flex items-center gap-3">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full ${c.badge} text-sm font-bold`}>{i + 1}</span>
              <div>
                <div className="font-extrabold text-lg text-zinc-900">{w.en} <span className="text-sm text-zinc-400">{w.ipa}</span></div>
                <div className="text-zinc-700">{w.he}</div>
              </div>
            </div>
            <div className="mt-2 rounded-lg bg-white/80 p-2">
              <div className="text-[12px] text-zinc-600">💬 {w.ex_en}</div>
              <div className="text-[12px] text-zinc-500">🇮🇱 {w.ex_he}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quiz */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-zinc-900">❓ מה התשובה הנכונה?</h2>
        <p className="mt-1 text-sm text-zinc-500">חידון מהיר — בחר את המילה הנכונה</p>
        <div className="mt-4 space-y-3">
          {topic.words.slice(0, 3).map((w) => {
            const wrong = topic.words.filter((x) => x.en !== w.en).sort(() => Math.random() - 0.5).slice(0, 2);
            const options = [w, ...wrong].sort(() => Math.random() - 0.5);
            return (
              <div key={w.en} className="rounded-xl bg-zinc-50 p-4">
                <div className="font-bold text-zinc-900">"{w.he}" = ?</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {options.map((o) => (
                    <button key={o.en} className={`rounded-full px-4 py-2 text-sm font-bold transition ${o.en === w.en ? "bg-green-100 text-green-700" : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"}`} suppressHydrationWarning>
                      {o.en}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Download */}
      <div className="text-center">
        <a href="/anki/cambridge-pre-a1-kids-60-cards.apkg" download className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-bold text-white shadow-lg transition hover:shadow-xl`}>
          📥 הורדת APKG — 60 כרטיסיות
        </a>
      </div>

      {/* Legal */}
      <div className="rounded-xl bg-zinc-50 p-4 text-[11px] text-zinc-500">
        <p>Inspired by Cambridge English Pre-A1 Starters word list. Original activities from CambridgeEnglish.org. This is original educational content based on general topics, not a copy of Cambridge materials. Cambridge is a trademark of Cambridge University Press & Assessment.</p>
      </div>
    </div>
  );
}
