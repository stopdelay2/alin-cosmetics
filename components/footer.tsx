import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, MapPin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-gold-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Alin Cosmetics"
              width={300}
              height={110}
              className="h-24 w-auto object-contain mb-4"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              קוסמטיקה רפואית עם לב. טיפולי פנים מקצועיים, עדינים ומותאמים אישית
              בסביבה שקטה ובטוחה.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">
              קישורים מהירים
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/treatments"
                className="text-sm text-gray-600 hover:text-gold-400 transition-colors"
              >
                טיפולים
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-gold-400 transition-colors"
              >
                אודות
              </Link>
              <Link
                href="/testimonials"
                className="text-sm text-gray-600 hover:text-gold-400 transition-colors"
              >
                המלצות
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-gold-400 transition-colors"
              >
                צור קשר
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">
              יצירת קשר
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0543175631"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>054-3175631</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>שדרות ז'בוטינסקי, קריית ים</span>
              </div>
              <a
                href="https://instagram.com/alin.cosmetics__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>alin.cosmetics__</span>
              </a>
              <a
                href="https://www.youtube.com/@AlinCosmeticsIsrael"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>AlinCosmeticsIsrael</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gold-100 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Alin Cosmetics. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
