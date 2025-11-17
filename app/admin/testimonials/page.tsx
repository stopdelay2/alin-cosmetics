import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Edit, Trash2, Star } from "lucide-react"
import { prisma } from "@/lib/prisma"

export const dynamic = 'force-dynamic'

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { order: "asc" },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-playfair font-bold text-gray-800">
            ניהול המלצות
          </h2>
          <p className="text-gray-600 mt-1">
            {testimonials.length} המלצות במערכת
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/testimonials/new">
            <Plus className="w-4 h-4 ml-2" />
            המלצה חדשה
          </Link>
        </Button>
      </div>

      {testimonials.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500 mb-4">אין המלצות עדיין</p>
            <Button asChild>
              <Link href="/admin/testimonials/new">הוסף המלצה ראשונה</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                        <span className="text-gold-400 font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        {testimonial.treatment && (
                          <p className="text-sm text-gray-500">
                            {testimonial.treatment}
                          </p>
                        )}
                      </div>
                      {testimonial.published ? (
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                          פעיל
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                          מוסתר
                        </span>
                      )}
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-gold-400 text-gold-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/testimonials/${testimonial.id}`}>
                        <Edit className="w-4 h-4" />
                      </Link>
                    </Button>
                    <form action={`/api/testimonials/${testimonial.id}`} method="POST">
                      <input type="hidden" name="_method" value="DELETE" />
                      <Button
                        type="submit"
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
