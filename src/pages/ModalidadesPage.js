
import React from 'react';
import Header from '@/components/Header';
import Modalidades from '@/components/Modalidades';
import Footer from '@/components/Footer';

const ModalidadesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Modalidades />
      </div>
      <Footer />
    </div>
  );
};

export default ModalidadesPage;
