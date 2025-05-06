
import React from 'react';
import { Instagram, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-uptoyou-dark-blue flex items-center mb-5 hover:opacity-90 transition-opacity">
              <span className="text-uptoyou-blue">Up</span>To<span className="text-uptoyou-blue">You</span>
            </Link>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Escola de inglês que utiliza inteligência artificial para personalizar a experiência de aprendizagem, adaptando o conteúdo ao seu ritmo e estilo de aprendizado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-uptoyou-blue text-white flex items-center justify-center hover:bg-uptoyou-dark-blue transition-all duration-300 transform hover:scale-110 hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-uptoyou-dark-blue">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-uptoyou-blue transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-uptoyou-blue group-hover:scale-125 transition-transform"></span>
                  <span>Início</span>
                </Link>
              </li>
              <li>
                <Link to="/teste-nivel" className="text-gray-600 hover:text-uptoyou-blue transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-uptoyou-blue group-hover:scale-125 transition-transform"></span>
                  <span>Teste de Nível</span>
                </Link>
              </li>
              <li>
                <Link to="/modalidades" className="text-gray-600 hover:text-uptoyou-blue transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-uptoyou-blue group-hover:scale-125 transition-transform"></span>
                  <span>Modalidades</span>
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-uptoyou-blue transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-uptoyou-blue group-hover:scale-125 transition-transform"></span>
                  <span>Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-uptoyou-dark-blue">Contato</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 flex items-start gap-3">
                <Mail size={18} className="text-uptoyou-blue mt-1 flex-shrink-0" />
                <span>up2youlearning@gmail.com</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <MessageCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <span>(34) 99338-9755</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <MapPin size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <span>Rua Major Gote, 808, Caiçaras<br />Patos de Minas - MG, 38700-207</span>
              </li>
              <li className="text-gray-600 flex items-start gap-3">
                <Clock size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Segunda a Sexta, 8h às 20h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} <span className="text-uptoyou-blue font-medium">UpToYou</span> - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
