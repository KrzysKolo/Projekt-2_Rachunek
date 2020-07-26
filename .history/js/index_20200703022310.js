const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const btCnount = document.querySelector(".article__btn");
const error = document.querySelector(".article__error");
const info = document.querySelector(".article__cost-info");
const infoSpan = document.querySelector(".article__cost");

const showBill = () => {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    error.textContent = "Uzupełnij wszystkie pola";
  } else {
    countBill();
  }
};
const countBill = () => {
  const newPrice = price.value;
  const newPeople = people.value;
  const newTip = tip.value;
  let p = newPrice * newTip;
  const sum = (newPrice + p) / newTip;
  console.log(`${p}, ${newTip}, ${sum}`);
  info.style.display = "block";
  info.textContent = sum;
};
btCnount.addEventListener("click", showBill);
