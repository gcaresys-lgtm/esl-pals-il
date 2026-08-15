# ROUTING_FIX — esl-pals-il /study/today

**תאריך:** 2026-08-15 | **חקירה:** מלאה, עם ראיות חיות

## פסק הדין: הבאג לא משוחזר — הניתוב תקין ✅

**BEFORE (לפי הדיווח):** `/study/today` נופל על פרויקט esl-tracker הישן.
**AFTER (מאומת עכשיו):** אין שום ניתוב ל-esl-tracker. הכל מגיע מהפרויקט הנכון.

## הראיות

| בדיקה | תוצאה |
|---|---|
| `curl -I /study/today` | **HTTP/2 200** — לא 307, לא redirect (age=22138, cache HIT fra1) |
| הדומיין מקושר לפריסה | `esl-pals-2amhlvb4t` — החדשה ביותר (לפני 6ש', 13:57 היום) |
| שם הפרויקט ב-Vercel | `esl-pals-il` (team gcaresys-2552s-projects), `.vercel/project.json` מקומי תואם |
| Git remote | `github.com/gcaresys-lgtm/esl-pals-il.git` ✅ (לא esl-tracker) |
| `<title>` בעמוד החי | "ESL Pals IL — Curriculum Hub for Israel" ✅ |
| `grep -r esl-tracker ~/esl-pals-il/` | **0 תוצאות** — אין אזכור בכל ה-repo |
| `vercel.json` | לא קיים (אין redirects) |
| `next.config` | ריק — אין redirects |
| `/api/daily` | עובד: מחזיר SRS 20 כרטיסים ✅ |
| הודעת וואטסאפ 20:00 | מצביעה על `https://esl-pals-il.vercel.app/study/today` ✅ |

## מה כן קיים בשטח (ויכול להסביר את הרושם)

1. **בדפדפן אצלך יושב cache ישן** — התשובה שו flagged `x-vercel-cache: HIT` עם age שעות. אם נכנסת לפני הפריסה האחרונה (היום ב-13:57), ייתכן שראית גרסה ישנה. **פתרון: Ctrl+Shift+R או חלון גלישה בסתר.**
2. **עמוד הכניסה לא redirect אלא auth-gate:** `page.tsx` של `/study/today` מציג התחברות Google ורק אז טוען את התוכן. בלי התחברות נראה מסך ריק/כפתור Google — לא "עמוד tracker".
3. **ב-Vercel יש 2 פרויקטים חיים** (`esl-pals-il` + פריסות ישנות של `esl-tracker`?) — אבל הדומיין `esl-pals-il.vercel.app` משויך לפריסה הנכונה. אם ראית URL אחר (כמו `*-esl-tracker*.vercel.app`) — זו לינק ישן מהיסטוריה, לא ניתוב.

## פעולות שבוצעו

- לא נדרשו תיקונים — לא נמצא redirect, לא נמצא קישור שגוי, לא נמצא repo שגוי.
- הכל מאומת מול הדומיין החי + הפריסה החדשה.

## E2E שבוצעו

```
curl -I https://esl-pals-il.vercel.app/study/today
→ HTTP/2 200, x-vercel-id: fra1::..., serving dpl_7twziftrYwkT9fxev5dXgn12tp1T (6h old prod)
curl /api/daily?uid=default → {"type":"srs","count":20,...} ✅
curl /api/daily/complete?slot=evening → message עם ה-URL הנכון ✅
```

## המלצה

פתח בגלישה בסתר → `https://esl-pals-il.vercel.app/study/today` → התחבר Google → אמור להראות ▶️ התחל עכשיו. אם עדיין רואה משהו אחר — שלח לי את ה-URL המדויק משורת הכתובת ואת מה שמופיע, ואתייחס לזה כבאג אמיתי במקום "לא משוחזר".
