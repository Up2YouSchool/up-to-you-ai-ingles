
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-uptoyou-gray to-white flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-uptoyou-dark-blue leading-tight mb-4">
              Seu inglês, <span className="text-uptoyou-blue">do seu jeito</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Descubra seu nível e escolha o melhor caminho com a ajuda da inteligência artificial
            </p>
            <Button 
              className="btn-primary flex items-center gap-2 text-lg" 
              onClick={() => document.getElementById('nivel-test')?.scrollIntoView({behavior: 'smooth'})}
            >
              Começar agora <ArrowRight size={18} />
            </Button>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-uptoyou-blue rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-uptoyou-light-blue rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" 
                alt="Estudante feliz" 
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
