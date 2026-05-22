# Product Requirements Document (PRD)
# Grande POS — Landing Page Website

## 1. Overview

**Nama Produk:** Grande POS
**Jenis Website:** Landing Page (Single Page)
**Tujuan:** Memperkenalkan Grande POS sebagai solusi aplikasi kasir serba bisa, menarik calon pelanggan, dan mengarahkan mereka untuk mencoba gratis melalui WhatsApp.
**Tagline:** "Solusi Aplikasi Kasir Serba Bisa"
**Hashtag:** #GrandePosBisa!

**Perusahaan:** PT Panca Logam Tirta Jaya
**Alamat:** Darmo Bavarian C11, Surabaya

---

## 2. Target Audience

- Pemilik usaha kecil-menengah (UMKM) di Indonesia
- Toko retail, F&B, dan bisnis yang membutuhkan sistem POS
- User yang mencari solusi kasir digital yang mudah, lengkap, dan terjangkau

---

## 3. Technical Stack

| Teknologi | Detail |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| React | 19.2.4 |
| Build Output | Vercel (server-rendered, tanpa static export) |
| Styling | Tailwind CSS v4 |
| Component Library | Shadcn/ui (base-ui based) |
| Animasi | Framer Motion 12.x |
| Font | Plus Jakarta Sans (Google Fonts via `next/font`) |
| Package Manager | npm |
| Bahasa Website | Full Bahasa Indonesia |
| Deployment | Vercel (GitHub: grande-course/grandepos) |
| Status | ✅ Deployed ke Vercel |

---

## 4. Design Decisions

### 4.1 Color Scheme — Hybrid
- **Dark sections:** Hero section menggunakan background gelap (dark navy/charcoal)
- **Light sections:** About, Fitur, FAQ, Kontak menggunakan background putih/light
- **Aksen:** Gold dari logo (`#b88133` → `#fadb8d`) untuk tombol, highlight, dan elemen penting
- **Brand colors dari logo:**
  - Silver/metallic gradient: `#a3adae` → `#f3eeff` (huruf "Grande")
  - Gold gradient: `#b88133` → `#fadb8d` (huruf "POS")

### 4.2 Typography
- **Font utama:** Plus Jakarta Sans
- Digunakan untuk seluruh website (heading, body, navigasi, tombol)

### 4.3 Animasi — Moderate (Framer Motion)
- Scroll-triggered animations (fade-in, slide-up saat section masuk viewport)
- Hover effects pada tombol dan card
- Smooth scroll navigasi antar section
- Smooth transitions antar state

### 4.4 Navbar
- **Behavior:** Hide on scroll down, show on scroll up
- **Style:** Transparent di hero section → solid (dengan backdrop blur) setelah scroll melewati hero
- **Mobile:** Hamburger menu dengan slide-in drawer

### 4.5 Hero Section
- **Layout:** Split — teks + CTA di kiri, mockup POS (`SG - Grande POS.svg`) di kanan
- **Background:** `hero-bg.jpg` dengan dark overlay
- **CTA Primary:** "Subscribe" → Xendit Invoice (Rp 100.000 — Langganan Grande POS 1 Bulan)
- **CTA Secondary:** "Hubungi Kami" → smooth scroll ke section kontak

---

## 5. Struktur Section

### 5.1 Header / Navbar
- Logo brand (`grande-white.png`)
- Menu navigasi: Beranda, Tentang, Fitur, FAQ, Kontak (tanpa tombol CTA)
- Responsive: hamburger menu di mobile/tablet

### 5.2 Hero Section
**Headline:** "Solusi Aplikasi Kasir Serba Bisa"
**Subheadline:** "Jadikan kami bagian dalam perjalananmu!"

**Checklist keunggulan:**
- Tersedia beragam fitur lengkap
- Performa handal dan ringan
- Sinkronisasi data realtime
- Keamanan data yang terjamin
- Percobaan gratis selama 14 hari

**Tombol:**
- Primary: "Subscribe" → Xendit Invoice (Rp 100.000, durasi 24 jam)
- Secondary: "Hubungi Kami" → scroll ke section kontak

**Visual:** Mockup POS di sebelah kanan (`SG - Grande POS.svg`)
**Background:** `hero-bg.jpg` + dark overlay

### 5.3 About Section
**Judul:** "Apa itu Grande POS?"
**Konten:** Grande POS adalah sistem POS yang dirancang untuk berbagai usaha, menawarkan sistem POS dengan beragam fitur yang mudah digunakan. Keunggulan sistem POS kami salah satunya adalah bisa diakses secara online dan offline.

