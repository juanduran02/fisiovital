import React from 'react';
import { Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b1a24] pt-20">
      <div className="container mx-auto px-6">
        {/* Fila Superior: Links y Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold">P</span>
              </div>
              <span className="text-white font-bold text-xl uppercase tracking-tighter">PhysioClinic</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Clínica de fisioterapia profesional dedicada a tu recuperación y bienestar integral.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Mantente Informado</h4>
            <p className="text-gray-400 text-sm">Recibe consejos de salud y novedades.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-green-400 transition-colors text-white"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-green-400 hover:scale-110 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-[10px] text-gray-500">
              Al suscribirte, aceptas nuestra <span className="text-green-400/80 cursor-pointer">política de privacidad</span>.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Navegación</h4>
            <ul className="space-y-4 text-white font-medium">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Servicios</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Sobre Nosotros</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Contacto</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Síguenos</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <Instagram size={20} /> Instagram
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <Facebook size={20} /> Facebook
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <Linkedin size={20} /> LinkedIn
              </li>
            </ul>
          </div>
        </div>

        {/* Fila Inferior: Texto FISIOVITAL Masivo */}
        <div className="border-t border-gray-800/50 pt-10 pb-8 overflow-hidden">
          <h1 className="text-[15vw] font-black text-[#e8e2d6] text-center leading-none tracking-tighter opacity-90 select-none">
            FISIOVITAL
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-[10px] text-gray-500 gap-4 uppercase tracking-[0.1em]">
            <p>© 2024 FisioVital. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">Aviso Legal</span>
              <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidad</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
            </div>
            <p>Powered by Readdy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;