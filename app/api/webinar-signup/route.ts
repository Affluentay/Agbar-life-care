export const dynamic = 'force-dynamic'
// app/api/webinar-signup/route.ts
// Handles webinar registration:
//   1. Validates input
//   2. Checks for duplicate email in Firestore
//   3. Saves registrant to Firestore collection "webinar_registrants"
//   4. Sends confirmation email to registrant
//   5. Sends internal alert to Itunu (CRM)

import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { sendWebinarConfirmation, sendInternalWebinarAlert } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, country } = body

    // ── 1. Validate ──
    if (!firstName || !lastName || !email || !country) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // ── 2. Check for duplicate ──
    const existing = await adminDb()
      .collection('webinar_registrants')
      .where('email', '==', email.toLowerCase())
      .limit(1)
      .get()

    if (!existing.empty) {
      return NextResponse.json(
        { error: 'This email is already registered for the webinar.' },
        { status: 409 }
      )
    }

    // ── 3. Save to Firestore ──
    const docRef = await adminDb().collection
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      country,
      registeredAt: new Date().toISOString(),
      source: 'website',
      addedToCRM: false, // Itunu updates this to true once added
    })

    console.log(`[WEBINAR] New registrant saved: ${docRef.id} — ${email}`)

    // ── 4 & 5. Send emails (non-blocking — don't fail signup if email fails) ──
    await Promise.allSettled([
      sendWebinarConfirmation(email, firstName),
      sendInternalWebinarAlert(`${firstName} ${lastName}`, email, country),
    ])

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful. Check your email for confirmation.',
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('[WEBINAR SIGNUP ERROR]', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

// Block non-POST methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
