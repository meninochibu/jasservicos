import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-white h-screen flex items-center justify-center text-center">
      <div className="p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
          <span className="text-yellow-400">JASERVIÇOS</span>: Soluções Completas e Inovadoras
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Especialistas em eletricidade, automação, jardinagem e sistemas fotovoltaicos para Moçambique.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#services"
            className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 text-lg transform hover:scale-105"
          >
            Nossos Serviços
          </a>
          <a 
            href="#contact"
            className="bg-transparent border-2 border-lime-500 text-lime-500 font-bold py-3 px-8 rounded-full hover:bg-lime-500 hover:text-black transition-all duration-300 text-lg transform hover:scale-105"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;