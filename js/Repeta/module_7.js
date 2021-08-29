import products from "./products.js";

console.log("Repeta-module-7-DOM");

const body = document.querySelector('body');
const btnGetDOM = document.querySelector('.getDOMNav');
const nav = document.querySelector('.nav');
const btnChangeImg = document.querySelectorAll('.changeImg');
const img = document.querySelector('.imgDOM');
const arrImg = [
  'https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnMMm8Y5G6iMs1XDqS4iHbR2JToV_AKjTGA&usqp=CAU', 
  'https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXii-J97gh7dd_VnL0sBZvHT5cy3GOeOVYDg&usqp=CAU'
];

btnGetDOM.addEventListener('click', ()=> {
  console.log(nav);
});

btnChangeImg.forEach((btn, i) => 
  btn.addEventListener('click', ()=> {
    img.src = arrImg[i];
  })
);

const title = document.createElement('h3');
title.textContent = 'Картинки';
title.classList.add('title');

const wrapperSectionImg = document.querySelector('.wrapper');
wrapperSectionImg.prepend(title);

const btnImg = document.createElement('button');
btnImg.classList.add('changeImg', 'btn');
btnImg.type = 'button';
btnImg.textContent = 'img-4'

const wrapperBtnImg = document.querySelector('.nav-btn-img');
wrapperBtnImg.append(btnImg);

// COLORIZE DIV 
const colorPicker = [
  {label: 'green', color: 'green'},
  {label: 'red', color: 'red'},
  {label: 'blue', color: 'blue'},
  {label: 'yellow', color: 'yellow'},
  {label: 'orange', color: 'orange'},
  {label: 'pink', color: 'pink'},
  {label: 'grey', color: 'grey'},
  {label: 'purple', color: 'purple'},
  {label: 'white', color: 'white'},
  {label: 'black', color: 'black'},
];

const colorPickerWrapper = document.createElement('div');
colorPickerWrapper.classList.add('color-picker-wrapper');

// const colorPickerBtnArr = colorPicker.map(item => {
//   const colorPickerBtn = document.createElement('button');
//   colorPickerBtn.classList.add('color-picker-btn'); 
//   colorPickerBtn.type = 'button';
//   colorPickerBtn.textContent = item.label;
//   colorPickerBtn.style.backgroundColor = item.color;
  
//   colorPickerBtn.addEventListener('click', ()=> {
//     colorPickerWrapper.style.backgroundColor = getComputedStyle(colorPickerBtn).backgroundColor;
//   })

//   return colorPickerBtn;
// });

const makeColorPicker = (colorPicker) => colorPicker.map(({label, color}) => {
  const colorPickerBtn = document.createElement('button');
  colorPickerBtn.classList.add('color-picker-btn'); 
  colorPickerBtn.type = 'button';
  colorPickerBtn.textContent = label;
  colorPickerBtn.style.backgroundColor = color;
  
  colorPickerBtn.addEventListener('click', ()=> {
    colorPickerWrapper.style.backgroundColor = getComputedStyle(colorPickerBtn).backgroundColor;
  })

  return colorPickerBtn;
})

const elements = makeColorPicker(colorPicker)

colorPickerWrapper.append(...elements);
body.append(colorPickerWrapper);


//greate article 
const makeArticleSection = ({name, description, price}) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const productElTitle = document.createElement('h2');
    productElTitle.classList.add('product__name');
    productElTitle.textContent = name;
    
    const productElDescription = document.createElement('p');
    productElDescription.classList.add("product__descr");
    productElDescription.textContent = description;

    const productElPrice = document.createElement('p');
    productElPrice.classList.add('product__price');
    productElPrice.textContent = `Price: ${price}`;
    
    productEl.append(productElTitle, productElDescription, productElPrice);

    return productEl;
};

const articles = products.map(makeArticleSection);

const articleWrapper = document.createElement('div');
articleWrapper.classList.add('product__wrapper');
articleWrapper.append(...articles);

body.append(articleWrapper);

const getOllist = document.querySelector('.order-list');
getOllist.insertAdjacentHTML('beforebegin', '<p class="order-insert">beforebegin</p>');
getOllist.insertAdjacentHTML('afterbegin', '<p class="order-insert">afterebegin</p>');
getOllist.insertAdjacentHTML('beforeend', '<p class="order-insert">beforeend</p>');
getOllist.insertAdjacentHTML('afterend', '<p class="order-insert">aftereend</p>');

