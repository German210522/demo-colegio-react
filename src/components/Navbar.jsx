// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Niveles', path: '/niveles' },
    { name: 'Admisiones', path: '/admisiones' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-blue-900 text-white' : 'bg-blue-600 text-white'}`}>
                <GraduationCap size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-800 leading-none group-hover:text-blue-700 transition-colors">
                  Colegio Demo
                </span>
                <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase mt-1">
                  Excelencia Educativa
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors"
                  >
                    {link.name}
                    {/* Línea animada si está activo */}
                    {isActive && (
                      <motion.div 
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* Botón CTA destacado */}
              <div className="pl-4">
                <button className="bg-slate-900 hover:bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5">
                  Portal Alumnos
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-slate-700 hover:text-blue-900 p-2 transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU FULL SCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-bold border-b border-gray-100 pb-4 ${
                    location.pathname === link.path ? 'text-blue-600 pl-4 border-l-4 border-l-blue-600' : 'text-slate-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-8 w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl">
                Acceso Portal Alumnos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;