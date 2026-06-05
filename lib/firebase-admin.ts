export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { sendWebinarConfirmation, sendInternalWebinarAlert } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, country } = body

    if (!firstName || !lastName || !email || !country) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const db = adminDb()

    const existing = await db
      .collection('webinar_registrants')
      .where('email', '==', email.toLowerCase())
      .limit(1)
      .get()

    if (!existing.empty) {
      return NextResponse.json({ error: 'This email is already registered.' }, { status: 409 })
    }

    await db.collection('webinar_registrants').add({
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      country,
      registeredAt: new Date().toISOString(),
      source: 'website',
      addedToCRM: false,
    })

    await Promise.allSettled([
      sendWebinarConfirmation(email, firstName),
      sendInternalWebinarAlert(`${firstName} ${lastName}`, email, country),
    ])

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('[WEBINAR SIGNUP ERROR]', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}