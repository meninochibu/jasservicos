import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const contacts = [
    {
      label: "Telefones",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      items: [
        { text: '84 513 9685', href: 'tel:+258845139685' },
        { text: '87 081 7058', href: 'tel:+258870817058' },
        { text: '84 566 1410', href: 'tel:+258845661410' },
      ],
    },
    {
      label: "Email",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      items: [{ text: 'jasservicoscontato@gmail.com', href: 'mailto:jasservicoscontato@gmail.com' }],
    },
    {
      label: "Endereço",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      items: [{ text: 'Alto-Gingone, Cidade de Pemba', href: '#' }],
    },
    {
      label: "Redes Sociais",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10a7 7 0 11-14 0c0-1.657 0-3 7-3s7 1.343 7 3z" />
        </svg>
      ),
      items: [
        { 
          text: 'LinkedIn', 
          href: 'https://www.linkedin.com/company/jaserviços', 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.98 0h3.82v2.2h.06c.53-1 1.82-2.2 3.75-2.2C20.38 8 22 10.48 22 14.06V24h-4v-8.67c0-2.07-.74-3.47-2.59-3.47-1.41 0-2.25.95-2.62 1.87-.14.33-.17.79-.17 1.25V24h-4V8z" />
            </svg>
          )
        },
        { 
          text: 'Instagram', 
          href: 'https://www.instagram.com/jaservicos_lda', 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
            </svg>
          )
        },
        { 
          text: 'Facebook', 
          href: 'https://www.facebook.com/share/1MX4G1bdJT/', 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.27V12h2.2l-.35 3h-1.85v7A10 10 0 0022 12z" />
            </svg>
          )
        },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-block mb-8">
          <Logo />
        </div>
        <p className="max-w-md mx-auto text-gray-400 mb-12">
          Sua solução completa em serviços de eletricidade, automação e jardinagem em Moçambique.
        </p>
        
        <h3 className="text-2xl font-bold text-white mb-10">Fale Connosco</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex flex-col items-center space-y-3">
              <div className="flex-shrink-0 text-yellow-400">
                {contact.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-2">{contact.label}</h4>
                {contact.items.map((item) => (
                  <a 
                    key={item.text} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center text-xs sm:text-sm">
          <p className="text-gray-500 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} JASERVIÇOS, LDA. Todos os direitos reservados.
          </p>
          <p className="text-gray-400">
            Website criado e gerido pela equipe{' '}
            <a href="tel:+258875728882" className="font-semibold animate-pulse-glow transition-all hover:opacity-80">
              BahiaSolutions - 875728882
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
