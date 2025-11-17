"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/", label: "בית" },
  { href: "/treatments", label: "טיפולים" },
  { href: "/about", label: "אודות" },
  { href: "/testimonials", label: "המלצות" },
  { href: "/gallery", label: "גלריה" },
  { href: "/contact", label: "צור קשר" },
]

export function Navigation({ placement = "top" }: { placement?: "top" | "afterHero" }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Hide top navigation on homepage for desktop only
  const hideOnHomepageDesktop = placement === "top" && pathname === "/"

  return (
    <nav className={cn(
      "sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gold-100",
      hideOnHomepageDesktop && "lg:hidden",
      placement === "afterHero" && "static"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Alin Cosmetics"
              width={350}
              height={125}
              className="h-24 md:h-28 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 group",
                    pathname === item.href
                      ? "text-gold-400"
                      : "text-gray-700 hover:text-gold-400"
                  )}
                >
                  {item.label}
                  {/* Underline effect */}
                  <span
                    className={cn(
                      "absolute bottom-0 right-0 h-0.5 bg-gold-400 transition-all duration-300",
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
                {/* Separator */}
                {index < navItems.length - 1 && (
                  <div className="h-4 w-px bg-gold-200" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-cream-50 rounded-lg transition-colors"
            aria-label="תפריט"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-4 border-t border-gold-100">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg",
                    pathname === item.href
                      ? "text-gold-400 bg-gold-50"
                      : "text-gray-700 hover:text-gold-400 hover:bg-cream-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
