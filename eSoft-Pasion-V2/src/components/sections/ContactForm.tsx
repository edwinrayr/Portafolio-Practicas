import { Button } from '../ui/Button';

export const ContactForm = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Hablemos de cómo la tecnología puede resolver tus problemas de negocio hoy mismo.
        </p>

        <form className="space-y-4 text-left bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
              <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Empresa</label>
              <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Nombre de tu empresa" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Correo Electrónico</label>
            <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="hola@empresa.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
            <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
          </div>

          <Button variant="primary" className="w-full py-4 text-lg">
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};