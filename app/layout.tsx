import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Indosphare Export — Premium Dehydrated Onion & Garlic Exporter from India',
  description: 'Indosphare Export delivers premium quality dehydrated onions, garlic, and processed agro commodities. FSSAI, APEDA & GST certified. Serving importers and wholesalers worldwide.',
  keywords: 'dehydrated onion exporter india, garlic powder supplier, agro export india, APEDA certified exporter',
  openGraph: {
    title: 'Indosphare Export — Premium Agro Export from India',
    description: 'Premium dehydrated onions, garlic, and spices exported worldwide. FSSAI, APEDA, IEC, GST certified.',
    url: 'https://www.indosphareexport.com',
    siteName: 'Indosphare Export',
    images: [{ url: '/images/hero.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&family=Montserrat:wght@700;800;900&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DE96V9BY39"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DE96V9BY39');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}