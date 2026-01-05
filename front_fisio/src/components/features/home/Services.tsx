import React from 'react';
import { Service } from '@/src/services/service.ineterface';
import { Activity, Users, Home, Dumbbell, HeartPulse, HandMetal } from 'lucide-react';

const services: Service[] = [
  {
    title: "Fisioterapia Deportiva",
    description: "Tratamiento especializado para lesiones deportivas, mejora del rendimiento y prevención de lesiones en atletas de todos los niveles.",
    image: "/images/service-deportiva.png",
    icon: <Dumbbell className="text-white w-6 h-6" />,
  },
  {
    title: "Rehabilitación Física",
    description: "Programas personalizados de recuperación funcional para lesiones musculoesqueléticas, mejorando movilidad y fuerza.",
    image: "/images/service-rehabilitacion.png",
    icon: <HeartPulse className="text-white w-6 h-6" />,
  },
  {
    title: "Terapia Manual",
    description: "Técnicas manuales especializadas para aliviar dolor, mejorar movilidad articular y restaurar función muscular óptima.",
    image: "/images/service-manual.png",
    icon: <Activity className="text-white w-6 h-6" />,
  },
  {
    title: "Fisioterapia Postoperatoria",
    description: "Recuperación acelerada después de cirugías ortopédicas con protocolos específicos para cada tipo de intervención.",
    image: "/images/service-postop.png",
    icon: <Activity className="text-white w-6 h-6" />,
  },
  {
    title: "Fisioterapia Geriátrica",
    description: "Cuidado especializado para adultos mayores, mejorando equilibrio, movilidad y calidad de vida en la tercera edad.",
    image: "/images/service-geriatrica.png",
    icon: <Users className="text-white w-6 h-6" />,
  },
  {
    title: "Terapias a Domicilio",
    description: "Servicio de fisioterapia profesional en la comodidad de tu hogar, ideal para pacientes con movilidad reducida.",
    image: "/images/service-domicilio.png",
    icon: <Home className="text-white w-6 h-6" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a4b63] mb-4">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-gray-500 text-lg">
            Tratamientos personalizados para cada necesidad
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Imagen con Icono Flotante */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                {/* Icono circular verde */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#86efac] rounded-full flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Contenido de la Card */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a4b63] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-[#FF7A7A] font-bold hover:gap-4 transition-all">
                  Agendar 
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;