import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "המלצות לקוחות | Alin Cosmetics",
  description: "קראו המלצות של נשים שחוו טיפול אצל אלין. תוצאות אמיתיות, חוויות אמיתיות.",
  openGraph: {
    title: "המלצות לקוחות | Alin Cosmetics",
    description: "קראו המלצות של נשים שחוו טיפול אצל אלין. תוצאות אמיתיות, חוויות אמיתיות.",
  },
}

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-100 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800">
              נשים אמיתיות, תוצאות אמיתיות
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              מה שהלקוחות שלי אומרות על החוויה והתוצאות
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-gold-100 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8 space-y-6">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-gold-400 text-gold-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed italic text-lg">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gold-100">
                      <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                        <span className="text-gold-400 font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {testimonial.name}
                        </p>
                        {testimonial.treatment && (
                          <p className="text-sm text-gray-500">
                            {testimonial.treatment}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-playfair font-bold text-gold-400">
                    {stat.number}
                  </div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
              את יכולה להיות הבאה
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              בואי לחוות את השינוי בעור ובביטחון שלך
            </p>
            <Button asChild size="lg">
              <Link href="/contact">קבעי תור עכשיו</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const testimonials = [
  {
    text: "לא האמנתי שיום אחד אצא מהבית בלי מייקאפ. אחרי שנים של מאבק באקנה, אלין הצליחה לתת לי את העור שתמיד חלמתי עליו. היא לא רק מקצועית, היא באמת מקשיבה ומבינה.",
    name: "שרה כהן",
    treatment: "טיפול אקנה",
  },
  {
    text: "אלין פשוט הצילה לי את העור ואת הביטחון שלי. הכתמים שהיו לי בפנים הפכו להיות כמעט בלתי נראים. והכי חשוב - היא עשתה את זה בעדינות ובסבלנות.",
    name: "מיכל לוי",
    treatment: "טיפול פיגמנטציה",
  },
  {
    text: "תחושת רוגע מהכניסה ועד הסוף. מקצועית, נקייה, רגועה. כל טיפול אצל אלין זה כמו מתנה שאני נותנת לעצמי. והתוצאות מדברות בעד עצמן.",
    name: "רונית שלום",
    treatment: "טיפול אנטי אייג'ינג",
  },
  {
    text: "העור שלי תמיד היה רגיש ומגיב לכל דבר. אלין מצאה את השילוב המושלם של חומרים שעובדים בשבילי בלי לגרום לגירוי. סוף סוף מצאתי מישהי שמבינה את העור שלי.",
    name: "דנה אברהם",
    treatment: "טיפול רוזציאה",
  },
  {
    text: "הייתי סקפטית לגבי מיקרונידלינג, אבל אלין הסבירה לי הכל בסבלנות. התוצאות היו מדהימות - הצלקות נעלמו, והעור נראה חלק וזוהר. היא באמת אמנית במה שהיא עושה.",
    name: "יעל מזרחי",
    treatment: "מיקרונידלינג",
  },
  {
    text: "אחרי שנסעתי לקוסמטיקאיות שונות ולא מצאתי את מה שחיפשתי, הגעתי לאלין. מהפעם הראשונה הבנתי שהיא שונה - היא באמת מתעניינת, מקדישה זמן, ולא ממהרת.",
    name: "תמר ביטון",
    treatment: "טיפול פנים מקצועי",
  },
  {
    text: "כל חברות שלי שואלות אותי מה קרה לעור שלי. אני מספרת להן על אלין וכולן רוצות לבוא. זה הטיפול הכי טוב שעשיתי אי פעם, ואני לא עוזבת אותה.",
    name: "נועה גולדשטיין",
    treatment: "טיפול אקנה ופוסט אקנה",
  },
  {
    text: "בגיל 45 חשבתי שהעור שלי לא יכול יותר להשתפר. אלין הוכיחה לי שטעיתי. העור שלי נראה מוצק, זוהר ובריא יותר מתמיד. והיא עושה את זה בעדינות ובאהבה.",
    name: "אורית כהן",
    treatment: "אנטי אייג'ינג",
  },
]

const stats = [
  {
    number: "500+",
    label: "נשים מרוצות",
  },
  {
    number: "5 שנים",
    label: "ניסיון מקצועי",
  },
  {
    number: "100%",
    label: "מחויבות לתוצאות",
  },
]
