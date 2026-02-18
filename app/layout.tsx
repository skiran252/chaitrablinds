import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import StructuredData from '@/components/structured-data'
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

const siteUrl = 'https://chaitrablinds.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Chaitra Blinds & Furnishings | Premium Blinds, Curtains & Home Decor in Hyderabad',
    template: '%s | Chaitra Blinds & Furnishings',
  },
  description:
    'Transform your space with custom blinds, curtains, wallpapers, mosquito mesh, invisible grills & home decor. Made-to-measure solutions with expert installation across Hyderabad. 4.9★ rated by 300+ customers. Free site visit.',
  keywords: [
    'blinds Hyderabad',
    'curtains Hyderabad',
    'roller blinds Hyderabad',
    'zebra blinds Hyderabad',
    'wooden blinds Hyderabad',
    'venetian blinds',
    'blackout blinds',
    'motorized blinds',
    'custom curtains Hyderabad',
    'wallpapers Hyderabad',
    'wallpaper installation',
    'mosquito mesh doors',
    'mosquito mesh windows',
    'invisible grills Hyderabad',
    'balcony safety grills',
    'home furnishings Hyderabad',
    'home decor Hyderabad',
    'blinds near me',
    'curtains near me',
    'blinds for balcony',
    'blinds for open spaces',
    'best blinds shop Hyderabad',
    'Chaitra Blinds',
    'window blinds installation Hyderabad',
    'office blinds Hyderabad',
    'blinds Gachibowli',
    'blinds Kondapur',
    'blinds Kukatpally',
    'blinds Banjara Hills',
    'blinds Hitech City',
    'blinds Madhapur',
    'blinds Miyapur',
    'blinds Secunderabad',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Chaitra Blinds & Furnishings | Premium Blinds, Curtains & Home Decor in Hyderabad',
    description:
      'Custom blinds, curtains, wallpapers & home decor. Made-to-measure with expert installation. 4.9★ rated by 300+ customers. Free site visit & measurement.',
    url: siteUrl,
    siteName: 'Chaitra Blinds & Furnishings',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Chaitra Blinds & Furnishings — Premium custom blinds and home decor in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaitra Blinds & Furnishings | Premium Blinds & Home Decor in Hyderabad',
    description:
      'Custom blinds, curtains, wallpapers & home decor in Hyderabad. Free site visit. 4.9★ rated.',
    images: ['/images/hero.png'],
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
    google: 'googlea723fff6cbf9000a',
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
  category: 'Home Furnishings',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.385;78.4867" />
        <meta name="ICBM" content="17.385, 78.4867" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
