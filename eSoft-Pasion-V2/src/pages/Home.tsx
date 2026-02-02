// src/pages/Home.tsx
import { Hero } from '../components/sections/Hero';
import { ServicesBento } from '../components/sections/ServicesBento';
import { Architecture } from '../components/sections/Architecture';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Hero />
      <ServicesBento />
      
      {/* Sección CTA intermedia */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para escalar?</h2>
        <Link to="/contacto">
            <Button variant="primary">Hablemos de tu Proyecto</Button>
        </Link>
      </section>

      <Architecture />
    </>
  );
};