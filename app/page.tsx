"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, MapPin, Phone, Instagram, Youtube } from "lucide-react"
import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate color transition based on scroll
  const scrollProgress = Math.min(scrollY / 800, 1)

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section - Full Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main.jpeg"
            alt="Alin Cosmetics"
            fill
            className="object-cover object-[25%_center] md:object-[70%_center]"
            priority
            quality={100}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white/30 rounded-full z-10" />
        <div className="absolute bottom-20 left-10 w-64 h-64 border border-white/20 rounded-full z-10" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gold-400/20 rounded-full blur-2xl z-10" />

        {/* Content Overlay - Positioned Left */}
        <div className="relative z-20 container mx-auto px-6 md:px-8 lg:px-12 py-20">
          <div className="max-w-7xl mx-auto flex justify-start">
            <div className="max-w-2xl space-y-8">
              {/* Small accent line */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-16 bg-white" />
                <div className="w-3 h-3 bg-gold-400 rounded-full" />
              </div>

              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight drop-shadow-2xl">
                לפעמים<br />
                העור שלנו<br />
                פשוט מבקש<br />
                רגע של הקשבה
              </div>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl drop-shadow-lg mb-4 sm:mb-0">
                טיפול פנים עדין, מקצועי ומותאם אישית<br />
                <span className="text-lg text-white/80">בקליניקה חדשה עם מכשור מתקדם בקריית ים</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:pt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-gold-400 hover:text-white border-0 text-lg px-10 py-6 h-auto"
                >
                  <Link href="/contact">קבעי תור</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-6 h-auto"
                >
                  <Link href="/treatments">הטיפולים שלנו</Link>
                </Button>
              </div>

              {/* Small decorative circles at bottom */}
              <div className="flex gap-3 pt-12">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-gold-400 rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Circle Accent */}
        <div
          className="absolute top-1/4 right-0 w-32 h-32 bg-gold-400/30 rounded-full blur-2xl pointer-events-none z-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - scrollProgress
          }}
        />
      </section>

      {/* Navigation after hero - Desktop only */}
      <div className="hidden lg:block">
        <Navigation placement="afterHero" />
      </div>

      {/* Instagram Reels Section */}
      <section
        className="py-24 relative overflow-hidden transition-colors duration-1000"
        style={{
          backgroundColor: `rgb(${255 - scrollProgress * 255}, ${255 - scrollProgress * 255}, ${255 - scrollProgress * 255})`
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-20 right-10 w-40 h-40 border rounded-full transition-colors duration-1000"
          style={{
            borderColor: scrollProgress > 0.2 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-2xl transition-opacity duration-1000"
          style={{
            backgroundColor: scrollProgress > 0.2 ? 'rgba(212,175,55,0.1)' : 'rgba(212,175,55,0.05)'
          }}
        />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div
                className="h-px w-16 transition-colors duration-1000"
                style={{ backgroundColor: scrollProgress > 0.2 ? 'white' : 'black' }}
              />
              <Youtube className="w-8 h-8 text-gold-400" />
              <div
                className="h-px w-16 transition-colors duration-1000"
                style={{ backgroundColor: scrollProgress > 0.2 ? 'white' : 'black' }}
              />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-1000"
              style={{ color: scrollProgress > 0.2 ? 'white' : 'black' }}
            >
              מהיוטיוב שלנו
            </h2>
            <p
              className="transition-colors duration-1000"
              style={{ color: scrollProgress > 0.2 ? 'rgba(255,255,255,0.8)' : 'rgb(75,85,99)' }}
            >
              הצצה לעולם הטיפולים שלנו
            </p>
          </div>

          {/* YouTube Shorts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="aspect-[9/16] w-full max-w-[315px] mx-auto">
              <iframe
                src="https://www.youtube.com/embed/1wA0LkUWHYM"
                title="YouTube Shorts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="aspect-[9/16] w-full max-w-[315px] mx-auto">
              <iframe
                src="https://www.youtube.com/embed/zomzced34n0"
                title="YouTube Shorts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="aspect-[9/16] w-full max-w-[315px] mx-auto">
              <iframe
                src="https://www.youtube.com/embed/lvFQcJFMec0"
                title="YouTube Shorts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* Follow Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 transition-colors duration-1000"
                style={{
                  borderColor: scrollProgress > 0.2 ? 'white' : 'black',
                  color: scrollProgress > 0.2 ? 'white' : 'black',
                }}
              >
                <a
                  href="https://instagram.com/alin.cosmetics__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  עקבי אחרינו באינסטגרם
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 transition-colors duration-1000"
                style={{
                  borderColor: scrollProgress > 0.2 ? 'white' : 'black',
                  color: scrollProgress > 0.2 ? 'white' : 'black',
                }}
              >
                <a
                  href="https://www.youtube.com/@AlinCosmeticsIsrael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  הרשמי לערוץ היוטיוב
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section - Minimalist Grid */}
      <section
        className="py-32 relative transition-colors duration-1000"
        style={{
          backgroundColor: `rgb(${255 - scrollProgress * 255}, ${255 - scrollProgress * 255}, ${255 - scrollProgress * 255})`
        }}
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-current rounded-full"
                   style={{ color: scrollProgress > 0.3 ? 'white' : 'black' }} />
              <h2
                className="text-4xl md:text-5xl font-bold transition-colors"
                style={{ color: scrollProgress > 0.3 ? 'white' : 'black' }}
              >
                הטיפולים
              </h2>
              <div className="h-px w-20 bg-current"
                   style={{ color: scrollProgress > 0.3 ? 'white' : 'black' }} />
            </div>
          </div>

          {/* Treatments Grid */}
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.title}
                className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                {/* Circle number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>

                <Card className="border-2 border-black hover:border-gold-400 transition-all duration-500 h-full overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 bg-cream-100 overflow-hidden">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold">
                        {treatment.title}
                      </h3>
                      <div className="h-px w-12 bg-gold-400" />
                      <p className="text-sm leading-relaxed text-gray-600">
                        {treatment.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 transition-colors"
              style={{
                borderColor: scrollProgress > 0.3 ? 'white' : 'black',
                color: scrollProgress > 0.3 ? 'white' : 'black',
              }}
            >
              <Link href="/treatments">כל הטיפולים</Link>
            </Button>
          </div>
        </div>

        {/* Decorative Circles */}
        <div
          className="absolute top-20 left-10 w-64 h-64 border border-current rounded-full opacity-10"
          style={{
            color: scrollProgress > 0.3 ? 'white' : 'black',
            transform: `rotate(${scrollY * 0.1}deg)`
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gold-400/10 rounded-full"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        />
      </section>

      {/* About Me CTA - Story Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-black/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="w-20 h-20 bg-gold-400 rounded-full mx-auto" />

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              אני אלין,
            </h2>

            <div className="h-px w-32 bg-gold-400 mx-auto" />

            <div className="space-y-6">
              <p className="text-lg text-gold-400 font-medium">
                קוסמטיקאית מוסמכת עם ניסיון של מעל 8 שנים בעבודה עם עור רגיש ובעייתי
              </p>

              <p className="text-xl text-black/70 leading-relaxed">
                אהבה אמיתית לעור ולנשים שמבקשות להרגיש יפות ובטוחות.<br />
                כל טיפול בקליניקה החדשה שלי נולד מהקשבה, מגע עדין ותשומת לב אמיתית לפרטים הקטנים.<br />
                עם מכשור מתקדם וסביבה נקייה ומזמינה – כי יופי מתחיל כשאת מרגישה טוב עם עצמך.
              </p>
            </div>

            <p className="text-lg text-black/60 leading-relaxed">
              והכירי את הדרך שהפכה תשוקה למקצוע ולשליחות
            </p>

            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gold-400 hover:text-black border-0 text-lg px-12 py-6 h-auto mt-8"
            >
              <Link href="/about">קראי את הסיפור שלי</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation CTA - Soft */}
      <section className="py-24 bg-cream-50 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] border border-gold-400/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gold-400/5 rounded-full" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-gold-400" />
              <div className="w-3 h-3 bg-gold-400 rounded-full" />
              <div className="h-px w-12 bg-gold-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-black">
              רוצה לדעת מה מתאים לעור שלך?
            </h2>

            <p className="text-lg text-black/70 leading-relaxed">
              קבעי שיחת ייעוץ קצרה ללא התחייבות.<br />
              נבין ביחד מה העור שלך באמת צריך.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gold-400 hover:text-black border-0 text-lg px-10 py-6 h-auto mt-6"
            >
              <Link href="/contact">שיחת ייעוץ ללא התחייבות</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA - Dramatic */}
      <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        {/* Huge decorative circle */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 text-center space-y-12 px-6 md:px-8 lg:px-12">
          {/* Gold circle accent */}
          <div className="w-24 h-24 bg-gold-400 rounded-full mx-auto mb-8" />

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            העור שלך<br />
            יכול להרגיש<br />
            אחרת
          </h2>

          <div className="h-px w-32 bg-white mx-auto" />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-gold-400" />
              <span className="text-lg">שדרות ז'בוטינסקי, קריית ים</span>
            </div>
            <div className="w-px h-6 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-gold-400" />
              <a href="tel:0543175631" className="text-lg hover:text-gold-400 transition-colors" dir="ltr">
                054-3175631
              </a>
            </div>
            <div className="w-px h-6 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Instagram className="w-6 h-6 text-gold-400" />
              <a
                href="https://instagram.com/alin.cosmetics__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gold-400 transition-colors"
                dir="ltr"
              >
                @alin.cosmetics__
              </a>
            </div>
            <div className="w-px h-6 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Youtube className="w-6 h-6 text-gold-400" />
              <a
                href="https://www.youtube.com/@AlinCosmeticsIsrael"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gold-400 transition-colors"
              >
                AlinCosmeticsIsrael
              </a>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gold-400 hover:text-white border-0 text-lg px-12 py-6 h-auto mt-8"
          >
            <Link href="/contact">קבעי תור עכשיו</Link>
          </Button>

          {/* Small decorative circles */}
          <div className="flex justify-center gap-4 pt-12">
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-gold-400 rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}

const treatments = [
  {
    title: "אקנה ועור מגורה",
    description: "נחזיר לעור שלך שקט וברק. טיפול שמנקה ומאזן בעדינות, בלי לגרות את העור.",
    image: "/images/2.png",
  },
  {
    title: "רוזציאה ואדמומיות",
    description: "רוגע אמיתי לעור רגיש. טיפול שמפחית אדמומיות ומחזיר ביטחון ונוחות יומיומית.",
    image: "/images/roza.jpeg",
  },
  {
    title: "צלקות וכתמים",
    description: "בהירות חדשה לעור שלך. תהליך הדרגתי שמחזיר אחידות ומרקם חלק.",
    image: "/images/postakna.jpeg",
  },
  {
    title: "אנטי אייג'ינג עדין",
    description: "עור מוצק וזוהר בכל גיל. מיצוק עדין, החזרת לחות ושיפור מרקם העור בלי חומרים קיצוניים.",
    image: "/images/anti.jpeg",
  },
  {
    title: "מיקרונידלינג מבוקר",
    description: "חידוש אמיתי לעור עייף וצלקתי. טיפול מתקדם עם יד עדינה ותוצאות נראות לעין.",
    image: "/images/microble.jpeg",
  },
  {
    title: "פוטותרפיה",
    description: "אור מרפא לעור שלך. שיפור מרקם, הפחתת אדמומיות וטיפול יעיל באקנה.",
    image: "/images/phototerapi.jpeg",
  },
  {
    title: "פיגמנטציה",
    description: "גוון אחיד ובהיר יותר. טיפול ממוקד שמעניק לעור מראה צעיר ורענן.",
    image: "/images/pegment.jpeg",
  },
]

// Instagram Embed Component
function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Process embeds when script loads
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: 'calc(100% - 2px)',
        }}
      />
    </div>
  )
}
