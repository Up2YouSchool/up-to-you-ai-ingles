
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NivelTest from '@/components/NivelTest';
import Modalidades from '@/components/Modalidades';
import Beneficios from '@/components/Beneficios';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NivelTest />
      <Modalidades />
      <Beneficios />
      <Footer />
    </div>
  );
};

export default Index;
