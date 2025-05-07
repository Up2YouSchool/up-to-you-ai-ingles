
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Route, Clock } from "lucide-react";

const beneficios = [
  {
    id: "teste",
    title: "Teste Inteligente",
    description: "Nossa tecnologia de IA analisa suas respostas para identificar com precisão seu nível atual de inglês.",
    icon: Lightbulb,
    color: "bg-yellow-400"
  },
  {
    id: "roteiro",
    title: "Roteiro Personalizado",
    description: "Criamos um plano de estudos específico para suas necessidades, focando em seus pontos fracos e objetivos pessoais.",
    icon: Route,
    color: "bg-uptoyou-blue"
  },
  {
    id: "ritmo",
    title: "Aprendizado no seu Ritmo",
    description: "Acompanhamos seu progresso e adaptamos o conteúdo para que você aprenda no seu próprio tempo, sem pressão.",
    icon: Clock,
    color: "bg-green-500"
  }
];

const Beneficios = () => {
  return (
    <section className="py-20 bg-uptoyou-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Benefícios do Método com IA</h2>
        <p className="section-subtitle text-center">
          Nosso sistema de inteligência artificial torna o aprendizado mais eficiente e adaptado às suas necessidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {beneficios.map((beneficio, index) => (
            <Card 
              key={beneficio.id} 
              className="shadow-lg border-none hover:shadow-xl transition-all bg-white overflow-hidden group"
            >
              <div className="h-1 w-full bg-gradient-to-r from-uptoyou-blue to-uptoyou-light-blue"></div>
              <CardHeader className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${beneficio.color} rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <beneficio.icon size={32} />
                </div>
                <CardTitle>{beneficio.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {beneficio.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
