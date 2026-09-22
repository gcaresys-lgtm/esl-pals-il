# LESSONS_DEBUG — למה שיעורים לא נפתחו + איחוד 2 האתרים

**תאריך:** 2026-08-15 | **קומיט:** 0f584a3 (deployed) | **DB:** wehxchymffophcrmfzvx

## מה נמצא (הכל מאומת)

### 1. DB — תקין, האיחוד כבר קרה
- **lessons_v2: 107 שיעורים** (catalog 72 + tracker 35), חלוקה: A0=26, A1=32, A2=24, B1=25
- RLS פתוח לקריאה — anon REST מחזיר נתונים ✅ (לא RLS הבעיה)
- srs_cards_v2: 100 כרטיסים ל-default; learning_progress_v2: ריק
- הטבלאות הישנות עדיין קיימות: srs_cards (2), learning_progress (משתמש אמיתי!), streaks

### 2. שורש הבאג — 3 באגים ב-UI, לא ב-DB
| # | באג | איפה | תיקון |
|---|---|---|---|
| 1 | **לחיצה על שיעור לא פותחת כלום** — toggleLesson רק סימן ✓, אין view של תוכן | StudyApp.jsx lessons tab | כרטיס משודרג: "לשיעור ▶️" → `/lesson-v2/{uuid}` + פתיחה מורחבת inline (keys+dialogue+vocab) + ✓ נפרד |
| 2 | **כרטיס SRS ריק** — render קרא `card.english` אבל שדות הטבלה `front`/`back` → המילה לא מוצגת בכלל | StudyApp answerCard/render | `card.front` + placeholder "התרגום באנגלית…" |
| 3 | **חתימות הפוכות** — `checkAnswer(card, answer)` (קלט/נכון הפוכים = תמיד "טעות") + `getNextReview(reps, ease)` קיבל מספרים במקום אובייקט → interval 0 לנצח | answerCard | נכתב מחדש: `checkAnswer(answer, card.back)` + `getNextReview(card, quality)` |
| 4 | שמירה ל-DB עם שמות שדות שגויים (reps/ease → repetitions/ease_factor) | persist | תוקן + last_reviewed |

### 3. האיחוד (אופציה A) — הושלם בקוד
- **v2map.js** (AUTO-GENERATED): 107 רשומות `level|title → lessons_v2 uuid` — 50/50 התאמה מלאה לשיעורים המוקשחים
- כל שיעור ב-/study מקבל כפתור "לשיעור ▶️" שמוביל לעמוד `/lesson-v2/{id}` האמיתי (שיעור מלא: keys, vocab chips, CompleteButton→XP)
- מקור אמת אחד: lessons_v2; ה-hardcoded נשאר רק כ-index לניווט

## שרשרת E2E שאומתה (curl חי אחרי deploy)

```
/lesson-v2/e2930312... (Alphabet & Greetings) → 200, מכיל "משפטי מפתח" + "אוצר מילים" ✅
/study → 200 ✅  |  /study/today → 200 ✅
/api/daily?uid=default → type:srs, 20 cards ✅ (12-min engine עובד)
build → passed ✅
```

## מה נשאר לבדיקה אנושית (CDP למטה — אין לי דפדפן)

1. `/study` → tab שיעורים → לחיצה "לשיעור ▶️" → עמוד שיעור מלא נפתח
2. `/study` → tab חזרה → התחל סבב → **המילה בעברית מופיעה** (לא ריק) → משיבים באנגלית → עובר/נכשל נכון
3. `/study/today` → ▶️ התחל עכשיו → מסיים → confetti + XP

## הערות ארכיטקטורה (לא נגעתי — MVP)
- StudyApp עדיין קורא טבלאות ישנות (srs_cards/learning_progress/streaks) — עובד, אבל מפוצל מ-_v2. מיזוג מלא של נתוני המשתמש הוא שלב הבא הגיוני.
- 107 בפועל מול 80 במפרט: ה-DB מכיל גם 72 catalog + 35 tracker (חפיפות כן/לא לפי title) — אין שכפול פיזי (UNIQUE(level,number)), אבל אם רוצים בדיוק 80 ייחודיים צריך דה-דופ מודע.
