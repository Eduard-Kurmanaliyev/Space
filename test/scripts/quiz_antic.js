const quizDataA = [
    {
      question: "Какой греческий бог был покровителем искусств и наук?",
      image: "https://i.pinimg.com/originals/b7/f2/dc/b7f2dc162cefcb4317e115129e09fe88.jpg",
      options: [
        { text: "Аполлон", correct: true },
        { text: "Зевс", correct: false },
        { text: "Посейдон", correct: false },
        { text: "Арес", correct: false }
      ]
        },
        {
        question: "Какой греческий бог был покровителем войны?",
        image: "https://i.pinimg.com/736x/40/66/06/406606c9475eca8fec3b108c5dd79122.jpg",
        options: [
          { text: "Зевс", correct: false },
          { text: "Арес", correct: true },
          { text: "Гермес", correct: false },
          { text: "Аполлон", correct: false }
        ]
        },
        {
        question: "Кто положил начало эллинистической эпохи в Египте?",
        image: "https://i.pinimg.com/originals/a6/1d/89/a61d8974d612dfd3b34bea9f39522d84.jpg",
        options: [
            { text: " Птолемей", correct: false },
            { text: " Юлий Цезарь ", correct: false },
            { text: "Александр Македонский", correct: true },
            { text: " Марк Антоний ", correct: false }
        ]
        },
        {
        question: "Какой из римских сенаторов завершал каждую свою речь словами 'карфаген должен быть разрушен'",
        image: "https://traveltimes.ru/wp-content/uploads/2021/07/cUzJcJ4FOQ8.jpg",
        options: [
        { text: "Марк Порций Катон", correct: true },
        { text: " Марк Лициний Красс ", correct: false },
        { text: " Марк Порций Катон Утический ", correct: false },
        { text: " Марк Транквилий ", correct: false }
        ]
        },
        {
        question: "Какой греческий герой был известен своей хитростью?",
        image: "https://avatars.dzeninfra.ru/get-zen_doc/3414416/pub_60d564ef41086e684ce7cee7_60d5653c368b4e4d5c927544/scale_1200",
        options: [
        { text: "Персей", correct: false },
        { text: "Геракл", correct: false },
        { text: "Тесей", correct: false },
        { text: "Одиссей", correct: true }
        ]
        },
        {
        question: "Что, по слухам, сделал Гай Юлий Цезарь, когда его захватили в плен пираты?",
        image: "https://kartinkin.net/uploads/posts/2022-12/thumbs/1670471015_40-kartinkin-net-p-yulii-tsezar-kartinki-oboi-44.jpg",
        options: [
        { text: " Завербовал пиратов в свой флот ", correct: false },
        { text: " Собственноручно освободил себя ", correct: false },
        { text: " Оскорбился размером выкупа, потребовав у пиратов требовать за себя в два раза больше ", correct: true },
        { text: " Ничего, он ждал, пока его семья за него заплатит ", correct: false }
        ]
        },
        {
        question: "Чем сначала прославился Марк Антоний?",
        image: "https://i.pinimg.com/originals/3e/7e/a8/3e7ea8c83bf6777b354f0b8e7a8b9c04.jpg",
        options: [
        { text: " Своим расточительством, пошлостью и развратом в юношестве ", correct: true },
        { text: " Своим полководческим талантом и навыками бойца ", correct: false },
        { text: " Своим богатством и щедростью к простым людям ", correct: false },
        { text: " Тем, что он был другом Цезаря ", correct: false }
        ]
        },
        {
        question: "Как, по преданию, умер Марк Лициний Красс, богатейший человек в истории Древнено Рима?",
        image: "https://privately.ru/note/uploads/posts/2020-08/privately.ru_10-samyh-bogatyh-ljudej-za-vsju-istoriju-chelovechestva-8.jpg",
        options: [
        { text: " В старости он тихо удалился в свою усадьбу, где умер среди рабов и наложниц ", correct: false },
        { text: " Парфяне на переговорах залили ему в глотку расплавленное золото, в назидание ", correct: true },
        { text: " Коллеги по триумвирату (Гай Юлий Цезарь и Гней Помпей) его отравили ", correct: false },
        { text: " Запнувшись о собственный плащ он упал лицом на копье ", correct: false }
        ]
        },
        {
        question: " В чем заключалась основная политическая программа Цезаря? ",
        image: "https://avatars.dzeninfra.ru/get-zen_doc/1245815/pub_5be1648663d2ac00ab4211f7_5be164b56ff97800aa5293f7/scale_1200",
        options: [
        { text: " Вернуть старые порядки, эпоху Царей, чтобы навести в Риме порядок ", correct: false },
        { text: " Реформировать рабовладельческий строй, чтобы совершить переход в капитализм ", correct: false },
        { text: " Узурпировать как можно больше власти ", correct: false },
        { text: " Дать гражданам республики базовые вещи: землю и работу ", correct: true }
        ]
        },
        {
        question: "Как звали последнего Римского Императора?",
        image: "https://sun9-9.userapi.com/impg/t86FFxst1j65jwU-K-r6GLEKY0qi3oHgjXgCPA/-Q0Q970X3fc.jpg?size=810x553&quality=96&sign=30adad01dc21a95fe4caa55c5ff438b0&c_uniq_tag=JlN88blRT04ueVO65og8iwW30OdDjjXI_KifUnIh-kw&type=album",
        options: [
        { text: " Ромул ", correct: false },
        { text: " Тициан ", correct: false },
        { text: " Константин ", correct: true },
        ]
        },
];
const questionElementA = document.getElementById("question");
const imageElementA = document.getElementById("image");
const optionsElementA = document.getElementById("options");
const submitButtonA = document.getElementById("submit");

let currentQuestionIndexA = 0;
let scoreA = 0;

function showQuestionA() {
  const currentQuestionA = quizDataA[currentQuestionIndex];
  questionElementA.innerText = currentQuestionA.question;
  imageElementA.innerHTML = `<img src="${currentQuestionA.image}" style="
  display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: 300px;">`;
  optionsElementA.innerHTML = "";
  currentQuestionA.options.forEach(option => {
    const buttonA = document.createElement("button");
    buttonA.classList.add("option");
    buttonA.innerText = option.text;
    buttonA.addEventListener("click", () => {
      checkAnswer(option);
    });
    optionsElementA.appendChild(buttonA);
  });
}



function checkAnswerA(answer) {
  if (answer.correct) {
    scoreA++;
  }
  currentQuestionIndexA++;
  if (currentQuestionIndexA < quizDataA.length) {
    showQuestionA();
  } else {
    showResultA();
  }
}

function showResultA() {
  const resultA = `You scored ${scoreA} out of ${quizDataA.length}`;
  questionElementA.innerText = resultA;
  imageElementA.innerHTML = "";
  optionsElementA.innerHTML = "";
  submitButtonA.disabled = true;
  const buttonA = document.createElement("button");
    buttonA.classList.add("option");
    buttonA.innerText = "Попробовать снова?";
    buttonA.addEventListener("click", () => {
      currentQuestionIndexA = 0;
      scoreA = 0;
      showQuestionA();
    });
    optionsElementA.appendChild(buttonA);
}