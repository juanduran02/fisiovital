import React from 'react';
import Link from 'next/link';
import { Calendar, MessageCircle } from 'lucide-react'; // Si usas lucide-react para iconos

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Imagen de Fondo con Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/fiso-background.png" 
          alt="Consultorio fisioterapia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Columna Izquierda: Textos */}
        <div className="max-w-2xl text-white">
          <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-4">
            Fisioterapia Profesional
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Recupera tu movimiento, <br />
            <span className="text-white/90">mejora tu calidad de vida</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-lg">
            Fisioterapia personalizada con profesionales certificados. Agenda tu cita en menos de 2 minutos.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/Appoiment">
            <button className="bg-[#FF7A7A] hover:bg-[#ff6b6b] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105">
              <Calendar size={20} />
              Agendar Cita Ahora
            </button>
            </Link>
            <button className="bg-transparent border-2 border-green-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-green-500/20 transition">
              <MessageCircle size={20} className="text-green-400" />
              Escríbenos por WhatsApp
            </button>
          </div>
        </div>

        {/* Columna Derecha: Card de Rating */}
        <div className="bg-white/95 p-6 rounded-3xl shadow-2xl backdrop-blur-md flex items-center gap-4 animate-bounce-slow">
           <div className="flex flex-col">
              <div className="flex text-yellow-400 mb-1">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-3xl font-bold text-gray-800">4.9/5</p>
              <p className="text-gray-500 text-sm">
                <span className="font-bold text-blue-600">500+ pacientes</span> recuperados con éxito
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;