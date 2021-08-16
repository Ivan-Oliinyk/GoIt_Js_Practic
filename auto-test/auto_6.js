console.log("=========== auto module 6 ==========");

//===================task 1/44 =========================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach((elem) => (totalPrice += elem));
//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
//===================END task 2/44 =========================

//===================task 1/44 =============================
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach((elem) => {
//     if (elem > value) filteredNumbers.push(elem);
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//===================END task 2/44 =========================

//===================task 3/44 =============================
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
//   firstArray.forEach((elem) => {
//     secondArray.forEach((element) => {
//       if (elem === element) commonElements.push(elem);
//     });
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//===================END task 3/44 =========================

//===================task 4/44 =============================
// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(8, 60));

//===================END task 4/44 =========================

//===================task 5/44 =============================
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(8, 60));
// Пиши код выше этой строки

//===================END task 5/44 =========================

//===================task 6/44 =============================
// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };
// Пиши код выше этой строки

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//===================END task 6/44 =========================

//===================task 7/44 =============================
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) filteredNumbers.push(number);
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// };

// console.log(filterArray([12, 24, 8, 41, 76], 20));

//===================END task 7/44 =========================

//===================task 8/44 =============================
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) commonElements.push(element);
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//===================END task 8/44 =========================

//===================task 9/44 =============================
// const changeEven = (numbers, value) => {
//   // Пиши код ниже этой строки
//   const newArray = [];

//   numbers.forEach((elem) => {
//     !(elem % 2) ? newArray.push(elem + value) : newArray.push(elem);
//   });

//   return newArray;
//   // Пиши код выше этой строки
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

//===================END task 9/44 =========================

//===================task 10/44 =============================
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

//===================END task 10/44 =========================

//===================task 11/44 =============================
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map(({ title }) => title);

// console.log(titles);

//===================END task 11/44 =========================

//===================task 12/44 =============================
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap(({ genres }) => genres);
// console.log(genres);

//===================END task 12/44 =========================

//===================task 13/44 =============================
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = (users) => {
//   return users.map(({ name }) => name);
// };

// console.log(getUserNames(users));

//===================END task 13/44 =========================

//===================task 14/44 =============================
// const getUserEmails = (users) => {
//   return users.map(({ email }) => email);
// };

//===================END task 14/44 =========================

//===================task 15/44 =============================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((value) => !(value % 2));
// const oddNumbers = numbers.filter((value) => value % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);

//===================END task 15/44 =========================

//===================task 16/44 =============================
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(({ genres }) => genres);

// const uniqueGenres = allGenres.filter(
//   (elem, index, arr) => arr.indexOf(elem) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

//===================END task 16/44 =========================

//===================task 17/44 =============================
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Бернард Корнуэлл";
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.table(topRatedBooks);
// console.table(booksByAuthor);

//===================END task 17/44 =========================

//===================task 18/44 =============================
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };

//===================END task 18/44 =========================

//===================task 19/44 =============================
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(({ age }) => age >= minAge && age <= maxAge);

//===================END task 19/44 =========================

//===================task 20/44 =============================
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(({ friends }) => friends.includes(friendName));

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// console.log(getUsersWithFriend(users, "Adrian Cross"));
// console.log(getUsersWithFriend("Adrian Cross", "Adrian Cross"));

//===================END task 20/44 =========================

//===================task 21/44 =============================
// const getFriends = (users) =>
//   users
//     .flatMap(({ friends }) => friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index);

// console.log(getFriends(users));

//===================END task 21/44 =========================

//===================task 22/44 =============================
// const getActiveUsers = (users) => users.filter(({ isActive }) => isActive);

// console.log(getActiveUsers(users));

//===================END task 22/44 =========================

//===================task 23/44 =============================

// const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);

// console.log(getInactiveUsers(users));

//===================END task 23/44 =========================

//===================task 24/44 =============================
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({ author }) => author === AUTHOR);

