"use client"; // Importante en Next.js App Router para componentes interactivos

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/src/services/testimonials';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData: Testimonial[] = [
  {
    name: "María González",
    role: "Paciente de rehabilitación deportiva",
    content: "Después de una lesión de rodilla, pensé que no volvería a correr. Gracias al equipo de FisioVital y su tratamiento personalizado, no solo me recuperé completamente, sino que ahora corro mejor que antes.",
    image: "/images/paciente1.png",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Paciente de terapia manual",
    content: "Excelente atención. Sufría de dolores lumbares crónicos y desde la tercera sesión la mejoría fue increíble. El trato humano es lo que más destaco de la clínica.",
    image: "/images/paciente2.png",
    rating: 5
  },
  {
    name: "Elena Pérez",
    role: "Fisioterapia Geriátrica",
    content: "Llevé a mi madre para recuperar movilidad tras una caída. La paciencia y profesionalismo de los fisioterapeutas le devolvieron la confianza para volver a caminar sola.",
    image: "/images/paciente3.png",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50/30">
      <div className="container mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a4b63] mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-gray-500 text-lg italic">
            "Historias reales de recuperación y bienestar"
          </p>
        </div>

        {/* Carrusel */}
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="testimonial-swiper"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-16">
                <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 flex flex-col md:flex-row mx-4">
                  
                  {/* Imagen */}
                  <div className="md:w-2/5 h-[350px] md:h-[500px]">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Texto */}
                  <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center relative bg-white">
                    <Quote size={80} className="absolute top-10 left-10 text-green-100 opacity-40 -z-0" />
                    
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-[#1a4b63] leading-relaxed font-medium mb-8 relative z-10">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="relative pt-6 z-10">
                      <div className="absolute top-0 left-0 w-12 h-1 bg-green-400"></div>
                      <h4 className="text-xl font-bold text-[#1a4b63]">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Ajuste para los puntos de paginación de Swiper */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background-color: #FF7A7A !important;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;