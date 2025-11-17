"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, MapPin, Phone, Instagram } from "lucide-react"
import { useEffect, useState } from "react"

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
    <div className="flex flex-col">
      {/* Hero Section - Full Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.png"
            alt="Alin Cosmetics"
            fill
            className="object-cover object-[70%_center]"
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
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl space-y-8">
              {/* Small accent line */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-16 bg-white" />
                <div className="w-3 h-3 bg-gold-400 rounded-full" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold text-white leading-tight drop-shadow-2xl">
                לפעמים<br />
                העור שלנו<br />
                פשוט מבקש<br />
                רגע של הקשבה
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl drop-shadow-lg">
                טיפול פנים עדין, מקצועי ומותאם אישית
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start pt-8">
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
                className="text-4xl md:text-5xl font-playfair font-bold transition-colors"
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
                      <h3 className="text-xl font-playfair font-bold">
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

      {/* Contact CTA - Dramatic */}
      <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        {/* Huge decorative circle */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 text-center space-y-12 px-6 md:px-8 lg:px-12">
          {/* Gold circle accent */}
          <div className="w-24 h-24 bg-gold-400 rounded-full mx-auto mb-8" />

          <h2 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
            העור שלך<br />
            יכול להרגיש<br />
            אחרת
          </h2>

          <div className="h-px w-32 bg-white mx-auto" />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-gold-400" />
              <span className="text-lg">קריית ים</span>
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
              >
                @alin.cosmetics__
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
    </div>
  )
}

const treatments = [
  {
    title: "אקנה ועור מגורה",
    description: "נחזיר לעור שלך שקט. טיפול עדין שמנקה בלי לייבש ומאזן בלי להכאיב",
    image: "/images/treatment-acne.jpg",
  },
  {
    title: "רוזציאה ואדמומיות",
    description: "אם העור שלך מגיב לכל דבר זה המקום להרגיע אותו",
    image: "/images/treatment-rosacea.jpg",
  },
  {
    title: "צלקות וכתמים",
    description: "כתמים לא צריכים להיות חלק ממך. נעבוד בהדרגה ובסבלנות עד שתראי שינוי",
    image: "/images/treatment-pigmentation.jpg",
  },
  {
    title: "אנטי אייג'ינג עדין",
    description: "אין גיל לזוהר. מיצוק, לחות והחזרת הברק בלי חומרים קיצוניים",
    image: "/images/treatment-antiaging.jpg",
  },
  {
    title: "מיקרונידלינג מבוקר",
    description: "טיפול מתקדם לעור עייף וצלקתי, עם יד עדינה ותוצאה שמרגישים",
    image: "/images/treatment-microneedling.jpg",
  },
]
