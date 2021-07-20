console.log("====== MODULES 3 ======");

//===10====
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);

*/
const user = {
  name: "Ivan",
  age: 30,
  isMarried: false,
};

const getKeysFromObject = (obj) => {
  return Object.keys(obj); //получаем ключи из обїекта в виде массива
};

// console.log(getKeysFromObject(user));

const getKeysAndValueFromObject = (obj) => {
  for (const key in obj) {
    console.log(`Ключ объекта '${key}' имеет значение '${obj[key]}'`);
  }
};

// getKeysAndValueFromObject(user);

const getValueFromObject = function (obj) {
  return Object.values(obj);
};

// console.log(getValueFromObject(user));

const say = {};

const friends = [
  { name: "Poly", online: false },
  { name: "Tom", online: true },
  { name: "Roy", online: false },
  { name: "Sem", online: true },
  { name: "Rob", online: true },
  { age: 21, online: true },
];

const findFriendNameInArray = (friends, friendName) => {
  for (const friend of friends) {
    if (friend.name.toLowerCase() === friendName.toLowerCase()) {
      return `Имя друга '${
        friendName.slice(0, 1).toUpperCase() + friendName.slice(1)
      }' найдено!`;
    }
  }

  return `Имя друга '${friendName}' НЕ найдено!`;
};

// console.log(findFriendNameInArray(friends, "Ivan"));
// console.log(findFriendNameInArray(friends, "sem"));

// console.log(friends);

const cars = {
  model: "Audio",
  color: "red",
  transmission: "auto",
};

const carsKeys = Object.keys(cars);
const carsValue = Object.values(cars);
const carsEntries = Object.entries(cars);

// console.log(carsKeys);
// console.log(carsValue);
// console.log(carsEntries);

//... spread

const numbers = [1, 22, 55, 2, 12, -3, 0, 11, 13, 91, -2];

// console.log(Math.min(...numbers));

const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];

const copyOfHouses = [...houses];

// console.log(houses);
// console.log(copyOfHouses);

houses.push("Targarian");
copyOfHouses.unshift("Tali");

// console.log(houses);
// console.log(copyOfHouses);

const mainOfHouse = ["Taywin", "Ned", "Robert"];

const houseAndName = [...houses, ...mainOfHouse];
// console.log(houseAndName);

const houseAndNames = [...houses.slice(3, 4), ...mainOfHouse.slice(1, 2)];
// console.log(houseAndNames);

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (maxLength >= message.length) {
    result = message;
  } else if (maxLength < message.length) {
    result = message.slice(0, maxLength);
  }

  /// Change code above this line
  return result;
}

// console.log(formatMessage("Curabitur ligula sapien", 16));

// const getNameFromArray = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].name === undefined) {
//       continue;
//     } else {
//       console.log(arr[i].name);
//     }
//   }
// };

const getNameFromArray = (arr) => {
  const nameFromArr = [];

  for (const key of arr) {
    if (key.name === undefined) continue;
    else nameFromArr.push(key.name);
  }

  console.log(nameFromArr);
};

// getNameFromArray(friends);

const getFriendNameOnline = (keys) => {
  const friendOnline = [];

  for (const key of keys) {
    if (key.online && key.name !== undefined) {
      friendOnline.push(key.name);
    }
  }

  return friendOnline;
};

// console.log(getFriendNameOnline(friends));

const getFriendsByOnlineStatus = (keys) => {
  const friendByStatus = {
    online: [],
    offline: [],
  };

  for (const key of keys) {
    if (key.online && key.name !== undefined) {
      friendByStatus.online.push(key.name);
    } else if (!key.online && key.name !== undefined) {
      friendByStatus.offline.push(key.name);
    }
  }

  return friendByStatus;
};

// console.log(getFriendsByOnlineStatus(friends));

const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100,
};

console.log(Object.keys(x).length);
