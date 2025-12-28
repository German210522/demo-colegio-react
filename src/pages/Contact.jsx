// src/pages/Contact.jsx
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="font-sans relative min-h-screen bg-gray-100">
       {/* Patrón de fondo sutil */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

       {/* --- HEADER ESTILO UNIFICADO (IMAGEN + OVERLAY) --- */}
       <div className="relative pt-32 pb-24 text-center px-4 overflow-hidden z-10">
         <div className="absolute inset-0 z-0">
             {/* Imagen de fondo (Recepción/Oficina) */}
            <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
               alt="Recepción del Colegio" 
               className="w-full h-full object-cover"
            />
            {/* Overlay Azul Oscuro */}
            <div className="absolute inset-0 bg-blue-950/85 mix-blend-multiply"></div>
         </div>
         
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-white text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
           Estamos aquí para ayudarte
        </motion.h1>
        <p className="relative z-10 text-blue-100 text-xl max-w-2xl mx-auto font-medium drop-shadow-md">
           ¿Tienes dudas sobre nuestro modelo educativo o el proceso de admisión? Contáctanos.
        </p>
      </div>

      {/* --- CONTENIDO PRINCIPAL (Superpuesto) --- */}
      <div className="max-w-7xl mx-auto px-4 relative z-20 pb-24 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Información Lateral - Tarjeta Oscura pero legible */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{delay: 0.2}} className="lg:col-span-1 space-y-8">
            <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-2xl border border-blue-800">
              <h3 className="text-2xl font-bold mb-8 text-white border-b border-blue-800 pb-4">Información de Contacto</h3>
              <div className="space-y-6">
                 <InfoItem icon={<MapPin/>} title="Ubicación" desc="Km 15.5 Carr. a El Salvador, Ciudad de Guatemala" />
                 <InfoItem icon={<Phone/>} title="Teléfonos" desc="+502 2233-4455 / +502 2233-4456" />
                 <InfoItem icon={<Mail/>} title="Correo Electrónico" desc="admisiones@colegiodemo.edu.gt" />
                 <InfoItem icon={<Clock/>} title="Horario de Atención" desc="Lun - Vie: 7:00 AM - 4:00 PM" />
              </div>
            </div>

            {/* Mapa */}
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-xl relative border-4 border-white">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.696142646346!2d-90.4578!3d14.5695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM0JzEwLjIiTiA5MMKwMjcnMjguMSJX!5e0!3m2!1sen!2sgt!4v1620000000000!5m2!1sen!2sgt" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </motion.div>

          {/* Formulario Principal - Tarjeta Blanca */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.4}} className="lg:col-span-2 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-white/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Nombre Completo" type="text" placeholder="Tu nombre" />
                <InputGroup label="Teléfono" type="tel" placeholder="0000-0000" />
              </div>
              <InputGroup label="Correo Electrónico" type="email" placeholder="correo@ejemplo.com" />
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Mensaje o Consulta</label>
                <textarea rows="5" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none" placeholder="Estoy interesado en cupos para..."></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white font-bold py-5 rounded-full hover:bg-blue-800 transition flex items-center justify-center gap-3 shadow-xl hover:translate-y-1 transform text-lg">
                <Send size={22} /> Enviar Mensaje Ahora
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Componentes auxiliares (Estilos mejorados)
const InfoItem = ({ icon, title, desc }) => (
   <div className="flex items-start gap-4">
      <div className="bg-blue-800 p-3 rounded-xl shrink-0 text-blue-200">{icon}</div>
      <div>
         <h4 className="font-bold text-white mb-1">{title}</h4>
         <p className="font-medium text-blue-200/80 text-sm leading-relaxed">{desc}</p>
      </div>
   </div>
);

const InputGroup = ({ label, type, placeholder }) => (
   <div>
     <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">{label}</label>
     <input type={type} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 focus:bg-white outline-none transition-all" placeholder={placeholder} />
   </div>
);

export default Contact;