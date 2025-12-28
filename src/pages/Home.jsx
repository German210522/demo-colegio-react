// src/pages/Home.jsx
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Users, Trophy, ArrowRight, Star, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- SUB-COMPONENTE CONTADOR (Optimizado) ---
const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); 
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <div ref={ref} className="p-4">
      <div className="flex justify-center items-baseline text-4xl md:text-5xl font-black text-white mb-2">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-blue-200 text-sm uppercase tracking-wider font-bold">{label}</p>
    </div>
  );
};

const Home = () => {
  const stats = [
    { number: "35+", label: "Años de Excelencia" },
    { number: "1200+", label: "Alumnos Graduados" },
    { number: "100%", label: "Bilingüismo Real" },
    { number: "25", label: "Actividades Extra" },
  ];

  const features = [
    { icon: <Globe className="text-blue-500" size={32} />, title: "Certificación Internacional", desc: "Alianzas con Cambridge y TOEFL para asegurar el futuro global de tus hijos." },
    { icon: <Users className="text-purple-500" size={32} />, title: "Atención Personalizada", desc: "Aulas con cupo limitado (máx 20) para garantizar el aprendizaje individual." },
    { icon: <Trophy className="text-yellow-500" size={32} />, title: "Liderazgo y Valores", desc: "Formación integral que va más allá de lo académico: creamos ciudadanos." },
  ];

  return (
    <div className="font-sans">
      
      {/* --- HERO SECTION CINEMATOGRÁFICO --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        
        {/* FONDO PRINCIPAL (Nueva Imagen + Overlay Neutro) */}
        <div className="absolute inset-0 z-0">
             {/* NUEVA IMAGEN: Complejo educativo amplio y moderno */}
             <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop" 
            alt="Complejo Educativo Moderno" 
            className="w-full h-full object-cover"
          />
          {/* NUEVO OVERLAY: Tono pizarra (slate) más neutro, menos azulado, dejando ver más los colores naturales */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            
            {/* Contenido Texto */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span>Inscripciones Abiertas 2026</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                El futuro de tus hijos <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  comienza aquí
                </span>
              </h1>
              
              <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed drop-shadow-md font-medium">
                Descubre un modelo educativo que combina instalaciones de primer nivel, tecnología de vanguardia y excelencia académica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admisiones" className="group bg-yellow-500 text-blue-950 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]">
                  Aplicar ahora <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
                <Link to="/contacto" className="px-8 py-4 rounded-full font-bold text-white border border-white/30 hover:bg-white/10 transition backdrop-blur-sm text-center">
                  Conocer Campus
                </Link>
              </div>
            </motion.div>

            {/* Imagen Flotante Derecha */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block relative h-full min-h-[500px]"
            >
               <img 
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Estudiantes felices" 
                  className="absolute right-0 bottom-0 max-h-[550px] w-auto object-contain z-10 rounded-3xl shadow-2xl mask-image:linear-gradient(to bottom, black 90%, transparent 100%)"
               />
              
              {/* Badge ISO */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border-l-4 border-blue-600"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle className="text-blue-600 fill-blue-600" size={28} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Calidad Certificada</p>
                  <p className="text-blue-900 font-black text-lg">ISO 9001:2015</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-slate-950 py-10 relative z-20 shadow-2xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {stats.map((stat, index) => (
              <Counter key={index} value={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">¿Por qué elegirnos?</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Excelencia que marca la diferencia</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors relative z-10">
                  <div className="group-hover:text-white transition-colors">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
         <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para formar parte de nuestra familia?</h2>
               <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">Agenda una visita guiada y conoce nuestras instalaciones de primer nivel.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contacto" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg">Agendar Visita</Link>
                  <Link to="/admisiones" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">Proceso de Admisión</Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;