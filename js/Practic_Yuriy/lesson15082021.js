console.log("Practic 15/08/2021");

// task1

// const str = "Каждый охотник желает знать";

// const strToArr = (str) => str.split(" ");

// console.log(strToArr(str));

//task2
// const str = "Каждый охотник желает знать";

// const delete_characters = (str, num) => str.slice(0, num);

// console.log(delete_characters(str, 2));
// console.log(delete_characters(str, 8));

//task3
// const vegatables = ["морковка", "репа", "редиска", "капуста"];

// const arrayClone = (arr) => [...arr];

// // const arrayClone = (arr) => arr.slice();

// // const arrayClone = (arr) => {
// //   const newArr = [];

// //   for (const elem of arr) {
// //     newArr.push(elem);
// //   }

// //   return newArr;
// // };

// // const arrayClone = (arr) => {
// //   const newArr = [];

// //   for (let i = 0; i < arr.length; i += 1) {
// //     newArr.push(arr[i]);
// //   }

// //   return newArr;
// // };

// const newArr = arrayClone(vegatables);
// const newArr2 = vegatables;

// console.log(newArr);

// console.log(newArr === vegatables);
// console.log(newArr2 === vegatables);

// *********************task4**********************************
// const vegatables = ["морковка", "репа", "редиска", "капуста"];

// const getStrFromArr = (arr) => arr.join(",");

// const getStrFromArr = function (arr) {
//   let newStr = "";

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== arr[arr.length - 1]) {
//       newStr += `${arr[i]},`;
//     } else {
//       newStr += arr[i];
//     }
//   }

//   return newStr;
// };

// const getStrFromArr = (arr) => {
//   let newStr = "";

//   for (let elem of arr) {
//     newStr += elem + ",";
//   }

//   return newStr.slice(0, newStr.length - 1);
// };

// console.log(getStrFromArr(vegatables));

// *********************task5**********************************
// const str = "HTML JavaScript PHP";

// const insert_dash = (str) => str.split(" ").join("-").toUpperCase();

// console.log(insert_dash(str));

////////////////////////////////////////////////////////////////////////////////////////////////

