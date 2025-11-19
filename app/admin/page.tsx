import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Image, MessageSquare, Plus } from "lucide-react"
import { prisma } from "@/lib/prisma"

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const [postsCount, galleryCount, testimonialsCount] = await Promise.all([
    prisma.post.count(),
    prisma.galleryItem.count(),
    prisma.testimonial.count(),
  ])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          לוח בקרה
        </h2>
        <p className="text-gray-600">סקירה כללית של תוכן האתר</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gold-400" />
              <span>מאמרים</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">
              {postsCount}
            </div>
            <Button asChild variant="link" className="px-0 mt-2">
              <Link href="/admin/posts">נהל מאמרים</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image className="w-5 h-5 text-gold-400" />
              <span>תמונות בגלריה</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">
              {galleryCount}
            </div>
            <Button asChild variant="link" className="px-0 mt-2">
              <Link href="/admin/gallery">נהל גלריה</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-gold-400" />
              <span>המלצות</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">
              {testimonialsCount}
            </div>
            <Button asChild variant="link" className="px-0 mt-2">
              <Link href="/admin/testimonials">נהל המלצות</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          פעולות מהירות
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild className="h-auto py-6">
            <Link href="/admin/posts/new" className="flex flex-col gap-2">
              <Plus className="w-6 h-6" />
              <span>מאמר חדש</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-6">
            <Link href="/admin/gallery/new" className="flex flex-col gap-2">
              <Plus className="w-6 h-6" />
              <span>תמונה חדשה</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-6">
            <Link href="/admin/testimonials/new" className="flex flex-col gap-2">
              <Plus className="w-6 h-6" />
              <span>המלצה חדשה</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
