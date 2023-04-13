const quizData = [
    {
        question: "Родиной Возрождения была?",
        image: "https://kartinkin.net/uploads/posts/2022-03/1648032551_7-kartinkin-net-p-epokha-vozrozhdeniya-kartinki-7.jpg",
        options: [
        { text: " Англия ", correct: false },
        { text: " Испания ", correct: false },
        { text: " Германия ", correct: false },
        { text: " Италия ", correct: true }
        ]
        },
        {
        question: "Гуманистами называли?",
        image: "http://www.ms77.ru/images/16193706.jpg",
        options: [
        { text: " Жителей больших городов ", correct: false },
        { text: " Служителей Католической церкви ", correct: false },
        { text: " Людей, придерживающихся светского взгляда на окружающий мир ", correct: 
        true },
        { text: " Владельцев мануфактур ", correct: false }
        ]
        },
        {
        question: "На какие века пришлась эпоха Возрождения?",
        image: "http://northnode.ru/wp-content/uploads/2018/06/renessans.jpg",
        options: [
            { text: " На 12-14 вв.", correct: false },
            { text: " На 13-15 вв.", correct: false },
            { text: " На 14-16 вв.", correct: true },
        ]
        },
        {
        question: "Кто из писателей Возрождения является автором романа о приключениях Дон Кихота?",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Wilhelm_Marstrand%2C_Don_Quixote_og_Sancho_Panza_ved_en_skillevej%2C_uden_datering_%28efter_1847%29%2C_0119NMK%2C_Nivaagaards_Malerisamling.jpg",
        options: [
        { text: " Томас Мор ", correct: false },
        { text: " Уильям Шекспир ", correct: false },
        { text: " Мигель Сервантес ", correct: true },
        { text: " Франсуа Рабле ", correct: false }
        ]
        },
        {
        question: "Героине какого произведения принадлежат следующие слова: «Глупость создает государства, поддерживает власть, религию, управление, суд. Да и что такое вся жизнь человеческая, как не забава Глупости?»",
        image: "https://www.artwall.ru/files/products/poster_p-84320.jpg",
        options: [
        { text: " Ромео и Джульетта ", correct: false },
        { text: " Дон Кихот ", correct: false },
        { text: " Похвала Глупости ", correct: true },
        { text: " Утопия ", correct: false }
        ]
        },
        {
        question: "Как называли небольшое лирическое вокальное произведение светского характера, написанное на стихи поэтов Возрождения?",
        image: "https://www.jeanmoust.com/galleries/a-commedia-dellarte-troupe-908605-max.jpg",
        options: [
        { text: " Молитва ", correct: false },
        { text: " Хорал ", correct: false },
        { text: " Мадригал ", correct: true },
        { text: " Опера ", correct: false }
        ]
        },
        {
        question: "Какой город становится центром гуманизма в XVI в.?",
        image: "https://img-fotki.yandex.ru/get/17917/120450570.17/0_101cfb_3faf09c7_orig",
        options: [
        { text: " Флоренция ", correct: true },
        { text: " Лондон ", correct: false },
        { text: " Мадрид ", correct: false },
        { text: " Рим ", correct: false }
        ]
        },
        {
        question: "Кто из великих художников Возрождения прославился еще и как поэт?",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Raffaello_Sanzio_-_Pietro_Bembo.jpg",
        options: [
        { text: " Диего Веласкес ", correct: false },
        { text: " Микеланджело Буонарроти ", correct: true },
        { text: " Питер Брейгель Старший ", correct: false },
        { text: " Рафаэль Санти ", correct: false }
        ]
        },
        {
        question: "В росписи Сикстинской капеллы принимал участие ",
        image: "https://i.pinimg.com/originals/2f/52/d9/2f52d95a9a8345825eec100bc9b7b01f.jpg",
        options: [
        { text: " Ганс Гольбейн ", correct: false },
        { text: " Альбрехт Дюрер ", correct: false },
        { text: " Донато Браманте ", correct: false },
        { text: " Микеланджело Буонарроти ", correct: true }
        ]
        },
        {
        question: " Какой из перечисленных художников относится к Позднему Возрождению?",
        image: "https://i.pinimg.com/originals/2f/52/d9/2f52d95a9a8345825eec100bc9b7b01f.jpg",
        options: [
        { text: " Джотто ", correct: false },
        { text: " Микеланджело ", correct: false },
        { text: " Тициан ", correct: true },
        ]
        },
];
const questionElement = document.getElementById("question");
const imageElement = document.getElementById("image");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestionIndex = 0;
let score = 0;

function showQuestionReb() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  imageElement.innerHTML = `<img src="${currentQuestion.image}" style="
  display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: 300px;">`;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.innerText = option.text;
    button.addEventListener("click", () => {
      checkAnswer(option);
    });
    optionsElement.appendChild(button);
  });
}



function checkAnswer(answer) {
  if (answer.correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestionReb();
  } else {
    showResult();
  }
}

function showResult() {
  const result = `Вы правильно ответили ${score} из ${quizData.length} вопросов. Что-то вы точно знаете, поздравляем! Если хотите пройти остальные тесты - они остались выше`;
  questionElement.innerText = result;
  imageElement.innerHTML = "";
  optionsElement.innerHTML = "";
  submitButton.disabled = true;
  const button = document.createElement("button");
    button.classList.add("option");
    button.innerText = "Попробовать снова?";
    button.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      showQuestionReb();
    });
    optionsElement.appendChild(button);
}