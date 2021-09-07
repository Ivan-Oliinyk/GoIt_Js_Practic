console.log('Repeta module 7.2 Events');

const body = document.querySelector('body');

const clickName = [
  "handleTargetButtonClick()",
  "targetButtonClickHandler()",
  "onTargetButtonClick()",
];

function addElementArrToPagePrependBody (arr) {
  const elements = [];

  arr.map((element, i) => {
    const title = document.createElement('h2');
    title.textContent = `${i+1})  ${element}`;
    title.style.textAlign = "center";
    elements.push(title);
  })

  body.prepend(...elements);
}

addElementArrToPagePrependBody(clickName);


const form = document.querySelector('.js-registaration-form'); 

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.dir(event.currentTarget);
}


// task-1
const refs = {
  input : document.querySelector('.js-input-task-1'),
  licence : document.querySelector('.js-licency'),
  btn : document.querySelector('.js-task-1-submit'),
  nameLabel : document.querySelector('.js-task-1-submit > span'),
};

const onInputChange = (event) => {
  console.log(event.currentTarget.value)
  refs.nameLabel.textContent = event.currentTarget.value;
};

const onLicenceChange = (event) => {
  console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.target.checked;
}


refs.input.addEventListener('input', onInputChange);
refs.licence.addEventListener('change', onLicenceChange);
