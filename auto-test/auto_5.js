console.log(`============ auto 5 =============`);

//============== 1/19 ==================

function runTask_1() {
  const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
  };
  // Пиши код ниже этой строки

  const child = Object.create(parent);

  // Пиши код выше этой строки
  child.name = "Jason";
  child.age = 27;

  console.log(parent.hasOwnProperty("surname"));
}

// runTask_1();

//============== 2/19 ==================

function runTask_2() {
  const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
  };
  // Пиши код ниже этой строки

  const parent = Object.create(ancestor);
  parent.name = "Stacey";
  parent.surname = "Moore";
  parent.age = 54;

  const child = Object.create(parent);
  child.name = "Jason";
  child.age = 27;

  // Пиши код выше этой строки

  console.log(child);
}

// runTask_2();

//============== 3/19 ==================

function runTask_3() {
  function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  // console.log(new Car("Audi", "Q3", 36000));
  // console.log(new Car("BMW", "X5", 58900));
  // console.log(new Car("Nissan", "Murano", 31700));
}

// runTask_3();

//============== 4/19 ==================
function runTask_4() {
  function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  // console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
  // console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
  // console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
}

// runTask_4();

//============== 5/19 ==================
function runTask_5() {
  function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  Car.prototype.getPrice = function () {
    return this.price;
  };

  Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
  };
}
//   console.log(Car.prototype.hasOwnProperty("getPrice"));
//   console.log(Car.prototype.hasOwnProperty("changePrice"));
// }

// runTask_5();

//============== 6/19 ==================

function runTask_6() {
  function Storage(items) {
    this.items = items;
  }

  Storage.prototype.getItems = function () {
    return this.items;
  };

  Storage.prototype.addItem = function (newItem) {
    this.items.push(newItem);
  };

  Storage.prototype.removeItem = function (newItem) {
    this.items.splice(this.items.indexOf(newItem), 1);
  };

  // Пиши код выше этой строки
  const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
  console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
  storage.addItem("Дроид");
  console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
  storage.removeItem("Пролонгер");
  console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
}

// runTask_6();

//============== 7/19 ==================

function runTask_7() {
  function StringBuilder(baseValue) {
    this.value = baseValue;
  }

  StringBuilder.prototype.getValue = function () {
    return this.value;
  };

  StringBuilder.prototype.padEnd = function (str) {
    this.value += str;
  };

  StringBuilder.prototype.padStart = function (str) {
    this.value = str + this.value;
  };

  StringBuilder.prototype.padBoth = function (str) {
    this.value = str + this.value + str;
  };

  // Пиши код выше этой строки
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // '.'
  builder.padStart("^");
  console.log(builder.getValue()); // '^.'
  builder.padEnd("^");
  console.log(builder.getValue()); // '^.^'
  builder.padBoth("=");
  console.log(builder.getValue()); // '=^.^='
}

// runTask_7();

//============== 8/19 ==================

function runTask_8() {
  class Car {}

  console.log(new Car());
}

// runTask_8();

//============== 9/19 ==================

function runTask_9() {
  class Car {
    brand;
    model;
    price;

    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  }

  // console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
  // console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
}

// runTask_9();

//============== 10/19 ==================

function runTask_10() {
  class Car {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }

    getPrice() {
      return this.price;
    }

    changePrice(newPrice) {
      this.price = newPrice;
    }
  }

  console.log(object);
}

// runTask_10();

//============== 11/19 ==================

function runTask_11() {
  class Car {
    #brand;

    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.model = model;
      this.price = price;
    }

    getBrand() {
      return this.#brand;
    }

    changeBrand(newBrand) {
      this.#brand = newBrand;
    }
  }

  const car = new Car({ brand: "Nissan", model: "Murano", price: 31700 });

  car.changeBrand("Honda");
  console.log(car.getBrand());
}

// runTask_11();

//============== 12/19 ==================

function runTask_12() {
  class Storage {
    #items;

    constructor(items) {
      this.#items = items;
    }

    getItems() {
      return this.#items;
    }

    addItem(newItem) {
      this.#items.push(newItem);
    }

    removeItem(item) {
      const itemIndex = this.#items.indexOf(item);
      this.#items.splice(itemIndex, 1);
    }
  }

  // Пиши код выше этой строки
  const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
  console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
  storage.addItem("Дроид");
  console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
  storage.removeItem("Пролонгер");
  console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
}

// runTask_12();

//============== 13/19 ==================

function runTask_13() {
  class StringBuilder {
    #value;

    constructor(baseValue) {
      this.#value = baseValue;
    }

    getValue() {
      return this.#value;
    }

    padEnd(str) {
      this.#value += str;
    }

    padStart(str) {
      this.#value = str + this.#value;
    }

    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }

  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // '.'
  builder.padStart("^");
}

// runTask_13();

//============== 14/19 ==================

function runTask_14() {
  class Car {
    #model;
    #price;
    #brand;

    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }

    get brand() {
      return this.#brand;
    }

    set brand(newBrand) {
      this.#brand = newBrand;
    }

    get model() {
      return this.#model;
    }

    set model(newModel) {
      this.#model = newModel;
    }

    get price() {
      return this.#price;
    }

    set price(newPrice) {
      this.#price = newPrice;
    }
  }
}

// runTask_14();

//============== 15/19 ==================

function runTask_15() {
  class Car {
    // Пиши код ниже этой строки
    static MAX_PRICE = 50000;
    #price;

    constructor({ price }) {
      this.#price = price;
    }

    get price() {
      return this.#price;
    }

    set price(newPrice) {
      if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
    }
    // Пиши код выше этой строки
  }

  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000

  audi.price = 49000;
  console.log(audi.price); // 49000

  audi.price = 51000;
  console.log(audi.price); // 49000}
}

// runTask_15();

//============== 16/19 ==================

function runTask_16() {
  class Car {
    static #MAX_PRICE = 50000;
    // Пиши код ниже этой строки
    static checkPrice(price) {
      if (Car.#MAX_PRICE < price) return "Внимание! Цена превышает допустимую.";
      return "Всё хорошо, цена в порядке.";
    }
    // Пиши код выше этой строки
    constructor({ price }) {
      this.price = price;
    }
  }

  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });

  console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
  console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
}

// runTask_16();

//============== 17/19 ==================

function runTask_17() {
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }
  // Пиши код ниже этой строки
  class Admin extends User {
    static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
  }
}

// runTask_17();

//============== 18/19 ==================

function runTask_18() {
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }

  class Admin extends User {
    // Пиши код ниже этой строки

    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };

    accessLevel;

    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }

    // Пиши код выше этой строки
  }

  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  console.log(mango.email); // mango@mail.com
  console.log(mango.accessLevel); // superuser
}

// runTask_18();

//============== 19/19 ==================

function runTask_19() {
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Пиши код ниже этой строки

    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };

    accessLevel;
    blacklistedEmails = [];

    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }

    isBlacklisted(email) {
      return this.blacklistedEmails.includes(email);
    }

    blacklist(email) {
      this.blacklistedEmails.push(email);
    }

    // Пиши код выше этой строки
  }

  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  console.log(mango.email); // mango@mail.com
  console.log(mango.accessLevel); // superuser
  mango.blacklist("poly@mail.com");
  console.log(mango.blacklistedEmails); // 'poly@mail.com'
  console.log(mango.isBlacklisted("mango@mail.com")); //  false
  console.log(mango.isBlacklisted("poly@mail.com")); // true
}

// runTask_19();
