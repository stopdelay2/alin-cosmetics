"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, MessageCircle } from "lucide-react"
import { useEffect } from "react"

export default function NotFound() {
  useEffect(() => {
    // Report 404 to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_not_found', {
        page_location: window.location.href,
        page_path: window.location.pathname,
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gold-400" />
          <div className="w-3 h-3 bg-gold-400 rounded-full" />
          <div className="h-px w-16 bg-gold-400" />
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-gray-200 mb-4">
          404
        </h1>

        {/* Friendly message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          אופס! הדף לא נמצא
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          נראה שהדף שחיפשת עבר דירה או שהקישור לא נכון.
          <br />
          אל דאגה, אפשר לחזור לדף הבית או ליצור איתנו קשר.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gold-400 hover:text-black transition-all duration-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              חזרה לדף הבית
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              יצירת קשר
            </Link>
          </Button>
        </div>

        {/* Decorative circles */}
        <div className="flex justify-center gap-3 mt-12">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gold-400 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  )
}
