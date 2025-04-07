import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
const projects = [{
  id: 1,
  title: "Montaż reklamy Love Island",
  image: "/lovable-uploads/1bcaa0ac-1c99-4e82-b97c-1d6f0bd13ad2.png"
}, {
  id: 2,
  title: "Instalacja billboardu Carling",
  image: "/lovable-uploads/35be7674-09d4-43d2-8962-d837c24a97b8.png"
}, {
  id: 3,
  title: "Reklama Nike na budynku",
  image: "/lovable-uploads/676a098b-789c-493a-bfb4-4ed6e59a9efe.png"
}, {
  id: 4,
  title: "Billboard Apple na ulicy",
  image: "/lovable-uploads/a023e892-f9c0-47cb-908a-5f8af3704c27.png"
}, {
  id: 5,
  title: "Wielkoformatowe banery Caudalie",
  image: "/lovable-uploads/212ce13f-f71a-4fad-89c6-70eb55e36d4f.png"
}, {
  id: 6,
  title: "Billboardy przy drodze Anex",
  image: "/lovable-uploads/521ad0a3-c5b5-425d-8df7-ad9a21c8e054.png"
}, {
  id: 7,
  title: "Reklama Mohito",
  image: "/lovable-uploads/6c2b722b-4ac7-4988-bda1-94e8cf046ca8.png"
}, {
  id: 8,
  title: "Montaż reklamy Romet",
  image: "/lovable-uploads/f9b0d25c-7d37-462a-ae58-f7bb4f20d663.png"
}, {
  id: 9,
  title: "Reklama Netflix na centrum handlowym",
  image: "/lovable-uploads/c716e69d-37e5-4ef7-b739-87c3696adab6.png"
}];
const TrustedBy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="realizacje" ref={sectionRef} className="section bg-gray-50 rounded-none my-px px-0 py-[49px]">
      <div className={`animate-on-scroll ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Realizacje</h2>
        
        <div className="mx-auto max-w-5xl px-4 relative">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map(project => <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3">
                  <Card className="overflow-hidden rounded-lg shadow-md cursor-pointer group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="bg-white hover:bg-gray-100" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <CarouselNext className="bg-white hover:bg-gray-100" />
            </div>
          </Carousel>
        </div>
        
        <p className="text-center text-lg text-graphite mt-12">
          Realizacje dla branży deweloperskiej, przemysłowej i administracji publicznej.
        </p>
      </div>
    </section>;
};
export default TrustedBy;