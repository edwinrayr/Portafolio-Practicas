import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const styles = {
    default: "bg-primary/10 text-primary border-primary/20",
    outline: "bg-transparent border-white/20 text-gray-300",
    success: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${styles[variant]}`}>
      {children}
    </span>
  );
};