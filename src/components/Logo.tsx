import React, { useState } from 'react';
import logoIsolated from '../assets/images/Logo Leve Pinhão isolado.png';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-44' }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <img
          src="/src/assets/images/logo_lojas_leve_1791320067132.jpg"
          alt="Lojas Leve Pinhão"
          className="w-full h-auto object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.65)]"
        />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src={logoIsolated}
        alt="Lojas Leve Pinhão"
        className="w-full h-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.7)]"
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
      />
    </div>
  );
};
