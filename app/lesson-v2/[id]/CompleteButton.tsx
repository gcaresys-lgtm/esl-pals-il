'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CompleteButton({ lessonId }: { lessonId: string }) {
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)
  const router = useRouter()

  const complete = async () => {
    setBusy(true)
    const uid = localStorage.getItem('esl_uid') || 'default'
    await fetch('/api/lesson-v2/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, lessonId }),
    })
    // also mark daily complete
    await fetch('/api/daily/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid }),
    })
    window.dispatchEvent(new CustomEvent('confetti'))
    setDone(true)
    setBusy(false)
    setTimeout(() => router.push('/study/today'), 1600)
  }

  return (
    <button
      onClick={complete}
      disabled={done || busy}
      data-testid="complete-lesson"
      className={`mt-5 w-full rounded-full px-6 py-4 text-base font-bold text-white transition active:scale-95 disabled:opacity-60 ${done ? 'bg-emerald-600' : 'bg-zinc-900 hover:bg-zinc-700'}`}
    >
      {done ? '🎉 סיימת! XP נוסף' : busy ? 'שומר…' : '✅ סיימתי את השיעור'}
    </button>
  )
}

export function CopyPrompt() {
  return (
    <button
      onClick={(e) => {
        const pre = (e.currentTarget.parentElement?.querySelector('pre') as HTMLPreElement)
        if (pre) navigator.clipboard.writeText(pre.innerText)
        e.currentTarget.textContent = '✅ הועתק'
      }}
      className="mt-3 w-full rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
    >
      📋 העתק פרומפט
    </button>
  )
}
