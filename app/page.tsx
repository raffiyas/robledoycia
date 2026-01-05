"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Scale,
  Building2,
  Shield,
  Menu,
  X,
  ChevronRight,
  Mail,
  Phone,
  Instagram
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("inicio");
              }}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.svg"
                alt="Robledo & Cía"
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16"
                priority
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("inicio");
                }}
                className="text-white hover:text-gold transition-colors font-lato"
              >
                Inicio
              </a>
              <a
                href="#firma"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("firma");
                }}
                className="text-white hover:text-gold transition-colors font-lato"
              >
                La Firma
              </a>
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("servicios");
                }}
                className="text-white hover:text-gold transition-colors font-lato"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contacto");
                }}
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy px-6 py-2 rounded-sm transition-all duration-300 font-lato font-semibold"
              >
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-navy/98 backdrop-blur-md shadow-lg">
              <div className="flex flex-col space-y-4 px-6 py-6">
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("inicio");
                  }}
                  className="text-white hover:text-gold transition-colors font-lato text-lg"
                >
                  Inicio
                </a>
                <a
                  href="#firma"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("firma");
                  }}
                  className="text-white hover:text-gold transition-colors font-lato text-lg"
                >
                  La Firma
                </a>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("servicios");
                  }}
                  className="text-white hover:text-gold transition-colors font-lato text-lg"
                >
                  Servicios
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contacto");
                  }}
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-navy px-6 py-3 rounded-sm transition-all duration-300 font-lato font-semibold text-center"
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-navy text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(212, 175, 55, 0.1) 50px,
              rgba(212, 175, 55, 0.1) 51px
            )`
          }}></div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
              Excelencia Legal.
              <br />
              <span className="text-gold">Visión Moderna.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-lato font-light">
              Asesoría jurídica integral para empresas y particulares en el
              siglo XXI.
            </p>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacto");
              }}
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-navy px-8 py-4 rounded-sm font-lato font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Agendar Consulta
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="firma" className="py-20 md:py-32 bg-pearl">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-navy to-navy-light rounded-sm shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <Scale size={64} className="text-gold" />
                  </div>
                  <p className="text-gold font-playfair text-2xl font-bold">
                    Alejandro Robledo
                  </p>
                  <p className="text-gray-400 font-lato mt-2">
                    Socio Fundador
                  </p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/30 rounded-sm -z-10"></div>
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                Sobre Nosotros
              </h2>
              <div className="w-20 h-1 bg-gold mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 font-lato leading-relaxed">
                <span className="font-bold text-navy">Alejandro Robledo.</span>{" "}
                Socio Fundador.
              </p>
              <p className="text-lg text-gray-700 mb-6 font-lato leading-relaxed">
                Combinamos la solidez del derecho tradicional con la agilidad
                que exigen los negocios actuales.
              </p>
              <p className="text-gray-600 font-lato leading-relaxed">
                En Robledo & Cía entendemos que el mundo legal evoluciona tan
                rápido como la tecnología y los mercados. Por eso, ofrecemos un
                enfoque estratégico, personalizado y orientado a resultados,
                donde cada cliente recibe soluciones jurídicas que protegen sus
                intereses y potencian su crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
              Nuestros Servicios
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato">
              Soluciones jurídicas especializadas para cada necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Servicio 1 */}
            <div className="group bg-pearl p-8 rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold">
              <div className="w-16 h-16 bg-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <Building2 size={32} className="text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-navy mb-4">
                Derecho Corporativo
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                Asesoramiento integral en constitución de sociedades, fusiones,
                adquisiciones, contratos comerciales y gobierno corporativo.
              </p>
              <ul className="space-y-2 text-gray-600 font-lato text-sm">
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Fusiones y Adquisiciones</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Contratos Empresariales</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Compliance Corporativo</span>
                </li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="group bg-pearl p-8 rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold">
              <div className="w-16 h-16 bg-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <Scale size={32} className="text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-navy mb-4">
                Litigios Civiles
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                Defensa estratégica en controversias civiles, comerciales y
                contractuales con argumentación sólida y orientada a
                resultados.
              </p>
              <ul className="space-y-2 text-gray-600 font-lato text-sm">
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Litigios Comerciales</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Resolución de Conflictos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Arbitraje y Mediación</span>
                </li>
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="group bg-pearl p-8 rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold">
              <div className="w-16 h-16 bg-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <Shield size={32} className="text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-navy mb-4">
                Protección Patrimonial
              </h3>
              <p className="text-gray-600 font-lato leading-relaxed mb-4">
                Planificación sucesoria, gestión de herencias y protección de
                activos para preservar el patrimonio familiar y empresarial.
              </p>
              <ul className="space-y-2 text-gray-600 font-lato text-sm">
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Planificación Sucesoria</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Gestión de Herencias</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span>Blindaje Patrimonial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER/CONTACTO */}
      <footer id="contacto" className="bg-navy text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo y Descripción */}
            <div>
              <div className="mb-4">
                <Image
                  src="/logo.svg"
                  alt="Robledo & Cía"
                  width={80}
                  height={80}
                  className="w-20 h-20 brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-gray-400 font-lato leading-relaxed">
                Excelencia legal con visión moderna. Tu socio estratégico en
                derecho.
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-xl font-playfair font-bold mb-4">
                Contacto
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:contacto@robledoycia.com"
                  className="flex items-center text-gray-400 hover:text-gold transition-colors font-lato"
                >
                  <Mail size={18} className="mr-3" />
                  contacto@robledoycia.com
                </a>
                <a
                  href="tel:+56912345678"
                  className="flex items-center text-gray-400 hover:text-gold transition-colors font-lato"
                >
                  <Phone size={18} className="mr-3" />
                  +56 9 1234 5678
                </a>
                <a
                  href="https://instagram.com/robledoycia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-gold transition-colors font-lato"
                >
                  <Instagram size={18} className="mr-3" />
                  @robledoycia
                </a>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-xl font-playfair font-bold mb-4">
                ¿Necesitas Asesoría?
              </h4>
              <p className="text-gray-400 font-lato mb-6">
                Agenda una consulta y descubre cómo podemos ayudarte.
              </p>
              <a
                href="mailto:contacto@robledoycia.com"
                className="inline-flex items-center bg-gold hover:bg-gold-dark text-navy px-6 py-3 rounded-sm font-lato font-bold transition-all duration-300"
              >
                Contactar Ahora
                <ChevronRight className="ml-2" size={18} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 font-lato text-sm">
              © {new Date().getFullYear()} Robledo & Cía. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
