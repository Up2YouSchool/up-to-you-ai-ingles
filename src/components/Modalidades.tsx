
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, Plane, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const modalidades = [
  {
    id: "business",
    title: "Business",
    description: "Inglês para o mercado de trabalho, com foco em reuniões, apresentações e comunicação profissional.",
    icon: Briefcase,
    color: "bg-blue-500",
    features: ["Vocabulário corporativo", "Comunicação em reuniões", "E-mails profissionais", "Negociação"]
  },
  {
    id: "viagens",
    title: "Viagens",
    description: "Inglês voltado para turismo e situações práticas durante viagens internacionais.",
    icon: Plane,
    color: "bg-green-500",
    features: ["Conversas cotidianas", "Situações de viagem", "Vocabulário turístico", "Expressões úteis"]
  },
  {
    id: "conversacao",
    title: "Conversação",
    description: "Foco em comunicação fluente para dialogar com confiança em qualquer situação.",
    icon: MessageSquare,
    color: "bg-purple-500",
    features: ["Pronúncia", "Fluência", "Expressões idiomáticas", "Debates e discussões"]
  }
];

const Modalidades = () => {
  const handleModalidadeClick = (modalidade: string) => {
    toast.success(`Modalidade ${modalidade} selecionada! Em breve entraremos em contato.`);
  };

  return (
    <section id="modalidades" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Escolha sua Modalidade</h2>
        <p className="section-subtitle text-center">
          Baseado no seu resultado do teste de nível, selecione a modalidade que melhor se adapta aos seus objetivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {modalidades.map((modalidade) => (
            <Card key={modalidade.id} className="shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className={`h-2 ${modalidade.color} w-full`}></div>
              <CardHeader className="pt-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <div className={`${modalidade.color} p-4 rounded-full`}>
                    <modalidade.icon size={28} />
                  </div>
                </div>
                <CardTitle className="text-center text-xl">{modalidade.title}</CardTitle>
                <CardDescription className="text-center">{modalidade.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {modalidade.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-uptoyou-blue"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="btn-primary w-full group-hover:scale-105 transition-transform"
                  onClick={() => handleModalidadeClick(modalidade.title)}
                >
                  Quero Esse!
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modalidades;
