
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Email content preparation
    const emailContent = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;
    
    try {
      // Using emailjs-com service to send the email (You'd need to set up an EmailJS account)
      const response = await fetch("https://formsubmit.co/ajax/kontakt@max-tempo.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        toast({
          title: "Wiadomość wysłana",
          description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Błąd",
        description: "Wystąpił problem podczas wysyłania wiadomości. Prosimy spróbować ponownie.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section" ref={sectionRef}>
      <div className={`animate-on-scroll ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Kontakt</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Imię i nazwisko</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Twoje imię i nazwisko" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="twoj@email.pl" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Treść wiadomości..." 
                  rows={5} 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-navy hover:bg-navy-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Dane kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-navy" />
                  <span>+48 794 453 768</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-navy" />
                  <span>kontakt@max-tempo.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-navy shrink-0" />
                  <span>Warszawa, ul. Kłobucka 8b, 02-699</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Social media</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-navy text-white p-3 rounded-full hover:bg-navy-light transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-navy text-white p-3 rounded-full hover:bg-navy-light transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div className="h-64 w-full border border-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.591192369952!2d21.00148791580982!3d52.173910979749515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719337c61eca3e9%3A0x66ce40ca1b13a6c1!2sK%C5%82obucka%208B%2C%2002-699%20Warszawa!5e0!3m2!1spl!2spl!4v1655051248930!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
