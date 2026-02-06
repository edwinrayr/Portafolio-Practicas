import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importamos Link y useLocation para rutas
import { Search, Globe, Menu, X, ChevronRight } from 'lucide-react';
import { useSearch } from '../../context/SearchContext'; // Hook del buscador

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openSearch } = useSearch(); // Para abrir el buscador gigante
  const location = useLocation(); // Para saber en qué página estamos (active state)

  // Detectar scroll para el efecto "Glass"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rutas de navegación
  const navLinks = [
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Soluciones', path: '/soluciones' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-esoft-dark/80 backdrop-blur-lg border-white/10 py-4 shadow-lg' // Estado Scroll
            : 'bg-transparent border-transparent py-6' // Estado Inicial
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* 1. LOGO (Izquierda) */}
          <Link to="/" className="flex items-center gap-3 z-10 group">
            {/* Imagen del Logo */}
            <img 
               src="./esoftlogo.svg" 
               alt="Logo eSoft Pasion" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
          </Link>

          {/* 2. ENLACES CENTRALES (Corregido: Animación con Scale) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group font-sans py-2 ${
                    isActive ? 'text-white' : 'text-esoft-gray-light hover:text-white'
                  }`}
                >
                  {link.name}
                  
                  {/* BARRITA ANIMADA: Usamos scale-x para que crezca desde el centro sin moverse de lugar */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-esoft-accent transform transition-transform duration-300 origin-center ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* 3. ACCIONES (Derecha) */}
          <div className="flex items-center gap-3 z-10">
            
            {/* Botón Búsqueda */}
            <button 
              onClick={openSearch} 
              className="p-2 text-esoft-gray-light hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="Buscar"
            >
              <Search size={18} />
            </button>

            {/* Selector Idioma */}
            <button className="flex items-center gap-2 text-xs font-medium text-esoft-gray-light hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full hover:border-esoft-accent/50 hover:bg-white/5 backdrop-blur-sm">
              <Globe size={14} />
              <span className="hidden sm:inline">ES</span>
            </button>

            {/* Botón Menú Móvil */}
            <button 
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 4. MENÚ MÓVIL (Overlay) */}
      <div className={`fixed inset-0 z-40 bg-esoft-dark/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col pt-32 px-6 space-y-6 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="flex items-center justify-between text-2xl font-heading text-white border-b border-white/10 pb-4 active:text-esoft-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
            <ChevronRight size={20} className="text-esoft-accent" />
          </Link>
        ))}
      </div>
    </>
  );
}