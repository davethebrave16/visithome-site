import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VisitHome - The Future of Open House Events',
  description: 'VisitHome is the ultimate app for real estate professionals to create, manage, and optimize Open House events. Streamline your workflow and maximize property showings.',
  keywords: 'real estate, open house, property management, real estate app, property showings, real estate professionals, VisitHome',
  authors: [{ name: 'VisitHome Team' }],
  creator: 'VisitHome',
  publisher: 'VisitHome',
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
    title: 'VisitHome - The Future of Open House Events',
    description: 'The ultimate app for real estate professionals to create, manage, and optimize Open House events.',
    url: 'https://visithome.it',
    siteName: 'VisitHome',
    images: [
      {
        url: '/VisitHome__03_Badge_Gradient.png',
        width: 1200,
        height: 630,
        alt: 'VisitHome Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisitHome - The Future of Open House Events',
    description: 'The ultimate app for real estate professionals to create, manage, and optimize Open House events.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
