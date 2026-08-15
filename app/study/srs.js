// SRS Engine v2 — Research-Based Spaced Repetition
// Based on:
// - Ebbinghaus Forgetting Curve (1885)
// - SM-2 Algorithm (Wozniak 1987)
// - Cepeda et al. (2006, 2008) optimal review intervals
// - Bjork "Desirable Difficulties" (1994) — interleaving
// - Roediger & Karpicke (2006) — retrieval practice
// - MacLeod (2010) — production effect

// Research-optimal intervals for a NEW item (Cepeda 2008):
// Review 1: after ~1 min (within session)
// Review 2: after ~10 min (within session)  
// Review 3: after ~1 day
// Review 4: after ~3 days
// Review 5: after ~7 days
// Review 6: after ~14 days
// Review 7: after ~30 days
// Review 8: after ~60 days

const OPTIMAL_INTERVALS = [0, 0, 1, 3, 7, 14, 30, 60, 120]

export function getNextReview(card, quality) {
  // quality: 0=again, 1=hard, 2=good, 3=easy
  let { ease_factor = 2.5, interval_days = 0, repetitions = 0 } = card

  if (quality === 0) {
    // Failed — reset to beginning but keep in session
    repetitions = 0
    interval_days = 0
    ease_factor = Math.max(1.3, ease_factor - 0.2)
  } else {
    // Passed — advance to next optimal interval
    const nextRep = repetitions + 1
    if (nextRep < OPTIMAL_INTERVALS.length) {
      // Use research-optimal interval, adjusted by quality
      const base = OPTIMAL_INTERVALS[nextRep]
      if (quality === 3) {
        interval_days = Math.round(base * 1.3) // easy: 30% longer
      } else if (quality === 1) {
        interval_days = Math.max(0, Math.round(base * 0.6)) // hard: 40% shorter
      } else {
        interval_days = base // good: optimal
      }
    } else {
      // Beyond optimal schedule — use SM-2 formula
      interval_days = Math.round(interval_days * ease_factor * (quality === 3 ? 1.3 : quality === 1 ? 0.8 : 1.0))
      interval_days = Math.min(interval_days, 365)
    }
    repetitions = nextRep
    ease_factor = Math.max(1.3, ease_factor + (quality === 3 ? 0.15 : quality === 2 ? 0 : -0.15))
  }

  const next = new Date()
  next.setDate(next.getDate() + interval_days)

  return {
    ...card,
    ease_factor: Math.round(ease_factor * 100) / 100,
    interval_days,
    repetitions,
    next_review: next.toISOString().slice(0, 10),
    last_reviewed: new Date().toISOString().slice(0, 10)
  }
}

// Interleaving — shuffle cards from different lessons (Bjork 1994)
// Never show two cards from the same lesson in a row
export function interleave(cards) {
  if (cards.length <= 1) return cards

  // Group by lesson_id
  const byLesson = {}
  cards.forEach(c => {
    const key = c.lesson_id || 'misc'
    if (!byLesson[key]) byLesson[key] = []
    byLesson[key].push(c)
  })

  // Round-robin pick from different lessons
  const result = []
  const queues = Object.values(byLesson).map(q => [...q].sort(() => Math.random() - 0.5))
  
  while (queues.some(q => q.length > 0)) {
    for (const q of queues) {
      if (q.length > 0) {
        result.push(q.shift())
      }
    }
  }
  
  return result
}

// Get study session cards — mix of due + new, interleaved
export function getStudySession(cards, maxNew = 5, maxTotal = 20) {
  const today = new Date().toISOString().slice(0, 10)
  
  const due = cards.filter(c => c.next_review <= today && c.repetitions > 0)
  const newCards = cards.filter(c => c.repetitions === 0).slice(0, maxNew)
  
  const session = [...due, ...newCards].slice(0, maxTotal)
  return interleave(session)
}

// Fuzzy match — accept typos and minor differences
export function checkAnswer(userInput, correctAnswer) {
  const normalize = (s) => s.toLowerCase().trim()
    .replace(/[.,!?;:'"]/g, '')
    .replace(/\s+/g, ' ')
  
  const user = normalize(userInput)
  const correct = normalize(correctAnswer)
  
  if (user === correct) return { correct: true, score: 100 }
  
  // Levenshtein distance for typo tolerance
  const distance = levenshtein(user, correct)
  const maxLen = Math.max(user.length, correct.length)
  const similarity = ((maxLen - distance) / maxLen) * 100
  
  return {
    correct: similarity >= 80,
    score: Math.round(similarity),
    distance
  }
}

function levenshtein(a, b) {
  const matrix = []
  for (let i = 0; i <= b.length; i++) matrix[i] = [i]
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        )
      }
    }
  }
  return matrix[b.length][a.length]
}

export function getStreakBonus(streak) {
  if (streak >= 30) return '🔥🔥🔥'
  if (streak >= 14) return '🔥🔥'
  if (streak >= 7) return '🔥'
  if (streak >= 3) return '✨'
  return ''
}
