import { motion } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const Solutions = () => {
  const solutions = [
    {
      title: "eSoft ERP",
      desc: "Sistema de planificación de recursos empresariales. Controla inventarios, finanzas y RRHH en una sola plataforma.",
      color: "blue"
    },
    {
      title: "CRM Inteligente",
      desc: "Gestión de relaciones con clientes potenciada por IA para automatizar ventas y seguimiento.",
      color: "purple"
    },
    {
      title: "Punto de Venta (POS)",
      desc: "Software ágil para retail y restaurantes. Facturación electrónica inmediata y control de caja.",
      color: "emerald"
    },
    {
      title: "Aula Virtual",
      desc: "Plataformas LMS para instituciones educativas con videollamadas integradas y gestión de alumnos.",
      color: "orange"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <Badge>Software Especializado</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Soluciones Listas para <br />
            <span className="text-primary">Impulsar tu Negocio</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No reinventes la rueda. Implementa nuestros sistemas probados y personalizables para resolver problemas específicos de tu industria.
          </p>
        </div>

        {/* GRID DE SOLUCIONES (Alternativo al Bento) */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-bg-secondary border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Efecto hover de fondo */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/20 flex items-center justify-center mb-6 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <Button variant="outline" className="text-sm">Ver Demo</Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};