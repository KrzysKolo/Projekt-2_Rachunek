const price = document.querySelector("#price");
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
