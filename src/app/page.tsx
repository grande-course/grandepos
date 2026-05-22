import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import HowItWorksSection from "@/components/sections/how-it-works";
import FeaturesSection from "@/components/sections/features";
import FaqSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
