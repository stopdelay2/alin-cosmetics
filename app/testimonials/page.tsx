import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { TestimonialForm } from "@/components/testimonial-form"

export const metadata: Metadata = {
  title: "המלצות לקוחות | Alin Cosmetics",
  description: "קראו המלצות של נשים שחוו טיפול אצל אלין. תוצאות אמיתיות, חוויות אמיתיות.",
  openGraph: {
    title: "המלצות לקוחות | Alin Cosmetics",
    description: "קראו המלצות של נשים שחוו טיפול אצל אלין. תוצאות אמיתיות, חוויות אמיתיות.",
  },
}

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    where: { published: true },
    orderBy: [
      { order: "asc" },
      { createdAt: "desc" },
    ],
  })
  return (
    <div className="flex flex-col overflow-x-hidden">
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
              נשים אמיתיות<br />תוצאות אמיתיות
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              מה שהלקוחות שלי אומרות על החוויה והתוצאות
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid - White Background */}
      <section className="py-32 bg-white relative">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-black/5 rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 border-2 border-black/10 hover:border-gold-400 transition-all duration-300 space-y-6 group relative"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-black" />
                  </div>

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
                  <p className="text-black/80 leading-relaxed text-lg relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-black">
                        {testimonial.name}
                      </p>
                      {testimonial.treatment && (
                        <p className="text-sm text-black/60">
                          {testimonial.treatment}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Black Background */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-6">
                  <div className="w-40 h-40 rounded-full border-2 border-gold-400 flex items-center justify-center mx-auto">
                    <div className="text-4xl md:text-5xl font-playfair font-bold text-gold-400">
                      {stat.number}
                    </div>
                  </div>
                  <p className="text-xl text-white/80 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add Testimonial Form - White Background */}
      <section className="py-32 bg-white relative">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-black/5 rounded-full" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-black" />
                <div className="w-3 h-3 bg-gold-400 rounded-full" />
                <div className="h-px w-16 bg-black" />
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
                שתפי את החוויה שלך
              </h2>
              <p className="text-lg text-black/70">
                קיבלת טיפול? נשמח לשמוע מה היה לך!
              </p>
            </div>

            <TestimonialForm />
          </div>
        </div>
      </section>

      {/* CTA - Black Background */}
      <section className="py-32 bg-black text-white relative">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="w-20 h-20 bg-gold-400 rounded-full mx-auto" />

            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
              את יכולה להיות הבאה
            </h2>

            <div className="h-px w-32 bg-gold-400 mx-auto" />

            <p className="text-xl text-white/70 leading-relaxed">
              בואי לחוות את השינוי בעור הפנים ובבטחון שלך
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gold-400 hover:text-black border-0 text-lg px-12 py-6 h-auto mt-8"
            >
              <Link href="/contact">קבעי תור עכשיו</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const stats = [
  {
    number: "500+",
    label: "נשים מרוצות",
  },
  {
    number: "8",
    label: "שנות ניסיון",
  },
  {
    number: "100%",
    label: "מחויבות לתוצאות",
  },
]
