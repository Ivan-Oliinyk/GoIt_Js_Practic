console.log("========= modulde 4.1 (Repeta)");

function runExmpl_1() {
  function doSomeWithNumebr(a, b, callback) {
    return callback(a, b);
  }

  const addNum = function (a, b) {
    return a + b;
  };

  const multiolyNum = function (a, b) {
    return a * b;
  };

  console.log(doSomeWithNumebr(2, 5, addNum));
  console.log(doSomeWithNumebr(2, 5, multiolyNum));

  const btnClick = document.querySelector("[data-click]");

  btnClick.addEventListener("click", () => {
    console.log("Click");
  });

  function sayHello() {
    console.log("Hello !");
  }

  btnClick.addEventListener("click", sayHello);

  const fillter = function (arr, test) {
    const filterArr = [];

    for (const elem of arr) {
      if (test(elem)) filterArr.push(elem);
    }

    return filterArr;
  };

  const callback1 = function (value) {
    return value >= 3;
  };

  const r1 = fillter([1, 232, 22, 4, 5, 0, -2], callback1);
  console.log(r1);

  const r2 = fillter([2, 1, 0, 2, 3, 45, 6], function (value) {
    return value > 5;
  });

  console.log(r2);
}

// runExmpl_1();

// * * * * * З А М Ы К А Н И Е * * * * * *

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} cook ${dish}`);
  };

  return makeDish;
};

const piter = makeSheff("Piter");

piter("salate");
piter("babel");

console.dir(piter);

const sasha = makeSheff("Sasha");

sasha("chicken");

console.dir(sasha);

const rounder = function (places) {
  return function (number) {
    return number.toFixed(places);
  };
};

const fixToTwo = rounder(2);
console.log(fixToTwo(4.4212));
console.log(fixToTwo(1.2));

const fixToThree = rounder(3);
console.log(fixToThree(5.123655));
