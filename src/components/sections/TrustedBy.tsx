
import { useState, useEffect, useRef } from 'react';

const clients = [
  { 
    id: 1, 
    name: 'John Lewis', 
    logo: '/lovable-uploads/5228aa25-85ac-4bd0-8328-f4cea5702b4d.png'
  },
  { 
    id: 2, 
    name: 'Nike', 
    logo: '/lovable-uploads/676a098b-789c-493a-bfb4-4ed6e59a9efe.png'
  },
  { 
    id: 3, 
    name: 'Apple', 
    logo: '/lovable-uploads/a023e892-f9c0-47cb-908a-5f8af3704c27.png'
  },
  { 
    id: 4, 
    name: 'Mecca', 
    logo: '/lovable-uploads/fb10ed28-8f36-47ab-bdcc-e6aacb18bd24.png'
  },
  { 
    id: 5, 
    name: 'Netflix', 
    logo: '/lovable-uploads/c716e69d-37e5-4ef7-b739-87c3696adab6.png'
  },
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
                className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
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
