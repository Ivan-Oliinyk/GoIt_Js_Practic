console.log("=================== module 2-2 (Sandra)  ====================");

//==================================== task-1 ================================

//Узнать высокосный год или нет
const checkLeapYear = (year) => {
  //varian 1
  return year % 4 === 0 ? `${year} высокосный !` : `${year} НЕ высокосный !`;

  //varian 2
  // if (year % 4 === 0) return `${year} высокосный !`;
  // return `${year} НЕ высокосный !`;
};

// console.log(checkLeapYear(2015));
// console.log(checkLeapYear(2016));
// console.log(checkLeapYear(2056));
// console.log(checkLeapYear(3056));

//===================================END task-1 ===========================

//=====================================task==================================
/*Написати програму де компютер загадає число від 1 до 10 і
запропонує користувачу вгадати його Користувач вводить свій
варіант і отримує результат (Виграв чи ні) Вивести результат в
форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви
програли, компютер загадав (тут варіант компютера)" */
//В условие добавленн счетчик попыток

const guesNumber = () => {
  const numComp = Math.ceil(Math.random() * (10 - 1) + 1);
  let answer = Number(prompt("Угадайте число от 1 до 10"));
  let countert = 1;

  while (answer !== numComp) {
    answer = Number(prompt("Угадайте число от 1 до 10"));
    countert++;
  }

  alert(`Вы угадали число "${numComp}", за ${countert} попытки`);
};

// guesNumber();

//===================================END task-2 ===========================

//=================================== task-3 ===========================
/*
Написати програму яка буде знаходити суму, різницю, добуток,
частрку двох чисел Користувач вводить 2 числа потім вводить знак
операції і отримує результат в форматі "Сума чисел a i b =
результат" (такий шаблон для кожної відповіді)
*/

//Согласно условию
// const doActionWidthNumber = function (number1, number2, action) {
//   if (action === "+") return number1 + number2;
//   if (action === "-") return number1 - number2;
//   if (action === "*") return number1 * number2;
//   if (action === "/") return number1 / number2;
// };

// console.log(doActionWidthNumber(2, 5, "+"));
// console.log(doActionWidthNumber(2, 5, "-"));
// console.log(doActionWidthNumber(2, 5, "*"));
// console.log(doActionWidthNumber(2, 5, "/"));

//Через Объект
const getAction = function () {
  const action = prompt("Введите дейстиве (+, - , *, /");

  this.numbers.action = action;
  // console.log(this.numbers);
};

const obj = {
  numbers: {},

  getNumbers() {
    this.numbers.number1 = Number(prompt("Введите число 1"));
    this.numbers.number2 = Number(prompt("Введите число 2"));
  },

  action: getAction,

  doAction() {
    const elem = this.numbers;
    // console.log(elem);

    if (elem.action === "+") {
      elem.sum = elem.number1 + elem.number2;
      console.log(
        `Результат сложения ${elem.number1} и ${elem.number2} = ${
          elem.number1 + elem.number2
        }`
      );
    }
    if (elem.action === "-") {
      elem.subst = elem.number1 - elem.number2;
      console.log(
        `Результат вычитания с числа ${elem.number1} числа ${elem.number2} = ${
          elem.number1 - elem.number2
        }`
      );
    }
    if (elem.action === "*") {
      elem.mult = elem.number1 * elem.number2;
      console.log(
        `Результат умножения числа ${elem.number1} на число ${elem.number2} = ${
          elem.number1 * elem.number2
        }`
      );
    }
    if (elem.action === "/") {
      elem.devision = elem.number1 / elem.number2;
      console.log(
        `Результат деления числа ${elem.number1} на число ${elem.number2} = ${
          elem.number1 / elem.number2
        }`
      );
    }
  },
};

// obj.getNumbers();
// obj.action();
// obj.doAction();
// console.log(obj);

//===================================END task-3 ===========================

//=================================== task-4 ===========================
/*Написати програму яка буде переводити температуру з цельсія в
фаренгейти, або навпаки з фаренгейта в цельсії*/

const celsiiToFarengeit = (value) => {
  return (value * 9) / 5 + 32;
};

const farengeitToCelsii = (value) => {
  return ((value - 32) * 5) / 9;
};

// console.log(celsiiToFarengeit(10));
// console.log(farengeitToCelsii(50));

//===================================END task-4 ===========================

//=================================== task-5 =============================
/* Написати програму яка перевіряє чи введене число потрапляє в
діапазон від 55 до 99 включно*/
const checRange = (min, max, value) => {
  for (let i = min; i <= max; i += 1) {
    if (value === i)
      return `Число ${value} находится в диапазоне чисел от ${min} до ${max}`;
  }

  return `Число ${value} НЕ находится в диапазоне чисел от ${min} до ${max}`;
};

// console.log(checRange(55, 99, 5));
// console.log(checRange(55, 99, 55));
// console.log(checRange(55, 99, 99));
// console.log(checRange(55, 99, 77));
//===================================END task-5 ===========================

//===================================  task-6 =============================
/*Написати програму де користувач вводить 3 числа, після вводу всіх
трьох чисел йому на екрані показується найбільше з них. Додатково
перевіряти чи це взагалі числа*/

const findBigNumber = (num1, num2, num3) => {
  const arr = [num1, num2, num3];
  let bigNum = arr[0];

  for (const elem of arr) {
    if (elem > arr[0] && typeof elem === "number") bigNum = elem;
  }

  return bigNum;
};

