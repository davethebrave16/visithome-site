import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VisitHome - Your Gateway to Home Solutions',
  description: 'Discover innovative home solutions and services with VisitHome. We provide comprehensive home improvement, maintenance, and design services.',
  keywords: 'home solutions, home improvement, home maintenance, home design, VisitHome',
  authors: [{ name: 'VisitHome Team' }],
  creator: 'VisitHome',
  publisher: 'VisitHome',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://visithome.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VisitHome - Your Gateway to Home Solutions',
    description: 'Discover innovative home solutions and services with VisitHome.',
    url: 'https://visithome.com',
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
    title: 'VisitHome - Your Gateway to Home Solutions',
    description: 'Discover innovative home solutions and services with VisitHome.',
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
