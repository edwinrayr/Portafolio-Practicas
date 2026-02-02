// src/pages/About.tsx
export const About = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">Sobre <span className="text-primary">eSoft Pasion</span></h1>
          <p className="text-gray-300 mb-4 text-lg">
            Somos una consultora de tecnología nacida para transformar negocios tradicionales en potencias digitales.
          </p>
          <p className="text-gray-400">
            Nuestro enfoque combina ingeniería de software rigurosa con un diseño de experiencia de usuario excepcional. No solo escribimos código, construimos el futuro de tu empresa.
          </p>
        </div>
        <div className="h-[400px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
           {/* Aquí iría una foto del equipo o de la oficina */}
           <span className="text-gray-500">Foto del Equipo / Oficina</span>
        </div>
      </div>
    </div>
  );
};