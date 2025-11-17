import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
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
  openGraph: {
    title: "Alin Cosmetics | קוסמטיקאית רפואית בקריית ים",
    description: "טיפולי פנים מקצועיים ועדינים. מתמחה באקנה, רוזציאה, פיגמנטציה ואנטי אייג'ינג.",
    type: "website",
    locale: "he_IL",
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
