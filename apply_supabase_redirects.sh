#!/bin/bash
# Add esl-pals-il to Supabase redirect whitelist (wehxchymffophcrmfzvx)
# Usage: bash apply_supabase_redirects.sh <SBP_MANAGEMENT_TOKEN>
# ADD-ONLY: fetches current config, appends missing URLs, PATCHes. Never removes.
set -euo pipefail

TOK="${1:?usage: bash apply_supabase_redirects.sh <sbp_token>}"
REF="wehxchymffophcrmfzvx"
API="https://api.supabase.com/v1/projects/$REF/config/auth"

echo "=== BEFORE ==="
BEFORE=$(curl -s -H "Authorization: Bearer $TOK" "$API")
echo "$BEFORE" | python3 -c "
import json, sys
d = json.load(sys.stdin)
print('site_url:', d.get('site_url'))
print('redirect_urls:', json.dumps(d.get('redirect_urls'), ensure_ascii=False, indent=1))
"
echo "$BEFORE" > /tmp/sb_before.json

# merge: existing + required (dedup, preserve order)
python3 - << 'PYEOF' > /tmp/sb_urls.txt
import json
d = json.load(open('/tmp/sb_before.json'))
existing = list(d.get('redirect_urls') or [])
add = [
    "https://esl-pals-il.vercel.app/auth/callback",
    "https://esl-pals-il.vercel.app/**",
    "https://esl-pals-il.vercel.app/study/today",
    "http://localhost:3000/**",
    "http://localhost:3000/auth/callback",
]
merged = existing + [u for u in add if u not in existing]
print("\n".join(merged))
PYEOF

URLS=$(python3 -c "print(','.join(open('/tmp/sb_urls.txt').read().splitlines()))")
SITE=$(echo "$BEFORE" | python3 -c "import json,sys; print(json.load(sys.stdin).get('site_url'))")

echo "=== PATCH (site_url unchanged: $SITE) ==="
AFTER=$(curl -s -X PATCH -H "Authorization: Bearer $TOK" -H "Content-Type: application/json" "$API" \
  -d "{\"site_url\": \"$SITE\", \"additional_redirect_urls\": \"$URLS\"}")
echo "$AFTER" > /tmp/sb_after.json
echo "$AFTER" | python3 -c "
import json, sys
d = json.load(sys.stdin)
print('site_url:', d.get('site_url'))
print('redirect_urls:')
for u in d.get('redirect_urls') or []:
    print('  ', u)
"

echo "=== VERIFY esl-pals-il present ==="
grep -q "esl-pals-il.vercel.app" /tmp/sb_after.json && echo "✅ esl-pals-il whitelisted" || echo "❌ NOT FOUND — check token permissions"
