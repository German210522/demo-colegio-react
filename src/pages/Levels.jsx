// src/pages/Levels.jsx
import { motion } from 'framer-motion';
import { Baby, Book, GraduationCap, BrainCircuit } from 'lucide-react';

const Levels = () => {
  const levels = [
    { id: 1, title: "Pre-Primaria", icon: <Baby size={40} />, desc: "Estimulación temprana, desarrollo motriz e inglés en un ambiente lúdico y seguro.", ages: "2 a 6 años", color: "blue" },
    { id: 2, title: "Primaria", icon: <Book size={40} />, desc: "Consolidación de lectoescritura, pensamiento lógico-matemático y programa bilingüe intensivo.", ages: "7 a 12 años", color: "teal" },
    { id: 3, title: "Básicos", icon: <BrainCircuit size={40} />, desc: "Desarrollo del pensamiento crítico, robótica, tecnología y habilidades blandas.", ages: "13 a 15 años", color: "indigo" },
    { id: 4, title: "Diversificado", icon: <GraduationCap size={40} />, desc: "Preparación pre-universitaria con orientación vocacional y enfoque en ciencias o letras.", ages: "16 a 18 años", color: "violet" }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', hoverBg: 'group-hover:bg-blue-600' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200', hoverBg: 'group-hover:bg-teal-600' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200', hoverBg: 'group-hover:bg-indigo-600' },
    violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200', hoverBg: 'group-hover:bg-violet-600' }
  };

  return (
    <div className="font-sans relative bg-gray-50 min-h-screen">
       {/* Patrón de fondo sutil para el cuerpo */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* --- NUEVO HEADER CON IMAGEN DE FONDO (Estilo Consistente) --- */}
      <div className="relative pt-32 pb-24 text-center px-4 overflow-hidden z-10">
         <div className="absolute inset-0 z-0">
             {/* Imagen diferente para Niveles (Biblioteca/Estudio) */}
            <img 
               src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
               alt="Biblioteca Escolar" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-950/85 mix-blend-multiply"></div>
         </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
        >
          Niveles Académicos
        </motion.h1>
        <p className="relative z-10 text-blue-100 max-w-3xl mx-auto text-xl font-medium leading-relaxed drop-shadow-md">
          Un modelo educativo continuo que acompaña el crecimiento de tus hijos en cada etapa crucial de su desarrollo.
        </p>
      </div>

      {/* Cuerpo de Tarjetas */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 pb-24 -mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          {levels.map((level, index) => {
            const colors = colorMap[level.color];
            return (
              <motion.div 
                key={level.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                viewport={{ once: true }}
                className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border ${colors.border} flex flex-col sm:flex-row gap-6 items-start group relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-2xl transform translate-x-10 -translate-y-10`}></div>
                <div className={`p-5 rounded-2xl ${colors.bg} ${colors.text} ${colors.hoverBg} group-hover:text-white transition-colors shrink-0 relative z-10`}>
                  {level.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{level.title}</h3>
                  <span className={`inline-block ${colors.bg} ${colors.text} text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider`}>
                    {level.ages}
                  </span>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {level.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Levels;