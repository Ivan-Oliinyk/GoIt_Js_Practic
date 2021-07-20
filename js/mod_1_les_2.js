function testCircles() {
  for (let i = 0; i <= 10; i += 1) {
    console.log(i)
  }

  let i = 10

  do {
    i += 1
    console.log(i)
  } while (i < 20)

  while (i < 30) {
    i += 1
    console.log(i)
  }
}

// testCircles();

function runTask1(employes, minSalary, maxSalary) {
  let tatalSalaryies = 0

  for (let i = 1; i <= employes; i += 1) {
    const salaty = Math.round(
      Math.random() * (maxSalary - minSalary) + minSalary,
    )
    console.log(`Зарпалата работника ${i} - ${salaty}`)

    tatalSalaryies += salaty
  }

  console.log(tatalSalaryies)
}

// runTask1(
//   prompt('Введите количество работников'),
//   prompt('Введите минимальную зарплату'),
//   prompt('Введите кмаксимальную зарплату')
// );

function runTask2(minNum, maxNum) {
  // Напиши скрипт который подсчитывает суму всех четных чисел
  // которые входят в диапазон чисел в переменных от min до max
  // Например если min=0 и max=5, то диапазон 0-5, и в нем два четных числа -2 и 4, их сумма 6
  let sum = 0

  for (let i = minNum; i <= maxNum; i += 1) {
    // if(i % 2 === 0 && i !== 0) {
    //   sum += i;
    //   console.log(`Парное число ${i}`);
    // }

    if (i % 2 !== 0) {
      continue
    }
    sum += i
    // console.log(`Парное число ${i}`);
  }

  console.log(
    `Сумма всех парный числе в диапазоне от ${minNum} до ${maxNum} составляет = ${sum}`,
  )
}

//runTask2(0, 5);

//task3

function shopingStore(balance, payment) {
  // let balance = Number(balance);
  // let payment = Number(payment);

  console.log(
    `Общая стоимость заказа  ${payment} кредитов. Проверям кол-во доступніх средств на счету`,
  )

  if (balance >= payment) {
    console.log(`На счету осталось ${balance - payment}`)
  } else if (balance > payment) {
    console.log(
      `На счету осталось недостаточно средств для проведения операции!`,
    )
  }

  console.log('Операция завершина')
}

// shopingStore(10000, 2000);

//task4

const bnt = document.querySelector('[data-add]');
const valueInput = document.querySelector('[data-value]');
const valueInputNow = document.querySelector('[data-value-now]');
  
bnt.addEventListener('click', ()=>{
  const totalSpent = Number(valueInput.value);
  const payment = Number(valueInputNow.value);
  
  runPayDiscount(totalSpent, payment);
  
  valueInput.value = '';
  valueInputNow.value = '';
});

function runPayDiscount(totalSpent, payment) {
  // const totalSpent = 2000;
  // let payment = 500;
  let discount = 0;
  let pay = payment;

  if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;
    return console.log(`Вы бронзовый партнер скидка ${discount * 100}%, к оплате ${pay -= pay*discount }`);
  } else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;
    return console.log(
      `Вы бронзовый серебрянный партнер скидка ${discount * 100}% , к оплате ${pay -= pay*discount }`
    );
  } else if (totalSpent >= 5000) {
    discount = 0.1;
    return console.log(`Вы бронзовый золотой партнер скидка ${discount * 100}% , к оплате ${pay -= pay*discount }`);
  } else {
    discount = 0;
    console.log(`Вы не партнер  ${discount * 100}% !`);
  }
}


