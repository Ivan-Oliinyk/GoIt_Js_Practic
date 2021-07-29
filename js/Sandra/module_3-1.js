console.log("================= mudule 3-1 (Sandra)");

const objProp = {
  writePropInObj(num) {
    for (let i = 0; i < num; i += 1) {
      this[`prop${[i + 1]}`] = i + 1;
    }
  },
};

console.log(objProp);

objProp.writePropInObj(10);

console.log(objProp);

const sayHello = function () {
  // console.log(this);
  console.log("Hello " + this.name);
};

objProp.name = "Ivan";

objProp.sayHello = sayHello;

console.log(objProp);

objProp.sayHello();

const objPropt2 = Object.create(objProp);

console.log(objPropt2);

console.log(objPropt2 === objProp);

objPropt2.name = "Piter";

objPropt2.sayHello();
