"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Plus, Star } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  text: string
  treatment: string | null
  published: boolean
  order: number
  createdAt: string
  updatedAt: string
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    treatment: "",
    published: true,
    order: 0,
  })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/testimonials")
      const data = await response.json()
      setTestimonials(data)
    } catch (error) {
      console.error("Error fetching testimonials:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("האם את בטוחה שאת רוצה למחוק ביקורת זו?")) {
      return
    }

    try {
      const response = await fetch(\`/api/testimonials/\${id}\`, {
        method: "DELETE",
      })

      if (response.ok) {
        setTestimonials(testimonials.filter((t) => t.id !== id))
      } else {
        alert("שגיאה במחיקת הביקורת")
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error)
      alert("שגיאה במחיקת הביקורת")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const newTestimonial = await response.json()
        setTestimonials([...testimonials, newTestimonial])
        setFormData({
          name: "",
          text: "",
          treatment: "",
          published: true,
          order: 0,
        })
        setShowAddForm(false)
        alert("הביקורת נוספה בהצלחה!")
      } else {
        alert("שגיאה בהוספת הביקורת")
      }
    } catch (error) {
      console.error("Error adding testimonial:", error)
      alert("שגיאה בהוספת הביקורת")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-xl">טוען...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            ניהול ביקורות
          </h1>
          <p className="text-gray-600">
            סה״כ {testimonials.length} ביקורות במערכת
          </p>
        </div>

        {/* Add Button */}
        <div className="mb-8">
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-black text-white hover:bg-gold-400 hover:text-black"
          >
            <Plus className="w-4 h-4 ml-2" />
            הוספת ביקורת חדשה
          </Button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <Card className="mb-8 border-2 border-gold-400">
            <CardHeader>
              <CardTitle>ביקורת חדשה</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">שם מלא *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment">סוג הטיפול</Label>
                  <Input
                    id="treatment"
                    value={formData.treatment}
                    onChange={(e) =>
                      setFormData({ ...formData, treatment: e.target.value })
                    }
                    placeholder="לדוגמה: טיפול אקנה"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text">טקסט הביקורת *</Label>
                  <Textarea
                    id="text"
                    value={formData.text}
                    onChange={(e) =>
                      setFormData({ ...formData, text: e.target.value })
                    }
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order">סדר תצוגה</Label>
                  <Input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        order: parseInt(e.target.value),
                      })
                    }
                  />
                  <p className="text-sm text-gray-500">
                    מספר נמוך יוצג ראשון
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-black text-white hover:bg-gold-400 hover:text-black"
                  >
                    שמירה
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                  >
                    ביטול
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-6 space-y-4">
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="absolute top-4 left-4 p-2 hover:bg-red-50 rounded-lg transition-colors group"
                  title="מחק ביקורת"
                >
                  <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                </button>

                {/* Stars */}
                <div className="flex gap-1 pt-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-black">{testimonial.name}</p>
                  {testimonial.treatment && (
                    <p className="text-sm text-gray-500">
                      {testimonial.treatment}
                    </p>
                  )}
                  <div className="flex gap-4 mt-2 text-xs text-gray-400">
                    <span>סדר: {testimonial.order}</span>
                    <span>
                      נוצר: {new Date(testimonial.createdAt).toLocaleDateString("he-IL")}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {testimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">אין ביקורות עדיין</p>
          </div>
        )}
      </div>
    </div>
  )
}
