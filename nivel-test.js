
// Level test functionality
document.addEventListener('DOMContentLoaded', function() {
  // Only run on the test page
  if (!document.querySelector('.teste-nivel-section')) return;
  
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
  
  let currentQuestion = 0;
  let score = 0;
  let answers = [];
  
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  const progressBar = document.getElementById('test-progress-bar');
  const currentQuestionEl = document.getElementById('current-question');
  const totalQuestionsEl = document.getElementById('total-questions');
  const percentageCompleteEl = document.getElementById('percentage-complete');
  const btnNext = document.getElementById('btn-next');
  
  // Initialize the test
  function initializeTest() {
    totalQuestionsEl.textContent = questions.length;
    showQuestion(currentQuestion);
  }
  
  // Show a question
  function showQuestion(index) {
    const question = questions[index];
    
    // Update progress indicator
    const progress = Math.round(((index + 1) / questions.length) * 100);
    progressBar.style.width = `${progress}%`;
    currentQuestionEl.textContent = index + 1;
    percentageCompleteEl.textContent = `${progress}%`;
    
    // Set question text and options
    const questionHTML = `
      <h3>${question.question}</h3>
      <div class="options">
        ${question.options.map(option => `
          <label for="option-${option.id}" class="option">
            <input type="radio" id="option-${option.id}" name="answer" value="${option.id}">
            <span>${option.text}</span>
          </label>
        `).join('')}
      </div>
    `;
    
    questionContainer.innerHTML = questionHTML;
    
    // Add click event to the entire option label
    const optionLabels = document.querySelectorAll('.option');
    optionLabels.forEach(label => {
      label.addEventListener('click', function() {
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;
      });
    });
  }
  
  // Show the test result
  function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    btnNext.style.display = 'none';
    
    // Determine the level based on score
    let level;
    if (score <= 3) {
      level = {
        name: "Iniciante (A1-A2)",
        description: "Você está começando sua jornada no inglês. Recomendamos nossos cursos para iniciantes, onde você vai aprender as estruturas básicas e vocabulário essencial.",
        icon: "🌱"
      };
    } else if (score <= 7) {
      level = {
        name: "Intermediário (B1-B2)",
        description: "Você já tem uma boa base no inglês. Nossos cursos intermediários vão ajudar você a expandir seu vocabulário, melhorar sua gramática e desenvolver fluência.",
        icon: "🚀"
      };
    } else {
      level = {
        name: "Avançado (C1-C2)", 
        description: "Parabéns! Você tem um nível avançado de inglês. Nossos cursos avançados focam em nuances da língua, expressões idiomáticas e fluência profissional.",
        icon: "🏆"
      };
    }
    
    resultContainer.innerHTML = `
      <div class="result-card">
        <div class="level-icon">${level.icon}</div>
        <h3>Seu nível é: <span class="highlight">${level.name}</span></h3>
        <p>Você acertou ${score} de ${questions.length} questões</p>
        <div class="level-description">
          <p>${level.description}</p>
        </div>
        <div class="buttons">
          <button class="btn-secondary" id="restart-test">Refazer Teste</button>
          <a href="modalidades.html" class="btn-primary">Ver Modalidades</a>
        </div>
      </div>
    `;
    
    document.getElementById('restart-test').addEventListener('click', function() {
      currentQuestion = 0;
      score = 0;
      answers = [];
      resultContainer.style.display = 'none';
      questionContainer.style.display = 'block';
      btnNext.style.display = 'block';
      showQuestion(0);
    });
  }
  
  // Handle the Next button click
  btnNext.addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
      alert('Por favor, selecione uma resposta');
      return;
    }
    
    // Record answer
    const answer = selectedOption.value;
    answers.push(answer);
    
    // Check if correct
    if (answer === questions[currentQuestion].correctAnswer) {
      score++;
    }
    
    // Move to next question or show result
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  });
  
  // Initialize the test
  initializeTest();
});
