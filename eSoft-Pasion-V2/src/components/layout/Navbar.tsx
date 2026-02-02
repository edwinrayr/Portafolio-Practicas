import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import logo from '../../assets/images/esoftlogo.png';
import { Link, useLocation } from 'react-router-dom'; // <--- IMPORTANTE

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Para saber en qué página estamos

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Definimos las rutas reales
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Soluciones', path: '/soluciones' },
  ];

  // Función para saber si el link está activo
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO CON LINK AL INICIO */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer z-50">
            <img
              src={logo}
              alt="eSoft Pasion Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* MENU ESCRITORIO */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-medium transition-colors relative group ${
                    isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {/* Puntito brillante si está activo */}
                {isActive(link.path) && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_currentColor]"></span>
                )}
              </Link>
            ))}
            <Link to="/contacto">
                <Button variant="primary" className="ml-4 py-2 px-6 text-xs">
                Contactar
                </Button>
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL FULL SCREEN TECH */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-bold text-white hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="text-lg px-8 py-3">Contactar</Button>
            </Link>
        </div>
      )}
    </nav>
  );
};