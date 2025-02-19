
// React-da: react-i18next orqali ishlatiladi.
// Vue, Angular, Node.js kabi boshqa texnologiyalarda ham qo‘llab-quvvatlanadi.
// Tilni o‘zgartirish i18n.changeLanguage('uz') orqali amalga oshiriladi.
// Qo‘shimcha:
// Context API bilan integratsiya qilib, dasturni yanada soddalashtirish mumkin.
// Serverda ishlatish uchun i18next-express-middleware mavjud.
// 2. Props Drilling va uni hal qilish
// Props Drilling nima?
// Props drilling – bu ota komponentdan farzand komponentlarga kerakli ma’lumotni props orqali uzatish jarayoni.
// Agar komponent tuzilishi juda chuqur bo‘lsa, keraksiz props uzatish muammosi yuzaga keladi.

// Muammoning salbiy tomonlari:
// Ortib boruvchi murakkablik – kod tushunish qiyinlashadi.
// Keraksiz renderlar – har bir komponentda props o‘zgarishi bilan butun daraxt qayta render qilinishi mumkin.
//  Katta loyihalarda qiyinchilik tug‘dirishi – yangi komponentlar qo‘shilganda props ulashish majburiy bo‘ladi.

// Muammoni hal qilish usullari:
//  Context API – useContext orqali props o‘tkazmasdan ma’lumot olish.
//  Redux/Zustand/Recoil – markaziy state menejeri orqali ma’lumot boshqarish.
//  Component Composition (render props, HOC) – props drillingni minimal darajada ushlab turish.
//  Tanlangan komponentga ma’lumotni bevosita uzatish – faqat kerakli komponentga props uzatish.

// Eng yaxshi amaliyotlar:
// Katta loyihalarda Redux yoki Context API’ni ishlatish tavsiya etiladi.
// Agar faqat bitta yoki ikkita darajadagi komponentga uzatish kerak bo‘lsa, props yetarli bo‘lishi mumkin.
// 3. Error Handling (Xatolarni boshqarish)
// Xatolarni turlari:
//  Synchronous (sinxron) xatolar – kod ichida try...catch orqali ushlanadigan xatolar.
// Asynchronous (asinxron) xatolar – async/await yoki Promise orqali yuzaga keladigan xatolar.
//  Runtime errors (ishlash vaqtida yuzaga keladigan xatolar) – noto‘g‘ri props yoki state tufayli kelib chiqadigan xatolar.
//  Global errors (umumiy xatolar) – React yoki Node.js’ning global xatolarni ushlash mexanizmi orqali boshqariladi.

// Xatolarni boshqarish usullari:
// try...catch – sinxron kodlar uchun ishlatiladi.
// async/await va .catch() – asinxron operatsiyalar uchun kerak.
// React-da ErrorBoundary komponenti – UI qulashining oldini olish.
// Global xatolarni ushlash – window.onerror va process.on("uncaughtException").

// Eng yaxshi amaliyotlar:
// Har doim xatolarni log qilish – xatolik yuz berganda console.error() yoki logging service (masalan, Sentry) bilan saqlash.
// Fallback UI yaratish – ErrorBoundary orqali foydalanuvchiga tushunarli xabar ko‘rsatish.
// Katta loyihalar uchun global error handler ishlatish – window.onerror va process.on orqali barcha xatolarni nazorat qilish.