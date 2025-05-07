
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const questions = [
  {
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
    question: "Qual é a estrutura correta para formar uma pergunta no presente simples?",
    options: [
      { id: "a", text: "You like coffee?" },
      { id: "b", text: "Do you like coffee?" },
      { id: "c", text: "Are you like coffee?" },
      { id: "d", text: "You do like coffee?" }
    ],
    correctAnswer: "b"
  },
  {
    question: "Escolha a tradução correta para: 'Estou estudando inglês há dois anos.'",
    options: [
      { id: "a", text: "I study English for two years." },
      { id: "b", text: "I am studying English for two years." },
      { id: "c", text: "I have been studying English for two years." },
      { id: "d", text: "I studied English since two years." }
    ],
    correctAnswer: "c"
  },
  {
    question: "Qual a forma correta do verbo no futuro: 'Tomorrow, I _____ to the beach.'",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "going" },
      { id: "c", text: "will go" },
      { id: "d", text: "goes" }
    ],
    correctAnswer: "c"
  },
  {
    question: "Escolha a frase com o uso correto do Present Perfect:",
    options: [
      { id: "a", text: "I have watched that movie yesterday." },
      { id: "b", text: "I have lived in Brazil since 2010." },
      { id: "c", text: "I have ate lunch already." },
      { id: "d", text: "She have been to Paris last year." }
    ],
    correctAnswer: "b"
  },
  {
    question: "Select the correct conditional sentence:",
    options: [
      { id: "a", text: "If I will study, I will pass the exam." },
      { id: "b", text: "If I would study, I would pass the exam." },
      { id: "c", text: "If I study, I will pass the exam." },
      { id: "d", text: "If I study, I pass the exam." }
    ],
    correctAnswer: "c"
  },
  {
    question: "Choose the correct sentence with reported speech:",
    options: [
      { id: "a", text: "She said that she is happy." },
      { id: "b", text: "She said that she was happy." },
      { id: "c", text: "She said that she be happy." },
      { id: "d", text: "She said she is being happy." }
    ],
    correctAnswer: "b"
  },
  {
    question: "Identify the sentence with the correct use of the passive voice:",
    options: [
      { id: "a", text: "The book was wrote by him." },
      { id: "b", text: "The book was written by him." },
      { id: "c", text: "The book is writed by him." },
      { id: "d", text: "The book been wrote by him." }
    ],
    correctAnswer: "b"
  },
  {
    question: "Choose the correct use of gerund/infinitive:",
    options: [
      { id: "a", text: "I enjoy to swim in the ocean." },
      { id: "b", text: "I want swimming in the ocean." },
      { id: "c", text: "I enjoy swimming in the ocean." },
      { id: "d", text: "I want to swimming in the ocean." }
    ],
    correctAnswer: "c"
  },
  {
    question: "Select the sentence with the correct use of articles:",
    options: [
      { id: "a", text: "She is best student in the class." },
      { id: "b", text: "She is a best student in the class." },
      { id: "c", text: "She is the best student in class." },
      { id: "d", text: "She is the best student in the class." }
    ],
    correctAnswer: "d"
  }
];

const NivelTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      toast.error("Por favor, selecione uma resposta");
      return;
    }

    // Check if correct
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Record answer
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    // Reset selected option
    setSelectedOption(null);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
  };

  // Determine the level based on score
  const determineLevel = () => {
    if (score <= 3) {
      return {
        name: "Iniciante (A1-A2)",
        description: "Você está começando sua jornada no inglês. Recomendamos nossos cursos para iniciantes, onde você vai aprender as estruturas básicas e vocabulário essencial.",
        icon: "🌱"
      };
    } else if (score <= 7) {
      return {
        name: "Intermediário (B1-B2)",
        description: "Você já tem uma boa base no inglês. Nossos cursos intermediários vão ajudar você a expandir seu vocabulário, melhorar sua gramática e desenvolver fluência.",
        icon: "🚀"
      };
    } else {
      return {
        name: "Avançado (C1-C2)",
        description: "Parabéns! Você tem um nível avançado de inglês. Nossos cursos avançados focam em nuances da língua, expressões idiomáticas e fluência profissional.",
        icon: "🏆"
      };
    }
  };

  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

  return (
    <section id="nivel-test" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Descubra seu Nível de Inglês</h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Responda às perguntas abaixo e descubra seu nível atual de inglês
        </p>

        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-6">
            {!showResults ? (
              <div id="question-container">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Questão <span id="current-question">{currentQuestion + 1}</span> de{" "}
                    <span id="total-questions">{questions.length}</span>
                  </span>
                  <span className="text-sm font-medium">
                    <span id="percentage-complete">{progress}%</span>
                  </span>
                </div>

                <Progress value={progress} className="mb-8" id="test-progress-bar" />

                <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>

                <div className="options space-y-3 mb-8">
                  {questions[currentQuestion].options.map((option) => (
                    <div
                      key={option.id}
                      className={`option p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedOption === option.id
                          ? "border-uptoyou-blue bg-blue-50"
                          : "border-gray-200 hover:border-uptoyou-blue"
                      }`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <label htmlFor={`option-${option.id}`} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          id={`option-${option.id}`}
                          name="answer"
                          value={option.id}
                          checked={selectedOption === option.id}
                          onChange={() => handleOptionSelect(option.id)}
                          className="hidden"
                        />
                        <span className="text-base">{option.text}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <Button
                  id="btn-next"
                  onClick={handleNextQuestion}
                  className="w-full bg-uptoyou-blue hover:bg-uptoyou-dark-blue text-white py-2 px-4 rounded transition-colors"
                >
                  {currentQuestion === questions.length - 1 ? "Finalizar Teste" : "Próxima Questão"}
                </Button>
              </div>
            ) : (
              <div id="result-container" className="result-card text-center">
                <div className="level-icon text-6xl mb-4">{determineLevel().icon}</div>
                <h3 className="text-2xl font-bold mb-2">
                  Seu nível é: <span className="text-uptoyou-blue">{determineLevel().name}</span>
                </h3>
                <p className="mb-4">
                  Você acertou {score} de {questions.length} questões
                </p>
                <div className="level-description mb-6">
                  <p className="text-gray-600">{determineLevel().description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    id="restart-test"
                    onClick={handleRestartTest}
                    className="btn-secondary bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition-colors"
                  >
                    Refazer Teste
                  </Button>
                  <Button
                    className="btn-primary bg-uptoyou-blue hover:bg-uptoyou-dark-blue text-white py-2 px-4 rounded transition-colors"
                  >
                    <a href="modalidades.html">Ver Modalidades</a>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NivelTest;
