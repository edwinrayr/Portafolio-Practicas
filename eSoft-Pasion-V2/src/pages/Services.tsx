// src/pages/Services.tsx
import { ServicesBento } from '../components/sections/ServicesBento';

export const Services = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Soluciones</h1>
        <p className="text-gray-400">Tecnología de punta para problemas complejos.</p>
      </div>
      {/* Reutilizamos el Bento Grid pero aquí podríamos expandirlo más */}
      <ServicesBento />
    </div>
  );
};