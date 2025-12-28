// src/components/Footer.jsx
import { Facebook, Instagram, Mail, MapPin, Phone, Linkedin, Youtube, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // <--- Importamos el logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-slate-300 pt-20 pb-10 relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Columna 1: Logo y Resumen */}
        <div className="space-y-6">
          {/* --- NUEVO LOGO EN MODO FOOTER --- */}
          <Logo isFooter={true} />
          
          <p className="text-blue-200 leading-relaxed text-sm pr-4 mt-4">
            Formando líderes íntegros con valores sólidos y excelencia académica desde 1990. Tu futuro comienza aquí.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Enlaces Rápidos</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link to="/nosotros" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-blue-500 group-hover:text-yellow-400 transition-colors"/> Sobre Nosotros</Link></li>
            <li><Link to="/niveles" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-blue-500 group-hover:text-yellow-400 transition-colors"/> Niveles Académicos</Link></li>
            <li><Link to="/admisiones" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-blue-500 group-hover:text-yellow-400 transition-colors"/> Admisiones {currentYear + 1}</Link></li>
            <li><Link to="/contacto" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-blue-500 group-hover:text-yellow-400 transition-colors"/> Portal de Padres</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contáctanos</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <div className="bg-blue-900/50 p-2 rounded-lg shrink-0 border border-blue-800"><MapPin size={18} className="text-yellow-400" /></div>
              <span className="leading-tight">Km 15.5 Carretera a El Salvador, Ciudad de Guatemala</span>
            </li>
            <li className="flex items-center gap-3">
               <div className="bg-blue-900/50 p-2 rounded-lg shrink-0 border border-blue-800"><Phone size={18} className="text-yellow-400" /></div>
              <span>+502 2233-4455</span>
            </li>
            <li className="flex items-center gap-3">
               <div className="bg-blue-900/50 p-2 rounded-lg shrink-0 border border-blue-800"><Mail size={18} className="text-yellow-400" /></div>
              <span>info@colegiodemo.edu.gt</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Síguenos</h4>
          <div className="flex gap-3">
            <SocialIcon icon={<Facebook size={20} />} color="hover:bg-blue-600" />
            <SocialIcon icon={<Instagram size={20} />} color="hover:bg-pink-600" />
            <SocialIcon icon={<Youtube size={20} />} color="hover:bg-red-600" />
            <SocialIcon icon={<Linkedin size={20} />} color="hover:bg-blue-700" />
          </div>
          <p className="mt-8 text-xs text-blue-300/60 leading-relaxed">
            Certificados por ISO 9001:2015 y miembros de la Asociación de Colegios Privados de Guatemala.
          </p>
        </div>
      </div>

      <div className="border-t border-blue-900/50 pt-8 text-center text-sm text-blue-300/70 relative z-10">
        <p>© {currentYear} Colegio Demo. Todos los derechos reservados. | <a href="#" className="hover:text-yellow-400 transition-colors">Políticas de Privacidad</a></p>
      </div>
    </footer>
  );
};

// Componente auxiliar pequeño para iconos de redes
const SocialIcon = ({ icon, color }) => (
    <a href="#" className={`bg-blue-900/50 border border-blue-800 p-3 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${color} group`}>
        <div className="group-hover:scale-110 transition-transform">{icon}</div>
    </a>
);

export default Footer;