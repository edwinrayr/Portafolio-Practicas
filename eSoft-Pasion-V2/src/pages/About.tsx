import { motion } from 'framer-motion';
import { Badge } from '../components/ui/Badge';

export const About = () => {
  return (
    <div className="pt-24 pb-20 overflow-hidden">
      
      {/* SECCIÓN HERO (TEXTO CON COLORES DE MARCA VERDES) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline">Nuestra Esencia</Badge>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mt-6 mb-8 leading-tight"
          >
            Somos el motor digital de <br />
            <span className="text-white">eSoft</span>
            {/* CAMBIO AQUÍ: Gradiente de verdes tech */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500"> Pasion</span>
          </motion.h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            Más que una empresa de desarrollo, somos tus socios estratégicos. 
            Nacimos con la convicción de que la tecnología debe ser accesible, 
            potente y, sobre todo, humana.
          </p>
        </div>
      </div>

      {/* SECCIÓN MISIÓN / VISIÓN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Tarjeta Misión - ACENTOS EN VERDE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // Cambiado el hover a verde
            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-green-500/30 transition-colors"
          >
            {/* Cambiado el fondo del icono a verde */}
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
            <p className="text-gray-400">
              Democratizar el acceso a software de alta calidad, permitiendo que empresas 
              de todos los tamaños automaticen procesos y compitan en el mercado global 
              con herramientas de primer nivel.
            </p>
          </motion.div>

          {/* Tarjeta Visión (Se mantiene en morado para contraste dinámico) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nuestra Visión</h3>
            <p className="text-gray-400">
              Ser el referente tecnológico en Latinoamérica, reconocidos no solo por 
              nuestro código, sino por nuestra capacidad de entender y potenciar 
              la pasión de cada cliente.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ESTADÍSTICAS RÁPIDAS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 border-t border-white/10 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "+5", label: "Años de Experiencia" },
            { num: "100%", label: "Clientes Satisfechos" },
            { num: "+50", label: "Proyectos Entregados" },
            { num: "24/7", label: "Soporte Técnico" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.num}</div>
              {/* Las etiquetas de estadísticas siguen usando el color primario (azul) definido en tailwind.config.js */}
              <div className="text-sm text-primary uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};