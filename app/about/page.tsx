import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Star, Shield, Sparkles, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "אודות אלין קוסמטיקס | Alin Cosmetics",
  description: "קוסמטיקאית מוסמכת בקריית ים. טיפולי פנים מקצועיים עם לב, בסביבה ביתית ושקטה.",
  openGraph: {
    title: "אודות אלין קוסמטיקס | Alin Cosmetics",
    description: "קוסמטיקאית מוסמכת בקריית ים. טיפולי פנים מקצועיים עם לב, בסביבה ביתית ושקטה.",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero - Black Background */}
      <section className="min-h-[70vh] bg-black text-white relative overflow-hidden flex items-center">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-64 h-64 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-white" />
                  <div className="w-3 h-3 bg-gold-400 rounded-full" />
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                  שלום,<br />אני אלין
                </h1>

                <div className="text-xl text-white/80 leading-relaxed space-y-6">
                  <p>
                    קוסמטיקאית מוסמכת שמאמינה שטיפול טוב מתחיל מהקשבה — לעור, לנפש, ולרצון שלך להרגיש שוב טוב עם עצמך.
                  </p>
                  <p>
                    אחרי למעלה מ־8 שנות ניסיון בתחום, פתחתי ב־קריית ים קליניקה אינטימית ושקטה — מקום שבו נשים מרגישות נינוחות, בטוחות, ומקבלות טיפול שבאמת משנה את העור.
                  </p>
                  <p>
                    לא מרפאה גדולה ולא "סלון יופי", אלא מרחב של אמון, מקצועיות והקשבה אמיתית.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative border-2 border-white/20 rounded-none overflow-hidden">
                  <img
                    src="/images/alinalin.jpeg"
                    alt="אלין - קוסמטיקאית מוסמכת"
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-gold-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - White Background */}
      <section className="py-32 bg-white relative">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-black/5 rounded-full" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-black rounded-full" />
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black">
                  הערכים שלי
                </h2>
                <div className="h-px w-20 bg-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 border-2 border-black/10 hover:border-gold-400 transition-all duration-300 space-y-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black group-hover:bg-gold-400 flex items-center justify-center transition-colors">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-black">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-black/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Black Background */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="w-20 h-20 bg-gold-400 rounded-full mx-auto" />

            <h2 className="text-4xl md:text-5xl font-playfair font-bold">
              התמדה, אמון וסבלנות
            </h2>

            <div className="h-px w-32 bg-white mx-auto" />

            <div className="space-y-8 text-xl text-white/80 leading-relaxed">
              <p>
                אני לא מאמינה ב"טיפולי קסם" או בהבטחות מוגזמות. כל עור הוא
                שונה, וצריך זמן, סבלנות וטיפול מותאם.
              </p>
              <p>
                במהלך השנים ראיתי נשים שנכנסות בדמעות ויוצאות מחייכות - לא
                בגלל שעשיתי נס, אלא בגלל שעבדנו ביחד, בהדרגה, בחומרים
                איכוּתיים ועדינים.
              </p>
              <p>
                הקליניקה שלי קטנה, ביתית ושקטה. כאן את לא עוד מספר בתור - את נשמעת,
                נראית, ומקבלת בדיוק את הטיפול שהעור שלך צריך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - White Background */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
                הסמכות והתמחויות
              </h2>
              <div className="h-px w-20 bg-gold-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 border-2 border-black/10 text-center space-y-4 hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-black group-hover:bg-gold-400 flex items-center justify-center mx-auto transition-colors">
                    {cert.icon}
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    {cert.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Black Background */}
      <section className="min-h-[60vh] bg-black text-white relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold">
              רוצה לדעת מה באמת מתאים לעור שלך?
            </h2>
            <div className="h-px w-32 bg-white mx-auto" />
            <p className="text-xl text-white/80 leading-relaxed">
              מוזמנת לשיחת היכרות אישית ללא התחייבות –<br />
              רגע קטן של הקשבה שיכול לשנות הכול.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gold-400 hover:text-white border-0 text-lg px-12 py-6 h-auto mt-8"
            >
              <Link href="/contact">קבעי תור ראשון</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "טיפול מהלב",
    description:
      "כל טיפול מתחיל בהקשבה אמיתית. אני כאן כדי לעזור – לא למכור.",
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "בטיחות לפני הכול",
    description:
      "עובדת רק עם חומרים דרמטולוגיים מאושרים ומוכחים.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "גישה אישית",
    description:
      "כל עור הוא עולם בפני עצמו. לכן אין טיפול אחד שמתאים לכולן.",
  },
  {
    icon: <Star className="w-6 h-6 text-white" />,
    title: "תוצאות אמיתיות",
    description:
      "לא הבטחות שווא – אלא תהליך אמיתי לשיפור העור לאורך זמן.",
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "אמון, סבלנות והתמדה",
    description:
      "שינוי אמיתי מגיע רק מהשילוב הזה, ביחד איתך.",
  },
]

const certifications = [
  {
    icon: <Award className="w-8 h-8 text-white" />,
    text: "קוסמטיקאית מוסמכת",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    text: "התמחות במיקרונידלינג ופילינגים",
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    text: "התמחות בטיפול בעור רגיש",
  },
  {
    icon: <Star className="w-8 h-8 text-white" />,
    text: "קורסי העשרה באקנה ורוזציאה",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    text: "עדכון מתמיד בטכנולוגיות חדשות",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    text: "שנות ניסיון עם מאות לקוחות",
  },
]
