// let str = "";

// for (let i = 0; i < 10; i += 1) {
//   str += "#";
//   console.log(str);
// }

/////////////////////////////
// Создайте переменные m и n. В m поместите произвольное числовое значение. Напишите оператор ветвления if так, чтобы если m было больше 50, то в переменную n помещалось слово «большое», иначе — слово «маленькое».

const getRandomNum = () => {
  // let m;
  // let n;

  // m = Math.floor(Math.random() * 70);

  // m > 50 ? (n = "Большое") : (n = "Маленькое");

  // return n;

  ///////////////////////////////////

  Math.floor(Math.random() * 70) > 50
    ? console.log("Большое")
    : console.log("Маленькое");
};

// getRandomNum();

// Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
// let number = 45;

// while (number < 670) {
//   if (number % 10 === 0) {
//     console.log(number);
//   }

//   number += 1;
// }

/////////////////////////////

function logIteration() {
  for (let i = 0; i < 100; i += 1) {
    if (i % 3 === 0) {
      console.log("B I Z");
    } else if (i % 5 === 0) {
      console.log("PIZZZZ !");
    }
  }
}

// logIteration();

/////////////////////////////
// Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)

function logRandomNumber() {
  const num = Math.floor(Math.random() * 10);

  switch (num) {
    case 0:
      console.log("Ноль");
      break;

    case 1:
      console.log("Один");
      break;

    case 2:
      console.log("Два");
      break;

    case 3:
      console.log("Три");
      break;

    case 4:
      console.log("Четыре");
      break;

    case 5:
      console.log("Пять");
      break;

    case 6:
      console.log("Шесть");
      break;

    case 7:
      console.log("Семь");
      break;

    case 8:
      console.log("Восемь");
      break;

    case 9:
      console.log("Девять");
      break;

    default:
      break;
  }
}

// logRandomNumber();

/////////////////////////////////////

// Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».
// Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»

const hello1 = () => {
  return "«Привет, JavaScript!»";
};

const hello2 = (name) => {
  return `«Привет, ${name}»`;
};

// console.log(hello1());
// console.log(hello2("Ivan"));

/////////////////////

// 2.	Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.
// 3.	Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка

const getSum = (a, b) => {
  return a + b;
};

// console.log(getSum(5, 11));

const repeatStr = (str, n = 2) => {
  let finalStr = "";

  for (let i = 0; i < n; i += 1) {
    finalStr += str;
  }

  return finalStr;
};

// console.log(repeatStr("Get", 4));

/////////////////////////////
// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rgb() {
  let r = getRandomNumber(0, 255);
  let g = getRandomNumber(0, 255);
  let b = getRandomNumber(0, 255);

  return `«rgb (${r}, ${g}, ${b})»`;
}

// console.log(rgb());

////////////////////////////////////////////

// Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).

const avg = (...args) => {
  let sum = 0;

  for (const arg of args) {
    sum += arg;
  }

  return sum / args.length;
};

// console.log(avg(1, 2, 3, 10));

//////////////////////////////////////////////////

const returnPol = (string) => {
  let strArr = [];
  let str = "";

  for (let i = string.length; i >= 0; i -= 1) {
    strArr.push(string[i]);
  }

  str = strArr.join("");
  console.log(str);

  if (str.toLowerCase() === string.toLowerCase()) {
    return true;
  }

  return false;
};

// console.log(returnPol("Anna"));

function nameA(a) {
  a = a.toLowerCase();
  let reversing = a.split("").reverse().join("");

  if (a === reversing) {
    return true;
  }

  return false;
}

//////////////////////////////////////////////////

let array = [];

for (let i = 0; i < 72; i += 1) {
  if (i % 9 === 0) {
    array.push("\n");
  } else {
    if (i % 2 === 0) {
      array.push("#");
    } else {
      array.push(" ");
    }
  }
}

// console.log(array.join(""));

//ДЗ*****
// Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся структура – список (не путайте с массивом). Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную. Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.

// function arrayNum(num) {}

///////////////////////////////
var obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

function deepEqual(a, b) {
  // for (const key in a) {
  //   if (b[key]) {
  //     if (b[key] === a[key]) {
  //       return true;
  //     }
  //     return false;
  //   } else {
  //     return false;
  //   }
  // }

  return JSON.stringify(a) === JSON.stringify(b);
}
