console.log("====== MODULE-3.2 =======");

const numbers = [9, 5, 2, -2];

const numbers1 = [...numbers, ...numbers];

// console.log(numbers1);

const a = [1, 2, 3];
const b = [...a];

// console.log(a);
// console.log(b);

a.push(...b);

// console.log(a);
// console.log(b);

// console.log(Math.min(...a));

const c = [
  { 1: 1, 2: 2, 3: 3 },
  { 4: 4, 5: 5, 6: 6 },
];
const d = [...c];

// console.log(c);
// console.log(d);

c.push({ 7: 77777 });
c[0][1] = 111;

// console.log(c);
// console.log(d);

const unit = {
  health: 100,
  armor: 200,
  mana: 40,
  stanina: 30,
  resist: 15,
};

const { health, armor, mana, stanina, resist } = unit;

// console.log(health, armor, mana, stanina, resist);
const str = "aaa bbbb cccc dddd";

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return words;
}

console.log(splitMessage(str, " "));
