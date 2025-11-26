"use client"

export function PromoBanner() {
  const content = (
    <>
      <span className="mx-8 text-sm font-medium">
        <span className="text-red-500 font-bold">BLACK FRIDAY</span> | מבצעים שאסור לפספס! הנחות על כל הטיפולים
      </span>
      <span className="mx-8 text-sm font-medium">
        <span className="text-gold-400">&#10038;</span> טיפול פנים ראשון ב-20% הנחה <span className="text-gold-400">&#10038;</span>
      </span>
      <span className="mx-8 text-sm font-medium">
        <span className="text-red-500 font-bold">BLACK FRIDAY</span> | מבצעים שאסור לפספס! הנחות על כל הטיפולים
      </span>
      <span className="mx-8 text-sm font-medium">
        <span className="text-gold-400">&#10038;</span> טיפול פנים ראשון ב-20% הנחה <span className="text-gold-400">&#10038;</span>
      </span>
    </>
  )

  return (
    <div className="bg-black text-white py-2 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {content}
        {content}
      </div>
    </div>
  )
}
