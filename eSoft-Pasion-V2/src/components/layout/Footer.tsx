export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-white">eSoft<span className="text-primary">Pasion</span></span>
          <p className="text-gray-500 text-sm mt-2">© 2026 eSoft Pasion. Todos los derechos reservados.</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        </div>

      </div>
    </footer>
  );
};