// console.log(bookWithTitle, bookByAuthor);

//===================END task 24/44 =========================

//===================task 25/44 =============================
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUserWithEmail = (users, mail) =>
//   users.find((elem) => elem.email === email);

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

//===================END task 25/44 =========================

//===================task 26/44 =============================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => !(value % 2));
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2);

// const eachElementInSecondIsEven = secondArray.every((value) => !(value % 2));
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2);

// const eachElementInThirdIsEven = thirdArray.every((value) => !(value % 2));
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2);

// console.log(eachElementInFirstIsEven, eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven, eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven, eachElementInThirdIsOdd);

//===================END task 26/44 =========================

//===================task 27/44 =============================
// const isEveryUserActive = (users) => users.every(({ isActive }) => isActive);

// console.log(isEveryUserActive(users));

//===================END task 27/44 =========================

//===================task 28/44 =============================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((value) => !(value % 2));
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2);

// const anyElementInSecondIsEven = secondArray.some((value) => !(value % 2));
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2);

// const anyElementInThirdIsEven = thirdArray.some((value) => !(value % 2));
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2);

// console.log(anyElementInFirstIsEven, anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven, anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven, anyElementInThirdIsOdd);

//===================END task 28/44 =========================

//===================task 29/44 =============================
// const isAnyUserActive = (users) => users.some(({ isActive }) => isActive);

// console.log(isAnyUserActive(users));

//===================END task 29/44 =========================

//===================task 30/44 =============================
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, next) => acc + next);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

//===================END task 30/44 =========================

//===================task 31/44 =============================
// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, { playtime, gamesPlayed }) => total + playtime / gamesPlayed,
//   0
// );

// console.log(totalAveragePlaytimePerGame);

//===================END task 31/44 =========================

//===================task 32/44 =============================
// const calculateTotalBalance = (users) =>
//   users.reduce((totalBalans, { balance }) => totalBalans + balance, 0);

// console.log(calculateTotalBalance(users));

//===================END task 32/44 =========================

//===================task 33/44 =============================
// const getTotalFriendCount = (users) =>
//   users.reduce((acc, { friends }) => acc + friends.length, 0);

// console.log(getTotalFriendCount(users));

//===================END task 33/44 =========================

//===================task 34/44 =============================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//===================END task 34/44 =========================

//===================task 35/44 =============================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//===================END task 35/44 =========================

//===================task 36/44 =============================
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
//   "Говард Лавкрафт",
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//===================END task 36/44 =========================

//===================task 37/44 =============================
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((first, second) =>
//   first.author.localeCompare(second.author)
// );
// const sortedByReversedAuthorName = [...books].sort((first, second) =>
//   second.author.localeCompare(first.author)
// );
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//===================END task 37/44 =========================

//===================task 38/44 =============================
// const sortByAscendingBalance = (users) =>
//   [...users].sort((a, b) => a.balance - b.balance);

// console.log(sortByAscendingBalance(users));

//===================END task 38/44 =========================

//===================task 39/44 =============================
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);

// console.log(sortByDescendingFriendCount(users));

//===================END task 39/44 =========================

//===================task 40/44 =============================
// const sortByName = (users) =>
//   [...users].sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortByName(users));

//===================END task 40/44 =========================

//===================task 41/44 =============================
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//   .map(({ author }) => author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);

//===================END task 41/44 =========================

//===================task 42/44 =============================

// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);

// console.log(getNamesSortedByFriendCount(users));

//===================END task 42/44 =========================

//===================task 43/44 =============================
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((friends) => friends)
//     .reduce((acc, element) => acc.concat(element.friends), [])
//     .filter((value, index, arr) => arr.indexOf(value) === index)
//     .sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));

//===================END task 43/44 =========================

//===================task 44/44 =============================
// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((pol) => pol.gender === gender)
//     .reduce((total, { balance }) => total + balance, 0);

// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));
