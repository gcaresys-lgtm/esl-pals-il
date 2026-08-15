'use client'
import { useState, useEffect } from 'react'
import '../../confetti.css'
import { useRouter } from 'next/navigation'
import { useAuth } from '../auth'

export default function TodayPage() {
  const { user, loading, signInWithGoogle } = useAuth() as any
  const router = useRouter()
  const [data, setData] = useState<any | null>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!user) return
    fetch('/api/daily?uid=' + (user.id || 'default'))
      .then(r => r.json())
      .then(setData)
      .catch(() => setData({ error: true }))
  }, [user])

  const start = () => {
    if (!data) return
    setBusy(true)
    if (data.type === 'lesson' && data.lesson) {
      router.push(`/lesson-v2/${data.lesson.id}`)
    } else {
      router.push('/study?srs=1')
    }
  }

  const finish = async () => {
    if (!user) return
    setBusy(true)
    await fetch('/api/daily/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid: user.id }),
    })
    window.dispatchEvent(new CustomEvent('confetti'))
    setTimeout(() => { setBusy(false); location.reload() }, 1400)
  }

  return (
    <div className="mx-auto max-w-lg space-y-5" dir="rtl">
      <Confetti />

      {loading && <div className="py-20 text-center text-sm text-zinc-400">טוען…</div>}

      {!loading && !user && (
        <div className="rounded-3xl border border-zinc-100 bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">🎯</div>
          <h1 className="mt-3 text-xl font-bold">השיעור שלך היום</h1>
          <p className="mt-2 text-sm text-zinc-500">התחבר כדי להתחיל — 12 דקות וסיימת</p>
          <button onClick={signInWithGoogle} className="mt-5 w-full rounded-full bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-700 active:scale-95">
            ▶️ התחברות והתחלה
          </button>
        </div>
      )}

      {!loading && user && data && (
        <>
          <div className="rounded-3xl border border-zinc-100 bg-white p-7 shadow-sm">
            <div className="text-xs font-medium text-zinc-400">השיעור שלך היום ({data.estimatedMinutes || 12} דקות)</div>
            <h1 className="mt-2 text-2xl font-bold leading-snug">{data.headline}</h1>
            {data.reason && <p className="mt-2 text-sm text-zinc-500">{data.reason}</p>}
            {data.vocab && data.vocab.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {data.vocab.slice(0, 6).map((v: any, i: number) => (
                  <span key={i} className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600">{v.en}</span>
                ))}
                {data.vocab.length > 6 && <span className="text-[11px] text-zinc-400">+{data.vocab.length - 6}</span>}
              </div>
            )}
            {data.type === 'done' ? (
              <button onClick={finish} disabled={busy} className="mt-6 w-full rounded-full bg-zinc-900 px-6 py-4 text-base font-bold text-white transition hover:bg-zinc-700 disabled:opacity-50">
                ✅ סיימת היום — שיעור בונוס?
              </button>
            ) : (
              <button onClick={start} disabled={busy} className="mt-6 w-full rounded-full bg-emerald-600 px-6 py-5 text-lg font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-95 disabled:opacity-50">
                ▶️ התחל עכשיו (בלי תירוצים)
              </button>
            )}
          </div>

          {data.type === 'lesson' && data.lesson && (
            <button onClick={() => router.push(`/lesson-v2/${data.lesson.id}`)} className="w-full rounded-2xl border border-zinc-100 bg-white p-4 text-right text-sm shadow-sm transition hover:shadow-md">
              <span className="font-semibold">{data.lesson.title}</span>
              <span className="mr-2 text-zinc-400">· {data.lesson.duration || 12} דק' · {data.lesson.level}</span>
            </button>
          )}
        </>
      )}
    </div>
  )
}

function Confetti() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => { setShow(true); setTimeout(() => setShow(false), 2500) }
    window.addEventListener('confetti', h)
    return () => window.removeEventListener('confetti', h)
  }, [])
  if (!show) return null
  const pieces = Array.from({ length: 40 }, (_, i) => i)
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map(i => (
        <span key={i} className="confetti-piece" style={{
          left: `${(i * 37) % 100}%`,
          animationDelay: `${(i % 10) * 0.08}s`,
          backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'][i % 5],
        }} />
      ))}
    </div>
  )
}
