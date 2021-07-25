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

// console.log(splitMessage(str, " "));

const runFnCart = () => {
  const cart = {
    items: [],

    getItems() {
      return this.items;
    },

    add(product) {
      const { items } = this;

      for (const item of items) {
        if (item.name === product.name) {
          item.quantity += 1;
          return;
        }
      }

      const newProduct = {
        ...product,
        quantity: 0,
      };

      items.push(newProduct);
    },

    remove(productName) {
      const { items } = this;

      for (let i = 0; i < items.length; i += 1) {
        const { name } = items[i];

        if (productName === name) {
          items.splice(i, 1);
        }
      }
    },

    clear() {
      this.items = [];
    },

    countTotalPrice() {
      const { items } = this;
      let totalPrice = 0;

      for (const { price, quantity } of items) {
        totalPrice += price * quantity;
      }

      return totalPrice;
    },
    increaseQuantity(productName) {
      const { items } = this;

      for (const item of items) {
        if (item.name === productName) {
          item.quantity += 1;
        }
      }
    },

    decreaseQuantity(productName) {
      const { items } = this;

      for (const item of items) {
        if (item.name === productName) {
          item.quantity -= 1;
        }
      }
    },
  };

  cart.add({ name: "apple", price: 50 });
  cart.add({ name: "apple", price: 50 });
  cart.add({ name: "apple", price: 50 });
  cart.add({ name: "apple", price: 50 });
  cart.add({ name: "limon", price: 60 });
  cart.add({ name: "orange", price: 40 });
  cart.add({ name: "banana", price: 70 });
  console.log(cart.getItems());

  cart.remove("orange");
  console.log(cart.getItems());

  // cart.clear();
  // console.log(cart.getItems());
  cart.increaseQuantity("apple");
  cart.increaseQuantity("apple");
  cart.increaseQuantity("banana");

  console.log(cart.getItems());

  // cart.decreaseQuantity("apple");
  console.log(cart.getItems());

  console.log(cart.countTotalPrice());
};

runFnCart();
