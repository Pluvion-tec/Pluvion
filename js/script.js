let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

const btnTopo = document.getElementById("btnTopo");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

function setTheme(mode) {
    const containers = document.querySelectorAll('.container, .container2, .container3, .container4, .containerquiz, .mapa');
    const textos = document.querySelectorAll('.titulo, .texto, .paragrafo, .texto-titulo, .texto-sobre-nos, .texto-imagem, .textoslideshow, .textoslideshow2');

    const titulo = document.querySelector('.titulo');
    const textoslideshow = document.querySelector('.textoslideshow');
    const textoslideshow2 = document.querySelector('.textoslideshow2');

    if (mode === 'dark') {
        containers.forEach(container => {
            container.style.backgroundColor = 'black';
        });
        textos.forEach(text => {
            text.style.color = 'white';
        });

        if (textoslideshow) textoslideshow.style.color = 'black';
        if (textoslideshow2) textoslideshow2.style.color = 'black';

    } else if (mode === 'light') {
        containers.forEach(container => {
            container.style.backgroundColor = 'white';
        });
        textos.forEach(text => {
            text.style.color = 'black';
        });

        if (titulo) titulo.style.color = 'white';

    } else if (mode === 'original') {
        containers.forEach(container => {
            container.style.backgroundColor = '';
        });

        textos.forEach(text => {
            text.style.color = '';
        });

        if (titulo) titulo.style.color = '';
        if (textoslideshow) textoslideshow.style.color = '';
        if (textoslideshow2) textoslideshow2.style.color = '';
    }
}

const questions = [
  {
    question: "O que você deve fazer se estiver dirigindo durante uma chuva muito forte?",
    answers: ["Acelerar para sair da chuva", "Parar em local seguro e esperar", "Ligar os faróis altos", "Dirigir na contramão para fugir"],
    correct: 1
  },
  {
    question: "Se estiver andando na rua e começar uma tempestade, o que NÃO se deve fazer?",
    answers: ["Evitar áreas alagadas", "Ficar embaixo de árvores", "Procurar abrigo seguro", "Se afastar de postes e fios"],
    correct: 1
  },
  {
    question: "O que fazer se sua casa começar a ser invadida pela água?",
    answers: ["Desligar a energia elétrica e buscar abrigo seguro", "Subir em móveis e esperar", "Ligar o ventilador", "Abrir todas as portas"],
    correct: 0
  },
  {
    question: "Se encontrar uma rua alagada, o que é mais seguro?",
    answers: ["Atravessar rápido", "Pular sobre a água", "Evitar passar e buscar rota alternativa", "Acelerar o carro para atravessar"],
    correct: 2
  },
  {
    question: "Durante fortes chuvas, qual destes é um risco real?",
    answers: ["Raios", "Deslizamentos", "Enchentes", "Todas as anteriores"],
    correct: 3
  },
  {
    question: "Se você estiver em casa durante um temporal com raios, o que deve fazer?",
    answers: ["Ficar longe de janelas, tomadas e aparelhos elétricos", "Ligar a TV para acompanhar as notícias", "Subir no telhado para verificar", "Ficar encostado no portão de metal"],
    correct: 0
  },
  {
    question: "Qual objeto é perigoso segurar durante uma tempestade com raios?",
    answers: ["Guarda-chuva de metal", "Copo de plástico", "Saco de papel", "Toalha de banho"],
    correct: 0
  },
  {
    question: "Se sua região tem risco de deslizamento durante chuvas fortes, o que deve fazer?",
    answers: ["Ficar em casa até a chuva passar", "Sair imediatamente para um local seguro", "Abrir as janelas", "Subir no telhado"],
    correct: 1
  },
  {
    question: "Ao ver um fio elétrico caído após uma chuva, o que você deve fazer?",
    answers: ["Ajudar a recolher", "Chutar para longe", "Evitar se aproximar e chamar a concessionária", "Tocar para ver se está desligado"],
    correct: 2
  },
  {
    question: "Qual dessas atitudes ajuda na prevenção de enchentes?",
    answers: ["Jogar lixo no bueiro", "Manter calhas e bueiros limpos", "Deixar sacolas na rua", "Descartar móveis na calçada"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(index));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  const correct = questions[currentQuestion].correct;
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    if (i === correct) {
      btn.style.backgroundColor = "#A6B66D";
    } else {
      btn.style.backgroundColor = "#f8b7b7";
    }
    btn.disabled = true;
  });

  if (index === correct) {
    score++;
  }

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextButton.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  nextButton.style.display = "none";
  loadQuestion();
}

loadQuestion();
nextButton.style.display = "none";

function validateForm() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  let valid = true;

  if (!username.value.trim()) {
    usernameError.style.display = "block";
    valid = false;
  } else {
    usernameError.style.display = "none";
  }

  if (!password.value.trim()) {
    passwordError.style.display = "block";
    valid = false;
  } else {
    passwordError.style.display = "none";
  }

  return valid;
}

