"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, Wifi, WifiOff, Shield } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const aboutPoints = [
  {
    icon: Monitor,
    title: "Multi Perangkat",
    desc: "Gunakan melalui komputer, laptop, maupun tablet.",
  },
  {
    icon: Wifi,
    title: "Akses Online",
    desc: "Sinkronisasi data realtime ke cloud dengan koneksi internet.",
  },
  {
    icon: WifiOff,
    title: "Akses Offline",
    desc: "Tetap bisa beroperasi tanpa koneksi internet.",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    desc: "Data bisnis Anda terenkripsi dan terlindungi.",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="tentang">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/images/illustrations/benefits.png"
            alt="Manfaat Grande POS"
            width={500}
            height={400}
            className="w-full max-w-md rounded-xl"
          />
        </motion.div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Apa itu <span className="text-gold">Grande POS</span>?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Grande POS adalah sistem POS yang dirancang untuk berbagai usaha.
            Kami menawarkan sistem POS dengan beragam fitur yang mudah digunakan.
            Keunggulan sistem POS kami salah satunya adalah bisa diakses secara
            online dan offline.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 rounded-lg border border-border p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <item.icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
