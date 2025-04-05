
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-navy font-bold text-xl md:text-2xl">MaxTempo</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#uslugi" className="font-medium text-graphite hover:text-navy transition-colors">Usługi</a>
          <a href="#jak-pracujemy" className="font-medium text-graphite hover:text-navy transition-colors">Jak pracujemy</a>
          <a href="#realizacje" className="font-medium text-graphite hover:text-navy transition-colors">Realizacje</a>
          <a href="#kontakt" className="font-medium text-graphite hover:text-navy transition-colors">Kontakt</a>
          <Button className="bg-navy hover:bg-navy-light text-white">Zamów ofertę</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-graphite" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#uslugi" className="font-medium text-graphite py-2 border-b border-gray-100" onClick={handleMobileMenuToggle}>Usługi</a>
            <a href="#jak-pracujemy" className="font-medium text-graphite py-2 border-b border-gray-100" onClick={handleMobileMenuToggle}>Jak pracujemy</a>
            <a href="#realizacje" className="font-medium text-graphite py-2 border-b border-gray-100" onClick={handleMobileMenuToggle}>Realizacje</a>
            <a href="#kontakt" className="font-medium text-graphite py-2 border-b border-gray-100" onClick={handleMobileMenuToggle}>Kontakt</a>
            <Button className="bg-navy hover:bg-navy-light text-white w-full">Zamów ofertę</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
