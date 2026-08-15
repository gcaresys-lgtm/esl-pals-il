# AUTH_REDIRECT_FIX_FINAL — ✅ הושלם

**תאריך:** 2026-08-15 | **פרויקט:** wehxchymffophcrmfzvx | **code:** 7e478cf

## BEFORE → AFTER (מאומת מה-API החי)

**BEFORE (11 URLs, אפס esl-pals-il):**
```
site_url: https://frontend-xi-blush-75.vercel.app   ← ברירת המחדל = אתר ההכרויות!
frontend-xi-blush-75.vercel.app(+/**)  prakb.netlify.app(+/**)  100.127.248.45:8080
localhost:8799  127.0.0.1:8799  esl-tracker.vercel.app(+/**)  delivery-dashboard-bice(+/**)
```

**AFTER (13 URLs):**
```
כל ה-11 הקיימים ללא שינוי ✅
 ⭐ https://esl-pals-il.vercel.app/auth/callback
 ⭐ https://esl-pals-il.vercel.app/**
```

**אימות 7/7:** esl callback ✅ | esl wildcard ✅ | dating (blush+prakb) ✅ שלמים | esl-tracker ✅ | delivery ✅ | tailscale+local ✅ | site_url = dating (לא נוגע, כפי שנדרש) ✅

## שרשרת התיקון המלאה

1. **7e478cf (קוד):** `/auth/callback` route עם code-exchange + `redirectTo` מפורש — ה-redirect כבר לא תלוי ב-Site URL
2. **Whitelist (API):** PATCH `uri_allow_list` add-only — esl-pals-il נכנס, ההכרויות לא נפגעו
3. **אימותי curl:** callback שלנו מחזיר 307→`/study/today` ב-origin שלנו ✅

## גילויים טכניים בדרך (שווי משמעות)

1. **Supabase WAF חוסם User-Agent של Python-urllib** — 403 "Forbidden" למרות טוקן תקין! curl ו-UA דפדפן עוברים. זו הסיבה שהטוקן "היה מת" — הוא היה תקין כל הזמן.
2. ה-API מקבל `uri_allow_list` (מחרוזת מופרדת פסיקים), לא `additional_redirect_urls` כפי שבמשימה.
3. ה-whitelist שיקף בדיוק את המציאות: 4 אפליקציות חולקות פרויקט Supabase אחד (הכרויות×2, esl-tracker ישן, delivery) — esl-pals-il הייתה היחידה מחוץ לרשימה, לכן נפלה ל-Site URL.

## אימות E2E סופי — 30 שנ' אצלך

גלישה בסתר → `https://esl-pals-il.vercel.app/study/today` → **Google Login** → חייב לחזור ל-`/study/today` של esl-pals-il (לא ההכרויות).
בדיקת רגרסיה: Google login ב-`frontend-xi-blush-75.vercel.app` / `prakb.netlify.app` ממשיך לעבוד כרגיל.

אם עדיין נופל להכרויות → שלח screenshot ואת ה-URL בשורת הכתובת — כל שאר החוליות כבר אומתו.
