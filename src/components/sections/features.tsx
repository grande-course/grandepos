"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/section-wrapper";

const features = [
  {
    title: "Manajemen Harga dan Tipe Penjualan",
    description:
      "Kami menyediakan fitur pengelolaan harga produk, beserta fitur untuk mengelola tipe penjualan, sehingga Anda dapat mengatur biaya pajak dan level harga yang Anda gunakan pada sistem POS.",
    image: "/images/features/pos-kasir.png",
  },
  {
    title: "Kelola Paket Produk",
    description:
      "Buat paket bundling dengan harga khusus, atur komponen produk, dan kelola status aktif langsung dari Grande Backoffice.",
    image: "/images/features/paket.png",
  },
  {
    title: "Aktivasi E-Wallet",
    description:
      "Aktifkan pembayaran digital untuk pelanggan. Unggah dokumen, hubungkan rekening bank, dan gunakan e-wallet saat transaksi di kasir.",
    image: "/images/features/ewallet.png",
  },
];

export default function FeaturesSection() {
  return (
    <SectionWrapper id="fitur" className="bg-muted/30">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
          Fitur Unggulan <span className="text-gold">Grande POS</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Fitur lengkap yang dirancang untuk membantu Anda mengelola bisnis
          dengan lebih efisien dan mudah.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
