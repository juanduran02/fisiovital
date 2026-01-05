"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        scrolled 
          ? "bg-[#1a4b63]/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-6"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
          <span className="text-[#1a4b63] font-bold">P</span>
        </div>
        <span className="text-white font-semibold hidden md:block tracking-tight">
          PhysioClinic
        </span>
      </Link>

      {/* Enlaces de navegación con IDs para scroll interno */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        <li>
          <Link href="#Inicio" className="hover:text-green-400 transition-colors">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="#Servicios" className="hover:text-green-400 transition-colors">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="#Escogenos" className="hover:text-green-400 transition-colors">
                Escogenos
          </Link>
        </li>
        <li>
          <Link href="#Testimonios" className="hover:text-green-400 transition-colors">
                Testimonios
          </Link>
        </li>
        <li>
          <Link href="#AcercaDeNosotros" className="hover:text-green-400 transition-colors">
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link href="#Contacto" className="hover:text-green-400 transition-colors">
            Contacto
          </Link>
        </li>
      </ul>

      {/* Botón CTA */}
      <Link 
        href="#contacto"
        className="bg-[#FF7A7A] hover:bg-[#ff6b6b] text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-coral-500/20 active:scale-95"
      >
        Agendar Cita
      </Link>
    </nav>
  );
};

export default Navbar;