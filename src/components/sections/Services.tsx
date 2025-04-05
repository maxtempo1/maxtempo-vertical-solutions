
import { useState, useEffect, useRef } from 'react';
import { 
  Droplets, 
  PaintBucket, 
  Wrench, 
  Mountain,
  Snowflake, 
  Camera 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Mycie okien i elewacji",
    description: "Profesjonalne czyszczenie fasad szklanych i elewacji budynków z dostępem wysokościowym.",
    icon: <Droplets size={36} className="text-navy" />
  },
  {
    id: 2,
    title: "Malowanie elewacji i konstrukcji",
    description: "Malowanie zewnętrznych elementów budynków i konstrukcji przemysłowych.",
    icon: <PaintBucket size={36} className="text-navy" />
  },
  {
    id: 3,
    title: "Naprawy wysokościowe",
    description: "Wykonujemy naprawy i prace serwisowe w trudno dostępnych miejscach.",
    icon: <Wrench size={36} className="text-navy" />
  },
  {
    id: 4,
    title: "Montaż reklam i konstrukcji",
    description: "Instalacja ekranów reklamowych, systemów i konstrukcji na wysokościach.",
    icon: <Mountain size={36} className="text-navy" />
  },
  {
    id: 5,
    title: "Odśnieżanie dachów i usuwanie sopli",
    description: "Zabezpieczenie obiektów przed nadmiernym obciążeniem śniegiem i lodem.",
    icon: <Snowflake size={36} className="text-navy" />
  },
  {
    id: 6,
    title: "Inspekcje techniczne i dokumentacja zdjęciowa",
    description: "Pełna dokumentacja stanu technicznego obiektów z opracowaniem raportu.",
    icon: <Camera size={36} className="text-navy" />
  },
];

const Services = () => {
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

  return (
    <section id="uslugi" className="section" ref={sectionRef}>
      <div className={`animate-on-scroll ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Nasze usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
