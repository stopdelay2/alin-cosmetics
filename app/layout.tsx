import type { Metadata } from "next"
import { Alef } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const alef = Alef({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
  variable: "--font-alef",
  display: "swap",
})

export const metadata: Metadata = {
  title: "קוסמטיקאית בקריות | Alin Cosmetics – טיפולי פנים, ניקוי עמוק ופיגמנטציה",
  description: "מחפשת קוסמטיקאית בקריות עם חוות דעת מעולות? Alin Cosmetics מציעה טיפולי פנים מקצועיים לכל סוגי העור, כולל ניקוי עמוק, טיפול באקנה, אנטי אייג'ינג ופיגמנטציה. קוסמטיקאית פרא רפואית בקריות עם ניסיון ושיטות קוסמטיקה מתקדמות.",
  keywords: "קוסמטיקאית מוסמכת, טיפולי פנים, אקנה, רוזציאה, מיקרונידלינג, קריית ים, חיפה",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  alternates: {
    canonical: 'https://www.alincosmetics.com/',
  },
  openGraph: {
    title: "קוסמטיקאית בקריות | Alin Cosmetics – טיפולי פנים, ניקוי עמוק ופיגמנטציה",
    description: "מחפשת קוסמטיקאית בקריות עם חוות דעת מעולות? Alin Cosmetics מציעה טיפולי פנים מקצועיים לכל סוגי העור, כולל ניקוי עמוק, טיפול באקנה, אנטי אייג'ינג ופיגמנטציה.",
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
    <html lang="he" dir="rtl" className={alef.variable}>
      <head>
        {/* Preload hero image for faster FCP */}
        <link
          rel="preload"
          href="/images/main.jpeg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className="antialiased font-alef">
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

        {/* Unified Schema with @graph */}
        <Script id="unified-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BeautySalon",
                "@id": "https://www.alincosmetics.com/#business",
                "name": "Alin Cosmetics",
                "description": "קליניקת טיפולי פנים מקצועיים בקריית ים, המתמחה בעור רגיש ובעייתי: אקנה, רוזציאה, צלקות, פיגמנטציה ואנטי אייג'ינג.",
                "url": "https://www.alincosmetics.com/",
                "image": "https://www.alincosmetics.com/images/1.png",
                "telephone": "+972543175631",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "שדרות ז'בוטינסקי 28",
                  "addressLocality": "קריית ים",
                  "addressRegion": "מחוז חיפה",
                  "postalCode": "29081",
                  "addressCountry": "IL"
                },
                "areaServed": [
                  { "@type": "Place", "name": "קריות" },
                  { "@type": "Place", "name": "חיפה" }
                ],
                "sameAs": [
                  "https://www.instagram.com/alin.cosmetics__",
                  "https://www.youtube.com/@AlinCosmeticsIsrael"
                ],
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "21:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "21:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "21:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "21:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "21:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "15:00" }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://www.alincosmetics.com/#service-acne",
                "name": "טיפול פנים לאקנה ולעור בעייתי",
                "description": "טיפול מקצועי בעור עם אקנה, פצעונים וצלקות שטחיות, כולל ניקוי עמוק, איזון עדין והרגעה.",
                "provider": { "@id": "https://www.alincosmetics.com/#business" }
              },
              {
                "@type": "Service",
                "@id": "https://www.alincosmetics.com/#service-rosacea",
                "name": "טיפול ברוזציאה ואדמומיות",
                "description": "טיפול עדין לעור רגיש עם נטייה לאדמומיות, הרגעה ושיקום מחסום העור.",
                "provider": { "@id": "https://www.alincosmetics.com/#business" }
              },
              {
                "@type": "Service",
                "@id": "https://www.alincosmetics.com/#service-pigmentation",
                "name": "טיפולי פיגמנטציה וכתמי שמש",
                "description": "טיפול ממוקד בפיגמנטציה, כתמי שמש וכתמי אקנה, לשיפור הגוון ואחידות המרקם.",
                "provider": { "@id": "https://www.alincosmetics.com/#business" }
              },
              {
                "@type": "Service",
                "@id": "https://www.alincosmetics.com/#service-antiaging",
                "name": "טיפול אנטי אייג'ינג עדין",
                "description": "טיפולי אנטי אייג'ינג עדינים למיצוק והחזרת זוהר לעור בוגר.",
                "provider": { "@id": "https://www.alincosmetics.com/#business" }
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.alincosmetics.com/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "מחפשות קוסמטיקאית בקריות? מה חשוב לדעת לפני שמתחילים טיפול בעור?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "כשמחפשים קוסמטיקאית באזור הקריות חשוב לבחור מישהי שמבצעת אבחון מדויק של העור שלך, מסבירה כל שלב בטיפול, משתמשת בשיטות מקצועיות ומתאימה טיפול אישי לפי מצב העור."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "איך בנוי טיפול פנים מקצועי בעור הפנים?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "טיפול פנים מקצועי מתחיל באבחון סוג העור, רמת הלחות, מצב הנקבוביות ורגישות. לאחר מכן מבוצעים ניקוי עמוק, פילינג עדין/מתקדם, מסכת טיפול, ושימוש בחומרים פעילים מותאמים."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "אילו טיפולים מתאימים לעור יבש, שמן או רגיש?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "לעור יבש מתאים חידוש ולחות, לעור שמן ניקוי איזון, ולעור רגיש הרגעה וחיזוק מחסום העור – כל טיפול נבחר בהתאם."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.alincosmetics.com/#breadcrumbs",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "דף הבית", "item": "https://www.alincosmetics.com/" }
                ]
              }
            ]
          })}
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
