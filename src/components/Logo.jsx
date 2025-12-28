// src/components/Logo.jsx
import { GraduationCap, Shield } from 'lucide-react';

const Logo = ({ scrolled, isFooter = false }) => {
  // Lógica de colores dinámica:
  // - Si es el Footer: Texto blanco y subtítulo azul claro.
  // - Si es el Navbar scrolleado (blanco): Texto azul oscuro y subtítulo gris.
  // - Si es el Navbar transparente (inicio): Texto azul vibrante y subtítulo claro.
  
  // Determinamos colores basados en el estado
  const titleColor = isFooter ? "text-white" : (scrolled ? "text-blue-900" : "text-white");
  const subtitleColor = isFooter ? "text-blue-300" : (scrolled ? "text-slate-500" : "text-blue-200");
  
  // Fondo y color del icono
  const iconBg = isFooter ? "bg-blue-800/50" : (scrolled ? "bg-blue-100" : "bg-white/20 backdrop-blur-md");
  const iconColor = isFooter ? "text-yellow-400" : (scrolled ? "text-blue-700" : "text-yellow-300");
  const shieldColor = isFooter ? "text-blue-700" : (scrolled ? "text-blue-200" : "text-blue-800");

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Isotipo (Ícono Gráfico Complejo) */}
      <div className={`relative p-2.5 ${iconBg} rounded-xl shadow-sm transition-all duration-300 group-hover:scale-105 border border-white/10`}>
        <div className={`relative z-10 flex items-center justify-center h-8 w-8`}>
            {/* Combinamos un escudo (fondo) y un birrete (frente) para un look académico clásico */}
            <Shield size={32} absoluteStrokeWidth={true} className={`fill-current absolute inset-0 m-auto opacity-30 ${shieldColor}`} />
            <GraduationCap size={26} absoluteStrokeWidth={true} className={`relative z-10 ${iconColor} drop-shadow-sm`} />
        </div>
      </div>

      {/* Logotipo (Texto) */}
      <div className="flex flex-col">
        <span className={`font-black text-2xl leading-none tracking-tight transition-colors drop-shadow-sm ${titleColor}`}>
          Colegio<span className="text-yellow-400">Demo</span>
        </span>
        <span className={`text-[10px] font-bold tracking-[0.3em] uppercase mt-1 transition-colors ml-0.5 ${subtitleColor}`}>
          Excelencia Académica
        </span>
      </div>
    </div>
  );
};

export default Logo;