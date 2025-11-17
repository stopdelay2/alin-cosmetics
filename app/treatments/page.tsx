import { Metadata } from "next"
import Link from "next/link"
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
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-100 to-white py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold-100 rounded-full opacity-20 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="h-px w-20 bg-gold-300 mb-6 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800">
              כל עור הוא עולם<br />לכן גם הטיפול שלך אישי
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              כל טיפול מותאם במיוחד לסוג העור שלך, למצבו ולמטרות שלך
            </p>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {treatments.map((treatment, index) => (
              <div key={treatment.title}>
                {index > 0 && <Separator className="my-12" />}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1">
                    {/* Icon circle */}
                    <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mb-6">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-gold-400" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-2">
                      {treatment.title}
                    </h2>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed italic border-r-2 border-gold-200 pr-4">
                      {treatment.quote}
                    </p>
                    <div className="space-y-3 pt-4">
                      {treatment.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                          <p className="text-gray-600">{benefit}</p>
                        </div>
                      ))}
                    </div>
                    {treatment.suitable && (
                      <Card className="bg-cream-50 border-gold-100 mt-6">
                        <CardContent className="p-4">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">מתאים ל:</span>{" "}
                            {treatment.suitable}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-cream-50 to-gold-100 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-24 h-24 border border-gold-200 rounded-full opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="h-px w-20 bg-gold-400 mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
              לא בטוחה איזה טיפול מתאים לך?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
              בואי נדבר. אני כאן כדי לעזור לך למצוא את הטיפול המושלם לעור שלך
            </p>
            <Button asChild size="lg">
              <Link href="/contact">דברי איתי לבדוק איזה טיפול מתאים לך</Link>
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
  },
]
