
import React from 'react';
import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-uptoyou-dark-blue flex items-center mb-4">
              <span className="text-uptoyou-blue">Up</span>To<span className="text-uptoyou-blue">You</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Escola de inglês que utiliza inteligência artificial para personalizar a experiência de aprendizagem.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-uptoyou-blue text-white flex items-center justify-center hover:bg-uptoyou-dark-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-uptoyou-blue transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/teste-nivel" className="text-gray-600 hover:text-uptoyou-blue transition-colors">Teste de Nível</Link>
              </li>
              <li>
                <Link to="/modalidades" className="text-gray-600 hover:text-uptoyou-blue transition-colors">Modalidades</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-uptoyou-blue transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">Email:</span> up2youlearning@gmail.com
              </li>
              <li className="text-gray-600">
                <span className="font-medium">WhatsApp:</span> (34) 99338-9755
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Endereço:</span> Rua Major Gote, 808, Caiçaras - Patos de Minas - MG, 38700-207
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Horário:</span> Seg a Sex, 8h às 20h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-gray-600">
            &copy; {currentYear} UpToYou - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
