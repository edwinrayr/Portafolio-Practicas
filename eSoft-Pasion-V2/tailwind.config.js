/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nuestra paleta personalizada "Tech"
        bg: {
          DEFAULT: '#0B0C15', // Fondo principal (Casi negro)
          secondary: '#161823', // Para tarjetas o secciones secundarias
        },
        primary: {
          DEFAULT: '#3B82F6', // Azul eléctrico (puedes cambiarlo al color de eSoft)
          glow: 'rgba(59, 130, 246, 0.5)', // Para efectos de brillo
        },
        text: {
          main: '#FFFFFF',
          muted: '#9CA3AF', // Gris suave para textos secundarios
        }
      },
      fontFamily: {
        // Usaremos una fuente sans-serif moderna
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}