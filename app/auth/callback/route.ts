import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/study/today'
  const redirectBack = (msg: string) =>
    NextResponse.redirect(`${origin}/study/today?auth_error=${encodeURIComponent(msg)}`)

  const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
  const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!SB_URL || !SB_KEY || SB_KEY === 'PLACEHOLDER') {
    return redirectBack('missing supabase env')
  }

  if (code) {
    const supabase = createClient(SB_URL, SB_KEY)
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
    return redirectBack(error.message)
  }

  // No code: fallback to origin (implicit-flow leftovers or direct visit)
  return NextResponse.redirect(`${origin}${next}`)
}
