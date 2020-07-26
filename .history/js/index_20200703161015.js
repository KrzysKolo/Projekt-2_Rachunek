/* const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const btCnount = document.querySelector(".article__btn");
const error = document.querySelector(".article__error");
const info = document.querySelector(".article__cost-info");
const infoSpan = document.querySelector(".article__cost");

const showBill = () => {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    error.style.display = "block";
    error.textContent = "Uzupełnij wszystkie pola";
  } else {
    error.textContent = "";
    countBill();
  }
};
const countBill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseFloat(people.value);
  const newTip = parseFloat(tip.value);
  let p = newPrice * newTip;
  const sum = (newPrice + p) / newPeople;
  info.style.display = "block";

  infoSpan.textContent = sum.toFixed(2);
};
btCnount.addEventListener("click", showBill);
 */
class countBill {
  constructor() {
    this.price = null;
    this.people = null;
    this.trip = null;
    this.UiSelectors = {
      price: "#price",
      people: "#people",
      tip: "#tip",
      btCnount: ".article__btn",
      error: ".article__error",
      info: ".article__cost-info",
      infoSpan: ".article__cost",
    };
  }
  initializeCountBill() {
    this.newPrice = document.querySelector(this.UiSelectors.price);
    this.manyPeople = document.querySelector(this.UiSelectors.people);
    this.countBtn = document.querySelector(this.UiSelectors.tip);
    this.newPrice = document.querySelector(this.UiSelectors.btnCount);
    this.newError = document.querySelector(this.UiSelectors.error);
    this.newInfoSpan = document.querySelector(this.UiSelectors.infoSpan);
    this.addEventListeners();
  }
  addEventListeners() {
    this.countBtn.addEventListener("click", () => this.showBill());
  }
  showBill() {
    if (price.value == "" || people.value == "" || tip.value == 0) {
      error.style.display = "block";
      error.textContent = "Uzupełnij wszystkie pola";
    } else {
      error.textContent = "";
      countBill();
    }
  }
  countBill() {
    const newPrice = parseFloat(price.value);
    const newPeople = parseFloat(people.value);
    const newTip = parseFloat(tip.value);
    let p = newPrice * newTip;
    const sum = (newPrice + p) / newPeople;
    info.style.display = "block";

    infoSpan.textContent = sum.toFixed(2);
  }
}
