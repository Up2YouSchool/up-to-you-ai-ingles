
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 pt-32 bg-uptoyou-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Entre em Contato</h2>
          <p className="section-subtitle text-center">
            Tire suas dúvidas, solicite informações ou agende uma aula experimental.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Entre em contato através dos nossos canais de atendimento ou preencha o formulário.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Endereço</h3>
                    <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Email</h3>
                    <p className="text-gray-600">contato@uptoyou.com.br</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Telefone / WhatsApp</h3>
                    <p className="text-gray-600">(00) 00000-0000</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
                    <p className="text-gray-600">Sábado: 9h às 14h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input 
                      id="nome" 
                      name="nome" 
                      placeholder="Seu nome completo" 
                      required 
                      value={formData.nome}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="seu.email@exemplo.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                    <Input 
                      id="telefone" 
                      name="telefone" 
                      placeholder="(00) 00000-0000" 
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea 
                      id="mensagem" 
                      name="mensagem" 
                      placeholder="Digite sua mensagem aqui..." 
                      rows={4} 
                      required 
                      value={formData.mensagem}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contato;
