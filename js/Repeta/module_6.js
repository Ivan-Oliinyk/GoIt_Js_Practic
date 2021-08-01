console.log("================ module_5 (Repeta) =================");

const obj1 = {
  a: 11,
  b: 22,
  c: 33,
  d: 44,
  e: 55,
  f: 66,
  g: 77,
};

const obj2 = { ...obj1 };

console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
console.log(obj1.a1 === obj2.a1);
