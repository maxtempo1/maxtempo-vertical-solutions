
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">MaxTempo</h3>
            <p className="mb-4 text-gray-300">
              Profesjonalne usługi alpinistyczne dla firm i instytucji.
              Działamy na terenie całej Polski, specjalizując się w rozwiązaniach wysokościowych.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Przydatne linki</h3>
            <ul className="space-y-2">
              <li>
                <a href="#uslugi" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Usługi
                </a>
              </li>
              <li>
                <a href="#realizacje" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Realizacje
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Polityka prywatności
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Warszawa, ul. Kłobucka 8b, 02-699</p>
              <p>alfaroupmasters@gmail.com</p>
              <p>+48 794 453 768</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 MaxTempo. Wszelkie prawa zastrzeżone.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
