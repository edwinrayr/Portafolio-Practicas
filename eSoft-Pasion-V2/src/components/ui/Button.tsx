import React from 'react';

// Definimos qué propiedades acepta nuestro botón
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  
  // Estilos base que siempre tendrá el botón
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary";
  
  // Variantes de estilo (El "Theme" que elegimos)
  const variants = {
    primary: "border-transparent text-white bg-primary hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:-translate-y-1",
    secondary: "border-transparent text-bg bg-white hover:bg-gray-200",
    outline: "border-gray-700 text-gray-300 hover:border-primary hover:text-primary bg-transparent",
    ghost: "border-transparent text-gray-400 hover:text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};