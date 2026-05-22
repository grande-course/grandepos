"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Tersedia beragam fitur lengkap",
  "Performa handal dan ringan",
  "Sinkronisasi data realtime",
  "Keamanan data yang terjamin",
  "Percobaan gratis selama 14 hari",
];

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden bg-navy"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-block w-fit rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light"
            >
              #GrandePosBisa!
            </motion.span>

            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Solusi Aplikasi Kasir{" "}
              <span className="text-gold-light">Serba Bisa</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Jadikan kami bagian dalam perjalananmu! Grande POS hadir dengan
              fitur lengkap untuk mendukung bisnis Anda.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-2.5">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm text-white/80 sm:text-base"
                >
                  <CheckCircle size={18} className="flex-shrink-0 text-gold" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/6281230155775"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg bg-gold px-6 py-3 text-sm font-bold text-white shadow-lg shadow-gold/25 transition-colors hover:bg-gold-dark sm:px-8 sm:py-3.5 sm:text-base"
              >
                Coba Gratis 14 Hari
              </motion.a>
              <motion.a
                href="#kontak"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#kontak")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-8 sm:py-3.5 sm:text-base"
              >
                Hubungi Kami
              </motion.a>
            </div>
          </motion.div>

          {/* Right — Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 rounded-2xl bg-gold/10 blur-2xl" />
              <Image
                src="/images/hero/SG - Grande POS.svg"
                alt="Grande POS Application"
                width={600}
                height={500}
                className="relative w-full drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
