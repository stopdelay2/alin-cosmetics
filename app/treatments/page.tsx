import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "טיפולי פנים מקצועיים | Alin Cosmetics",
  description: "טיפולים מותאמים אישית לכל סוג עור: אקנה, פיגמנטציה, אנטי אייג'ינג, רוזציאה ומיקרונידלינג. קריית ים, חיפה והסביבה.",
  openGraph: {
    title: "טיפולי פנים מקצועיים | Alin Cosmetics",
    description: "טיפולים מותאמים אישית לכל סוג עור: אקנה, פיגמנטציה, אנטי אייג'ינג, רוזציאה ומיקרונידלינג.",
  },
}

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero - Minimalist Black */}
      <section className="min-h-[60vh] bg-black text-white relative overflow-hidden flex items-center justify-center">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/10 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-white" />
              <div className="w-3 h-3 bg-gold-400 rounded-full" />
              <div className="h-px w-16 bg-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              כל עור הוא עולם<br />לכן גם הטיפול שלך אישי
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              כל טיפול מותאם במיוחד לסוג העור שלך, למצבו ולמטרות שלך<br />
              <span className="text-lg text-white/70">במכשור מתקדם, בקליניקה חדשה ונקייה בקריית ים</span>
            </p>
          </div>
        </div>
      </section>

      {/* Treatments - White Background */}
      <section className="py-32 bg-white relative">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-black/5 rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto space-y-20">
            {treatments.map((treatment, index) => (
              <div key={treatment.title} className="space-y-8">
                {index > 0 && (
                  <div className="h-px bg-black/10 my-16" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-96 overflow-hidden rounded-none border-2 border-black/10">
                    {treatment.image && (
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                        priority={index === 0}
                        className="object-cover"
                      />
                    )}
                    {/* Number circle overlay */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-black mb-4">
                        {treatment.title}
                      </h2>
                      <div className="h-px w-12 bg-gold-400 mb-6" />
                    </div>

                    <p className="text-xl text-black/80 leading-relaxed italic">
                      {treatment.quote}
                    </p>

                    <div className="space-y-4 pt-4">
                      {treatment.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-gold-400 mt-2.5 flex-shrink-0" />
                          <p className="text-black/70 leading-relaxed">{benefit}</p>
                        </div>
                      ))}
                    </div>

                    {treatment.suitable && (
                      <div className="mt-6 p-6 border-2 border-black/10 rounded-none">
                        <p className="text-sm text-black/70">
                          <span className="font-bold text-black">מתאים ל: </span>
                          {treatment.suitable}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Black Background */}
      <section className="min-h-[60vh] bg-black text-white relative overflow-hidden flex items-center justify-center">
        {/* Huge decorative circles */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="w-20 h-20 bg-gold-400 rounded-full mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              לא בטוחה איזה טיפול<br />מתאים לך?
            </h2>
            <div className="h-px w-32 bg-white mx-auto" />
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
              בואי נדבר. אני כאן כדי לעזור לך למצוא את הטיפול המושלם לעור שלך
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gold-400 hover:text-white border-0 text-lg px-12 py-6 h-auto mt-8"
            >
              <Link href="/contact">צרי קשר</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const treatments = [
  {
    title: "אקנה",
    quote: "נחזיר לעור שלך שקט. טיפול עדין, שמנקה בלי לייבש ומאזן בלי להכאיב.",
    benefits: [
      "ניקוי עמוק עדין של הנקבוביות",
      "איזון ייצור שומן ללא יובש",
      "טיפול בדלקות וסימני אקנה קיימים",
      "מניעה של הופעת אקנה חדשה",
      "חומרים דרמטולוגיים מותאמים",
    ],
    suitable: "עור שמני, מעורב, נוטה לפצעונים ודלקות",
    image: "/images/2.png",
  },
  {
    title: "רוזציאה",
    quote: "אם העור שלך מגיב לכל דבר זה המקום להרגיע אותו.",
    benefits: [
      "הקלה על אדמומיות כרונית",
      "הרגעת עור רגיש ומגורה",
      "חיזוק מחסום העור",
      "הפחתת תגובתיות יתר",
      "טיפול בחומרים עדינים ומיוחדים",
    ],
    suitable: "עור רגיש, רוזציאה, אדמומיות כרונית, עור מגרה",
    image: "/images/roza.jpeg",
  },
  {
    title: "צלקות וכתמים",
    quote: "כתמים לא צריכים להיות חלק ממך. נעבוד בהדרגה ובסבלנות עד שתראי שינוי.",
    benefits: [
      "הפחתת צלקות ופוסט אקנה",
      "שיפור מרקם העור",
      "טיפול בכתמים כהים",
      "איחוד גוון העור",
      "החזרת חלקות לעור",
    ],
    suitable: "צלקות, פוסט אקנה, כתמים, מרקם לא אחיד",
    image: "/images/postakna.jpeg",
  },
  {
    title: "אנטי אייג'ינג",
    quote: "אין גיל לזוהר. מיצוק, לחות והחזרת הברק בלי חומרים קיצוניים.",
    benefits: [
      "מיצוק והידוק העור",
      "הפחתת קמטים וקווי הבעה",
      "שיפור אלסטיות העור",
      "החזרת לחות ועשירות לעור",
      "זוהר טבעי וגוון אחיד",
    ],
    suitable: "עור בוגר, יבש, עור עם קמטים וסימני הזדקנות",
    image: "/images/anti.jpeg",
  },
  {
    title: "מיקרונידלינג מבוקר",
    quote: "טיפול מתקדם לעור עייף וצלקתי, עם יד עדינה ותוצאה שמרגישים.",
    benefits: [
      "שיפור מרקם העור",
      "הפחתת צלקות ופוסט אקנה",
      "עידוד ייצור קולגן טבעי",
      "שיפור ספיגת תכשירים",
      "תוצאות ניכרות ומצטברות",
    ],
    suitable: "צלקות, נקבוביות מורחבות, מרקם לא אחיד, עור עייף",
    image: "/images/microble.jpeg",
  },
  {
    title: "פוטותרפיה",
    quote: "טיפול באור לשיפור מרקם העור, הפחתת אדמומיות וטיפול באקנה.",
    benefits: [
      "הפחתת אדמומיות ודלקות",
      "טיפול באקנה פעילה",
      "שיפור מרקם ואיכות העור",
      "הקטנת נקבוביות",
      "איחוד גוון העור",
    ],
    suitable: "אקנה, אדמומיות, עור שמני, נזקי שמש",
    image: "/images/phototerapi.jpeg",
  },
  {
    title: "פיגמנטציה",
    quote: "כתמים לא צריכים להיות חלק ממך. נעבוד בהדרגה ובסבלנות עד שתראי שינוי.",
    benefits: [
      "הבהרת כתמים קיימים בהדרגה",
      "איחוד גוון העור",
      "טיפול עדין בהיפרפיגמנטציה",
      "מניעת היווצרות כתמים חדשים",
      "שיפור מרקם ומראה העור",
    ],
    suitable: "כתמי עור, מלזמה, היפרפיגמנטציה, כתמי שמש",
    image: "/images/pegment.jpeg",
  },
]
