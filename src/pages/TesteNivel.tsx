
import React from 'react';
import Header from '@/components/Header';
import NivelTest from '@/components/NivelTest';
import Footer from '@/components/Footer';

const TesteNivel = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <NivelTest />
      </div>
      <Footer />
    </div>
  );
};

export default TesteNivel;
