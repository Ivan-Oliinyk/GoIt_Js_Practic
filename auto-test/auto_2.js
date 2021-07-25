// =====================task 1/32==================

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// ================task 2/32=======================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// ================task 3/32=======================
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);

// ================task 4/32=======================

// const fruits = ["apple", "plum", "pear", "orange"];

// ================task 5/32=======================

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement, secondElement, lastElement);

// ================task 6/32=======================
// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// ================task 7/32=======================
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// ================task 8/32=======================
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ================task 9/32=======================
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// ================task 10/32=======================
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// //короткий вариант
// function splitMessage(message, delimeter) {
//   return message.split(delimeter);
// }

// ======================================task 11/32=======================================

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// }

// ======================================task 12/32=======================================

// function makeStringFromArray(array, delimeter) {
//   let string;

//   string = array.join(delimeter);

//   return string;
// }

// ======================================task 13/32=======================================

// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase().split(" ").join("-");
//   // Change code above this line
// }

// ======================================task 14/32=======================================

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// ======================================task 15/32=======================================

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// // const allClients = oldClients.concat(newClients); // Change this line
// const allClients = [...oldClients, ...newClients];

// console.log(allClients);

// ======================================task 16/32=======================================

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   return firstArray.concat(secondArray).slice(0, maxLength);

//   // Change code above this line
// }

// ======================================task 17/32=======================================

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// ======================================task 18/32=======================================

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   return total;

//   // Change code above this line
// }

// ======================================task 19/32=======================================

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ======================================task 20/32=======================================

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// ======================================task 21/32=======================================
// function findLongestWord(string) {
//   // Change code below this line
//   const arr = string.split(" ");

//   let longestWord = arr[0];

//   for (const elem of arr) {
//     if (elem.length > longestWord.length) {
//       longestWord = elem;
//     }
//   }

//   return longestWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// ======================================task 22/32=======================================

// ======================================task 23/32=======================================

// ======================================task 24/32=======================================

// ======================================task 25/32=======================================

// ======================================task 26/32=======================================

// ======================================task 27/32=======================================

// ======================================task 28/32=======================================

// ======================================task 29/32=======================================

// ======================================task 30/32=======================================

// ======================================task 31/32=======================================

// ======================================task 32/32=======================================
