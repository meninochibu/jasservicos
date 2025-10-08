import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const contacts = [
    {
      label: "Telefones",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      items: [{ text: 'jasservicoscontato@gmail.com', href: 'mailto:jasservicoscontato@gmail.com' }],
    },
    {
      label: "Endereço",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      items: [{ text: 'Alto-Gingone, Cidade de Pemba', href: '#' }],
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex flex-col items-center space-y-3">
              <div className="flex-shrink-0 text-yellow-400">
                {contact.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">{contact.label}</h4>
                {contact.items.map((item) => (
                  <a key={item.text} href={item.href} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    {item.text}
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