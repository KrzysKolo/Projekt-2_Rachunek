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
      this.countBill();
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
