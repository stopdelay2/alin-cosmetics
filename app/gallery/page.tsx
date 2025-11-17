import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "גלריית תוצאות | Alin Cosmetics",
  description: "תמונות לפני ואחרי של טיפולי פנים אמיתיים. תוצאות ללא פילטרים עם תאורה טבעית.",
  openGraph: {
    title: "גלריית תוצאות | Alin Cosmetics",
    description: "תמונות לפני ואחרי של טיפולי פנים אמיתיים. תוצאות ללא פילטרים עם תאורה טבעית.",
  },
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-100 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800">
              תוצאות של נשים שבחרו בעצמן
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              אין פילטרים, אין קסמים - רק תהליך אמיתי ותוצאה שנשארת
            </p>
            <div className="inline-flex items-center gap-2 bg-gold-100 px-6 py-3 rounded-full">
              <span className="text-sm text-gray-700">
                כל התמונות בתאורה טבעית, ללא עריכה
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 bg-cream-50">
                <TabsTrigger value="all">הכל</TabsTrigger>
                <TabsTrigger value="acne">אקנה</TabsTrigger>
                <TabsTrigger value="pigmentation">פיגמנטציה</TabsTrigger>
                <TabsTrigger value="antiaging">אנטי אייג׳ינג</TabsTrigger>
                <TabsTrigger value="rosacea">רוזציאה</TabsTrigger>
                <TabsTrigger value="microneedling">מיקרונידלינג</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                <GalleryGrid items={allGalleryItems} />
              </TabsContent>

              <TabsContent value="acne" className="space-y-8">
                <GalleryGrid
                  items={allGalleryItems.filter((item) => item.category === "acne")}
                />
              </TabsContent>

              <TabsContent value="pigmentation" className="space-y-8">
                <GalleryGrid
                  items={allGalleryItems.filter(
                    (item) => item.category === "pigmentation"
                  )}
                />
              </TabsContent>

              <TabsContent value="antiaging" className="space-y-8">
                <GalleryGrid
                  items={allGalleryItems.filter(
                    (item) => item.category === "antiaging"
                  )}
                />
              </TabsContent>

              <TabsContent value="rosacea" className="space-y-8">
                <GalleryGrid
                  items={allGalleryItems.filter(
                    (item) => item.category === "rosacea"
                  )}
                />
              </TabsContent>

              <TabsContent value="microneedling" className="space-y-8">
                <GalleryGrid
                  items={allGalleryItems.filter(
                    (item) => item.category === "microneedling"
                  )}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-12 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              התמונות מוצגות באישור הלקוחות. התוצאות עשויות להשתנות בין אדם לאדם
              ותלויות במצב העור ההתחלתי, בעקביות הטיפולים ובשמירה על הוראות
              הטיפול הביתי.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
              גם את יכולה לראות שינוי
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              בואי נתחיל את המסע שלך לעור בריא וזוהר
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">קבעי תור לטיפול</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/treatments">למידע על הטיפולים</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function GalleryGrid({ items }: { items: typeof allGalleryItems }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">אין תמונות בקטגוריה זו כרגע</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card
          key={item.id}
          className="border-gold-100 hover:shadow-lg transition-all duration-300"
        >
          <CardContent className="p-0 space-y-4">
            <div className="grid grid-cols-2 gap-2 p-2">
              <div className="space-y-2">
                <div className="aspect-square bg-gradient-to-br from-cream-100 to-gold-100 rounded-lg flex items-center justify-center">
                  <p className="text-xs text-gray-500">לפני</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="aspect-square bg-gradient-to-br from-gold-100 to-cream-100 rounded-lg flex items-center justify-center">
                  <p className="text-xs text-gray-500">אחרי</p>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 space-y-2">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              {item.treatments && (
                <p className="text-xs text-gray-500">
                  {item.treatments} טיפולים
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const allGalleryItems = [
  {
    id: 1,
    category: "acne",
    title: "שיפור באקנה דלקתית",
    description: "הפחתה משמעותית בפצעונות ואדמומיות",
    treatments: "6",
  },
  {
    id: 2,
    category: "acne",
    title: "אקנה וצלקות פוסט אקנה",
    description: "שיפור במרקם העור והפחתת צלקות",
    treatments: "8",
  },
  {
    id: 3,
    category: "pigmentation",
    title: "הבהרת כתמי עור",
    description: "איחוד גוון והבהרת היפרפיגמנטציה",
    treatments: "10",
  },
  {
    id: 4,
    category: "pigmentation",
    title: "מלזמה ופיגמנטציה",
    description: "שיפור ניכר בכתמים כהים",
    treatments: "12",
  },
  {
    id: 5,
    category: "antiaging",
    title: "מיצוק ואנטי אייג'ינג",
    description: "הפחתת קמטים ושיפור מוצקות",
    treatments: "8",
  },
  {
    id: 6,
    category: "antiaging",
    title: "עור בוגר - החייאה",
    description: "זוהר, מוצקות ולחות",
    treatments: "10",
  },
  {
    id: 7,
    category: "rosacea",
    title: "הרגעת רוזציאה",
    description: "הפחתת אדמומיות ורגישות",
    treatments: "6",
  },
  {
    id: 8,
    category: "rosacea",
    title: "עור רגיש ומגורה",
    description: "חיזוק מחסום העור והרגעה",
    treatments: "8",
  },
  {
    id: 9,
    category: "microneedling",
    title: "מיקרונידלינג לצלקות",
    description: "שיפור ניכר במרקם וצלקות",
    treatments: "5",
  },
  {
    id: 10,
    category: "microneedling",
    title: "נקבוביות ומרקם עור",
    description: "הקטנת נקבוביות והחלקת העור",
    treatments: "6",
  },
]