**Visual:** Ilustrasi benefits (`benefits.png`)

### 5.4 Fitur Unggulan Section
**Judul:** "Fitur Unggulan Grande POS"

**Fitur 1 — Manajemen Harga dan Tipe Penjualan**
- Ikon/gambar: `pos-kasir.png`
- Deskripsi: Kami menyediakan fitur pengelolaan harga produk, beserta fitur untuk mengelola tipe penjualan, sehingga Anda dapat mengatur biaya pajak dan level harga yang Anda gunakan pada sistem POS.

**Fitur 2 — Kelola Paket Produk**
- Ikon/gambar: `paket.png`
- Deskripsi: Buat paket bundling dengan harga khusus, atur komponen produk, dan kelola status aktif langsung dari Grande Backoffice.

**Fitur 3 — Aktivasi E-Wallet**
- Ikon/gambar: `ewallet.png`
- Deskripsi: Aktifkan pembayaran digital untuk pelanggan. Unggah dokumen, hubungkan rekening bank, dan gunakan e-wallet saat transaksi di kasir.

### 5.5 Cara Kerja Section (How It Works)
**Judul:** "Mulai dalam 3 Langkah Mudah"

**Langkah 1 — Daftar Akun**
- Hubungi melalui WhatsApp untuk mendaftar dan dapatkan akses percobaan gratis 14 hari.

**Langkah 2 — Setup Toko**
- Atur produk, harga, dan tipe penjualan melalui Grande Backoffice.

**Langkah 3 — Mulai Transaksi**
- Gunakan Grande POS untuk melayani pelanggan. Terima pembayaran tunai maupun e-wallet.

### 5.6 FAQ Section
**Judul:** "Pertanyaan yang Sering Diajukan"

**Q1:** Apa itu Grande POS?
**A1:** Grande POS adalah sistem POS yang dirancang untuk berbagai usaha, kami menawarkan sistem POS dengan beragam fitur yang mudah digunakan. Keunggulan sistem POS kami salah satunya adalah bisa diakses secara online dan offline.

**Q2:** Perangkat seperti apa yang perlu dipersiapkan untuk menggunakan Grande POS?
**A2:** Anda dapat menggunakan Grande POS melalui perangkat seperti komputer, laptop, maupun tablet.

**Q3:** Apakah Grande POS memiliki produk pendukung?
**A3:** Tentu, saat ini kami menyediakan Grande Backoffice sebagai alat manajemen lengkap untuk kelola outlet, produk, operasional POS, promosi, ewallet, pelanggan, karyawan, dan lisensi perangkat. Anda juga dapat menganalisa aktifitas bisnis anda melalui fitur laporan.

### 5.7 Kontak + Footer
**Informasi kontak:**
- Email: cs@grandepos.io
- Phone: +62 812 3015 775
- Address: PT Panca Logam Tirta Jaya, Darmo Bavarian C11, Surabaya

**Ikon kontak:** `email.png`, `whatsapp.png`

**Footer:**
- Logo (`grande-white.png` untuk footer dark)
- Navigasi cepat
- Kontak info
- Copyright
- #GrandePosBisa!

---

## 6. Asset yang Tersedia

```
public/
├── icons/
│   └── favicon.svg
├── images/
│   ├── features/
│   │   ├── ewallet.png
│   │   ├── paket.png
│   │   └── pos-kasir.png
│   ├── hero/
│   │   ├── hero-bg.jpg
│   │   └── SG - Grande POS.svg
│   ├── icons/
│   │   ├── email.png
│   │   └── whatsapp.png
│   ├── illustrations/
│   │   └── benefits.png
│   ├── logo/
│   │   ├── brand-logo.png
│   │   ├── grande-white.png
│   │   └── logo.svg
│   └── testimonials/ (kosong — untuk pengembangan nanti)
```

---

## 7. Responsive Breakpoints

| Device | Breakpoint |
|---|---|
| Mobile | < 640px |
| Tablet | 640px — 1024px |
| Desktop | > 1024px |

Semua section harus responsive dan user-friendly di ketiga ukuran device.

---

## 8. Non-Goals (Tidak termasuk saat ini)

- Xendit webhook untuk konfirmasi pembayaran otomatis
- Halaman pricing/harga
- Section testimonial
- Multi-bahasa (English)
- Backend/API integration
- User authentication/dashboard
- Blog/artikel
