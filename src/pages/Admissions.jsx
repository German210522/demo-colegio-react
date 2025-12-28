// src/pages/Admissions.jsx
import { CheckCircle, FileText, Calendar, GraduationCap, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const Admissions = () => {
  const steps = [
    { icon: <FileText size={24}/>, title: "Formulario en Línea", desc: "Completa tus datos y los del estudiante en nuestra plataforma digital." },
    { icon: <Calendar size={24}/>, title: "Visita y Entrevista", desc: "Conoce el campus y conversa con nuestro equipo de admisiones." },
    { icon: <GraduationCap size={24}/>, title: "Evaluación Diagnóstica", desc: "Pruebas académicas y psicométricas según el grado a cursar." },
    { icon: <CreditCard size={24}/>, title: "Inscripción", desc: "Entrega de resultados, documentación final y pago de matrícula." }
  ];

  return (
    <div className="font-sans relative bg-gray-100 min-h-screen">
       {/* Patrón de fondo sutil */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

       {/* --- NUEVO HEADER CON IMAGEN DE FONDO (Estilo Consistente) --- */}
      <div className="relative pt-32 pb-24 text-center px-4 overflow-hidden z-10">
         <div className="absolute inset-0 z-0">
             {/* Imagen diferente para Admisiones (Campus Moderno/Recepción) */}
            <img 
               src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
               alt="Campus Moderno" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-950/85 mix-blend-multiply"></div>
         </div>
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="relative z-10 text-white text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Proceso de Admisión 2026
        </motion.h1>
        <p className="relative z-10 text-blue-100 text-xl max-w-2xl mx-auto font-medium drop-shadow-md">
            Únete a nuestra familia educativa en 4 simples pasos.
        </p>
      </div>


      {/* Contenedor Principal (Superpuesto ligeramente al header) */}
      <div className="max-w-5xl mx-auto px-4 relative z-20 pb-24 -mt-10">
        <div className="bg-white/90 backdrop-blur-md rounded-[3rem] shadow-2xl p-8 md:p-16 relative overflow-hidden border border-white/50">
          <div className="hidden md:block absolute left-[4.5rem] top-24 bottom-24 w-0.5 bg-blue-100 z-0"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-8 group"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl flex-grow group-hover:bg-blue-50 transition-colors border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
             <div className="p-8 bg-yellow-50/80 rounded-3xl border-2 border-yellow-200">
                <h4 className="font-bold text-yellow-800 flex items-center gap-3 text-xl mb-4">
                  <CheckCircle className="fill-yellow-200 text-yellow-600" size={28}/> Documentación Inicial
                </h4>
                <ul className="space-y-3 text-gray-700 ml-2">
                  {["Certificado de nacimiento.", "Constancia de buena conducta.", "Últimas calificaciones."].map((item, i) => (
                     <li key={i} className="flex items-start gap-2"><span className="text-yellow-500 mt-1">•</span> {item}</li>
                  ))}
                </ul>
              </div>
             <div className="text-center">
                 <p className="text-gray-600 mb-6">¿Listo para iniciar?</p>
                <button className="w-full md:w-auto bg-blue-900 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-800 transition shadow-xl hover:translate-y-1 transform">
                    Descargar Paquete de Admisión
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;