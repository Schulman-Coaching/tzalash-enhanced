import './globals.css'
import type { Metadata, Viewport } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Tzalash | Supporting IDF Soldiers Spiritually',
  description: 'Tzalash strengthens the spiritual lives of IDF soldiers through Torah study, base visits, and comprehensive support programs. Join us in supporting those who defend Israel.',
  keywords: ['Tzalash', 'IDF', 'Israel Defense Forces', 'Torah', 'Jewish soldiers', 'Israel', 'support soldiers'],
  openGraph: {
    title: 'Tzalash | Supporting IDF Soldiers Spiritually',
    description: 'Strengthening the spiritual lives of IDF soldiers through Torah study and support programs.',
    type: 'website',
    siteName: 'Tzalash',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-tzalash-cream">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
