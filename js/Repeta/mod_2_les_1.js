const cart = [54, 28, 105, 11, 80, 22, 0];

//============ посчитать общую сумму в корзине ===============
const runTotalArr = function(arr) {
  
  let totalPrice = 0;

  //variant #1
  // for(let i = 0; i < arr.length; i += 1) {
  //   totalPrice += arr[i];
  // }

  //variant #2
  for (const value of arr) {
    totalPrice += value;
  }

  console.log(`Total: ${totalPrice}`);
}

// runTotalArr(cart);

//============ посчитать суму всех четных чисел ===============

const sumOddNum = function (arr) {
  let sumNum = 0;

  for ( const value of arr) {
    if (value % 2 === 0 && value !== 0) {
      sumNum += value;
      console.log(`Парное число: ${value}`);
    }
  }

  console.log(`Total: ${sumNum}`);
}

// sumOddNum(cart);

//============ Задача ===============
// Напиши скрипт поиска логина
// - Если логина нет, вывести сообщение  'Пользователь [логин] не найден'
// - Если нашли логин, вывести сообщение 'Пользователь найден'.

// - Сначала через for
// - Потом через for of
// - Логига break
// -Метод include с тернарным методом 

const logins = ['m4dOssw', 'Lorf', 'Dokil91', 'Azgart89', 'Loki888'];
const loginToFind = 'Lorf';


//====== через for
// const findLogin = function(login, arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === login) {
//       return console.log(`Пользователь с логином '${login}' найден`);
//     }
//   }

//   console.log(`Пользователь с логином '${login}' не найден`);
// }

// ====== через for of
// const findLogin = function(login, arr) {
//   for (const value of arr) {
//     if(value === login) {
//       return console.log(`Пользователь с логином '${login}' найден`); 
//     }
//   }

//   console.log(`Пользователь с логином '${login}' не найден`);
// }

const findLogin = function(login, arr) {
  arr.includes(login) 
  ? console.log(`Пользователь с логином '${login}' найден`) 
  : console.log(`Пользователь с логином '${login}' не найден`);
}


// findLogin(loginToFind, logins);



//=============== Задача =============

// - Напиши скрипт поиска самого маленького числа в массиве
// - при условии что числа не повторяются

const numbers = [3, 55, 89, 4, 11, 15 ,19, 2, 21, 1, -2, 0];

const findSmallNum = function(arr) {
  let smallNum = arr[0];

  // for (let i = 0; i < arr.length ; i += 1) {
  //   if (smallNum > arr[i]) {
  //     smallNum = arr[i];
  //   }
  // }

  for (const number of arr) { 
    if (number < smallNum) {
      smallNum = number;
    }
  }

  console.log(smallNum);
}

// findSmallNum(numbers);

//===== Сшить массив ======

const friend = ['Ivan', 'Egor', 'Margo', 'Tolik'];

const uniteArr = function (arr) {
  let unites = '';

  // for ( const value of arr) {
  //   unites += value + ",";
  // }

  //unites = unites.slice(0, unites.length-1);

  unites = arr.join(',');

  console.log(unites);
}

// uniteArr(friend);

// ================ Задача =================
//инверсия строки

const string = 'JavaScript';

const toInvertStr = string => {
  const letters = string.split('');
  let invertString = '';

  for(const letter of letters) {
    // if (letter === letter.toUpperCase()) {
    //   invertString += letter.toLowerCase();
    // } else {
    //   invertString +=letter.toUpperCase();  
    // }

    invertString += 
      letter === letter.toUpperCase() 
        ? letter.toLowerCase() 
        : letter.toUpperCase();
  }

  console.log(invertString);
}

toInvertStr(string);


//=======Задача ==============

const title = 'Top 10 benefits of React framwork';

const toSlug = function(str) {
  return str.toLowerCase().split(' ').join('-');
}
 
// console.log(toSlug(title)); 

let arr1 = [0, 1, 2, 3];
arr1.splice(1, 0, 22);

// console.log(arr1);

function XO(str) {
  str = str.toLowerCase();  
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str.includes('x')) {
      countX += 1;
      console.log(countX);
    } 
    
    if (str.includes('o')) {
      countO += 1;
      console.log(countO);
    }
  }

  if (countX !== countO) {
    return false;
  }
  return  true;
}

// console.log(XO('xo'));

function noSpace(x){
  let newStr = '';

  for (let i = 0; i < x.length; i += 1) {
    if (x[i] !== ' ') {
      newStr += x[i];
    }
  }

  return newStr;
}

function findLongestWord(string) {
  const arr = string.split(' ');
  let longestWord = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }

  return longestWord;
}

// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord(""));


function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
  	numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

// console.log(createArrayOfNumbers(14, 17));

//============= task 23 =====================
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

function filterArray(numbers, value) {
  // Change code below this line
  const arr = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      arr.push(numbers[i]);
    }
  }

  return arr;
 // Change code above this line
}

// console.log(filterArray([1, 2, 3, 4, 5], 3));


// ======= task 25 ======== 

function getCommonElements(array1, array2) {
  const arr = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      arr.push(array1[i]);  
    }
  }

  return arr;
}

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]


//========== 26 =======
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const a of order) {
    total += a;
  }

  // Change code above this line
  return total;
}

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

/// ====27====

function filterArray1(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

// console.log(filterArray1([12, 24, 8, 41, 76], 20));

// ===============29=========

function getEvenNumbers(start, end) {
  // Change code below this line
  const eventnumbers = [];
 
  for (let i = start; i <= end; i+= 1) {
     if (i % 2 === 0) {
         eventnumbers.push(i);
       }
   }

  return eventnumbers;
   // Change code above this line
 }

// console.log(getEvenNumbers(6, 12));

// ======= 32 =======
function includes(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}

// console.log(includes([1, 2, 3, 4, 5], 3));
// ...rest оператор
const add = function(...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

// console.log(add(1, 2, 3, 4));
