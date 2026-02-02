import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* FONDO ANIMADO (Glow effects) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge (Etiqueta superior) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <span className="py-2 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary-300 backdrop-blur-sm">
            🚀 Innovación Digital para Empresas
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Transformamos ideas en <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Software de Alto Impacto
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          En eSoft Pasion desarrollamos soluciones tecnológicas a medida, escalables y seguras. 
          Llevamos tu negocio al siguiente nivel con arquitectura de vanguardia.
        </motion.p>

        {/* Botones de Acción */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" className="text-lg px-8 py-4">
            Agendar Consultoría
          </Button>
          <Button variant="outline" className="text-lg px-8 py-4">
            Ver Proyectos
          </Button>
        </motion.div>

      </div>
      
      {/* Elemento Decorativo (Grid de fondo opcional) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
    </section>
  );
};