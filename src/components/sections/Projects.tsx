
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Mycie elewacji biurowca",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    description: "Kompleksowe czyszczenie fasady nowoczesnego biurowca o powierzchni 5000m²."
  },
  {
    id: 2,
    title: "Montaż konstrukcji reklamowej",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    description: "Instalacja wielkopowierzchniowej konstrukcji reklamowej na wysokości 40m."
  },
  {
    id: 3,
    title: "Malowanie hali przemysłowej",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    description: "Malowanie zabezpieczające elementów konstrukcyjnych hali produkcyjnej."
  },
  {
    id: 4,
    title: "Inspekcja techniczna wieżowca",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    description: "Kompleksowa inspekcja fasady wysokościowca z pełną dokumentacją."
  },
  {
    id: 5,
    title: "Odśnieżanie dachu centrum handlowego",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    description: "Usuwanie zalegającego śniegu i lodu z dachu o powierzchni 3000m²."
  },
  {
    id: 6,
    title: "Naprawa rynien biurowca",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    description: "Wymiana i naprawa uszkodzonych elementów systemu odwodnienia dachu."
  },
];

const Projects = () => {
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
    <section id="realizacje" className="section bg-gray-50" ref={sectionRef}>
      <div className={`animate-on-scroll ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Realizacje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="overflow-hidden rounded-lg shadow-md cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Zobacz szczegóły
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <button className="bg-white/70 hover:bg-white p-1 rounded-full backdrop-blur-sm">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
