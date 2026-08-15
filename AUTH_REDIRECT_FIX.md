# AUTH_REDIRECT_FIX — Google login נופל על אתר ההכרויות

**תאריך:** 2026-08-15 | **קומיט:** 7e478cf | **פריסה:** esl-pals-il (production, aliased)

## לפני → אחרי

**BEFORE:** לחיצה על Google Login ב-/study/today → אחרי Google consent → נחת על אתר ההכרויות (prakb/hagarshonim).
**AFTER (code-level):** ה-flow מפורש ומסתיים ב-origin של esl-pals-il: `/auth/callback?next=/study/today` → exchange code → redirect ל-`/study/today` של אותו דומיין.

## שורש הבעיה (מאומת)

1. **פרויקט Supabase משותף:** `wehxchymffophcrmfzvx` משמש גם את esl-pals-il וגם את hagarshonim (repo `prakb` — אתר ההכרויות). אומת מה-.env-ים המקומיים.
2. **Implicit flow חשוף ל-Site URL:** הקוד הישן (`signInWithOAuth({ redirectTo: window.location.origin })` ב-supabase-js 2.45 בלי flowType PKCE ובלי callback route) מסתמך על ה-redirect המותר בהגדרות Supabase. כש-Site URL בפרויקט = הדומיין של ההכרויות, הסשן חוזר לשם.
3. **לא היה callback route בכלל** — `app/auth/callback/route.ts` לא היה קיים.

## מה נעשה (7e478cf)

1. **`app/auth/callback/route.ts` חדש** — GET: exchange `code` מול Supabase → redirect ל-`${origin}${next}` (default `/study/today`). כל שגיאה → חזרה ל-/study/today עם `auth_error` לדיבוג.
2. **`app/study/auth.js`** — `redirectTo` הוגדר מפורש: `${origin}/auth/callback?next=/study/today`. הקוד כבר לא תלוי ב-Site URL של Supabase.
3. **נפרס ל-production** (`✓ Ready in 34s`, aliased ל-esl-pals-il.vercel.app).

## אימותים שבוצעו

```
curl /auth/callback?next=/study/today → 307 → https://esl-pals-il.vercel.app/study/today  ✅ (redirect ב-origin שלנו)
curl /study/today → 200 ✅
```
ה-callback עובד ולא מוביל החוצה. אימות E2E מלא (Google consent אמיתי) דורש דפדפן — ראה למטה.

## מה נשאר בידיים שלך (3 דק', פעם אחת)

ב-Supabase Dashboard (פרויקט wehxchymffophcrmfzvx):
1. **Authentication → URL Configuration → Redirect URLs** — הוסף:
   - `https://esl-pals-il.vercel.app/auth/callback`
   - `https://esl-pals-il.vercel.app/**`
2. **Site URL** — אם אתר ההכרויות חייב להישאר ברירת המחדל (emails/confirmations), השאר; אחרת הפוך את esl-pals-il ל-Site URL. עם ה-callback המפורש שלנו, Site URL כבר לא קובע לאן ה-login חוזר — אבל redirect allow-list חייב לכלול את esl-pals-il.
3. אימות סופי: גלישה בסתר → /study/today → Google → נחיתה חזרה ב-/study/today.

הערה: טוקן ה-Management API של Supabase פג (403) — לכן ההוספה ב-redirect list נשארת ידנית. אם תשלח טוקן טרי (Settings→API), אעדכן בעצמי דרך ה-API.

## המלצה ארכיטקטונית (לא דחוף)

פרויקט Supabase אחד לשתי אפליקציות שונות (הכרויות + לימודים) = נקודת כשל משותפת וגם בלבול auth. בהמשך שווה לפצל לשני פרויקטים. לא נעשה עכשיו (MVP-first).
