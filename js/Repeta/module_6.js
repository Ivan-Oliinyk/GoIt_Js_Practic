console.log("================ module_6 (Repeta) =================");
// Перебырающие методы массива

const numbers = [1, 2, 656, 2123, 9, 10, 11, -2];

// numbers.forEach((element, ind, arr) => {
//   console.log(` element =>"${element}" have index "${ind}" in array ${arr}`);
// });

// numbers.forEach(function (num) {
//   console.log(num);
// });

// const doubleNumber = numbers.map((num) => num * 2);
// const doubleNumber1 = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubleNumber);
// console.log(doubleNumber1);

const players = [
  { name: "Mango", timePlayed: 328, points: 20, online: true },
  { name: "Maric", timePlayed: 28, points: 2, online: true },
  { name: "Korto", timePlayed: 128, points: 29, online: true },
  { name: "slayer", timePlayed: 428, points: 120, online: false },
];

// console.log(players);

// const playerNames = players.map((player) => player.name);

// const playerNames = players.map(function (palyer) {
//   return palyer.name;
// });

// console.log(playerNames);

const updatePlayersPoints = "Korto";

const updatePlayersArr = players.map((player) => {
  if (player.name === updatePlayersPoints) {
    player.points += 109;
  }

  return player;
});

// const updatePlayersArr = players.map((player) => {
//   if (player.name === updatePlayersPoints) {
//     return {
//       ...player,
//       points: player.points + 101,
//     };
//   }

//   return player;
// });

// console.log(updatePlayersArr);

const filterNumbers = numbers.filter((num) => num < 5);

// console.log(filterNumbers);

// const filterNum = numbers.filter((num) => {
//   if (num < 100 && num > 5) {
//     return num;
//   }
// });

const filterNum = numbers.filter((num) => num < 100 && num > 5);

// console.log(filterNum);

const playersOnline = players.filter(({ online }) => online);
const playersOffline = players.filter((player) => !player.online);

// console.log(playersOnline, playersOffline);

const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 250);
// const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
// console.log(hardcorePlayers);

const playerNameToFind = "Korto";

const playerWidthName = players.find(({ name }) => name === playerNameToFind);

// console.log(playerWidthName);

const isAllPlayersOnline = players.every(({ online }) => online);
// console.log(isAllPlayersOnline);

const isAllPlayersHavePoints = players.every(({ points }) => points);
// const isAllPlayersHavePoints = players.every((player) => player.points);
// const isAllPlayersHavePoints = players.every(function (player) {
//   if (player.points) return true;
// });
// console.log(isAllPlayersHavePoints);

const isSomePlayersHavePoints = players.some(({ points }) => points);
// console.log(isSomePlayersHavePoints);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 4, tags: ["html", "css"] },
  { id: "002", likes: 3, tags: ["pyton", "php"] },
  { id: "003", likes: 7, tags: ["js", "nodejs", "html", "css"] },
  { id: "004", likes: 2, tags: ["js", "php"] },
];

// const allTags = tweets.reduce((allTags, { tags }) => {
//   // allTags.push(...tags);
//   // allTags.push(tags);
//   // return allTags;
// }, []);

const allTags = tweets.reduce((total, { tags }) => [...total, ...tags], []);

// console.log(allTags);

// const tagStatus = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

const tagStatus = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);

// console.log(tagStatus);

const autoReplace = (arr, value, str) => {
  const newStr = str.split(" ");

  for (let i = 0; i < str.length; i += 1) {
    for (let k = 0; k < arr.length; k += 1) {
      if (newStr[i] === arr[k]) {
        newStr.splice(i, 1, value);
      }
    }
  }

  return newStr.join(" ");
};

// console.log(
//   autoReplace(["салат", "помидоры"], "едa", "свежие помидоры пошли в салат")
// );

const Manager = function (name = "manager", sales = 0) {
  this.name = name;
  this.sales = sales;

  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} solid ${product}`;
  };
};

const mango = new Manager("Mango", 5);

console.log(mango.sales);
console.log(mango.sell("TV"));

const tango = new Manager("Tango", 10);
console.log(tango.sell("TV"));

console.dir(mango);
console.dir(tango);
