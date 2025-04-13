import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')" }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Wysokość to nasza specjalność.
        </h1>
        <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Profesjonalne usługi alpinistyczne dla firm i instytucji.
        </p>
        <Button 
          onClick={() => scrollToSection('kontakt')} 
          className="bg-navy hover:bg-navy-light text-white text-lg px-8 py-6"
        >
          Zamów ofertę
        </Button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <button 
          onClick={() => scrollToSection('realizacje')} 
          className="text-white flex flex-col items-center cursor-pointer bg-transparent border-none"
        >
          <span className="mb-2">Dowiedz się więcej</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
