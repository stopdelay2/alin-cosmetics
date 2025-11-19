import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Image, MessageSquare, Settings } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              Alin Cosmetics - ניהול תוכן
            </h1>
            <Button asChild variant="outline">
              <Link href="/">חזרה לאתר</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="space-y-2">
              <Link
                href="/admin"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>לוח בקרה</span>
              </Link>
              <Link
                href="/admin/posts"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span>מאמרים</span>
              </Link>
              <Link
                href="/admin/gallery"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors"
              >
                <Image className="w-5 h-5" />
                <span>גלריה</span>
              </Link>
              <Link
                href="/admin/testimonials"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>המלצות</span>
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">{children}</main>
        </div>
      </div>
    </div>
  )
}
