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
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  FileText,
  Users,
  Award,
  ArrowRight,
  Calendar,
  Briefcase,
  Gavel,
  BookOpen,
} from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Instagram Icon
const InstagramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Nuevas regulaciones para empresas en 2025",
    excerpt: "Conozca los cambios más importantes en materia de cumplimiento normativo que afectarán a las empresas este año.",
    category: "Derecho Corporativo",
    date: "15 Ago 2025",
    readTime: "5 min",
    icon: Building2,
  },
  {
    id: 2,
    title: "Guía para la protección de herencias",
    excerpt: "Todo lo que necesita saber sobre la planificación sucesoria y cómo proteger el patrimonio familiar.",
    category: "Protección Patrimonial",
    date: "10 Ago 2025",
    readTime: "8 min",
    icon: Shield,
  },
  {
    id: 3,
    title: "Mediación vs Litigio: ¿Cuál elegir?",
    excerpt: "Analizamos las ventajas y desventajas de cada método de resolución de conflictos para su caso.",
    category: "Litigios",
    date: "5 Ago 2025",
    readTime: "6 min",
    icon: Gavel,
  },
];

// Form state type
interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("success");
        setFormMessage(data.message);
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        setFormStatus("error");
        setFormMessage(data.error || "Error al enviar el mensaje");
      }
    } catch {
      setFormStatus("error");
      setFormMessage("Error de conexión. Intente nuevamente.");
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus("idle");
      setFormMessage("");
    }, 5000);
  };

  const whatsappNumber = "56965768653";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría agendar una consulta legal.");

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 whatsapp-pulse"
        data-testid="whatsapp-button"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("inicio");
              }}
              className="flex items-center gap-3 group"
              data-testid="logo-link"
            >
              <div className={`transition-all duration-300 ${isScrolled ? "w-12 h-12" : "w-14 h-14"}`}>
                <Image
                  src="/logo.svg"
                  alt="Estudio Jurídico Robledo y Cía"
                  width={56}
                  height={56}
                  className="w-full h-full"
                  priority
                />
              </div>
              <div className={`hidden sm:block transition-colors duration-300 ${isScrolled ? "text-dark" : "text-white"}`}>
                <p className="font-playfair font-bold text-lg leading-tight">Robledo y Cía</p>
                <p className="text-xs opacity-70">Estudio Jurídico</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { name: "Inicio", id: "inicio" },
                { name: "Nosotros", id: "nosotros" },
                { name: "Servicios", id: "servicios" },
                { name: "Blog", id: "blog" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`font-medium transition-all duration-300 hover:opacity-70 ${
                    isScrolled ? "text-slate-700 hover:text-amber-600" : "text-white"
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contacto");
                }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                data-testid="nav-contacto"
              >
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-dark hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t">
              <div className="flex flex-col p-6 gap-4">
                {[
                  { name: "Inicio", id: "inicio" },
                  { name: "Nosotros", id: "nosotros" },
                  { name: "Servicios", id: "servicios" },
                  { name: "Blog", id: "blog" },
                  { name: "Contacto", id: "contacto" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-slate-700 hover:text-amber-600 font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden"
        data-testid="hero-section"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse-slow delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/5 to-transparent rounded-full"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <span className="inline-block text-amber-400 font-semibold tracking-wider text-sm mb-4 uppercase">
                Estudio Jurídico
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                Defendemos tus
                <br />
                <span className="gradient-text">Derechos</span> con
                <br />
                Excelencia
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                Más de 15 años brindando asesoría jurídica integral. 
                Soluciones legales estratégicas para empresas y particulares.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contacto");
                }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                data-testid="hero-cta-primary"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 group"
                data-testid="hero-cta-whatsapp"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/10 animate-fade-in-up delay-400">
              <div>
                <p className="text-3xl md:text-4xl font-playfair font-bold text-amber-400">15+</p>
                <p className="text-slate-400 text-sm mt-1">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-playfair font-bold text-amber-400">500+</p>
                <p className="text-slate-400 text-sm mt-1">Casos Resueltos</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-playfair font-bold text-amber-400">98%</p>
                <p className="text-slate-400 text-sm mt-1">Clientes Satisfechos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="py-24 bg-slate-50" data-testid="about-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-[4/5] bg-gradient-to-br from-dark to-dark-lighter rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-xl">
                      <span className="font-playfair text-5xl font-bold text-white">AR</span>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      Alejandro Robledo
                    </h3>
                    <p className="text-amber-400 font-medium">Socio Fundador</p>
                    <p className="text-slate-400 text-sm mt-4 max-w-xs">
                      Abogado Universidad de Chile, con especialización en Derecho Corporativo y Litigios Complejos
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-amber-400/30 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
            </div>

            {/* Content Side */}
            <div>
              <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm mb-4 uppercase">
                Sobre Nosotros
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">
                Tradición Legal,
                <br />
                <span className="gradient-text">Visión Moderna</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-8"></div>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                En <strong className="text-dark">Estudio Jurídico Robledo y Cía</strong> combinamos 
                la solidez del derecho tradicional con la agilidad que exigen los negocios actuales.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Entendemos que el mundo legal evoluciona tan rápido como la tecnología y los mercados. 
                Por eso, ofrecemos un enfoque estratégico, personalizado y orientado a resultados, 
                donde cada cliente recibe soluciones jurídicas que protegen sus intereses y potencian su crecimiento.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Award, text: "Excelencia Profesional" },
                  { icon: Users, text: "Atención Personalizada" },
                  { icon: Clock, text: "Respuesta Rápida" },
                  { icon: FileText, text: "Transparencia Total" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-white" data-testid="services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm mb-4 uppercase">
              Áreas de Práctica
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">
              Nuestros <span className="gradient-text">Servicios</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluciones jurídicas especializadas adaptadas a cada necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Servicio 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Building2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-dark mb-4 group-hover:text-amber-600 transition-colors">
                Derecho Corporativo
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Asesoramiento integral en constitución de sociedades, fusiones, 
                adquisiciones, contratos comerciales y gobierno corporativo.
              </p>
              <ul className="space-y-3">
                {["Fusiones y Adquisiciones", "Contratos Empresariales", "Compliance Corporativo"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm">
                    <ChevronRight size={16} className="text-amber-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Scale size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-dark mb-4 group-hover:text-amber-600 transition-colors">
                Litigios Civiles
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Defensa estratégica en controversias civiles, comerciales y 
                contractuales con argumentación sólida y orientada a resultados.
              </p>
              <ul className="space-y-3">
                {["Litigios Comerciales", "Resolución de Conflictos", "Arbitraje y Mediación"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm">
                    <ChevronRight size={16} className="text-amber-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-dark mb-4 group-hover:text-amber-600 transition-colors">
                Protección Patrimonial
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Planificación sucesoria, gestión de herencias y protección de 
                activos para preservar el patrimonio familiar y empresarial.
              </p>
              <ul className="space-y-3">
                {["Planificación Sucesoria", "Gestión de Herencias", "Blindaje Patrimonial"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm">
                    <ChevronRight size={16} className="text-amber-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacto");
              }}
              className="inline-flex items-center bg-dark hover:bg-dark-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Solicitar Asesoría
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* BLOG / NOTICIAS */}
      <section id="blog" className="py-24 bg-slate-50" data-testid="blog-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm mb-4 uppercase">
              Recursos Legales
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">
              Blog y <span className="gradient-text">Noticias</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Mantente informado con las últimas novedades del mundo legal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 card-hover group"
              >
                {/* Card Header */}
                <div className="h-48 bg-gradient-to-br from-dark to-dark-lighter relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <post.icon className="w-20 h-20 text-amber-400/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-dark mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-amber-600 font-semibold text-sm flex items-center group/btn hover:text-amber-700 transition-colors">
                    Leer más
                    <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-white" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm mb-4 uppercase">
                  Contáctenos
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">
                  ¿Necesitas <span className="gradient-text">Asesoría</span>?
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-8"></div>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Estamos aquí para ayudarte. Agenda una consulta y descubre cómo 
                  podemos proteger tus intereses legales.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <a
                    href="mailto:contacto@robledoycia.com"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-amber-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <Mail className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-semibold text-dark">contacto@robledoycia.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+56965768653"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-amber-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <Phone className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Teléfono / WhatsApp</p>
                      <p className="font-semibold text-dark">+56 9 6576 8653</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/robledoycia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-amber-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <InstagramIcon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Instagram</p>
                      <p className="font-semibold text-dark">@robledoycia</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Horario de Atención</p>
                      <p className="font-semibold text-dark">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow-xl">
                <h3 className="text-2xl font-playfair font-bold text-dark mb-6">
                  Envíanos un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        placeholder="Tu nombre"
                        data-testid="input-nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        placeholder="tu@email.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        placeholder="+56 9 1234 5678"
                        data-testid="input-telefono"
                      />
                    </div>
                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium text-slate-700 mb-2">
                        Área de consulta
                      </label>
                      <select
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all bg-white"
                        data-testid="input-asunto"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="corporativo">Derecho Corporativo</option>
                        <option value="litigios">Litigios Civiles</option>
                        <option value="patrimonial">Protección Patrimonial</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                      placeholder="Cuéntanos sobre tu caso..."
                      data-testid="input-mensaje"
                    ></textarea>
                  </div>

                  {/* Form Status Messages */}
                  {formStatus === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl" data-testid="form-success">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p>{formMessage}</p>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl" data-testid="form-error">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p>{formMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    data-testid="submit-button"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-16" data-testid="footer">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.svg"
                  alt="Estudio Jurídico Robledo y Cía"
                  width={60}
                  height={60}
                  className="w-14 h-14 brightness-0 invert"
                />
                <div>
                  <p className="font-playfair font-bold text-xl">Robledo y Cía</p>
                  <p className="text-sm text-slate-400">Estudio Jurídico</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md mb-6">
                Excelencia legal con visión moderna. Tu socio estratégico en derecho, 
                comprometido con la protección de tus intereses.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/robledoycia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6">Enlaces</h4>
              <ul className="space-y-3">
                {["Inicio", "Nosotros", "Servicios", "Blog", "Contacto"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.toLowerCase());
                      }}
                      className="text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6">Contacto</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="mailto:contacto@robledoycia.com" className="hover:text-amber-400 transition-colors">
                    contacto@robledoycia.com
                  </a>
                </li>
                <li>
                  <a href="tel:+56965768653" className="hover:text-amber-400 transition-colors">
                    +56 9 6576 8653
                  </a>
                </li>
                <li>Lun - Vie: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Estudio Jurídico Robledo y Cía. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
