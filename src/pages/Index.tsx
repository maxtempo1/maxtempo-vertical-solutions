import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import WorkProcess from "@/components/sections/WorkProcess";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { setupScrollAnimation } from "@/utils/animation";

const Index = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WorkProcess />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
