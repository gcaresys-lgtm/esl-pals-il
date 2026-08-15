'use client'
import { useState, useEffect, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import { A0_LESSONS } from './a0-lessons'
import { B1_LESSONS } from './b1-lessons'
import { NGSL_500 } from './ngsl'
import { A1_LESSONS, A2_LESSONS, ALL_LESSONS } from './lessons'
import { getNextReview, getStudySession, checkAnswer } from './srs'
import { V2MAP } from './v2map'
import { useAuth } from './auth'

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = (SB_URL && SB_KEY && SB_KEY !== 'PLACEHOLDER') ? createClient(SB_URL, SB_KEY) : null

const LEVELS = [
  { id: 'A0', name: 'A0', lessons: A0_LESSONS },
  { id: 'A1', name: 'A1', lessons: A1_LESSONS },
  { id: 'A2', name: 'A2', lessons: A2_LESSONS },
  { id: 'B1', name: 'B1', lessons: B1_LESSONS },
  { id: 'NGSL', name: '🔥 Top 500', lessons: NGSL_500.map(([en, he], i) => ({
    id: Math.floor(i / 50) + 1, level: 'NGSL',
    title: `Words ${i * 10 + 1}-${Math.min((i + 1) * 10, 500)}`,
    subtitle: `מילים שכיחות ${i * 10 + 1}-${Math.min((i + 1) * 10, 500)}`,
    keys: [], vocab: NGSL_500.slice(i * 10, (i + 1) * 10).map(([en, he]) => ({ en, he })),
    dialogue: '', practice: ''
  })) }
]

export default function StudyApp() {
  const [tab, setTab] = useState('dashboard')
  const [activeLevel, setActiveLevel] = useState('A1')
  const [activeLesson, setActiveLesson] = useState(null)
  const [progress, setProgress] = useState({})
  const [cards, setCards] = useState([])
  const [mistakes, setMistakes] = useState([])
  const [streak, setStreak] = useState(0)
  const [xp, setXp] = useState(0)
  const [connected, setConnected] = useState(false)
  const [studySession, setStudySession] = useState(null)
  const { user, loading: authLoading, signInWithGoogle, signOut } = useAuth()

  const userId = user?.id || 'default'

  useEffect(() => {
    if (user !== undefined) loadData()
  }, [user])

  const loadData = async () => {
    if (!supabase) return
    try {
      const uid = user?.id || 'default'
      const [progRes, cardsRes, streakRes] = await Promise.all([
        supabase.from('learning_progress').select('*').eq('user_id', uid),
        supabase.from('srs_cards').select('*').order('id'),
        supabase.from('streaks').select('*').eq('user_id', uid).maybeSingle()
      ])
      if (progRes.data) {
        const p = {}
        progRes.data.forEach(r => { p[`${r.level}-${r.lesson_id}`] = r.completed })
        setProgress(p)
      }
      if (cardsRes.data) setCards(cardsRes.data)
      if (streakRes.data) {
        setStreak(streakRes.data.current_streak || 0)
        setXp(streakRes.data.total_xp || 0)
      }
      setConnected(true)
    } catch (e) {
      console.error('Load error:', e)
    }
  }

  const startStudy = () => {
    const sessionCards = getStudySession(cards, 5, 20)
    if (sessionCards.length === 0) {
      alert('אין כרטיסים לחזרה כרגע — הוסף מילים משיעורים או חזור מאוחר יותר')
      return
    }
    setStudySession({ queue: sessionCards, current: 0, right: 0, total: sessionCards.length, done: false, results: [] })
  }

  const answerCard = (answer) => {
    if (!studySession || studySession.done) return
    const card = studySession.queue[studySession.current]
    // front=Hebrew shown; correct answer is the English side (checkAnswer: user input, correct)
    const { correct } = checkAnswer(String(answer || ''), String(card.back || ''))
    const q = [...studySession.queue]
    const updated = getNextReview({ ...card }, correct ? 2 : 0)
    if (correct) {
      setXp(x => x + 10)
    } else {
      setMistakes(m => [{ ...card, user: answer }, ...m].slice(0, 50))
    }
    q[studySession.current] = updated
    const nextCurrent = studySession.current + 1
    const isDone = nextCurrent >= studySession.queue.length
    setStudySession({
      ...studySession,
      queue: q,
      current: isDone ? studySession.current : nextCurrent,
      right: studySession.right + (correct ? 1 : 0),
      done: isDone,
      results: [...studySession.results, { correct }]
    })
    if (supabase) {
      supabase.from('srs_cards').update({
        repetitions: updated.repetitions, ease_factor: updated.ease_factor,
        interval_days: updated.interval_days, next_review: updated.next_review,
        last_reviewed: new Date().toISOString().slice(0, 10)
      }).eq('id', updated.id).then()
    }
  }

  const openLesson = (lesson) => setActiveLesson(lesson)

  const toggleLesson = async (lesson) => {
    const key = `${lesson.level}-${lesson.id}`
    const newVal = !progress[key]
    setProgress(p => ({ ...p, [key]: newVal }))
    if (supabase && user) {
      const existing = await supabase.from('learning_progress')
        .select('id').eq('user_id', userId).eq('level', lesson.level).eq('lesson_id', lesson.id).maybeSingle()
      if (existing.data) {
        await supabase.from('learning_progress').update({ completed: newVal }).eq('id', existing.data.id)
      } else {
        await supabase.from('learning_progress')
          .insert({ user_id: userId, level: lesson.level, lesson_id: lesson.id, completed: newVal })
      }
    }
  }

  const totalLessons = ALL_LESSONS.length + A0_LESSONS.length + B1_LESSONS.length
  const doneCount = Object.values(progress).filter(Boolean).length
  const dueCards = cards.filter(c => !c.next_review || c.next_review <= new Date().toISOString().slice(0, 10)).length

  if (authLoading) {
    return <div className="flex items-center justify-center py-20 text-sm text-zinc-400">טוען…</div>
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-zinc-100 bg-white p-8 text-center shadow-sm">
        <div className="text-4xl">🔐</div>
        <h2 className="mt-3 text-lg font-bold">כניסה לאזור האישי</h2>
        <p className="mt-2 text-sm text-zinc-500">התחבר כדי לשמור התקדמות, רצפים וכרטיסי חזרה בין מכשירים</p>
        <button
          onClick={signInWithGoogle}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
        >
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"/></svg>
          התחברות עם Google
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5" dir="rtl">
      {/* Header stats */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-6">
          <div><div className="text-2xl font-bold text-orange-600">🔥 {streak}</div><div className="text-xs text-zinc-400">רצף ימים</div></div>
          <div><div className="text-2xl font-bold text-blue-600">⚡ {xp}</div><div className="text-xs text-zinc-400">XP</div></div>
          <div><div className="text-2xl font-bold text-emerald-600">✅ {doneCount}/{totalLessons}</div><div className="text-xs text-zinc-400">שיעורים</div></div>
          <div><div className="text-2xl font-bold text-violet-600">🃏 {dueCards}</div><div className="text-xs text-zinc-400">כרטיסים לחזרה</div></div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${connected ? 'bg-emerald-500' : 'bg-zinc-300'}`} />
          <span className="text-xs text-zinc-400">{user.email}</span>
          <button onClick={signOut} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-200">יציאה</button>
        </div>
      </div>

      {/* Study session */}
      {studySession && !studySession.done && (() => {
        const card = studySession.queue[studySession.current]
        return (
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
              <span>{studySession.current + 1} / {studySession.total}</span>
              <span>✅ {studySession.right}</span>
            </div>
            <div className="rounded-xl bg-zinc-50 p-8 text-center">
              <div className="text-3xl font-bold" dir="rtl">{card.front}</div>
              <div className="mt-2 text-sm text-zinc-400">{card.example || ''}</div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); const v = e.target.answer.value; e.target.answer.value = ''; answerCard(v) }} className="mt-4 flex gap-2">
              <input name="answer" autoFocus placeholder="התרגום באנגלית…" className="flex-1 rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/30" dir="rtl" />
              <button type="submit" className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700">בדיקה</button>
            </form>
          </div>
        )
      })()}

      {studySession && studySession.done && (
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center">
          <div className="text-4xl">{studySession.right === studySession.total ? '🏆' : '💪'}</div>
          <div className="mt-2 text-2xl font-bold">{studySession.right} / {studySession.total}</div>
          <div className="text-sm text-zinc-500">תוצאת הסבב</div>
          <button onClick={() => setStudySession(null)} className="mt-4 rounded-full bg-zinc-900 px-5 py-2 text-sm text-white hover:bg-zinc-700">סיום</button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2">
        {[
          ['dashboard', '📊 לוח בקרה'],
          ['lessons', '📚 שיעורים'],
          ['study', '🃏 חזרה'],
        ].map(([id, label]) => (
          <button key={id} onClick={() => { setTab(id); if (id === 'study' && !studySession) startStudy() }}
            className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition ${tab === id ? 'bg-zinc-900 text-white ring-zinc-900' : 'bg-white text-zinc-600 ring-zinc-200 hover:bg-zinc-100'}`}>
            {label}
          </button>
        ))}
      </div>

      {/* Lessons tab */}
      {tab === 'lessons' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {LEVELS.map(l => (
              <button key={l.id} onClick={() => setActiveLevel(l.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition ${activeLevel === l.id ? 'bg-blue-50 text-blue-700 ring-blue-200' : 'bg-white text-zinc-600 ring-zinc-200 hover:bg-zinc-100'}`}>
                {l.name}
              </button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {LEVELS.find(l => l.id === activeLevel).lessons.map(lesson => {
              const done = progress[`${lesson.level}-${lesson.id}`]
              const v2id = V2MAP[`${lesson.level}|${lesson.title.trim().toLowerCase()}`]
              return (
                <div key={`${lesson.level}-${lesson.id}`} className="flex items-center justify-between rounded-2xl border p-4 text-right shadow-sm transition hover:shadow-md ${done ? 'border-emerald-200 bg-emerald-50' : 'border-zinc-100 bg-white'}">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">{lesson.title}</div>
                    {lesson.subtitle && <div className="mt-0.5 text-xs text-zinc-400">{lesson.subtitle}</div>}
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {lesson.keys && lesson.keys.slice(0, 2).map((k, i) => (
                        <span key={i} className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700" dir="ltr">{k}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {lesson.v2id ? (
                      <a href={`/lesson-v2/${lesson.v2id}`} className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-bold text-white hover:bg-zinc-700">לשיעור ▶️</a>
                    ) : (
                      <button onClick={() => openLesson(lesson)} className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-bold text-white hover:bg-zinc-700">פתח ▶️</button>
                    )}
                    <button onClick={() => toggleLesson(lesson)} title="סמן השלמה"
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${done ? 'bg-emerald-500 text-white' : 'bg-zinc-100 text-zinc-400'}`}>✓</button>
                  </div>
                  {activeLesson && activeLesson.level === lesson.level && activeLesson.id === lesson.id && (
                    <div className="mt-3 w-full space-y-3 rounded-xl bg-zinc-50 p-4 text-right">
                      <div className="text-xs font-bold">🔑 משפטי מפתח</div>
                      {lesson.keys && lesson.keys.map((k, i) => (
                        <div key={i} className="rounded-lg bg-white px-3 py-2 text-sm" dir="ltr">{k}</div>
                      ))}
                      {lesson.dialogue && (
                        <>
                          <div className="pt-2 text-xs font-bold">💬 דיאלוג</div>
                          <pre className="whitespace-pre-wrap rounded-lg bg-white p-3 text-sm" dir="ltr">{lesson.dialogue}</pre>
                        </>
                      )}
                      {lesson.vocab && (
                        <>
                          <div className="pt-2 text-xs font-bold">📝 אוצר מילים</div>
                          <div className="flex flex-wrap gap-1.5">
                            {lesson.vocab.map((v, i) => (
                              <span key={i} className="rounded-full bg-white px-2.5 py-1 text-[11px]">{v.en} · {v.he}</span>
                            ))}
                          </div>
                        </>
                      )}
                      <button onClick={() => setActiveLesson(null)} className="w-full rounded-full bg-zinc-200 px-4 py-2 text-xs font-medium hover:bg-zinc-300">סגור</button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Dashboard tab */}
      {tab === 'dashboard' && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold">המשך למידה</h3>
            <p className="mt-1 text-xs text-zinc-400">{dueCards > 0 ? `${dueCards} כרטיסים מחכים לחזרה` : 'הכל מחודש — כל הכבוד!'}</p>
            <button onClick={startStudy} className="mt-4 w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
              התחל סבב חזרה
            </button>
          </div>
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold">שיעורים שהושלמו</h3>
            <div className="mt-3 space-y-1.5">
              {Object.entries(progress).filter(([, v]) => v).slice(0, 6).map(([k]) => (
                <div key={k} className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {k}
                </div>
              ))}
              {doneCount === 0 && <p className="text-xs text-zinc-400">עדיין לא סימנת שיעורים</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
