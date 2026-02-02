import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

// Definimos los servicios (puedes cambiar los iconos SVG por los que quieras)
const services = [
  {
    title: "Desarrollo Web a Medida",
    desc: "Sitios corporativos de alto rendimiento con React y Astro.",
    col: "md:col-span-2", // Ocupa 2 espacios
    bg: "from-blue-600/20 to-blue-900/20",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Apps Móviles",
    desc: "iOS y Android nativo.",
    col: "md:col-span-1",
    bg: "from-purple-600/20 to-purple-900/20",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Cloud & DevOps",
    desc: "Arquitectura escalable en AWS/Azure.",
    col: "md:col-span-1",
    bg: "from-emerald-600/20 to-emerald-900/20",
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Consultoría IT",
    desc: "Auditoría y optimización de sistemas.",
    col: "md:col-span-2",
    bg: "from-orange-600/20 to-orange-900/20",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
];

export const ServicesBento = () => {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <Badge>Nuestros Servicios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Soluciones Integrales</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Diseñamos ecosistemas digitales completos, no solo páginas web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br ${service.bg} hover:border-white/10 transition-all duration-300 hover:-translate-y-1 ${service.col}`}
            >
              <div className="mb-4 p-3 bg-black/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};