import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    // "animate-pulse" crea el efecto de parpadeo suave
    // "bg-white/5" es un gris muy sutil para modo oscuro
    <div className={`animate-pulse bg-white/5 rounded-lg ${className}`} />
  );
};