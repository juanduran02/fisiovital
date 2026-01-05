import React from 'react';
import { Reason } from '@/src/services/why.choose';
import { Award, Heart, Monitor, BarChart3, Clock } from 'lucide-react';

const reasons: Reason[] = [
  {
    title: "Profesionales Certificados",
    description: "Equipo con certificaciones internacionales",
    icon: <Award className="w-8 h-8 text-white" />,
  },
  {
    title: "Atención Personalizada",
    description: "Tratamientos adaptados a cada paciente",
    icon: <Heart className="w-8 h-8 text-white" />,
  },
  {
    title: "Equipos Modernos",
    description: "Tecnología de última generación",
    icon: <Monitor className="w-8 h-8 text-white" />,
  },
  {
    title: "Resultados Comprobados",
    description: "98% de satisfacción de pacientes",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
  },
  {
    title: "Atención Rápida",
    description: "Citas disponibles en 24-48 horas",
    icon: <Clock className="w-8 h-8 text-white" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#061f2d]"> {/* Fondo azul oscuro profundo */}
      <div className="container mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-gray-400 text-lg uppercase tracking-widest">
            Compromiso con tu recuperación y bienestar
          </p>
        </div>

        {/* Grid de Razones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-[2rem] flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Icono con efecto de resplandor al hover */}
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>

              {/* Texto */}
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;