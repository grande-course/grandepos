"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/section-wrapper";

export default function CtaSection() {
  return (
    <SectionWrapper dark>
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold sm:text-3xl lg:text-4xl"
        >
          Siap Mengembangkan{" "}
          <span className="text-gold-light">Bisnis Anda</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mx-auto mt-4 max-w-xl text-white/70"
        >
          Coba Grande POS gratis selama 14 hari. Tanpa kartu kredit, tanpa
          komitmen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8"
        >
          <motion.a
            href="https://wa.me/6281230155775"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-lg bg-gold px-8 py-4 text-base font-bold text-white shadow-lg shadow-gold/25 transition-colors hover:bg-gold-dark sm:text-lg"
          >
            Coba Gratis 14 Hari
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
