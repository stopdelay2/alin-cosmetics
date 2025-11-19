"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    treatment: "",
    text: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          published: false, // Requires admin approval
          order: 999, // Will be set by admin later
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", treatment: "", text: "" })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        alert("שגיאה בשליחת הביקורת. נסי שוב.")
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error)
      alert("שגיאה בשליחת הביקורת. נסי שוב.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-2 border-gold-400 bg-gold-50">
        <CardContent className="p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-gold-400 rounded-full mx-auto flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-black">
            תודה רבה!
          </h3>
          <p className="text-black/70">
            הביקורת שלך נשלחה בהצלחה ותפורסם לאחר אישור.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-black/10">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="client-name">שם מלא *</Label>
            <Input
              id="client-name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="השם שלך"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="client-treatment">איזה טיפול קיבלת?</Label>
            <Input
              id="client-treatment"
              value={formData.treatment}
              onChange={(e) =>
                setFormData({ ...formData, treatment: e.target.value })
              }
              placeholder="לדוגמה: טיפול אקנה, מיקרונידלינג..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="client-text">הביקורת שלך *</Label>
            <Textarea
              id="client-text"
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
              placeholder="שתפי את החוויה שלך..."
              rows={5}
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-black text-white hover:bg-gold-400 hover:text-black text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "שולחת..." : "שלחי ביקורת"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
