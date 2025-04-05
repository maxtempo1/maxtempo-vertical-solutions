
import { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Award, 
  BadgeCheck, 
  ShieldCheck, 
  Banknote 
} from 'lucide-react';

const advantages = [
  {
    id: 1,
    title: "10+ lat doświadczenia",
    description: "Ponad dekada pracy w najtrudniejszych warunkach wysokościowych.",
    icon: <Clock size={36} className="text-navy" />
  },
  {
    id: 2,
    title: "Certyfikat IRATA Level 3",
    description: "Międzynarodowe certyfikaty potwierdzające najwyższe umiejętności.",
    icon: <Award size={36} className="text-navy" />
  },
  {
    id: 3,
    title: "Uprawnienia UDT",
    description: "Uprawnienia do obsługi sprzętu technicznego wydane przez Urząd Dozoru Technicznego.",
    icon: <BadgeCheck size={36} className="text-navy" />
  },
  {
    id: 4,
    title: "Szkolenia BHP i wysokościowe",
    description: "Regularnie aktualizowane szkolenia w zakresie bezpieczeństwa i nowych technologii.",
    icon: <ShieldCheck size={36} className="text-navy" />
  },
  {
    id: 5,
    title: "Ubezpieczenie OC do 1 000 000 zł",
    description: "Pełne ubezpieczenie od odpowiedzialności cywilnej gwarantujące Państwa bezpieczeństwo.",
    icon: <Banknote size={36} className="text-navy" />
  },
];

const WhyUs = () => {
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
    <section id="dlaczego-my" className="section" ref={sectionRef}>
      <div className={`animate-on-scroll ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Dlaczego my</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="flex items-start space-x-4 p-5 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-navy/10 rounded-full p-3 shrink-0">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
