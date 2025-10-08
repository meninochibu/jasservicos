import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  isVisible: boolean;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isVisible, index }) => {
  return (
    <div 
      className={`bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 transform hover:-translate-y-2 transition-all ease-out duration-500 flex flex-col items-center text-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-yellow-400 mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
