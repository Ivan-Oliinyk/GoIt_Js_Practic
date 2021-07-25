console.log("=========== 4 MODULES auto (10)");

//==============================================1/10===================================
// function makePizza() {
//   return "Ваша пицца готовится, ожидайте.";
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

//=============================================2/10================================
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   if (pizzaName === "Роял гранд") {
//     return makePizza(pizzaName);
//   } else {
//     return deliverPizza(pizzaName);
//   }
// }

// console.log(makeMessage("Роял гранд", makePizza));

//=============================================3/10================================

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza("Роял гранд", function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza("Ультрасыр", function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`);
// });

//=============================================4/10================================

// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   order(pizzaName, makePizza, onOrderError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) return makePizza(pizzaName);
//     }
//     return onOrderError(pizzaName);
//   },
// };

// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order("Аль Копчино", makePizza, onOrderError));
// console.log(pizzaPalace.order("Четыре нарезона", makePizza, onOrderError));
// console.log(pizzaPalace.order("Биг майк", makePizza, onOrderError));
// console.log(pizzaPalace.order("Венская", makePizza, onOrderError));

//=============================================5/10================================
// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(pizzaPalace.order("Аль Копчино"));
// console.log(pizzaPalace.order("Четыре нарезона"));
// console.log(pizzaPalace.order("Биг майк"));
// console.log(pizzaPalace.order("Венская"));
// console.log(pizzaPalace.order("Аль Копчино"));

//=============================================6/10================================
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

//=============================================7/10================================
// 1вариант **НЕ ПРИНИМАЕТ**
// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// function composeMessage(position) {
//   for (let i = 0; i < position.length; i += 1) {
//     this.push(
//       `Готовим ${position[i].dish} для ${position[i].email} Ваш заказ ${
//         i + 1
//       }-й в очереди.`
//     );
//   }
// }

// const messages = [];

// composeMessage.call(messages, orders);

// console.log(messages);

// 2й вариант **НЕ ПРИНИМАЕТ**
const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

function composeMessage(position) {
  return `Готовим ${this[position].dish} для ${
    this[position].email
  }. Ваш заказ ${position + 1}-й в очереди.`;
}

const messages = [];

for (let i = 0; i < orders.length; i += 1) {
  messages.push(composeMessage.call(orders, i));
}

console.log(messages);

// 3й ввариант ***НЕ ПРОПУСКАЕТ***
// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// function composeMessage(position) {
//   const elem = this[position];

//   return `Готовим ${elem.dish} для ${elem.email}. Ваш заказ ${
//     position + 1
//   }-й в очереди.`;
// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders, i));
// }

// console.log(messages);
