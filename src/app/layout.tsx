import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'TradingOctopus - Financial Data Aggregation & Analysis',
    template: '%s | TradingOctopus',
  },
  description:
    'A personal project by Dr. Florian Drechsler for financial data aggregation, ' +
    'backtesting, and market analysis across NASDAQ, NYSE, XETRA and more.',
  keywords: [
    'financial data',
    'market analysis',
    'stock market',
    'OHLCV',
    'backtesting',
    'NASDAQ',
    'NYSE',
    'XETRA',
  ],
  authors: [{ name: 'Dr. Florian Drechsler', url: 'https://fdrechsler.de' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tradingoctopus.com',
    siteName: 'TradingOctopus',
    title: 'TradingOctopus - Financial Data Aggregation & Analysis',
    description:
      'A personal project by Dr. Florian Drechsler for financial data aggregation, ' +
      'backtesting, and market analysis across NASDAQ, NYSE, XETRA and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradingOctopus - Financial Data Aggregation & Analysis',
    description:
      'A personal project for financial data aggregation, backtesting, and market analysis.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://tradingoctopus.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  )
}