// console.log(
//   findBigNumber(
//     +prompt("Введите число 1 :"),
//     +prompt("Введите число 2 :"),
//     +prompt("Введите число 1 :")
//   )
// );

//===================================END task-6 ===========================

//===================================  task-7 =============================
// Написати програму яка переведе введену оцінку студента до
// болонського формату 89 - 100 це A 75 - 88 це В 60 - 74 це С 45 -
// 59 це D 20 - 44 це Е до 20 це F
const toBolonFormat = (value) => {
  if (value >= 89 && value <= 100) return "A";
  if (value >= 75 && value <= 88) return "B";
  if (value >= 60 && value <= 74) return "C";
  if (value >= 45 && value <= 59) return "D";
  if (value >= 20 && value <= 44) return "E";
  if (value < 20) return "F";
};

// console.log(toBolonFormat(91));
// console.log(toBolonFormat(76));
// console.log(toBolonFormat(60));
// console.log(toBolonFormat(49));
// console.log(toBolonFormat(21));
// console.log(toBolonFormat(19));

//===================================END task-7 ===========================

//===================================  task-8 =============================
/* Написати програму яка отримає від користувача число (кількість
хвилин) і виведе на екран строку в форматі години і хвилини
Приклад 70 покаже 1:10 450 покаже 7:30 1441 покаже 24:1 */

const minutesToHour = (minutes) => {
  const fullHour = Math.floor(minutes / 60);
  const restMinutes = minutes % 60;

  return `${fullHour}:${restMinutes}`;
};

// console.log(minutesToHour(70));
// console.log(minutesToHour(450));
// console.log(minutesToHour(1441));

//===================================END task-8 ===========================

//===================================  task-9 =============================

/*Написати гру камінь ножиці папір. Де компютер загадує своє
значення потім користувач вводить свій варіант і далі ми бачимо
результат на екпані хто виграв*/

const runGameStoneScissorsPaper = (element) => {
  const elemets = ["stone", "scissors", "paper"];
  console.log(element);
  const randomChoice = elemets[Math.round(Math.random() * (2 - 0) + 0)];
  console.log(randomChoice);

  if (
    (element === elemets[0] && randomChoice === elemets[1]) ||
    (element === elemets[1] && randomChoice === elemets[2]) ||
    (element === elemets[2] && randomChoice === elemets[0])
  ) {
    return `Вы выиграли (=_=) !`;
  }

  if (
    (element === elemets[0] && randomChoice === elemets[0]) ||
    (element === elemets[1] && randomChoice === elemets[1]) ||
    (element === elemets[2] && randomChoice === elemets[2])
  ) {
    return `Ничья !`;
  }

  return `Вы проиграли :( !`;
};

// console.log(runGameStoneScissorsPaper("stone"));

//===================================END task-9 ===========================

//===================================  task-10 =============================

// Написати ф-ю <strong>capitalize</strong> яка буде приймати строку
// і буде вертати нову строку де кожне слово буде починатися з
// великої літери.

const capitalize = (str) => {
  const arr = str.split(" ");
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }

  return newArr.join(" ");
};

// console.log(capitalize("the quick brown fox"));

//===================================END task-10 ===========================

//===================================  task-11 =============================
// Написати ф-ю <strong>countVowels</strong> яка буде приймати строку
// і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті

const countVowels = (str) => {
  const arrLetters = str.split("");
  const arrConditions = "aeiouAEIOU".split("");
  let newStr = "";

  for (const letter of arrLetters) {
    if (arrConditions.includes(letter)) newStr += letter;
  }

  return newStr.length;
};

//console.log(countVowels("the quick brown fox")); //5
//===================================END task-11 ===========================

//===================================  task-12 ===========================
// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і
// велечину базового шрифта ("20px") і вертає конвертований розмір в
// пікселях

const remToPx = (rem, px) => {
  return parseInt(rem, 10) * parseInt(px, 10) + "px";
};

// console.log(remToPx("2rem", "20px"));

//===================================END task-12===========================

//===================================  task- 13===========================
// Написати ф-ю що приймає число (температура в цельсіях) і виводить
// результат в фаренгейтах (строка 136 уже была задача)

// const celsiiToFarengeit = (value) => {
//   return (value * 9) / 5 + 32;
// };

// console.log(celsiiToFarengeit(46));

//===================================END task- 13===========================

//===================================  task-14 ===========================
// Написати ф-ю <strong>calculateDogAge</strong> яка приймає один
// параметр - вік собачки. Результатом її роботи буде вік перевединий
// на людський (1 рік собаки це 7 років в людини)

const ageDogTransformToAgePeople = (dogAge) => {
  return dogAge * 7;
};

// console.log(ageDogTransformToAgePeople(8));

//===================================END task-14 ===========================

//===================================  task-15 ****===========================
// Написати ф-ю <strong>rgbToHex</strong> яка приймає колір в форматі
// rgb і повертає колір в форматі hex

const rgbToHex = (rgb) => {};

// rgbToHex("rgb(140, 105, 105)");

//===================================END task-15 ===========================
/* <p>
  Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи
  <br />
  <code>nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]</code>
  <br />
  <code>nonUniqueElements([1, 2, 3, 4, 5]) // []</code>
  <br />
  <code>nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]</code>
  <br />
  <code>nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]</code>
</p>; */

const nonUniqueElements = (arr) => {};
//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================

//===================================task-16 ===============================

//===================================END task-16 ===========================
