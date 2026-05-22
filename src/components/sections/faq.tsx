"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const faqs = [
  {
    question: "Apa itu Grande POS?",
    answer:
      "Grande POS adalah sistem POS yang dirancang untuk berbagai usaha, kami menawarkan sistem POS dengan beragam fitur yang mudah digunakan. Keunggulan sistem POS kami salah satunya adalah bisa diakses secara online dan offline.",
  },
  {
    question:
      "Perangkat seperti apa yang perlu dipersiapkan untuk menggunakan Grande POS?",
    answer:
      "Anda dapat menggunakan Grande POS melalui perangkat seperti komputer, laptop, maupun tablet.",
  },
  {
    question: "Apakah Grande POS memiliki produk pendukung?",
    answer:
      "Tentu, saat ini kami menyediakan Grande Backoffice sebagai alat manajemen lengkap untuk kelola outlet, produk, operasional POS, promosi, ewallet, pelanggan, karyawan, dan lisensi perangkat. Anda juga dapat menganalisa aktifitas bisnis anda melalui fitur laporan.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Pertanyaan yang{" "}
            <span className="text-gold">Sering Diajukan</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Temukan jawaban atas pertanyaan umum tentang Grande POS.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className={`pr-4 text-base font-semibold transition-colors ${openIndex === i ? "text-gold" : "text-navy"}`}>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-gold" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
