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
