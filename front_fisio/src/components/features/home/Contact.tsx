import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative min-h-[600px] flex items-center py-20 overflow-hidden">
      {/* Imagen de fondo con Overlay Azul */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/clinica-bg.png" 
          alt="Clínica" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a4b63]/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Texto de Bienvenida */}
          <div className="text-white max-w-xl">
            <h2 className="text-6xl md:text-8xl font-bold mb-4">Visítanos</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-10">Estamos listos para atenderte</p>
            <button className="bg-white text-[#1a4b63] px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-blue-50 transition-all shadow-xl group">
              Ver Ubicación 
              <div className="bg-black rounded-full p-1 text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>

          {/* Tarjeta de Información de Contacto */}
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl w-full max-w-[480px]">
            <h3 className="text-2xl font-bold text-[#1a4b63] mb-8">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a4b63] rounded-full flex items-center justify-center text-white shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Teléfono</p>
                  <p className="font-bold text-[#1a4b63] text-lg">+34 912 345 678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">WhatsApp</p>
                  <p className="font-bold text-[#1a4b63] text-lg hover:underline cursor-pointer">Enviar mensaje</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Horarios</p>
                  <p className="font-bold text-[#1a4b63]">Lun-Vie: 9:00 - 20:00</p>
                  <p className="font-bold text-[#1a4b63]">Sáb: 10:00 - 14:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Dirección</p>
                  <p className="font-bold text-[#1a4b63]">Calle Salud 123</p>
                  <p className="text-gray-600">28001 Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;