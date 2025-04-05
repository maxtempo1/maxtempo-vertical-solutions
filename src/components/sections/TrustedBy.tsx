
import { useState, useEffect, useRef } from 'react';

const clients = [
  { id: 1, name: 'Klient 1', logo: 'https://via.placeholder.com/150x80?text=Logo+1' },
  { id: 2, name: 'Klient 2', logo: 'https://via.placeholder.com/150x80?text=Logo+2' },
  { id: 3, name: 'Klient 3', logo: 'https://via.placeholder.com/150x80?text=Logo+3' },
  { id: 4, name: 'Klient 4', logo: 'https://via.placeholder.com/150x80?text=Logo+4' },
  { id: 5, name: 'Klient 5', logo: 'https://via.placeholder.com/150x80?text=Logo+5' },
];

const TrustedBy = () => {
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
    <section id="zaufali-nam" className="section bg-gray-50" ref={sectionRef}>
      <div className={`animate-on-scroll ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Zaufali nam</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-12">
          {clients.map(client => (
            <div key={client.id} className="flex justify-center">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-lg text-graphite">
          Realizacje dla branży deweloperskiej, przemysłowej i administracji publicznej.
        </p>
      </div>
    </section>
  );
};

export default TrustedBy;
