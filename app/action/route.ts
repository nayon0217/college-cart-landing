import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  const formData = await request.formData()

  const email = formData.get('email') as string
  const d = formData.get('demo_use') as string

  let demo_use = false;
  if(d == 'true') demo_use = true;
  else demo_use = false;

  // Insert into Supabase table
  const { error } = await supabase.from('waitlist').insert([{ email, demo_use }])

  if (error) {
    console.error('Error inserting data:', error)
    return NextResponse.json({ success: false, error: error.message })
  }

  return NextResponse.json({ success: true })
}
