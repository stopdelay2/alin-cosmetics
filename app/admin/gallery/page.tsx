import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Edit, Trash2 } from "lucide-react"
import { prisma } from "@/lib/prisma"

export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: { order: "asc" },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-playfair font-bold text-gray-800">
            ניהול גלריה
          </h2>
          <p className="text-gray-600 mt-1">
            {items.length} תמונות בגלריה
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/gallery/new">
            <Plus className="w-4 h-4 ml-2" />
            תמונה חדשה
          </Link>
        </Button>
      </div>

      {items.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500 mb-4">אין תמונות בגלריה עדיין</p>
            <Button asChild>
              <Link href="/admin/gallery/new">הוסף תמונה ראשונה</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">לפני</span>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">אחרי</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    {item.published ? (
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                        פעיל
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                        מוסתר
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-gold-100 rounded">
                      {item.category}
                    </span>
                    {item.treatments && (
                      <span>{item.treatments} טיפולים</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/admin/gallery/${item.id}`}>
                        <Edit className="w-4 h-4 ml-1" />
                        ערוך
                      </Link>
                    </Button>
                    <form action={`/api/gallery/${item.id}`} method="POST">
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
