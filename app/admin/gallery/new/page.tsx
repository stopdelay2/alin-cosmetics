"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewGalleryItemPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "acne",
    beforeImage: "",
    afterImage: "",
    treatments: "",
    published: true,
    order: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          treatments: formData.treatments ? parseInt(formData.treatments) : null,
        }),
      })

      if (response.ok) {
        router.push("/admin/gallery")
      } else {
        alert("שגיאה בשמירת התמונה")
      }
    } catch (error) {
      alert("שגיאה בשמירת התמונה")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/gallery">
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <h2 className="text-3xl font-playfair font-bold text-gray-800">
          תמונה חדשה
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>פרטי התמונה</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">כותרת</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="שם הטיפול או התוצאה"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">תיאור</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="תיאור קצר של התוצאה"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">קטגוריה</Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="acne">אקנה</SelectItem>
                  <SelectItem value="pigmentation">פיגמנטציה</SelectItem>
                  <SelectItem value="antiaging">אנטי אייג׳ינג</SelectItem>
                  <SelectItem value="rosacea">רוזציאה</SelectItem>
                  <SelectItem value="microneedling">מיקרונידלינג</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="beforeImage">תמונת לפני (URL)</Label>
                <Input
                  id="beforeImage"
                  value={formData.beforeImage}
                  onChange={(e) =>
                    setFormData({ ...formData, beforeImage: e.target.value })
                  }
                  placeholder="https://..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="afterImage">תמונת אחרי (URL)</Label>
                <Input
                  id="afterImage"
                  value={formData.afterImage}
                  onChange={(e) =>
                    setFormData({ ...formData, afterImage: e.target.value })
                  }
                  placeholder="https://..."
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="treatments">מספר טיפולים (אופציונלי)</Label>
              <Input
                id="treatments"
                type="number"
                value={formData.treatments}
                onChange={(e) =>
                  setFormData({ ...formData, treatments: e.target.value })
                }
                placeholder="6"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) =>
                  setFormData({ ...formData, published: e.target.checked })
                }
                className="w-4 h-4"
              />
              <Label htmlFor="published">פרסם בגלריה הציבורית</Label>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-end">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/gallery">ביטול</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "שומר..." : "שמור"}
          </Button>
        </div>
      </form>
    </div>
  )
}
