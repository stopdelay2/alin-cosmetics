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

        {/* LocalBusiness Schema */}
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Alin Cosmetics",
            "alternateName": "אלין קוסמטיקס",
            "description": "קליניקת טיפולי פנים מקצועית בקריית ים. מתמחים באקנה, רוזציאה, פיגמנטציה, אנטי אייג'ינג ומיקרונידלינג.",
            "image": "https://alincosmetics.com/images/logo.png",
            "logo": "https://alincosmetics.com/images/logo.png",
            "@id": "https://alincosmetics.com",
            "url": "https://alincosmetics.com",
            "telephone": "+972-54-317-5631",
            "email": "alincosmeticsglow@gmail.com",
            "priceRange": "₪₪",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "שדרות ז'בוטינסקי 28",
              "addressLocality": "קריית ים",
              "addressRegion": "חיפה",
              "postalCode": "2920028",
              "addressCountry": "IL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.8425",
              "longitude": "35.0669"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:00",
                "closes": "21:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "08:00",
                "closes": "15:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "09:00",
                "closes": "21:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "50"
            },
            "founder": {
              "@type": "Person",
              "name": "Alin Rudenko",
              "jobTitle": "קוסמטיקאית מוסמכת",
              "sameAs": [
                "https://instagram.com/alin.cosmetics__",
                "https://www.youtube.com/@AlinCosmeticsIsrael"
              ]
            },
            "paymentAccepted": "Cash, Credit Card, Bit",
            "currenciesAccepted": "ILS",
            "areaServed": {
              "@type": "City",
              "name": "קריות"
            },
            "serviceArea": [
              {
                "@type": "City",
                "name": "קריית ים"
              },
              {
                "@type": "City",
                "name": "קריית ביאליק"
              },
              {
                "@type": "City",
                "name": "קריית מוצקין"
              },
              {
                "@type": "City",
                "name": "חיפה"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "טיפולי פנים",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "טיפול באקנה ועור מגורה",
                    "description": "טיפול מקצועי לעור אקנתי ומגורה, כולל ניקוי עמוק ומוצרים מקצועיים"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "טיפול רוזציאה ואדמומיות",
                    "description": "טיפול מיוחד לעור רגיש עם רוזציאה ואדמומיות"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "טיפול פיגמנטציה וכתמי שמש",
                    "description": "טיפול להבהרת כתמים ואיחוד גוון העור"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "מיקרונידלינג",
                    "description": "טיפול מתקדם לחידוש העור ושיפור מרקם"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "אנטי אייג'ינג",
                    "description": "טיפולים נגד הזדקנות העור ומיצוק"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "פוטותרפיה",
                    "description": "טיפול באור לשיפור מרקם העור"
                  }
                }
              ]
            }
          })}
        </Script>

        {/* Organization Schema */}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alin Cosmetics",
            "alternateName": "אלין קוסמטיקס",
            "url": "https://alincosmetics.com",
            "logo": "https://alincosmetics.com/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+972-54-317-5631",
              "contactType": "customer service",
              "areaServed": "IL",
              "availableLanguage": ["Hebrew", "Russian"]
            },
            "sameAs": [
              "https://instagram.com/alin.cosmetics__",
              "https://www.youtube.com/@AlinCosmeticsIsrael"
            ],
            "foundingDate": "2024-10",
            "founder": {
              "@type": "Person",
              "name": "Alin Rudenko"
            }
          })}
        </Script>

        {/* Person Schema - Alin Rudenko */}
        <Script id="person-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alin Rudenko",
            "alternateName": "אלין רודנקו",
            "jobTitle": "קוסמטיקאית מוסמכת",
            "description": "קוסמטיקאית מקצועית עם ניסיון של מעל 8 שנים בטיפולי פנים, מתמחה בעור רגיש ובעייתי",
            "worksFor": {
              "@type": "Organization",
              "name": "Alin Cosmetics"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "קריית ים",
              "addressCountry": "IL"
            },
            "sameAs": [
              "https://instagram.com/alin.cosmetics__",
              "https://www.youtube.com/@AlinCosmeticsIsrael"
            ],
            "knowsAbout": [
              "טיפולי פנים",
              "קוסמטיקה פרא רפואית",
              "טיפול באקנה",
              "רוזציאה",
              "פיגמנטציה",
              "מיקרונידלינג",
              "אנטי אייג'ינג"
            ]
          })}
        </Script>

        {/* BreadcrumbList Schema */}
        <Script id="breadcrumb-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "בית",
                "item": "https://alincosmetics.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "טיפולים",
                "item": "https://alincosmetics.com/treatments"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "אודות",
                "item": "https://alincosmetics.com/about"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "המלצות",
                "item": "https://alincosmetics.com/testimonials"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "גלריה",
                "item": "https://alincosmetics.com/gallery"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "צור קשר",
                "item": "https://alincosmetics.com/contact"
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
