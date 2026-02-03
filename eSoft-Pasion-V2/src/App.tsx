import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'; // <--- Importamos useState
import { AnimatePresence } from 'framer-motion';

// Layout & UI
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/ui/PageTransition';
import { PageLoader } from './components/layout/PageLoader'; // <--- Importamos el Loader nuevo

// Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
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
  // Estado para controlar si estamos "cargando"
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de 2 segundos (puedes ajustar este tiempo)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
       {/* Si isLoading es true, mostramos SOLO el esqueleto. Si es false, mostramos la App */}
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="min-h-screen bg-bg text-text-main tech-bg-gradient selection:bg-primary selection:text-white overflow-x-hidden flex flex-col">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;