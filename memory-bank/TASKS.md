# Task List — Grande POS Landing Page

## Phase 1: Project Setup ✅

- [x] **1.1** Inisialisasi project Next.js (App Router, TypeScript)
- [x] **1.2** Install dan konfigurasi Tailwind CSS v4
- [x] **1.3** Install dan setup Shadcn/ui (base-ui based)
- [x] **1.4** Install Framer Motion
- [x] **1.5** Konfigurasi font Plus Jakarta Sans (Google Fonts via `next/font`)
- [x] **1.6** Konfigurasi `next.config.ts` (Vercel deployment, tanpa static export)
- [x] **1.7** Setup favicon (`/icons/favicon.svg`) via metadata icons
- [x] **1.8** Setup theme/color tokens di globals.css (dark navy, gold accent, brand colors)
- [x] **1.9** Buat layout dasar (`app/layout.tsx`) dengan font dan metadata SEO

## Phase 2: Komponen Umum ✅

- [x] **2.1** Buat komponen `Navbar` (`src/components/navbar.tsx`) — logo, menu navigasi (tanpa tombol CTA), hide on scroll down / show on scroll up, transparent → solid transition, hamburger mobile menu
- [x] **2.2** Buat komponen `Footer` (`src/components/footer.tsx`) — logo white, navigasi cepat, info kontak, copyright, #GrandePosBisa!
- [x] **2.3** Button component (via Shadcn/ui) — `src/components/ui/button.tsx`
- [x] **2.4** Buat komponen `SectionWrapper` (`src/components/section-wrapper.tsx`) — container dengan animasi scroll-triggered (Framer Motion)
- [x] **2.5** Buat komponen `WhatsAppFloat` (`src/components/whatsapp-float.tsx`) — floating WhatsApp button pojok kanan bawah

## Phase 3: Implementasi Section ✅

- [x] **3.1** **Hero Section** (`src/components/sections/hero.tsx`) — split layout, teks + CTA kiri, mockup kanan, background hero-bg.jpg + dark overlay, checklist keunggulan
- [x] **3.2** **About Section** (`src/components/sections/about.tsx`) — deskripsi Grande POS, ilustrasi benefits.png, 4 keunggulan cards, light background
- [x] **3.3** **Cara Kerja Section** (`src/components/sections/how-it-works.tsx`) — 3 langkah (Daftar → Setup → Transaksi), connector line, light background
- [x] **3.4** **Fitur Unggulan Section** (`src/components/sections/features.tsx`) — 3 card fitur dengan gambar, judul, deskripsi, hover effects, light background
- [x] **3.5** **FAQ Section** (`src/components/sections/faq.tsx`) — custom accordion dengan Framer Motion AnimatePresence, 3 pertanyaan, judul gold saat active, light background
- [x] **3.6** **Kontak Section** (`src/components/sections/contact.tsx`) — info kontak (email, phone, address), ikon email.png & whatsapp.png
- [x] ~~**CTA Section** — dihapus atas permintaan user~~

## Phase 4: Integrasi Halaman ✅

- [x] **4.1** Susun semua section di `app/page.tsx` (Navbar → Hero → About → Cara Kerja → Fitur → FAQ → Kontak → Footer + WhatsApp Float)
- [x] **4.2** Implementasi smooth scroll navigasi antar section (dengan header offset 80px)
- [x] **4.3** Pasang link WhatsApp pada tombol CTA hero + floating button (`https://wa.me/6281230155775`)

## Phase 5: Responsive & Polish ✅

- [x] **5.1** Responsive layout — mobile, tablet, desktop — semua section menggunakan responsive grid/flex
- [x] **5.2** Animasi Framer Motion — fade-in, slide-up, scale, staggered delays
- [x] **5.3** Optimasi gambar — Next.js Image component
- [x] **5.4** Aksesibilitas dasar — alt text, aria-label, semantic HTML
- [x] **5.5** Test build — berhasil

## Phase 6: Deployment ✅

- [x] **6.1** Meta tags & SEO (title, description, keywords, Open Graph, favicon)
- [x] **6.2** Push ke GitHub (`grande-course/grandepos`)
- [x] **6.3** Deploy ke Vercel
- [ ] **6.4** Performance check (Lighthouse) — belum dilakukan

## Catatan Teknis

- Next.js 16.2.6, React 19.2.4
- Shadcn/ui menggunakan `@base-ui/react` (bukan Radix)
- FAQ menggunakan custom accordion (Framer Motion) karena base-ui accordion animasi tidak berfungsi
- Deploy di Vercel (tanpa static export) — auto-deploy dari GitHub
- GitHub repo: https://github.com/grande-course/grandepos
