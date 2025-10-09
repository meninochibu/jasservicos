import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setIsFadingOut(true), 2500);
    const endTimer = setTimeout(() => onAnimationEnd(), 3000);
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(endTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-[100] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <img
        src="https://i.postimg.cc/GmdGZNKf/Whats-App-Image-2025-10-07-at-9-40-32-PM.jpg"
        alt="Logo JASERVIÇOS"
        className="h-60 w-auto object-contain scale-125 animate-pulse"
      />
    </div>
  );
};

export default SplashScreen;
