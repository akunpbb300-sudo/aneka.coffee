# Aneka Coffee — Digital Experience

**Satu Scan, Semua Pengalaman Aneka Coffee.**

Prototype website fungsional (bukan mockup) untuk implementasi hasil Design Thinking UMKM **Aneka Coffee**. Diakses lewat satu QR Code yang ditempel di meja, kasir, banner, atau media sosial — tanpa perlu install aplikasi Android/iOS.

## 🧱 Struktur Project

```
AnekaCoffee/
├── index.html      → seluruh struktur & konten halaman
├── style.css       → seluruh styling, animasi, dan responsive layout
├── script.js       → seluruh interaktivitas (vanilla JS)
├── assets/
│   └── logo.png     → logo Aneka Coffee
└── README.md
```

## 🛠️ Teknologi

- HTML5
- CSS3 (custom properties, glassmorphism, animasi native)
- Vanilla JavaScript (tanpa framework/library apa pun)

Tidak menggunakan React, Vue, Angular, Bootstrap, Tailwind, PHP, atau Laravel.

## 🎨 Desain

- **Warna:** Primary `#5C3B2E`, Secondary `#F8F3EC`, Accent `#C98A4A`
- **Font:** Poppins (display) & Inter (body), via Google Fonts
- **Gaya:** Premium, modern, coffee aesthetic, glassmorphism, mobile-first

## 📱 Alur Halaman

Splash Screen → Landing Page → Hero → Explore Services → Best Seller →
Digital Menu → Promo → Membership → Cerita Aneka Coffee → Lokasi →
Instagram → Google Review → WhatsApp → Footer

## ✨ Fitur Utama

- Splash screen dengan animasi cup & steam
- Navbar glass yang berubah saat discroll + menu mobile (hamburger)
- Hero section dengan ilustrasi cangkir kopi animasi
- Kartu layanan (Explore Services) dengan hover animation
- Slider Best Seller horizontal (tombol prev/next)
- Digital Menu dengan **search** dan **filter kategori** real-time
- Promo grid (Buy 2 Get 1, Happy Hour, Diskon Mahasiswa, Voucher Member)
- Digital Loyalty Card dengan progress bar poin animasi
- Timeline cerita brand (2018 → Medan → Bogor → Sekarang)
- Section lokasi dengan Google Maps embed + tombol "Buka di Maps"
- Grid preview Instagram
- Google Review dengan rating & testimoni
- Floating WhatsApp dengan quick reply message
- Scroll reveal (fade up/down/zoom), smooth scroll, dan tombol "kembali ke atas"

## ▶️ Cara Menjalankan

1. Buka folder `AnekaCoffee/` di **Visual Studio Code**.
2. Install ekstensi **Live Server** (jika belum ada).
3. Klik kanan pada `index.html` → **Open with Live Server**.
4. Website akan terbuka otomatis di browser (`http://127.0.0.1:5500`).

Tidak memerlukan instalasi Node.js, npm, ataupun server backend apa pun — murni statis (HTML/CSS/JS).

## 🔧 Kustomisasi Cepat

| Yang ingin diubah        | Lokasi                                   |
|---------------------------|-------------------------------------------|
| Nomor WhatsApp             | `script.js` → variabel `WA_NUMBER`        |
| Alamat & jam operasional   | `index.html` → section `#lokasi`          |
| Menu & harga                | `script.js` → array `menuItems`           |
| Best seller                 | `script.js` → array `bestSellers`         |
| Warna brand                | `style.css` → variabel `:root`            |

---
Dibuat sebagai prototype implementasi Design Thinking untuk UMKM Aneka Coffee.
