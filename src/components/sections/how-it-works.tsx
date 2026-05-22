"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, ShoppingCart } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const steps = [
  {
    icon: UserPlus,
    step: "1",
    title: "Daftar Akun",
    description:
      "Hubungi kami melalui WhatsApp untuk mendaftar dan dapatkan akses percobaan gratis selama 14 hari.",
  },
  {
    icon: Settings,
    step: "2",
    title: "Setup Toko",
    description:
      "Atur produk, harga, dan tipe penjualan Anda melalui Grande Backoffice dengan mudah dan cepat.",
  },
  {
    icon: ShoppingCart,
    step: "3",
    title: "Mulai Transaksi",
    description:
      "Gunakan Grande POS untuk melayani pelanggan. Terima pembayaran tunai maupun e-wallet dengan lancar.",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="cara-kerja">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
          Mulai dalam <span className="text-gold">3 Langkah</span> Mudah
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Tidak perlu ribet, Grande POS bisa langsung digunakan dalam hitungan
          menit.
        </p>
      </div>

      <div className="relative mt-12">
        {/* Connector line — desktop only */}
        <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block" />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number + icon */}
              <div className="relative mb-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 ring-4 ring-white">
                  <item.icon size={28} className="text-gold" />
                </div>
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-white shadow-md">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
