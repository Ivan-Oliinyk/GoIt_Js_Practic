console.log("====================== module_5 (Repeta) =======================");

//Создаем функции КОНСТРУКТОР.(должна начинаться всегда с большой буквы)
// const Car = function (name, model, color) {
//   this.name = name;
//   this.model = model;
//   this.color = color;
// };

// const car = new Car("BMW", "X5", "black");
// console.log(car);

// const Hotel = function (name, star, )

class Car {
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  changeModel(newModel) {
    this.model = newModel;
  }
}

const car = new Car({ brand: "Lada", model: "Granta", price: 9000 });

console.dir(Car);

car.changePrice(11000);
car.changeModel("Kalina");

console.log(car);
