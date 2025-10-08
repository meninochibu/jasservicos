import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
    <section id="about" className="py-20 bg-gray-900 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase">Sobre Nós</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Sua Parceira de Confiança em Moçambique
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`prose prose-invert prose-lg text-gray-300 max-w-none transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p>
              A <strong>JASERVIÇOS, LDA</strong> é uma empresa moçambicana especializada em oferecer soluções integradas e de alta qualidade. Nossa expertise abrange uma vasta gama de serviços, desde projetos elétricos e de automação complexos até a criação e manutenção de jardins exuberantes.
            </p>
            <p>
              Comprometidos com a sustentabilidade e a inovação, somos pioneiros na instalação de sistemas fotovoltaicos, ajudando nossos clientes a alcançar independência energética com fontes limpas. Além disso, oferecemos serviços essenciais de canalização e limpeza, garantindo o bem-estar e a funcionalidade de seus espaços.
            </p>
            <p>
              Nossa missão é entregar excelência, segurança e satisfação em cada projeto, construindo relações duradouras com nossos clientes.
            </p>
          </div>
          <div
            className={`flex justify-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Equipe da JASERVIÇOS trabalhando"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
