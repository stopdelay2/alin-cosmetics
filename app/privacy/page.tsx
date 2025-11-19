import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "מדיניות פרטיות | Alin Cosmetics",
  description: "מדיניות פרטיות של Alin Cosmetics - כיצד אנו שומרים על הפרטיות שלך",
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero - Black Background */}
      <section className="min-h-[40vh] bg-black text-white relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/10 rounded-full" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-white" />
              <Shield className="w-8 h-8 text-gold-400" />
              <div className="h-px w-16 bg-white" />
            </div>

            <div className="text-4xl md:text-5xl font-bold leading-tight">
              📜 מדיניות פרטיות
            </div>

            <p className="text-xl text-white/80">
              Alin Cosmetics
            </p>

            <p className="text-sm text-white/60">
              עודכן: 20.11.2025
            </p>
          </div>
        </div>
      </section>

      {/* Content - White Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-black/80 leading-relaxed space-y-8">
              <p>
                ברוכה הבאה לאתר Alin Cosmetics (להלן: "האתר").
                האתר מופעל על-ידי אלין רודנקו, בעלת קליניקת טיפולי פנים בקריית ים.
              </p>

              <p>
                מדיניות פרטיות זו נכתבה בהתאם לדיני מדינת ישראל, לרבות חוק הגנת הפרטיות, התשמ"א-1981, תקנות הגנת הפרטיות (אבטחת מידע), וחוק התקשורת (בזק ושידורים) – חוק הספאם.
              </p>

              <p className="font-bold text-black">
                השימוש באתר מהווה הסכמה למדיניות זו.
              </p>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  1. מידע שאנו אוספים
                </h2>

                <h3 className="text-xl font-bold text-black mb-3 mt-6">
                  1.1 מידע שנמסר על-ידך מיוזמתך
                </h3>
                <p>ביצירת קשר דרך האתר, WhatsApp או טלפון:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>שם</li>
                  <li>טלפון</li>
                  <li>אימייל</li>
                  <li>תוכן הפנייה</li>
                  <li>פרטים הדרושים לקביעת תור</li>
                </ul>

                <h3 className="text-xl font-bold text-black mb-3 mt-6">
                  1.2 מידע הנאסף באופן אוטומטי
                </h3>
                <p>באמצעות Cookies ושירותי אנליטיקה:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>כתובת IP</li>
                  <li>סוג המכשיר והדפדפן</li>
                  <li>עמודים בהם ביקרת</li>
                  <li>זמן שהייה</li>
                  <li>אינטראקציות עם כפתורים (WhatsApp / קביעת תור)</li>
                </ul>

                <h3 className="text-xl font-bold text-black mb-3 mt-6">
                  1.3 מידע מצד שלישי
                </h3>
                <p>במידה ואישרת:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>Facebook/Instagram Pixel</li>
                  <li>Google Analytics / Ads</li>
                  <li>WhatsApp Business</li>
                </ul>
                <p>המידע משמש לניתוח פעילות ולשיפור השירות.</p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  2. מטרות השימוש במידע
                </h2>
                <p>אנו משתמשים במידע לצורך:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>מענה לפניות שלך</li>
                  <li>קביעת תורים בקליניקה</li>
                  <li>מתן שירותים מקצועיים</li>
                  <li>שיפור האתר וחוויית המשתמש</li>
                  <li>ניתוח נתוני פרסום ומעקב אחרי המרות</li>
                  <li>שליחת דיוור (רק בהסכמה מפורשת)</li>
                  <li>עמידה בהוראות הדין בישראל</li>
                </ul>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  3. מסירת מידע לצד שלישי
                </h2>
                <p>אנו עשויים להעביר מידע לגופים הבאים במידת הצורך:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>ספקי אחסון ושרתים</li>
                  <li>Google (Analytics, Ads, Tag Manager)</li>
                  <li>Meta (Facebook, Instagram)</li>
                  <li>WhatsApp Business</li>
                  <li>אנשי מקצוע המסייעים בניהול האתר או הפרסום</li>
                  <li>ייעוץ משפטי במקרה הצורך</li>
                </ul>
                <p className="font-bold text-black mt-4">
                  לא נעביר מידע לצד ג' לצרכים מסחריים שאינם קשורים אלינו.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  4. Cookies וטכנולוגיות מעקב
                </h2>
                <p>האתר עושה שימוש ב-Cookies לצורך:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>תפקוד תקין של האתר</li>
                  <li>התאמת חוויית משתמש</li>
                  <li>מדידת תנועה ופעילות</li>
                  <li>ביצוע פרסום ממוקד (במידה ואישרת)</li>
                </ul>
                <p className="mt-4">ניתן לחסום Cookies דרך הגדרות הדפדפן.</p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  5. שמירת מידע ואבטחתו
                </h2>
                <p>
                  המידע נשמר במערכות מאובטחות ומוגנות בהתאם לדרישות תקנות הגנת הפרטיות (אבטחת מידע).
                  אנו נוקטים באמצעים סבירים למניעת פריצה, גניבה או שימוש בלתי מורשה.
                </p>
                <p className="mt-4">
                  המידע יישמר כל עוד הוא נדרש לצורך מתן שירות או לצורך עמידה בדרישות החוק.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  6. זכויות המשתמשת
                </h2>
                <p>על פי חוק הגנת הפרטיות בישראל, עומדות לרשותך הזכויות הבאות:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li><strong>עיון</strong> – זכות לקבל מידע על הנתונים שנשמרו עלייך.</li>
                  <li><strong>תיקון</strong> – זכות לבקש תיקון מידע שגוי או לא מעודכן.</li>
                  <li><strong>מחיקה</strong> – זכות לבקש מחיקה, בכפוף להוראות החוק.</li>
                  <li><strong>הסרה מדיוור</strong> – זכות להודיע כי אינך מעוניינת בקבלת מסרים.</li>
                </ul>
                <p className="mt-4">
                  בקשות ניתן לשלוח לכתובת:<br />
                  📧 <a href="mailto:alincosmeticsglow@gmail.com" className="text-gold-400 hover:underline">alincosmeticsglow@gmail.com</a>
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  7. דיוור ושיווק (חוק הספאם)
                </h2>
                <p>
                  שליחת מסרים פרסומיים תיעשה רק בהסכמה מפורשת ("אישור למשלוח דבר פרסומת").
                  ניתן להסיר את עצמך מרשימת התפוצה בכל רגע באמצעות:
                </p>
                <ul className="list-disc mr-6 space-y-2 mt-4">
                  <li>שליחת "הסר"</li>
                  <li>פנייה ישירה ב-WhatsApp</li>
                  <li>פנייה באימייל</li>
                </ul>
                <p className="mt-4">
                  אנו מתחייבים לפעול לפי חוק התקשורת (בזק ושידורים), תשמ"ב-1982.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  8. קטינים
                </h2>
                <p>
                  השירות באתר מיועד לבגירים.
                  אם נודע לנו שנמסר מידע מקטין מתחת לגיל 18 ללא אישור הורה – המידע יימחק לבקשה.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  9. שינויים במדיניות
                </h2>
                <p>
                  ייתכנו שינויים ושדרוגים מעת לעת.
                  הגרסה המחייבת תופיע בעמוד זה.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  10. יצירת קשר
                </h2>
                <p>לשאלות בנוגע למדיניות הפרטיות:</p>
                <ul className="list-none space-y-2 mt-4">
                  <li>📧 <a href="mailto:alincosmeticsglow@gmail.com" className="text-gold-400 hover:underline">alincosmeticsglow@gmail.com</a></li>
                  <li>📞 <a href="tel:0543175631" className="text-gold-400 hover:underline">054-3175631</a></li>
                  <li>📍 קריית ים, ישראל</li>
                </ul>
              </div>

              <div className="pt-12 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-black text-white hover:bg-gold-400 hover:text-black"
                >
                  <Link href="/">חזרה לעמוד הבית</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
