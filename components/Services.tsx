import React, { useState, useEffect, useRef } from 'react';
import type { Service } from '../types';
import ServiceCard from './ServiceCard';

const ElectricityIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-flash" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const AutomationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-slow-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GardeningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5" />
        <g className="animate-sway">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3.75m0 0h-3.75M12 6.75h3.75" />
        </g>
    </svg>
);

const IrrigationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-slow-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const PhotovoltaicIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-slow-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const PlumbingIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75V21m-6.75-9.75H3m18 0h-2.25m-13.5 0H9m6.75 0h2.25M12 3v2.25" />
    </svg>
);

const CleaningIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const servicesData: Service[] = [
  {
    icon: <ElectricityIcon />,
    title: 'Eletricidade',
    description: 'Instalações, manutenções e reparos elétricos residenciais e comerciais com máxima segurança e eficiência.',
  },
  {
    icon: <AutomationIcon />,
    title: 'Automação',
    description: 'Modernize seu espaço com sistemas de automação inteligentes para conforto, segurança e economia de energia.',
  },
  {
    icon: <GardeningIcon />,
    title: 'Jardinagem',
    description: 'Criação e manutenção de jardins, transformando seu ambiente externo em um oásis de beleza e tranquilidade.',
  },
  {
    icon: <IrrigationIcon />,
    title: 'Sistemas de Irrigação',
    description: 'Projetamos e instalamos sistemas de irrigação automáticos e eficientes para manter seu jardim sempre verde.',
  },
  {
    icon: <PhotovoltaicIcon />,
    title: 'Sistemas Fotovoltaicos',
    description: 'Gere sua própria energia limpa e renovável. Soluções completas em energia solar para residências e empresas.',
  },
  {
    icon: <PlumbingIcon />,
    title: 'Canalização',
    description: 'Serviços de canalização completos, desde a instalação de novas redes até o reparo de vazamentos e entupimentos.',
  },
  {
    icon: <CleaningIcon />,
    title: 'Serviços de Limpeza',
    description: 'Limpeza residencial, comercial, pós-obra, estofados, tapetes e vidros. Soluções completas para ambientes impecáveis.',
  },
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-black overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Soluções Completas Para Você
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Oferecemos uma gama completa de serviços elétricos, manutenção e limpeza para atender todas as suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
