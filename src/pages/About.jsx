// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Target, Heart, History, User } from 'lucide-react';

const About = () => {
  return (
    <div className="font-sans">
      
      {/* --- NUEVO HEADER CON IMAGEN DE FONDO --- */}
      <div className="relative pt-32 pb-20 text-center px-4 overflow-hidden">
         {/* Imagen de fondo y overlay */}
         <div className="absolute inset-0 z-0">
            <img 
               src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
               alt="Edificio Institucional" 
               className="w-full h-full object-cover"
            />
            {/* Overlay azul oscuro para legibilidad */}
            <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
         </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
        >
          Nuestra Historia y Valores
        </motion.h1>
        <p className="relative z-10 text-blue-100 max-w-2xl mx-auto text-xl font-medium drop-shadow-md">
          Más de tres décadas formando líderes con propósito en instalaciones de primer nivel.
        </p>
      </div>

      {/* Cuerpo principal */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Sección Historia */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6 text-blue-600">
                <div className="p-3 bg-blue-100 rounded-xl"><History size={24} /></div>
                <span className="font-bold tracking-widest uppercase text-sm">El Comienzo</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Desde 1990 innovando en la educación guatemalteca</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                El Colegio Demo nació del sueño de un grupo de educadores visionarios. Lo que comenzó como un pequeño jardín infantil, hoy es una institución referente que impacta la vida de más de 1,200 familias.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative pl-8 pb-8">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Historia del colegio" className="rounded-3xl shadow-2xl z-10 relative" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-blue-200 rounded-3xl -z-0 transform -translate-x-4 translate-y-4"></div>
            </motion.div>
          </div>

          {/* Misión y Visión (Tarjetas Dinámicas) */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            <motion.div whileHover={{ y: -8 }} className="bg-gray-50 p-10 rounded-3xl shadow-xl border-b-4 border-blue-600 transition-all hover:shadow-2xl group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Target className="text-blue-600 group-hover:text-white transition-colors" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Formar ciudadanos íntegros, competentes y comprometidos, a través de una educación bilingüe de excelencia y sólidos principios éticos.</p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="bg-gray-50 p-10 rounded-3xl shadow-xl border-b-4 border-yellow-500 transition-all hover:shadow-2xl group">
               <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <Heart className="text-yellow-600 group-hover:text-white transition-colors" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Ser líderes en innovación pedagógica y formación humana en la región, preparando a estudiantes capaces de trascender fronteras.</p>
            </motion.div>
          </div>

          {/* Mensaje Director */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-lg border border-blue-100">
            <div className="shrink-0 relative">
               <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 transform translate-x-4 translate-y-4"></div>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Director General" className="w-56 h-56 rounded-full object-cover border-8 border-white shadow-xl relative z-10" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase tracking-wider">
                <User size={18}/> Mensaje del Director
              </div>
              <h3 className="text-3xl font-bold mb-6 italic text-blue-900">"Educar es dejar huella en el corazón"</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">"Bienvenidos a nuestra familia educativa. Aquí no solo enseñamos materias; cultivamos la curiosidad, el respeto y la pasión por aprender. Nuestro compromiso es que cada alumno descubra su mejor versión."</p>
              <div>
                <p className="font-black text-xl text-gray-900">Lic. Carlos Eduardo Méndez</p>
                <p className="text-blue-600">Director General, PhD en Educación</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;