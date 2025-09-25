import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'visithome - L\'Open House Experience 3.0 | App Immobiliare',
  description: 'visithome digitalizza e semplifica ogni Open House. Per agenzie immobiliari e chi cerca casa. Prenotazioni smart, check-in digitale, lead qualificati nel CRM.',
  keywords: 'visithome, open house, immobiliare, agenzie immobiliari, cercare casa, prenotazioni immobiliari, app immobiliare, check-in digitale, lead qualificati, CRM immobiliare, eventi immobiliari, visite casa, app casa, ricerca immobiliare',
  authors: [{ name: 'visithome Team' }],
  creator: 'visithome',
  publisher: 'visithome',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://visithome.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'visithome - L\'Open House Experience 3.0',
    description: 'L\'app che digitalizza e semplifica ogni Open House. Per agenzie immobiliari e chi cerca casa. Prenotazioni smart, check-in digitale, lead qualificati.',
    url: 'https://visithome.it',
    siteName: 'visithome',
    images: [
      {
        url: '/VisitHome__03_Badge_Gradient.png',
        width: 1200,
        height: 630,
        alt: 'visithome - L\'Open House Experience digitale',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'visithome - L\'Open House Experience 3.0',
    description: 'L\'app che digitalizza e semplifica ogni Open House. Prenotazioni smart, check-in digitale, lead qualificati.',
    images: ['/VisitHome__03_Badge_Gradient.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
