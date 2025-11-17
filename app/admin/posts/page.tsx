import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Edit, Trash2 } from "lucide-react"
import { prisma } from "@/lib/prisma"

export const dynamic = 'force-dynamic'

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-playfair font-bold text-gray-800">
            ניהול מאמרים
          </h2>
          <p className="text-gray-600 mt-1">
            {posts.length} מאמרים במערכת
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/posts/new">
            <Plus className="w-4 h-4 ml-2" />
            מאמר חדש
          </Link>
        </Button>
      </div>

      {posts.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500 mb-4">אין מאמרים עדיין</p>
            <Button asChild>
              <Link href="/admin/posts/new">צור מאמר ראשון</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {post.title}
                      </h3>
                      {post.published ? (
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                          פורסם
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                          טיוטה
                        </span>
                      )}
                    </div>
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm mb-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>/{post.slug}</span>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString("he-IL")}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/posts/${post.id}`}>
                        <Edit className="w-4 h-4" />
                      </Link>
                    </Button>
                    <form action={`/api/posts/${post.id}`} method="POST">
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
