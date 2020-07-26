const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const btCnount = document.querySelector(".article__btn");
const error = document.querySelector(".article__error");
const info = document.querySelector(".article__cost-info");

const showBill = () => {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    error.textContent = "Uzupełnij wszystkie pola";
  }
};
btCnount.addEventListener("click", showBill);
