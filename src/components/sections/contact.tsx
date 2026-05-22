"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/section-wrapper";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "cs@grandepos.io",
    href: "mailto:cs@grandepos.io",
    iconImage: "/images/icons/email.png",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 812 3015 5775",
    href: "https://wa.me/6281230155775",
    iconImage: "/images/icons/whatsapp.png",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "PT Panca Logam Tirta Jaya\nDarmo Bavarian C11, Surabaya",
    href: null,
    iconImage: null,
  },
];

export default function ContactSection() {
  return (
    <SectionWrapper id="kontak">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
          Hubungi <span className="text-gold">Kami</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Punya pertanyaan atau ingin tahu lebih lanjut? Jangan ragu untuk
          menghubungi kami.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
        {contactItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center rounded-xl border border-border p-6 text-center transition-shadow hover:shadow-lg"
          >
            {item.iconImage ? (
              <Image
                src={item.iconImage}
                alt={item.label}
                width={40}
                height={40}
                className="mb-3 h-10 w-10"
              />
            ) : (
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                <item.icon size={20} className="text-gold" />
              </div>
            )}
            <h3 className="text-sm font-semibold text-navy">{item.label}</h3>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-1 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">
                {item.value}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
