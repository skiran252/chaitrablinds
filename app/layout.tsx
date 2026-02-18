import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chaitra Blinds & Furnishings | Premium Blinds, Curtains & Home Decor in Hyderabad',
  description:
    'Transform your space with custom blinds, curtains, wallpapers, mosquito mesh, invisible grills & home decor. Made-to-measure solutions with expert installation across Hyderabad. 4.9★ rated.',
  keywords: [
    'blinds Hyderabad',
    'curtains Hyderabad',
    'zebra blinds',
    'roller blinds',
    'wallpapers',
    'mosquito mesh doors',
    'invisible grills',
    'home furnishings Hyderabad',
    'window blinds near me',
    'Chaitra Blinds',
  ],
  openGraph: {
    title: 'Chaitra Blinds & Furnishings | Premium Blinds & Furnishing Solutions in Hyderabad',
    description:
      'Custom blinds, curtains, wallpapers & home decor. Made-to-measure with expert installation. 4.9★ rated by 300+ customers.',
    url: 'https://chaitrablinds.com',
    siteName: 'Chaitra Blinds & Furnishings',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaitra Blinds & Furnishings | Premium Blinds & Furnishing Solutions',
    description: 'Custom blinds, curtains, wallpapers & home decor in Hyderabad.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
