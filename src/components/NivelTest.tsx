
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Perguntas e opções para o teste
const questions = [
  {
    id: 1,
    question: "Como você se apresentaria em inglês?",
    options: [
      { id: "a", text: "My name is..." },
      { id: "b", text: "I have... years old" },
      { id: "c", text: "I is from..." },
      { id: "d", text: "Hello! I called..." }
    ],
    correctAnswer: "a"
  },
  {
    id: 2,
    question: "Qual a tradução correta para: 'Eu gosto de aprender inglês'?",
    options: [
      { id: "a", text: "I likes to learn English" },
      { id: "b", text: "I like learning English" },
      { id: "c", text: "I learning English like" },
      { id: "d", text: "Me like learn English" }
    ],
    correctAnswer: "b"
  },
  {
    id: 3,
    question: "Escolha a frase gramaticalmente correta:",
    options: [
      { id: "a", text: "She don't like coffee" },
      { id: "b", text: "They doesn't study English" },
      { id: "c", text: "He doesn't work here" },
      { id: "d", text: "I not understand the question" }
    ],
    correctAnswer: "c"
  },
  {
    id: 4,
    question: "Qual o tempo verbal correto na frase: 'Yesterday, I ___ to the store'?",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "gone" },
      { id: "c", text: "went" },
      { id: "d", text: "going" }
    ],
    correctAnswer: "c"
  },
  {
    id: 5,
    question: "Como você perguntaria 'Que horas são?' em inglês?",
    options: [
      { id: "a", text: "What is the hour?" },
      { id: "b", text: "What time is it?" },
      { id: "c", text: "How many hours?" },
      { id: "d", text: "What clock is it?" }
    ],
    correctAnswer: "b"
  },
  {
    id: 6,
    question: "Complete a frase: 'If I ___ rich, I would buy a mansion.'",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "will be" },
      { id: "c", text: "was" },
      { id: "d", text: "were" }
    ],
    correctAnswer: "d"
  },
  {
    id: 7,
    question: "Qual é a forma correta do comparativo: 'This book is ___ than that one.'",
    options: [
      { id: "a", text: "more interesting" },
      { id: "b", text: "interestinger" },
      { id: "c", text: "most interesting" },
      { id: "d", text: "interesting more" }
    ],
    correctAnswer: "a"
  }
];

// Definição dos níveis com base na pontuação
const levels = [
  { 
    id: "iniciante", 
    name: "Iniciante", 
    min: 0, 
    max: 3, 
    description: "Você está começando sua jornada no inglês. Recomendamos nosso curso para iniciantes, com foco em gramática básica e vocabulário essencial.",
    icon: "🌱"
  },
  { 
    id: "intermediario", 
    name: "Intermediário", 
    min: 4, 
    max: 6, 
    description: "Você já tem uma boa base no inglês. Nosso curso intermediário vai expandir seu vocabulário e aprimorar suas habilidades de comunicação.",
    icon: "🚀"
  },
  { 
    id: "avancado", 
    name: "Avançado", 
    min: 7, 
    max: 10, 
    description: "Parabéns! Você tem um nível avançado de inglês. Nosso curso avançado focará em nuances da língua, expressões idiomáticas e fluência natural.",
    icon: "🏆"
  }
];

const NivelTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState<typeof levels[0] | null>(null);

  const handleAnswer = () => {
    if (!selectedOption) {
      toast.error("Por favor, selecione uma resposta");
      return;
    }

    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Finalizar o teste e calcular o resultado
      const finalScore = isCorrect ? score + 1 : score;
      const userLevel = levels.find(l => finalScore >= l.min && finalScore <= l.max) || levels[0];
      setLevel(userLevel);
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setLevel(null);
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <section id="nivel-test" className="py-20 bg-uptoyou-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Teste de Nível</h2>
        <p className="section-subtitle text-center">
          Descubra seu nível de inglês respondendo às perguntas abaixo. 
          Ao final, você receberá uma recomendação personalizada.
        </p>

        <div className="max-w-2xl mx-auto mt-8">
          {!showResult ? (
            <Card className="shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                  <span className="text-sm bg-uptoyou-blue text-white py-1 px-3 rounded-full">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </CardTitle>
                <CardDescription>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div 
                      className="bg-uptoyou-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {currentQuestionData.question}
                  </h3>
                  <RadioGroup 
                    value={selectedOption || ""}
                    onValueChange={setSelectedOption}
                    className="space-y-3"
                  >
                    {currentQuestionData.options.map((option) => (
                      <div 
                        key={option.id}
                        className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                          selectedOption === option.id 
                            ? 'border-uptoyou-blue bg-uptoyou-blue bg-opacity-5' 
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                        <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <Button 
                  className="w-full btn-primary" 
                  onClick={handleAnswer}
                  disabled={!selectedOption}
                >
                  {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg animate-fade-in">
              <CardHeader className="text-center">
                <div className="text-6xl mb-2">{level?.icon}</div>
                <CardTitle className="text-2xl">Seu nível é: <span className="text-uptoyou-blue">{level?.name}</span></CardTitle>
                <CardDescription className="text-lg mt-2">
                  Você acertou {score} de {questions.length} questões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-uptoyou-gray rounded-lg">
                  <p className="text-gray-700">{level?.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="btn-secondary flex-1" 
                    onClick={restartTest} 
                    variant="outline"
                  >
                    Refazer Teste
                  </Button>
                  <Button 
                    className="btn-primary flex-1"
                    onClick={() => document.getElementById('modalidades')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Ver Modalidades
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default NivelTest;
