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
    default: 'TradingOctopus - Financial Market Data & Analysis',
    template: '%s | TradingOctopus',
  },
  description:
    'Professional financial market data aggregation and analysis platform. ' +
    'Multi-source data from NASDAQ, NYSE, XETRA and more.',
  keywords: [
    'financial data',
    'market analysis',
    'stock market',
    'OHLCV',
    'trading',
    'NASDAQ',
    'NYSE',
    'XETRA',
  ],
  authors: [{ name: 'TradingOctopus' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tradingoctopus.com',
    siteName: 'TradingOctopus',
    title: 'TradingOctopus - Financial Market Data & Analysis',
    description:
      'Professional financial market data aggregation and analysis platform. ' +
      'Multi-source data from NASDAQ, NYSE, XETRA and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradingOctopus - Financial Market Data & Analysis',
    description:
      'Professional financial market data aggregation and analysis platform.',
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
