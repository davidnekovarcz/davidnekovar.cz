import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { DAVID_SEO, SEOHelpers } from '@/lib/seo';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: DAVID_SEO.title,
  description: DAVID_SEO.description,
  keywords: DAVID_SEO.keywords,
  authors: [{ name: DAVID_SEO.author, url: "https://github.com/davidnekovarcz" }],
  creator: DAVID_SEO.creator,
  publisher: DAVID_SEO.publisher,
  metadataBase: new URL(DAVID_SEO.url),
  alternates: {
    canonical: DAVID_SEO.canonical,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DAVID_SEO.url,
    siteName: DAVID_SEO.siteName,
    title: DAVID_SEO.title,
    description: DAVID_SEO.description,
    images: [
      {
        url: DAVID_SEO.ogImage,
        width: 1200,
        height: 630,
        alt: "David Nekovar - Full-Stack Developer Portfolio",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: DAVID_SEO.twitter.site,
    creator: DAVID_SEO.twitter.creator,
    title: DAVID_SEO.title,
    description: DAVID_SEO.description,
    images: [DAVID_SEO.twitterImage],
  },
  verification: {
    google: DAVID_SEO.googleVerification,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = SEOHelpers.generateStructuredData(DAVID_SEO);

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white antialiased">
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
            
            // Global GA event tracking function
            window.trackEvent = function(eventName, parameters = {}) {
              if (typeof gtag !== 'undefined') {
                gtag('event', eventName, parameters);
                console.log('GA Event tracked:', eventName, parameters);
              } else {
                console.warn('gtag not available for event:', eventName);
              }
            };
            
            // Test GA on page load
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href
            });
          `}
        </Script>
      </body>
    </html>
  );
}
