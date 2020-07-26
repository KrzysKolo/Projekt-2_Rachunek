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
      btnCnount: ".article__btn",
      error: ".article__error",
      info: ".article__cost-info",
      infoSpan: ".article__cost",
    };
  }
  initializeCountBill() {
    this.newPrice = document.querySelector(this.UiSelectors.price);
    this.manyPeople = document.querySelector(this.UiSelectors.people);
    this.newTip = document.querySelector(this.UiSelectors.tip);
    this.countBtn = document.querySelector(this.UiSelectors.btnCnount);
    this.newInfo = document.querySelector(this.UiSelectors.info);
    this.newError = document.querySelector(this.UiSelectors.error);
    this.newInfoSpan = document.querySelector(this.UiSelectors.infoSpan);
    console.log("zaczynamy");
    this.addEventListeners();
  }
  addEventListeners() {
    this.countBtn.addEventListener("click", () => this.showBill());
  }
  showBill() {
    console.log("showBill");
    if (
      this.newPrice.value == "" ||
      this.manyPeople.value == "" ||
      this.newTip.value == 0
    ) {
      this.newError.style.display = "block";
      this.newError.textContent = "Uzupełnij wszystkie pola";
    } else {
      this.newError.textContent = "";
      countBill();
    }
  }
  countBill() {
    const newPrices = parseFloat(this.newPrice.value);
    const newPeople1 = parseFloat(this.manyPeople.value);
    const newTips = parseFloat(this.newTip.value);
    let p = newPrices * newTips;
    const sum = (newPrices + p) / newPeople1;
    this.newInfo.style.display = "block";

    this.newInfoSpan.textContent = sum.toFixed(2);
  }
}
