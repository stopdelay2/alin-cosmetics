"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Instagram, Clock, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Redirect to WhatsApp with the message
    const phoneNumber = "972543175631"
    const message = `שלום אלין,\n\nשמי ${formData.name}\n${formData.message}\n\nמספר הטלפון שלי: ${formData.phone}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", phone: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-100 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800">
              בואי נדבר על העור שלך
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              מוזמנת ליצור קשר בכל דרך שנוחה לך
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <Card className="border-gold-100">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-6">
                      שלחי הודעה
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">שם מלא</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="השם שלך"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">טלפון</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="050-1234567"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">הודעה</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="ספרי לי על מה את רוצה לשמוע..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "שולחת..." : "שלחי הודעה"}
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        לחיצה על הכפתור תפתח את וואטסאפ עם ההודעה
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-6">
                    פרטי התקשרות
                  </h2>
                  <div className="space-y-6">
                    <Card className="border-gold-100 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <a
                          href="tel:0543175631"
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center group-hover:bg-gold-200 transition-colors">
                            <Phone className="w-5 h-5 text-gold-400" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">טלפון</p>
                            <p className="text-gray-600" dir="ltr">
                              054-3175631
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-gold-100 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <a
                          href="https://wa.me/972543175631"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                            <Mail className="w-5 h-5 text-[#25D366]" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">וואטסאפ</p>
                            <p className="text-gray-600">שלחי הודעה ישירה</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-gold-100 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <a
                          href="https://instagram.com/alin.cosmetics__"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                            <Instagram className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">אינסטגרם</p>
                            <p className="text-gray-600">@alin.cosmetics__</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-gold-100">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-gold-400" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">מיקום</p>
                            <p className="text-gray-600">קריית ים</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gold-100">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-gold-400" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 mb-2">
                              שעות פעילות
                            </p>
                            <div className="space-y-1 text-sm text-gray-600">
                              <p>ראשון - חמישי: 9:00 - 20:00</p>
                              <p>שישי: 9:00 - 14:00</p>
                              <p>שבת: סגור</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-gray-800 text-center mb-12">
              שאלות נפוצות
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-gold-100">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "כמה זמן לוקח טיפול?",
    answer:
      "טיפול פנים סטנדרטי נמשך בין שעה לשעה וחצי, תלוי בסוג הטיפול והצרכים האישיים שלך. אני תמיד מקדישה את הזמן הדרוש כדי לעשות את הטיפול כמו שצריך.",
  },
  {
    question: "האם יש תקופת החלמה אחרי הטיפול?",
    answer:
      "רוב הטיפולים לא דורשים זמן החלמה. ייתכן קצת אדמומיות קלה שחולפת תוך שעות ספורות. במיקרונידלינג יכול להיות צורך בהימנעות ממייקאפ למשך יום.",
  },
  {
    question: "כמה טיפולים צריך כדי לראות תוצאות?",
    answer:
      "זה תלוי במצב העור ובמטרות. לרוב ממליצה על סדרת טיפולים של 4-6 פעמים במרווחים של שבועיים-שלושה. כבר אחרי הטיפול הראשון ניתן להרגיש שיפור.",
  },
  {
    question: "איך אני מתכוננת לטיפול?",
    answer:
      "מומלץ להגיע עם פנים נקיות, ללא מייקאפ. אם את משתמשת בתרופות לעור או יש רגישויות מיוחדות - חשוב לעדכן אותי מראש.",
  },
  {
    question: "האם הטיפולים כואבים?",
    answer:
      "אני עובדת בעדינות מקסימלית. רוב הטיפולים נעימים ומרגיעים. במיקרונידלינג יכולה להיות תחושה של אי נוחות קלה, אבל אני תמיד משתמשת במשחה מרדימה.",
  },
]
