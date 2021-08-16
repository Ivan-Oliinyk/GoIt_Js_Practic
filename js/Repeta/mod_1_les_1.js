// console.log('1)', name);

// var name = 'Ivan';

// console.log('2)', name);

// let num = '123' + ' ' + 2;

// console.log(num);

// console.log(Number(num));

// let num1 = '11.109912323px',
//     num2 = '11.000px',
//     num3 = '11.01px';

// function parseIntConsole(a) {
//   console.log(parseInt(a));
// }

// function parseFloatConsole(a, fixed = 2) {
//   console.log(parseFloat(a).toFixed(fixed));
// }

// console.log('ParseInt');
// parseIntConsole(num1);
// parseIntConsole(num2);
// parseIntConsole(num3);

// console.log('ParseFloat');
// parseFloatConsole(num1,3);
// parseFloatConsole(num1,4);
// parseFloatConsole(num1,5);
// parseFloatConsole(num1,1);
// parseFloatConsole(num2);
// parseFloatConsole(num3);
// parseFloatConsole(num1);

function shopingStore(balance, payment) {
  // let balance = Number(balance);
  // let payment = Number(payment);

  console.log(
    `Общая стоимость заказа  ${payment} кредитов. Проверям кол-во доступніх средств на счету`
  );

  if (balance >= payment) {
    console.log(`На счету осталось ${balance - payment}`);
  } else if (balance > payment) {
    console.log(
      `На счету осталось недостаточно средств для проведения операции!`
    );
  }

  console.log("Операция завершина");
}

// shopingStore(10000, 2000);

// let num = 45.624563;

// console.log(Math.round(num));

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest("Dima", function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

//   // Передаём инлайн функцию notify как колбэк
registerGuest("Dima", function notify(name) {
  console.log(`Уважаемый(ая) ${name},  30 минут.`);
});

// registerGuest("Anna", notify(greet));
// registerGuest("Misha", notify);

const notify = (name) => {
  console.log(`Уважаемый(ая) ${name}, \n ожидайте 30 минут.!`);
};

registerGuest("Tomas", notify);
