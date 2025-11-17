"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "972543175631" // 054-3175631
  const message = "שלום אלין, אשמח לקבוע תור לטיפול פנים"

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce-subtle"
      aria-label="שליחת הודעה בוואטסאפ"
      style={{
        animation: 'bounce-subtle 3s ease-in-out infinite'
      }}
    >
      <MessageCircle className="w-8 h-8" />
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
    </button>
  )
}
