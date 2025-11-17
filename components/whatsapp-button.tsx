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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="שליחת הודעה בוואטסאפ"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
