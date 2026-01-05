"use client";

import React from 'react';
import {LucideIcon, Target, Eye, HandHeart } from 'lucide-react';

interface Pillar {
  icon: LucideIcon;
  title: string;
  desc: string;
}
const pillars: Pillar[] = [
  { 
    icon: Target, 
    title: "Misión", 
    desc: "Mejorar la calidad de vida de nuestros pacientes mediante tratamientos especializados." 
  },
  { 
    icon: Eye, 
    title: "Visión", 
    desc: "Ser referentes en fisioterapia integral, destacando por nuestra calidez y tecnología." 
  },
  { 
    icon: HandHeart, 
    title: "Compromiso", 
    desc: "Excelencia humana y profesional en cada etapa de tu recuperación física." 
  }
];

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Encabezado Centrado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Sobre Nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a4b63] mb-6 leading-tight">
            Más de 10 años cuidando tu salud física
          </h2>
          <div className="w-20 h-1 bg-[#FF7A7A] mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            En <span className="font-bold text-[#1a4b63]">FisioVital</span>, somos un equipo comprometido con tu bienestar. 
            Combinamos técnicas tradicionales con las últimas innovaciones tecnológicas para diseñar 
            planes únicos adaptados a tus necesidades.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Columna de Imagen con Efectos Visuales */}
          <div className="lg:w-1/2 relative group">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="/images/equipo-fisiovital.png" 
                alt="Nuestro equipo médico" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Elementos decorativos de fondo */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Columna de Información (Pilares y Estadísticas) */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon; // Se extrae el componente para renderizarlo correctamente
                return (
                  <div 
                    key={idx} 
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" /> 
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a4b63] text-lg">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sección de Estadísticas */}
            <div className="flex flex-wrap gap-10 pt-8 mt-4 justify-center lg:justify-start border-t border-gray-100">
              <div className="text-center lg:text-left">
                <p className="text-5xl font-extrabold text-[#FF7A7A] mb-1">500+</p>
                <p className="text-gray-400 font-semibold uppercase text-xs tracking-widest">Pacientes Satisfechos</p>
              </div>
              <div className="hidden sm:block w-[1px] h-16 bg-gray-200"></div>
              <div className="text-center lg:text-left">
                <p className="text-5xl font-extrabold text-[#FF7A7A] mb-1">15</p>
                <p className="text-gray-400 font-semibold uppercase text-xs tracking-widest">Especialistas</p>
              </div>
              <div className="hidden sm:block w-[1px] h-16 bg-gray-200"></div>
              <div className="text-center lg:text-left">
                <p className="text-5xl font-extrabold text-[#FF7A7A] mb-1">10</p>
                <p className="text-gray-400 font-semibold uppercase text-xs tracking-widest">Años</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;