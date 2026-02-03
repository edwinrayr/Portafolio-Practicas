import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Componentes de Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageLoader } from './components/layout/PageLoader';

// Componentes de UI
import { PageTransition } from './components/ui/PageTransition';
import { WhatsAppButton } from './components/ui/WhatsAppButton'; // <--- El nuevo botón flotante

// Páginas (Vistas)
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Utilidad para hacer scroll arriba al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Componente para manejar las rutas con animaciones de entrada/salida
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* "key={location.pathname}" es vital para que Framer Motion detecte el cambio */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/nosotros" element={<PageTransition><About /></PageTransition>} />
        <Route path="/servicios" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/soluciones" element={<PageTransition><Solutions /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Estado para controlar la pantalla de carga inicial (Skeleton)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos carga de 2 segundos para mostrar el efecto Skeleton
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        // 1. Si está cargando, mostramos el Esqueleto
        <PageLoader />
      ) : (
        // 2. Si ya cargó, mostramos la App completa
        <div className="min-h-screen bg-bg text-text-main tech-bg-gradient selection:bg-primary selection:text-white overflow-x-hidden flex flex-col">
          
          <ScrollToTop />
          <Navbar />
          
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          {/* Botón flotante siempre visible encima de todo */}
          <WhatsAppButton />

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;