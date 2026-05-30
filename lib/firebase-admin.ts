// lib/firebase-admin.ts
// Server-side only — used inside API routes (app/api/*)
// NEVER import this in client components

import * as admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      // Vercel stores multiline env vars as escaped \n — this fixes that
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  })
}

export const adminDb = admin.firestore()
export const adminAuth = admin.auth()
export default admin
