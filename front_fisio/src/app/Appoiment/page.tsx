"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Calendar, Clock, User, Mail, Stethoscope, CheckCircle2 } from 'lucide-react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fecha: '',
    hora: '',
    servicio: 'Fisioterapia General'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Definimos la URL de la API desde la variable de entorno
  // Si no existe, usamos localhost:4000 por defecto
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Unimos fecha y hora para enviarla al backend
      const fullDate = `${formData.fecha}T${formData.hora}:00`;
      
      // Realizamos la petición usando la variable dinámica
      const response = await axios.post(`${API_URL}/api/citas`, {
        ...formData,
        fecha: fullDate
      });

      if (response.data.success) {
        setStatus('success');
      }
    } catch (error) {
      console.error("Error al enviar la cita:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center space-y-4">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-[#1a4b63]">¡Cita Agendada!</h3>
        <p className="text-gray-500">Hemos enviado la confirmación a tu correo electrónico y agendado el espacio en nuestro calendario.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-green-600 font-bold hover:underline"
        >
          Agendar otra cita
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-[#1a4b63] mb-6 flex items-center gap-3">
        Reserva tu Sesión
      </h3>
      
      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
          Ocurrió un error al conectar con el servidor. Inténtalo de nuevo.
        </div>
      )}
      
      <div className="space-y-4">
        {/* Nombre */}
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            required
            type="text"
            placeholder="Tu nombre completo"
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-400 outline-none transition"
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            required
            type="email"
            placeholder="Correo electrónico"
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-400 outline-none transition"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Fecha */}
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              required
              type="date"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-400 outline-none transition text-sm"
              onChange={(e) => setFormData({...formData, fecha: e.target.value})}
            />
          </div>
          {/* Hora */}
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              required
              type="time"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-400 outline-none transition text-sm"
              onChange={(e) => setFormData({...formData, hora: e.target.value})}
            />
          </div>
        </div>

        {/* Servicio */}
        <div className="relative">
          <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <select
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-400 outline-none transition appearance-none"
            onChange={(e) => setFormData({...formData, servicio: e.target.value})}
          >
            <option>Fisioterapia General</option>
            <option>Rehabilitación Deportiva</option>
            <option>Terapia Manual</option>
            <option>Osteopatía</option>
          </select>
        </div>

        <button
          disabled={status === 'loading'}
          type="submit"
          className="w-full bg-[#1a4b63] hover:bg-[#256a8d] text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] disabled:bg-gray-400"
        >
          {status === 'loading' ? 'Procesando...' : 'Confirmar Cita'}
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;