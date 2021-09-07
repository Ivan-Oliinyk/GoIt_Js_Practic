console.log("Delegation events");

const refs = {
  parent: document.querySelector(".parent"),
  child: document.querySelector(".child"),
  innerChild: document.querySelector(".inner-child"),
};

refs.parent.addEventListener("click", onParentClick);
refs.child.addEventListener("click", onChildClick);
refs.innerChild.addEventListener("click", onInnerChildClick);

function onParentClick(e) {
  console.log("onParentClick");
  console.log("onParentClick => e.target", e.target);
  console.log("onParentClick => e.currentTarget", e.currentTarget);
}

function onChildClick(e) {
  console.log("onChildClick");
  console.log("onChildClick => e.target", e.target);
  console.log("onChildClick => e.currentTarget", e.currentTarget);
}

function onInnerChildClick(e) {
  console.log("onInnerChildClick");
  console.log("onInnerChildClick => e.target", e.target);
  console.log("onInnerChildClick => e.currentTarget", e.currentTarget);
}

const wrapperBtn = document.querySelector(".js-btn-container");
const btnAddBtn = wrapperBtn.querySelector(".add-btn");
let selectedTag = new Set();

wrapperBtn.addEventListener("click", returnBtnTextContent);

function returnBtnTextContent(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  console.log(e.target.textContent);

  const currentActiveBtn = document.querySelector(".js-active-btn");

  // if (currentActiveBtn) {
  //   currentActiveBtn.classList.remove("js-active-btn");
  // }
  currentActiveBtn?.classList.remove("js-active-btn");

  const nextActiveBtn = e.target;
  nextActiveBtn.classList.toggle("js-active-btn");
  selectedTag = nextActiveBtn.dataset.value;

  console.log(selectedTag);
}

btnAddBtn.addEventListener("click", addBtnINwrapperBtn);

function addBtnINwrapperBtn() {
  const btnArr = wrapperBtn.querySelectorAll("button");
  const btn = document.createElement("button");
  btn.textContent = `Button ${btnArr.length}`;
  btn.type = "button";

  wrapperBtn.append(btn);
}

const colors = [
  { hex: "#FF00FF", rgb: "255, 0, 255" },
  { hex: "#FFFF00", rgb: "255,255,0" },
  { hex: "#800080", rgb: "128,0,128" },
  { hex: "#008080", rgb: "0,128,128" },
  { hex: "#808000", rgb: "128,128,0" },
  { hex: "#FF0000", rgb: "255,0,0" },
  { hex: "#000000", rgb: "0,0,0" },
  { hex: "#000080", rgb: "0,0,128" },
];

const wrapperSquares = document.querySelector(".wrapper-squares");
const cardMarkup = createColorsCardsMarkup(colors);

wrapperSquares.insertAdjacentHTML("beforeend", cardMarkup);
wrapperSquares.addEventListener("click", onColorBoxClick);

function createColorsCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
      <div class="wrapper-squares__element">
        <div
          class="wrapper-squares__element-box"
          style="background-color: ${hex}"
          data-hex = "${hex}"
          data-rgb = "${rgb}"
          ></div>
        <div class="wrapper-squares__element-text">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>
    `;
    })
    .join("");
}

function onColorBoxClick(e) {
  const isColorBox = e.target.classList.contains(
    "wrapper-squares__element-box"
  );

  if (!isColorBox) return;

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest(".wrapper-squares__element");

  removeClassActive();
  addClassActive(parentColorCard);
  setBodyColor(swatchEl.dataset.hex);
}

function setBodyColor(color) {
  document.body.style.backgroundColor = color;
}

function removeClassActive() {
  const currentActiveElem = document.querySelector(
    ".wrapper-squares__element.is-active"
  );

  if (currentActiveElem) {
    currentActiveElem.classList.remove("is-active");
  }
}

function addClassActive(cart) {
  cart.classList.add("is-active");
}
