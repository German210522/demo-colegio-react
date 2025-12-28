import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Columna 1: Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Colegio Demo</h3>
          <p className="text-sm leading-relaxed">
            Formando líderes con valores y excelencia académica desde 1990.
            Tu futuro comienza aquí.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/nosotros" className="hover:text-yellow-500 transition">Sobre Nosotros</Link></li>
            <li><Link to="/niveles" className="hover:text-yellow-500 transition">Niveles Académicos</Link></li>
            <li><Link to="/admisiones" className="hover:text-yellow-500 transition">Admisiones 2026</Link></li>
            <li><Link to="/contacto" className="hover:text-yellow-500 transition">Portal de Padres</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-white font-bold mb-4">Contáctanos</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-500 mt-1" />
              <span>Km 15.5 Carretera a El Salvador, Guatemala</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-500" />
              <span>+502 2233-4455</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-500" />
              <span>info@colegiodemo.edu.gt</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes */}
        <div>
          <h4 className="text-white font-bold mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Colegio Demo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;