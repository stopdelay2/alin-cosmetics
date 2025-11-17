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
  title: "Alin Cosmetics | קוסמטיקאית רפואית בקריית ים",
  description: "טיפולי פנים מקצועיים ועדינים. מתמחה באקנה, רוזציאה, פיגמנטציה ואנטי אייג'ינג. קריית ים, חיפה והסביבה.",
  keywords: "קוסמטיקאית רפואית, טיפולי פנים, אקנה, רוזציאה, מיקרונידלינג, קריית ים, חיפה",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "Alin Cosmetics | קוסמטיקאית רפואית בקריית ים",
    description: "טיפולי פנים מקצועיים ועדינים. מתמחה באקנה, רוזציאה, פיגמנטציה ואנטי אייג'ינג.",
    type: "website",
    locale: "he_IL",
    images: ['/images/logo.png'],
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
