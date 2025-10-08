import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <clipPath id="circleClip">
              <circle cx="50" cy="50" r="48" />
            </clipPath>
          </defs>
          <g clipPath="url(#circleClip)">
            <path d="M 50 2 A 48 48 0 0 1 50 98" fill="#84cc16" />
            <path d="M 50 2 A 48 48 0 0 0 50 98" fill="#facc15" />
          </g>
          <path
            d="M55 25 L40 50 L52 50 L45 75 L60 48 L48 48 Z"
            fill="#facc15"
            stroke="#111827"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="flex items-end">
        <span className="text-4xl font-bold text-yellow-400">JAS</span>
        <span className="text-4xl font-bold text-gray-400">/</span>
        <div className="ml-2 -mb-1 text-xs font-semibold text-lime-500 leading-tight">
          <div>JARDINAGEM</div>
          <div>AUTOMAÇÃO</div>
          <div>SERVIÇOS</div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
