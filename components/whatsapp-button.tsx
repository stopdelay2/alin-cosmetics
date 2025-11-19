"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "972543175631" // 054-3175631
  const message = "שלום אלין, אשמח לקבוע תור לטיפול פנים"

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Track conversion in Facebook Pixel
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Contact', {
          content_name: 'WhatsApp Button Click',
          content_category: 'Contact'
        })
        (window as any).fbq('track', 'Lead', {
          content_name: 'WhatsApp Button Click',
          content_category: 'Contact'
        })
      }
    } catch (error) {
      console.log('Facebook Pixel tracking failed:', error)
    }

    // Track conversion in Google Ads
    try {
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(url)
      }
    } catch (error) {
      console.log('Google Ads tracking failed:', error)
    }

    // Always open WhatsApp
    window.open(url, "_blank")
  }

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2"
      style={{
        animation: 'bounce-subtle 3s ease-in-out infinite'
      }}
    >
      <div className="bg-white text-black px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap">
        זמינה בשבילך
      </div>
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="שליחת הודעה בוואטסאפ"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}
