"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewTestimonialPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    treatment: "",
    published: true,
    order: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/admin/testimonials")
      } else {
        alert("שגיאה בשמירת ההמלצה")
      }
    } catch (error) {
      alert("שגיאה בשמירת ההמלצה")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/testimonials">
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <h2 className="text-3xl font-playfair font-bold text-gray-800">
          המלצה חדשה
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>פרטי ההמלצה</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">שם הלקוחה</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="שרה כ."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="treatment">סוג הטיפול (אופציונלי)</Label>
              <Input
                id="treatment"
                value={formData.treatment}
                onChange={(e) =>
                  setFormData({ ...formData, treatment: e.target.value })
                }
                placeholder="טיפול אקנה"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="text">טקסט ההמלצה</Label>
              <Textarea
                id="text"
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
                placeholder="לא האמנתי שיום אחד אצא מהבית בלי מייקאפ..."
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="order">סדר הצגה</Label>
              <Input
                id="order"
                type="number"
                value={formData.order}
                onChange={(e) =>
                  setFormData({ ...formData, order: parseInt(e.target.value) })
                }
                placeholder="0"
              />
              <p className="text-xs text-gray-500">
                מספר נמוך יותר יוצג קודם
              </p>
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
              <Label htmlFor="published">הצג באתר הציבורי</Label>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-end">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/testimonials">ביטול</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "שומר..." : "שמור"}
          </Button>
        </div>
      </form>
    </div>
  )
}
