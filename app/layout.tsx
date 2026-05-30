// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Àgbàr Life Care — Africa\'s Premier Geriatric Care Ecosystem',
  description:
    'Àgbàr Life Care bridges the gap between your elderly parents in Nigeria and your family across the globe — with culturally sensitive, evidence-based geriatric care.',
  keywords: [
    'geriatric care Nigeria',
    'elderly care Benin City',
    'diaspora care Nigeria',
    'home care Nigeria',
    'Agbar Life Care',
  ],
  openGraph: {
    title: 'Àgbàr Life Care',
    description: 'Dignified care, across every border.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#1a1a14',
              color: '#faf7f0',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              borderRadius: '2px',
              padding: '14px 20px',
            },
            success: {
              iconTheme: { primary: '#4e7a35', secondary: '#faf7f0' },
            },
            error: {
              iconTheme: { primary: '#c45e1e', secondary: '#faf7f0' },
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
