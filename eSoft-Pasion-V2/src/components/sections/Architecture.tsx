import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

export const Architecture = () => {
  return (
    <section id="stack" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texto Explicativo */}
          <div>
            <Badge variant="outline">Workflow</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Ingeniería de Software <br />
              <span className="text-primary">Transparente y Ágil</span>
            </h2>
            <p className="text-gray-400 mb-6">
              No ocultamos cómo trabajamos. Utilizamos metodologías CI/CD y arquitecturas serverless para garantizar que tu producto esté siempre online y actualizado.
            </p>
            <ul className="space-y-4">
              {['Escalabilidad Automática', 'Seguridad Bancaria', 'Código Limpio'].map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Diagrama Visual Animado (Simulado con Divs) */}
          <div className="relative h-[400px] bg-bg-secondary rounded-2xl border border-white/5 p-8 flex items-center justify-center overflow-hidden">
             {/* Fondo de grilla */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
             
             {/* Nodo Central (Tu Proyecto) */}
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="w-24 h-24 bg-primary/20 rounded-xl border border-primary flex items-center justify-center relative z-10 backdrop-blur-md"
             >
                <span className="text-2xl">🚀</span>
             </motion.div>

             {/* Nodos Satélite (Orbitando) */}
             {[0, 120, 240].map((deg, i) => (
               <motion.div
                 key={i}
                 className="absolute w-16 h-16 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                 animate={{ 
                    rotate: 360,
                    x: [0, 100, 0], // Movimiento orbital simple
                    y: [0, 50, 0]
                 }}
                 style={{ rotate: deg }} // Posición inicial
                 transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
               >
                 <span className="text-xs text-gray-400">Node {i+1}</span>
               </motion.div>
             ))}
             
             {/* Líneas de conexión decorativas */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <circle cx="50%" cy="50%" r="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <circle cx="50%" cy="50%" r="150" stroke="white" strokeWidth="1" strokeDasharray="2 4" fill="none" />
             </svg>
          </div>

        </div>
      </div>
    </section>
  );
};