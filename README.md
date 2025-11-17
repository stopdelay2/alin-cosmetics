# Alin Cosmetics - אתר קוסמטיקה רפואית

אתר מלא ומקצועי לעסק קוסמטיקה רפואית, עם מערכת ניהול תוכן (CMS) מתקדמת.

## 🌟 תכונות עיקריות

### אתר ציבורי
- **עמוד בית** - הצגה מושכת של העסק והשירותים
- **טיפולים** - רשימת טיפולים מפורטת עם הסברים
- **אודות** - סיפור המותג והגישה המקצועית
- **המלצות** - המלצות לקוחות אמיתיות
- **גלריה** - תמונות לפני ואחרי של טיפולים
- **צור קשר** - טופס יצירת קשר + אינטגרציה WhatsApp

### Backoffice (מערכת ניהול תוכן)
- **לוח בקרה** - סקירה כללית של התוכן
- **ניהול מאמרים** - עורך TipTap מתקדם עם SEO
- **ניהול גלריה** - העלאה וניהול תמונות Before/After
- **ניהול המלצות** - הוספה ועריכת המלצות לקוחות

### טכנולוגיות
- **Next.js 14** - React framework עם App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling מודרני
- **shadcn/ui** - קומפוננטות UI מעוצבות
- **Prisma** - ORM לניהול מסד נתונים
- **SQLite** - מסד נתונים (קל לשדרוג ל-PostgreSQL)
- **TipTap** - עורך תוכן עשיר

## 🚀 התקנה והפעלה

### דרישות מקדימות
- Node.js 18+
- npm או yarn

### שלב 1: התקנת תלויות
```bash
npm install
```

### שלב 2: הגדרת מסד הנתונים
```bash
# יצירת הטבלאות במסד הנתונים
npx prisma generate
npx prisma db push
```

### שלב 3: הפעלת הפרויקט
```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

האתר יהיה זמין בכתובת: http://localhost:3000

## 📁 מבנה הפרויקט

```
alin/
├── app/                      # Next.js App Router
│   ├── (public)/            # דפים ציבוריים
│   │   ├── page.tsx         # עמוד הבית
│   │   ├── treatments/      # עמוד טיפולים
│   │   ├── about/           # עמוד אודות
│   │   ├── testimonials/    # עמוד המלצות
│   │   ├── gallery/         # גלריה
│   │   └── contact/         # צור קשר
│   ├── admin/               # Backoffice
│   │   ├── posts/           # ניהול מאמרים
│   │   ├── gallery/         # ניהול גלריה
│   │   └── testimonials/    # ניהול המלצות
│   └── api/                 # API Routes
│       ├── posts/
│       ├── gallery/
│       └── testimonials/
├── components/              # React Components
│   ├── ui/                 # shadcn/ui components
│   ├── navigation.tsx      # Navigation bar
│   ├── footer.tsx          # Footer
│   ├── whatsapp-button.tsx # WhatsApp floating button
│   └── tiptap-editor.tsx   # TipTap editor
├── lib/                    # Utilities
│   ├── prisma.ts          # Prisma client
│   └── utils.ts           # Helper functions
├── prisma/                # Prisma schema
│   └── schema.prisma      # Database schema
└── public/                # Static files
    └── images/
```

## 🎨 עיצוב ו-Branding

האתר מעוצב בסגנון נשי, רך ומקצועי:
- **צבעים**: קרם, זהב בהיר, ורוד עדין
- **פונטים**: Playfair Display (כותרות), Inter (טקסט)
- **אנימציות**: עדינות ולא פולשניות
- **Responsive**: מותאם לכל המסכים

## 🗄️ מסד נתונים

### מודלים
1. **Post** - מאמרים בבלוג
   - כותרת, slug, תוכן, SEO meta tags

2. **GalleryItem** - תמונות גלריה
   - תמונות before/after, קטגוריה, מספר טיפולים

3. **Testimonial** - המלצות
   - שם, טקסט, סוג טיפול

4. **Settings** - הגדרות כלליות
   - Key-value pairs

### שדרוג ל-PostgreSQL
לשדרוג ל-PostgreSQL בפרודקשן:

1. עדכן את `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. עדכן את `.env`:
```env
DATABASE_URL="postgresql://user:password@host:5432/database"
```

3. הרץ migration:
```bash
npx prisma migrate dev
```

## 🔧 הגדרות נוספות

### WhatsApp Integration
עדכן את מספר הטלפון ב-`components/whatsapp-button.tsx`:
```typescript
const phoneNumber = "972543175631" // שנה למספר שלך
```

### Google Analytics
להוסיף Google Analytics, הוסף את הקוד ב-`app/layout.tsx`.

### SEO
כל דף כולל metadata מותאמת. ניתן לערוך ב:
- Meta title
- Meta description
- OG images
- Structured data

## 📱 WhatsApp Integration

כפתור WhatsApp צף קיים בכל דף. לחיצה עליו פותחת שיחה עם הודעה מוכנה מראש.

## 🔐 אבטחה

**חשוב:** ה-Backoffice כרגע לא מוגן בהזדהות.

להוספת authentication:
1. התקן NextAuth.js
2. הוסף middleware לנתיבי `/admin`
3. צור מערכת login

```bash
npm install next-auth
```

## 🚀 Deploy

### Vercel (מומלץ)
```bash
# התקן Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 TODO List

- [ ] הוסף authentication ל-Backoffice
- [ ] שילוב עם שירות העלאת תמונות (Cloudinary/S3)
- [ ] הוסף Google Analytics
- [ ] צור blog section ציבורי
- [ ] הוסף email notifications
- [ ] שילוב עם לוח שנה לקביעת תורים

## 🤝 תמיכה

לשאלות או בעיות, פתח issue בגיטהאב או צור קשר.

## 📄 רישיון

MIT License - חופשי לשימוש מסחרי.

---

**נבנה עם ❤️ ל-Alin Cosmetics**
