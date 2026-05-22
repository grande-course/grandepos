import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Grande POS — Solusi Aplikasi Kasir Serba Bisa",
  description:
    "Grande POS adalah sistem POS yang dirancang untuk berbagai usaha dengan beragam fitur yang mudah digunakan. Bisa diakses secara online dan offline.",
  keywords: ["POS", "kasir", "aplikasi kasir", "Grande POS", "point of sale"],
  icons: {
    icon: "/icons/favicon.svg",
  },
  openGraph: {
    title: "Grande POS — Solusi Aplikasi Kasir Serba Bisa",
    description:
      "Sistem POS dengan beragam fitur lengkap, performa handal, dan sinkronisasi data realtime.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
