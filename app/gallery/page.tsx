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
    <div className="flex flex-col overflow-x-hidden" dir="rtl">
      {/* Hero - Black Background */}
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

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
              תוצאות של נשים<br />שבחרו בעצמן
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              אין פילטרים, אין קסמים - רק תהליך אמיתי ותוצאה שנשארת
            </p>

            <div className="inline-flex items-center gap-3 border-2 border-white/20 px-8 py-4">
              <div className="w-2 h-2 bg-gold-400 rounded-full" />
              <span className="text-sm text-white/90">
                כל התמונות בתאורה טבעית, ללא עריכה
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filters - White Background */}
      <section className="py-32 bg-white relative">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-black/5 rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-16">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 bg-transparent h-auto p-0">
                  <TabsTrigger
                    value="all"
                    className="border-2 border-black/10 data-[state=active]:border-gold-400 data-[state=active]:bg-black data-[state=active]:text-white rounded-none py-3"
                  >
                    הכל
                  </TabsTrigger>
                  <TabsTrigger
                    value="acne"
                    className="border-2 border-black/10 data-[state=active]:border-gold-400 data-[state=active]:bg-black data-[state=active]:text-white rounded-none py-3"
                  >
                    אקנה
                  </TabsTrigger>
                  <TabsTrigger
                    value="pigmentation"
                    className="border-2 border-black/10 data-[state=active]:border-gold-400 data-[state=active]:bg-black data-[state=active]:text-white rounded-none py-3"
                  >
                    פיגמנטציה
                  </TabsTrigger>
                  <TabsTrigger
                    value="antiaging"
                    className="border-2 border-black/10 data-[state=active]:border-gold-400 data-[state=active]:bg-black data-[state=active]:text-white rounded-none py-3"
                  >
                    אנטי אייג'ינג
                  </TabsTrigger>
                  <TabsTrigger
                    value="rosacea"
                    className="border-2 border-black/10 data-[state=active]:border-gold-400 data-[state=active]:bg-black data-[state=active]:text-white rounded-none py-3"
                  >
                    רוזציאה
                  </TabsTrigger>
                  <TabsTrigger
                    value="microneedling"
                    className="border-2 border-black/10 data-[state=active]:border-gold-400 data-[state=active]:bg-black data-[state=active]:text-white rounded-none py-3"
                  >
                    מיקרונידלינג
                  </TabsTrigger>
                </TabsList>
              </div>

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

      {/* Notice - Black Background */}
      <section className="py-16 bg-black text-white relative">
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 border-2 border-gold-400 rounded-full mx-auto mb-6" />
            <p className="text-white/80 leading-relaxed">
              התמונות מוצגות באישור הלקוחות. התוצאות עשויות להשתנות בין אדם לאדם
              ותלויות במצב העור ההתחלתי, בעקביות הטיפולים ובשמירה על הוראות
              הטיפול הביתי.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - White Background */}
      <section className="py-32 bg-white relative">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-black/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="w-20 h-20 bg-gold-400 rounded-full mx-auto" />

            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black">
              גם את יכולה לראות שינוי
            </h2>

            <div className="h-px w-32 bg-black mx-auto" />

            <p className="text-xl text-black/70 leading-relaxed">
              בואי נתחיל את המסע שלך לעור בריא וזוהר
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-gold-400 hover:text-black border-0 text-lg px-12 py-6 h-auto"
              >
                <Link href="/contact">קבעי תור לטיפול</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-12 py-6 h-auto"
              >
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
      <div className="text-center py-20">
        <div className="w-24 h-24 border-2 border-black/10 rounded-full mx-auto mb-6 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-gold-400 rounded-full" />
        </div>
        <p className="text-black/60 text-lg">אין תמונות בקטגוריה זו כרגע</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card
          key={item.id}
          className="border-2 border-black/10 rounded-none shadow-none hover:border-gold-400 transition-all duration-300 group"
        >
          <CardContent className="p-0 space-y-0">
            <div className="grid grid-cols-2 gap-0">
              <div className="aspect-square bg-gold-400/5 flex items-center justify-center border-l border-b border-black/10 relative overflow-hidden">
                {item.id === 1 ? (
                  <img
                    src="/images/1after.jpeg"
                    alt="אחרי הטיפול"
                    className="w-full h-auto"
                    loading="eager"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent" />
                    <p className="text-sm text-black/40 font-medium relative z-10">אחרי</p>
                  </>
                )}
              </div>
              <div className="aspect-square bg-black/5 flex items-center justify-center border-b border-black/10 relative overflow-hidden">
                {item.id === 1 ? (
                  <img
                    src="/images/1before.jpeg"
                    alt="לפני הטיפול"
                    className="w-full h-auto"
                    loading="eager"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
                    <p className="text-sm text-black/40 font-medium relative z-10">לפני</p>
                  </>
                )}
              </div>
            </div>
            <div className="p-6 space-y-3 text-right">
              <h3 className="font-bold text-black text-lg">{item.title}</h3>
              <p className="text-sm text-black/70 leading-relaxed">{item.description}</p>
              {item.treatments && (
                <div className="flex items-center gap-2 pt-2 flex-row-reverse justify-end">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <p className="text-xs text-black/60">
                    {item.treatments} טיפולים
                  </p>
                </div>
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
    beforeImage: "/images/1before.jpeg",
    afterImage: "/images/1after.jpeg",
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
