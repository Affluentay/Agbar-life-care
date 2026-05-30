import * as admin from 'firebase-admin'

function getAdminApp() {
  if (admin.apps.length) return admin.apps[0]!
  
  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  })
}

export const adminDb = () => admin.firestore(getAdminApp())
export const adminAuth = () => admin.auth(getAdminApp())
export default getAdminApp