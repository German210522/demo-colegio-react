// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo'; // <--- IMPORTANTE: Importamos el nuevo logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica para el estilo de la barra:
  // Si no estamos en home, siempre es blanca. Si estamos en home, depende del scroll.
  const navbarStyle = (!isHome || scrolled) 
    ? 'bg-white/95 backdrop-blur-xl shadow-md py-3 border-b border-gray-100' 
    : 'bg-transparent py-6 border-b border-white/10';

  // Lógica para el color de texto de los links:
  const linkBaseColor = (!isHome || scrolled) ? "text-slate-600 hover:text-blue-900" : "text-white/90 hover:text-white";
  const linkActiveColor = (!isHome || scrolled) ? "text-blue-900" : "text-white";
  const mobileMenuButtonColor = (!isHome || scrolled) ? "text-slate-800" : "text-white";

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Niveles', path: '/niveles' },
    { name: 'Admisiones', path: '/admisiones' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${navbarStyle}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* --- NUEVO LOGO --- */}
            <Link to="/" className="group" onClick={() => window.scrollTo(0, 0)}>
               {/* Le pasamos el estado 'scrolled' (o si no es home) al logo para que sepa qué color usar */}
               <Logo scrolled={!isHome || scrolled} />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`relative px-4 py-2 text-sm font-bold transition-colors ${isActive ? linkActiveColor : linkBaseColor}`}
                  >
                    {link.name}
                    {/* Línea animada */}
                    {isActive && (
                      <motion.div 
                        layoutId="underline"
                        className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${(!isHome || scrolled) ? 'bg-blue-900' : 'bg-yellow-400'}`}
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* Botón CTA */}
              <div className="pl-4">
                <button className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 ${(!isHome || scrolled) ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-white text-blue-900 hover:bg-blue-50'}`}>
                  Portal Alumnos
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 transition-colors ${mobileMenuButtonColor}`}
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden flex flex-col"
          >
            <div className="flex justify-end p-6 pt-8">
               <button onClick={() => setIsOpen(false)} className="text-slate-800 bg-slate-100 p-2 rounded-full">
                 <X size={28} />
               </button>
            </div>
            <div className="flex flex-col space-y-2 px-8 pt-4 font-bold flex-grow justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-3xl py-4 border-b border-gray-100 ${
                    location.pathname === link.path ? 'text-blue-900' : 'text-slate-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-12 w-full bg-blue-900 text-white py-5 rounded-2xl font-bold text-xl shadow-xl flex items-center justify-center gap-3">
                Acceso Portal <ChevronRight/>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;