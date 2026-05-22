# Summary Keputusan — Grande POS Landing Page

Ringkasan hasil sesi tanya jawab untuk pembangunan website landing page Grande POS.

**Status: ✅ Deployed ke Vercel** — GitHub repo: `grande-course/grandepos`

---

## Keputusan Desain

| # | Aspek | Keputusan | Catatan |
|---|---|---|---|
| 1 | Struktur Section | Header, Hero, About, Cara Kerja, Fitur, FAQ, Kontak + Footer | CTA section dihapus. Cara Kerja ditambahkan. Pricing & Testimonial di-skip |
| 2 | Color Scheme | Hybrid — dark (hero), light (section lain), aksen gold | |
| 3 | Font | Plus Jakarta Sans | |
| 4 | Bahasa | Full Bahasa Indonesia | |
| 5 | Animasi | Moderate — Framer Motion (scroll-triggered, hover, transitions) | |
| 6 | Navbar | Hide on scroll down, show on scroll up. Transparent → solid. Hamburger di mobile | Tanpa tombol CTA |
| 7 | Hero Layout | Split — teks + CTA kiri, mockup kanan, hero-bg.jpg + dark overlay | Background statis (parallax dicoba tapi dibatalkan) |
| 8 | CTA Utama | "Coba Gratis 14 Hari" → WhatsApp (hanya di hero). "Hubungi Kami" → scroll kontak | |
| 9 | WhatsApp Float | Floating button pojok kanan bawah, muncul setelah scroll | |

## Keputusan Teknis

| # | Aspek | Keputusan | Catatan |
|---|---|---|---|
| 10 | Framework | Next.js 16.2.6 (App Router) | |
| 11 | Styling | Tailwind CSS v4 + Shadcn/ui (base-ui) | |
| 12 | Deployment | Vercel (auto-deploy dari GitHub) | Static export dihapus untuk Vercel |
| 13 | Package Manager | npm | |
| 14 | FAQ Accordion | Custom Framer Motion (bukan Shadcn Accordion) | Base-ui accordion animasi bermasalah |

## Informasi Kontak (untuk website)

- **Email:** cs@grandepos.io
- **Phone:** +62 812 3015 5775
- **WhatsApp:** +62 812 3015 5775
- **Alamat:** PT Panca Logam Tirta Jaya, Darmo Bavarian C11, Surabaya

## Struktur File Implementasi

```
src/
├── app/
│   ├── layout.tsx              — Root layout, Plus Jakarta Sans, metadata SEO, favicon
│   ├── page.tsx                — Halaman utama, menyusun semua section
│   └── globals.css             — Tailwind + Shadcn theme, brand colors
├── components/
│   ├── navbar.tsx              — Navbar hide/show on scroll (tanpa tombol CTA)
│   ├── footer.tsx              — Footer dengan kontak & navigasi
│   ├── section-wrapper.tsx     — Wrapper animasi scroll-triggered
│   ├── whatsapp-float.tsx      — Floating WhatsApp button
│   ├── sections/
│   │   ├── hero.tsx            — Hero split layout
│   │   ├── about.tsx           — About + 4 keunggulan cards
│   │   ├── how-it-works.tsx    — 3 langkah cara kerja
│   │   ├── features.tsx        — 3 fitur cards dengan gambar
│   │   ├── faq.tsx             — Custom accordion FAQ (Framer Motion)
│   │   └── contact.tsx         — Kontak cards
│   └── ui/                     — Shadcn/ui components (button, accordion)
├── lib/
│   └── utils.ts                — cn() utility
```

## Referensi

- Website referensi: https://sites.google.com/view/grandepos
- GitHub: https://github.com/grande-course/grandepos
- Konten referensi: `public/Text File.txt`
- Asset: `public/images/` dan `public/icons/`
