
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Home, BookOpen, PhoneCall, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-uptoyou-dark-blue flex items-center">
          <span className="text-uptoyou-blue">Up</span>To<span className="text-uptoyou-blue">You</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-uptoyou-blue font-medium flex items-center gap-1">
            <Home size={18} />
            <span>Início</span>
          </Link>
          <Link to="/teste-nivel" className="text-gray-700 hover:text-uptoyou-blue font-medium flex items-center gap-1">
            <FileText size={18} />
            <span>Teste de Nível</span>
          </Link>
          <Link to="/modalidades" className="text-gray-700 hover:text-uptoyou-blue font-medium flex items-center gap-1">
            <BookOpen size={18} />
            <span>Modalidades</span>
          </Link>
          <Link to="/contato" className="text-gray-700 hover:text-uptoyou-blue font-medium flex items-center gap-1">
            <PhoneCall size={18} />
            <span>Contato</span>
          </Link>
          <Button className="btn-primary">Faça o Teste de Nível</Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-uptoyou-blue font-medium flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
              <Home size={18} />
              <span>Início</span>
            </Link>
            <Link to="/teste-nivel" className="text-gray-700 hover:text-uptoyou-blue font-medium flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
              <FileText size={18} />
              <span>Teste de Nível</span>
            </Link>
            <Link to="/modalidades" className="text-gray-700 hover:text-uptoyou-blue font-medium flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
              <BookOpen size={18} />
              <span>Modalidades</span>
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-uptoyou-blue font-medium flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
              <PhoneCall size={18} />
              <span>Contato</span>
            </Link>
            <Button className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Faça o Teste de Nível</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
