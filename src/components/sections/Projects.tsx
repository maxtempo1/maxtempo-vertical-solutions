
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Montaż reklamy Love Island",
    image: "/lovable-uploads/1bcaa0ac-1c99-4e82-b97c-1d6f0bd13ad2.png",
    description: "Montaż wielkopowierzchniowej reklamy kampanii programu telewizyjnego na fasadzie centrum handlowego."
  },
  {
    id: 2,
    title: "Instalacja billboardu Carling",
    image: "/lovable-uploads/35be7674-09d4-43d2-8962-d837c24a97b8.png",
    description: "Instalacja i zabezpieczenie wielkopowierzchniowej reklamy piwa na wysokości 25m."
  },
  {
    id: 3,
    title: "Reklama Nike na budynku",
    image: "/lovable-uploads/676a098b-789c-493a-bfb4-4ed6e59a9efe.png",
    description: "Montaż oświetlonej reklamy Nike na wysokości 40m na fasadzie budynku w przebudowie."
  },
  {
    id: 4,
    title: "Billboard Apple na ulicy",
    image: "/lovable-uploads/a023e892-f9c0-47cb-908a-5f8af3704c27.png",
    description: "Montaż reklamy Apple dotyczącej prywatności iPhone na bilbordzie przy ruchliwej ulicy."
  },
  {
    id: 5,
    title: "Wielkoformatowe banery Caudalie",
    image: "/lovable-uploads/212ce13f-f71a-4fad-89c6-70eb55e36d4f.png",
    description: "Montaż dwóch wielkoformatowych banerów reklamowych na elewacji budynku mieszkalnego."
  },
  {
    id: 6,
    title: "Billboardy przy drodze Anex",
    image: "/lovable-uploads/521ad0a3-c5b5-425d-8df7-ad9a21c8e054.png",
    description: "Kompleksowy montaż systemu banerów reklamowych przy drodze szybkiego ruchu."
  },
  {
    id: 7,
    title: "Reklama Mohito",
    image: "/lovable-uploads/6c2b722b-4ac7-4988-bda1-94e8cf046ca8.png",
    description: "Instalacja podświetlanej reklamy na elewacji budynku w centrum miasta."
  },
  {
    id: 8,
    title: "Montaż reklamy Romet",
    image: "/lovable-uploads/f9b0d25c-7d37-462a-ae58-f7bb4f20d663.png",
    description: "Instalacja baneru reklamowego dla marki rowerowej Romet na ścianie budynku."
  },
  {
    id: 9,
    title: "Reklama Netflix na centrum handlowym",
    image: "/lovable-uploads/c716e69d-37e5-4ef7-b739-87c3696adab6.png",
    description: "Montaż podświetlanej reklamy Netflix na elewacji centrum handlowego."
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
                <Card className="overflow-hidden rounded-lg shadow-md cursor-pointer group hover:shadow-lg transition-shadow duration-300">
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
                  <CardContent className="p-4 bg-white">
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  </CardContent>
                </Card>
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
