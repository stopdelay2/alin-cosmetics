import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Shield, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "אודות אלין | Alin Cosmetics",
  description: "קוסמטיקאית רפואית מוסמכת בקריית ים. טיפולי פנים מקצועיים עם לב, בסביבה ביתית ושקטה.",
  openGraph: {
    title: "אודות אלין | Alin Cosmetics",
    description: "קוסמטיקאית רפואית מוסמכת בקריית ים. טיפולי פנים מקצועיים עם לב, בסביבה ביתית ושקטה.",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-100 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800">
                  שלום, אני אלין
                </h1>
                <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>
                    קוסמטיקאית רפואית מוסמכת עם תשוקה אמיתית לטיפול בעור.
                  </p>
                  <p>
                    אחרי שנים בתחום החלטתי לפתוח מקום קטן וביתי בקריית ים, מקום
                    שבו נשים ירגישו נינוחות, בטוחות, ורואות שינוי אמיתי בעור.
                  </p>
                  <p>
                    אני מאמינה שטיפול טוב מתחיל מהלב - והתוצאה היא לא רק עור
                    בריא, אלא ביטחון חדש.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-gold-100 to-cream-100 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500">תמונת אלין</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 text-center mb-12">
              הערכים שלי
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="border-gold-100 bg-cream-50">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-playfair font-semibold text-gray-800">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
              הגישה שלי
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="italic">
                "אם זה לא טוב לעור שלך - זה לא ייכנס לפנים שלך."
              </p>
              <p>
                אני לא מאמינה ב"טיפולים קסם" או בהבטחות מוגזמות. כל עור הוא
                שונה, וצריך זמן, סבלנות וטיפול מותאם.
              </p>
              <p>
                במהלך השנים ראיתי נשים שנכנסות בדמעות ויוצאות מחייכות - לא
                בגלל שעשיתי נס, אלא בגלל שעבדנו ביחד, בהדרגה, בחומרים
                איכוּתיים ועדינים.
              </p>
              <p>
                הסטודיו שלי קטן, ביתי ושקט. כאן את לא עוד מספר בתור - את נשמעת,
                נראית, ומקבלת בדיוק את הטיפול שהעור שלך צריך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-gray-800 text-center mb-12">
              הסמכות והתמחויות
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-gold-100 text-center">
                  <CardContent className="p-6 space-y-2">
                    <div className="text-2xl mb-2">{cert.icon}</div>
                    <p className="text-sm text-gray-700 font-medium">
                      {cert.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-cream-50 to-gold-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
              בואי נכיר
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              מוזמנת לשיחת היכרות חינם או לקבוע תור לטיפול ראשון
            </p>
            <Button asChild size="lg">
              <Link href="/contact">צרי קשר</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    icon: <Heart className="w-6 h-6 text-gold-400" />,
    title: "טיפול מהלב",
    description:
      "כל טיפול מתחיל מהקשבה אמיתית לצרכים שלך. אני כאן כדי לעזור, לא למכור.",
  },
  {
    icon: <Shield className="w-6 h-6 text-gold-400" />,
    title: "בטיחות ראשונה",
    description:
      "רק חומרים דרמטולוגיים איכותיים ומוכחים. לא מתפשרת על העור שלך.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-gold-400" />,
    title: "גישה אישית",
    description:
      "אין שני סוגי עור זהים. כל טיפול מותאם במיוחד עבורך ועבור מצב העור שלך.",
  },
  {
    icon: <Star className="w-6 h-6 text-gold-400" />,
    title: "תוצאות אמיתיות",
    description:
      "לא מבטיחה ניסים, אבל מבטיחה עבודה מסורה לשיפור העור שלך לאורך זמן.",
  },
]

const certifications = [
  {
    icon: "🎓",
    text: "קוסמטיקאית רפואית מוסמכת",
  },
  {
    icon: "💉",
    text: "התמחות במיקרונידלינג ופילינגים",
  },
  {
    icon: "🌸",
    text: "התמחות בטיפול בעור רגיש",
  },
  {
    icon: "✨",
    text: "קורסי העשרה באקנה ורוזציאה",
  },
  {
    icon: "🔬",
    text: "עדכון מתמיד בטכנולוגיות חדשות",
  },
  {
    icon: "💚",
    text: "שנות ניסיון עם מאות לקוחות",
  },
]
