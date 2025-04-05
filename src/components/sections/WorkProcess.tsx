
import { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Eye, 
  Calculator, 
  Clipboard, 
  FileCheck 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Konsultacja",
    description: "Zbieramy informacje o potrzebach i oczekiwaniach dotyczących projektu.",
    icon: <MessageSquare size={36} className="text-navy" />
  },
  {
    id: 2,
    title: "Wizja lokalna",
    description: "Dokonujemy oględzin obiektu i oceniamy zakres prac oraz warunki realizacji.",
    icon: <Eye size={36} className="text-navy" />
  },
  {
    id: 3,
    title: "Szczegółowa wycena",
    description: "Przygotowujemy dokładną wycenę z harmonogramem i specyfikacją prac.",
    icon: <Calculator size={36} className="text-navy" />
  },
  {
    id: 4,
    title: "Realizacja z dokumentacją",
    description: "Wykonujemy prace z bieżącą dokumentacją fotograficzną postępów.",
    icon: <Clipboard size={36} className="text-navy" />
  },
  {
    id: 5,
    title: "Raport i odbiór",
    description: "Przedstawiamy raport końcowy i dokonujemy wspólnego odbioru prac.",
    icon: <FileCheck size={36} className="text-navy" />
  },
];

const WorkProcess = () => {
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
    <section id="jak-pracujemy" className="section bg-gray-50" ref={sectionRef}>
      <div className={`animate-on-scroll ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Jak pracujemy</h2>
        <div className="relative">
          {/* Path connecting steps - only visible on md and up */}
          <div className="hidden md:block absolute top-24 left-1/2 w-4/5 h-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center relative z-10">
                <div className="bg-white rounded-full p-4 border-2 border-navy mb-4 shadow-md">
                  {step.icon}
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md w-full">
                  <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
