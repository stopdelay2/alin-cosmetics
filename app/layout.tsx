import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alin Cosmetics | קוסמטיקאית מוסמכת בקריית ים",
  description: "טיפולי פנים מקצועיים ועדינים. מתמחה באקנה, רוזציאה, פיגמנטציה ואנטי אייג'ינג. קריית ים, חיפה והסביבה.",
  keywords: "קוסמטיקאית מוסמכת, טיפולי פנים, אקנה, רוזציאה, מיקרונידלינג, קריית ים, חיפה",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "Alin Cosmetics | קוסמטיקאית מוסמכת בקריית ים",
    description: "טיפולי פנים מקצועיים ועדינים. מתמחה באקנה, רוזציאה, פיגמנטציה ואנטי אייג'ינג.",
    type: "website",
    locale: "he_IL",
    url: 'https://alincosmetics.com',
    images: [
      {
        url: '/images/1.png',
        width: 1200,
        height: 630,
        alt: 'Alin Cosmetics - קוסמטיקאית מוסמכת',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/* Google Ads Pixel */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17738121003"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17738121003');
          `}
        </Script>

        {/* Google Ads WhatsApp Conversion Tracking */}
        <Script id="google-ads-whatsapp-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17738121003/zmGOCPOT2MEbEKv-mIpC',
                  'value': 1.0,
                  'currency': 'ILS',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u7r8okty33");
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2026660301445680');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=2026660301445680&ev=PageView&noscript=1"
          />
        </noscript>

        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
