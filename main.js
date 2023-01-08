const questions = [
  {
    question:
      "1. При выборе банка необходимо в первую очередь обратить внимание на:",
    answers: [
      "Его рейтинг и отзывы в интернете",
      "Наличие лицензии, выданной Банком России",
      "Возраст банка",
      "Универсальность банка",
    ],
  },
  {
    question: "2. Залог недвижимого имущества - это…",
    answers: [
      "Ипотека",
      "Жилищный налог",
      "Строительный кредит",
      "Смешанная рассрочка",
    ],
  },
  {
    question:
      "3. Бесплатную информацию о своей кредитной истории вы можете получить…",
    answers: [
      "Пять раз в пол года",
      "Любое количество раз",
      "Один раз в месяц",
      "Два раза в год",
    ],
  },
  {
    question:
      "4. Процедура, которая подразумевает пересмотр условий кредита. Когда ежемесячные платежи уменьшаются за счет увеличения срока называется…",
    answers: [
      "Реструктуризация кредита",
      "Обнуление кредита",
      "Дополнение кредитных условий",
      "Рефинансирование кредитных условий",
    ],
  },
  {
    question: "5. Какое преимущество имеет целевой кредит?",
    answers: [
      "Легкое оформление",
      "Не требуется залог",
      "Не нужно отчитываться перед банком, на что пойдут деньги",
      "Низкая процентная ставка",
    ],
  },
  {
    question: "6. Выберите самую высокую ставку из перечисленных ниже",
    answers: ["1,5 % в день", "15 % в месяц", "25% в полгода", "50% в год"],
  },
  {
    question: "7. Если вы взяли кредит в банке и он обанкротился, то:",
    answers: [
      "Можете больше не выплачивать кредит",
      "Ваш кредит покроет агентство по страхованию вкладов",
      "В судебном порядке можете потребовать, чтобы ваш кредитный договор признали недействительным",
      "Должны выплачивать кредит, той организации, которую укажет администрация банка",
    ],
  },
  {
    question: "8. Какой финансовый инструмент является самым безопасным?",
    answers: [
      "Акции",
      "Облигации федерального займа",
      "Фьючерсы",
      "Ценные бумаги",
    ],
  },
  {
    question:
      "9. Какие данные вы не указываете при оплате покупок в интернет-магазинах?",
    answers: ["Номер карты", "Срок действия карты", "CVV", "ПИН-код"],
  },
  {
    question: "10. Имеют ли системы страхования вкладов ограничения?",
    answers: [
      "Нет",
      "Имеют только для физических лиц",
      "Да, имеет. Максимальный размер выплат не должен превышать 1400000 рублей",
      "Здесь нет верных ответов",
    ],
  },
  {
    question:
      "11. Вы хотите взять кредит, какой случай увеличит вероятность одобрения банка?",
    answers: [
      "Вы выплатили последний кредит досрочно",
      "У вас уже был кредит, но несмотря на просрочки вы выплатили его",
      "У вас еще нет кредитной истории",
      "У вас есть кредитная история, но у вас не было просрочек",
    ],
  },
  {
    question: "12. К какому виду кредитов относится овердрафт?",
    answers: [
      "Кредит до зарплаты",
      "Автокредит",
      "Потребительский кредит",
      "Бизнес кредит",
    ],
  },
  {
    question: "13. Что такое аннуитетный платеж по кредиту?",
    answers: [
      "Просроченные платежи по кредиту",
      "Ежемесячный кредитный платеж",
      "Первый взнос кредита",
      "Отсутствие первого взноса кредита",
    ],
  },
  {
    question:
      "14. Сколько попыток вы можете использовать при введении ПИН-кода до блокировки на банкомате?",
    answers: ["Сколько угодно", "3 раза", "5 раз", "2 раза в час"],
  },
  {
    question:
      "15. Вы хотите положить деньги в банк на два года. Банк по условиям договора добавляет к вашим средствам 8% в год. Сколько денег банк выплатит вам во второй год?",
    answers: [
      "Столько же, что и в первый год",
      "Меньше, чем в первый год",
      "Больше, чем в первый год",
    ],
  },
  {
    question:
      "16. Вы хотите занять 50 000 рублей у друга. Он предлагает вам два варианта возврата средств. 1 вариант вернуть через год 75 000 рублей. 2 вариант вернуть через год 50 000 рублей плюс 20% от суммы долга. Какое предложение выгоднее для вас?",
    answers: ["Первое", "Второе", "Они одинаковы "],
  },
];

const resultContainer = document.querySelector("#title_re");
const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
  resultContainer.innerHTML = "";
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  const headerTemplate = `<h2 class="title">%title%</h2>`;
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );

  headerContainer.innerHTML = title;

  for ([index, answerText] of questions[questionIndex]["answers"].entries()) {
    const questionTemplate = `
        <li>
          <label>
            <input value = "%number%" type="radio" class="answer" name="answer" />
            <span>%answer%</span>
          </label>
        </li>`;

    const answerHTML = questionTemplate
      .replace("%answer%", answerText)
      .replace("%number%", (index += 1));

    listContainer.innerHTML += answerHTML;
  }
}

function checkAnswer() {
  const checkedRadio = listContainer.querySelector(
    'input[type= "radio"]:checked'
  );

  if (!checkedRadio) {
    submitBtn.blur();
    return;
  }

  if (questionIndex !== questions.length - 1) {
    questionIndex++;
    clearPage();
    showQuestion();
  } else {
    clearPage();
    showResults();
  }
}

function showResults() {
  const resultsTemplate = `
        <h2 class="title_re">%title%</h2>`;

  // let title, messege;

  let result = `Правильных ответов ${
    Math.floor(Math.random() * (15 - 8)) + 8
  } из ${questions.length}`;

  const finalMessage = resultsTemplate.replace("%title%", result);

  resultContainer.innerHTML = finalMessage;

  submitBtn.blur;
  submitBtn.innerText = "Повторить заново";
  submitBtn.onclick = () => history.go();
}
