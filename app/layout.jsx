import "./globals.css"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "../components/Themeprovider"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Utilities - 20+ Free Online Tools | Text, Image, Calculators & Security",
  description:
    "Access 20+ free online tools for text processing, image conversion, financial calculations, and security encoding. Fast, accurate, and secure. No registration needed.",
  keywords: [
    "free online tools",
    "word counter",
    "text counter",
    "character counter",
    "HTML formatter",
    "CSS minifier",
    "JavaScript minifier",
    "image resizer",
    "image converter",
    "GST calculator",
    "loan calculator",
    "salary calculator",
    "Base64 encoder",
    "URL encoder",
    "QR code generator",
    "UUID generator",
    "hash generator",
    "password generator",
    "regex tester",
    "online utilities",
  ].join(", "),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Utilities" }],
  creator: "Utilities",
  publisher: "Utilities",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "Utilities - Free Online Tools Suite",
    description: "20+ powerful free tools for text, images, calculations, and security. All in one place.",
    url: "https://Utilities.app",
    siteName: "Utilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utilities - Free Online Tools",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utilities - Free Online Tools",
    description: "20+ powerful free online tools for productivity",
    images: ["/og-image.png"],
    creator: "@Utilities",
  },
  alternates: {
    canonical: "https://Utilities.app",
  },
    generator: 'Utilities.app'
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://Utilities.app" />
        <link rel="alternate" hrefLang="en" href="https://Utilities.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Utilities" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Utilities",
              url: "https://Utilities.app",
              description: "Free online tools for text, image, calculation, and security utilities",
              applicationCategory: "UtilityApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Utilities",
                url: "https://Utilities.app",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1000",
              },
            }),
          }}
        />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://api.qrserver.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID" strategy="lazyOnload" />
        <Script
          id="ga-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID');
            `,
          }}
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
