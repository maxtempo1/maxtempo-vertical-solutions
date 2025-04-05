
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const DownloadOffer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleDownload = () => {
    // In a real implementation, this would link to an actual PDF file
    alert("W rzeczywistej implementacji, tutaj byłby pobrany plik oferty PDF.");
  };

  return (
    <section className="py-20 bg-navy text-white" ref={sectionRef}>
      <div className={`container mx-auto px-4 text-center animate-on-scroll ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl font-bold mb-6">Pobierz ofertę PDF</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Zapoznaj się z pełną ofertą naszych usług, referencjami i szczegółami współpracy.
          Pobierz katalog z przykładami realizacji i cennikiem.
        </p>
        <Button 
          onClick={handleDownload}
          className="bg-white text-navy hover:bg-gray-100 px-8 py-6 text-lg inline-flex items-center"
        >
          <Download className="mr-2" size={20} />
          Pobierz pełną ofertę
        </Button>
      </div>
    </section>
  );
};

export default DownloadOffer;
