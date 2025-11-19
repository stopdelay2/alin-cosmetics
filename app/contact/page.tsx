"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Instagram, Clock, Mail, Youtube } from "lucide-react"

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
    const message = `שלום אלין,\n\nשמי ${formData.name}\n${formData.message ? formData.message : 'מעוניינת לקבל מידע נוסף'}\n\nמספר הטלפון שלי: ${formData.phone}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Track conversion in Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', {
        content_name: 'WhatsApp Form Submit',
        content_category: 'Contact'
      })
      (window as any).fbq('track', 'Lead', {
        content_name: 'WhatsApp Form Submit',
        content_category: 'Contact'
      })
    }

    // Track conversion in Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(url)
    }

    // Always open WhatsApp
    window.open(url, "_blank")

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", phone: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero - Black Background */}
      <section className="min-h-[60vh] bg-black text-white relative overflow-hidden flex items-center justify-center">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/10 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-white" />
              <div className="w-3 h-3 bg-gold-400 rounded-full" />
              <div className="h-px w-16 bg-white" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
              בואי נדבר<br />על העור שלך
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              מוזמנת ליצור קשר בכל דרך שנוחה לך
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-white relative">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-black/5 rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* WhatsApp & Form */}
              <div className="space-y-12">
                {/* Direct WhatsApp Button Section */}
                <div>
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 border-2 border-black rounded-full" />
                      <div className="h-px flex-1 bg-gold-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4 leading-tight">
                      רוצה לשאול שאלה קצרה<br />על העור שלך?
                    </h2>
                    <p className="text-black/70 text-lg leading-relaxed">
                      לחצי וייפתח לך וואטסאפ בצ'אט אישי איתי.
                    </p>
                  </div>

                  <Button
                    onClick={() => {
                      const url = "https://wa.me/972543175631"

                      // Track conversion in Facebook Pixel
                      if (typeof window !== 'undefined' && (window as any).fbq) {
                        (window as any).fbq('track', 'Contact', {
                          content_name: 'WhatsApp Primary Button',
                          content_category: 'Contact'
                        })
                        (window as any).fbq('track', 'Lead', {
                          content_name: 'WhatsApp Primary Button',
                          content_category: 'Contact'
                        })
                      }

                      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                        (window as any).gtag_report_conversion(url)
                      } else {
                        window.open(url, "_blank")
                      }
                    }}
                    size="lg"
                    className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors text-xl py-8 shadow-lg hover:shadow-xl"
                  >
                    לפתיחת וואטסאפ עכשיו
                  </Button>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-black/60 text-center">
                      אפשר לשאול, להתלבט ולקבל כיוון לפני שמחליטים על טיפול.
                    </p>
                    <p className="text-xs text-black/50 text-center">
                      לא מצרפת לקבוצות. שיחה אישית בלבד.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-black/10" />
                  <span className="text-black/40 text-sm">או</span>
                  <div className="h-px flex-1 bg-black/10" />
                </div>

                {/* Form Section */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-black mb-2">
                      מעדיפה להשאיר פרטים ונדבר כשנוח לך?
                    </h3>
                    <p className="text-black/60 text-sm">
                      השאירי מספר ואני אחזור אלייך בוואטסאפ עם תשובה אישית.
                    </p>
                  </div>

                  <Card className="border-2 border-black/10 rounded-none shadow-none">
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm">שם פרטי</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="איך לפנות אלייך?"
                            required
                            className="border-black/20"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm">טלפון</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="מספר לנייד"
                            required
                            className="border-black/20"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm">איך אפשר לעזור לך? <span className="text-black/50">(לא חובה)</span></Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="לדוגמה: אקנה, יובש, פיגמנטציה..."
                            rows={3}
                            className="border-black/20"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-black text-white hover:bg-gold-400 hover:text-black transition-colors text-base py-6"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "שולחת..." : "שליחת פרטים לחזרה בוואטסאפ"}
                        </Button>

                        <div className="pt-2 space-y-1">
                          <p className="text-xs text-black/50 text-center">
                            ⏱️ זמן תגובה ממוצע: עד חצי שעה
                          </p>
                          <p className="text-xs text-black/50 text-center">
                            אין התחייבות לטיפול. קודם מדברות, אחר כך מחליטות.
                          </p>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 bg-gold-400" />
                    <div className="w-12 h-12 border-2 border-black rounded-full" />
                  </div>
                  <h2 className="text-4xl font-playfair font-bold text-black mb-4">
                    פרטי התקשרות
                  </h2>
                </div>

                <div className="space-y-4">
                  <Card className="border-2 border-black/10 rounded-none shadow-none hover:border-gold-400 transition-all duration-300">
                    <CardContent className="p-6">
                      <a
                        href="tel:0543175631"
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                          <Phone className="w-6 h-6 text-current" />
                        </div>
                        <div>
                          <p className="font-bold text-black text-lg">טלפון</p>
                          <p className="text-black/70" dir="ltr">
                            054-3175631
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-black/10 rounded-none shadow-none hover:border-gold-400 transition-all duration-300">
                    <CardContent className="p-6">
                      <button
                        onClick={() => {
                          const url = "https://wa.me/972543175631"

                          // Track conversion in Facebook Pixel
                          if (typeof window !== 'undefined' && (window as any).fbq) {
                            (window as any).fbq('track', 'Contact', {
                              content_name: 'WhatsApp Direct Click',
                              content_category: 'Contact'
                            })
                            (window as any).fbq('track', 'Lead', {
                              content_name: 'WhatsApp Direct Click',
                              content_category: 'Contact'
                            })
                          }

                          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                            (window as any).gtag_report_conversion(url)
                          } else {
                            window.open(url, "_blank")
                          }
                        }}
                        className="flex items-center gap-4 group w-full text-right"
                      >
                        <div className="w-14 h-14 border-2 border-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all">
                          <Mail className="w-6 h-6 text-current" />
                        </div>
                        <div>
                          <p className="font-bold text-black text-lg">וואטסאפ</p>
                          <p className="text-black/70">שלחי הודעה ישירה</p>
                        </div>
                      </button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-black/10 rounded-none shadow-none hover:border-gold-400 transition-all duration-300">
                    <CardContent className="p-6">
                      <a
                        href="https://instagram.com/alin.cosmetics__"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:to-pink-400 group-hover:border-transparent transition-all">
                          <Instagram className="w-6 h-6 text-current group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-black text-lg">אינסטגרם</p>
                          <p className="text-black/70" dir="ltr">@alin.cosmetics__</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-black/10 rounded-none shadow-none hover:border-gold-400 transition-all duration-300">
                    <CardContent className="p-6">
                      <a
                        href="https://www.youtube.com/@AlinCosmeticsIsrael"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-14 h-14 border-2 border-[#FF0000] rounded-full flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-white transition-all">
                          <Youtube className="w-6 h-6 text-current" />
                        </div>
                        <div>
                          <p className="font-bold text-black text-lg">יוטיוב</p>
                          <p className="text-black/70">AlinCosmeticsIsrael</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-black/10 rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-current" />
                        </div>
                        <div>
                          <p className="font-bold text-black text-lg">מיקום</p>
                          <p className="text-black/70">שדרות ז'בוטינסקי, קריית ים</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-black/10 rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-current" />
                        </div>
                        <div>
                          <p className="font-bold text-black text-lg mb-3">
                            שעות פעילות
                          </p>
                          <div className="space-y-2 text-black/70">
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
      </section>

      {/* FAQ Section - Black Background */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-white" />
                <div className="w-3 h-3 bg-gold-400 rounded-full" />
                <div className="h-px w-16 bg-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">
                שאלות נפוצות
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 border-white/10 rounded-none shadow-none bg-transparent hover:border-gold-400 transition-colors">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-white text-xl mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
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
