import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500); // Start fade-out at 2.5s

    const endTimer = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Animation ends and component is removed at 3s

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(endTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-[100] transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden="true" // This is purely decorative, so hide from screen readers
    >
      <div className="animate-splash-pop-in">
        <Logo />
      </div>
    </div>
  );
};

export default SplashScreen;