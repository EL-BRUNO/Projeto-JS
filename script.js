const convertbutton = document.querySelector(".button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputValue = document.querySelector(".input").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(
    ".currency-value-converted"
  );

  const dolarToday = 5.06;
  const euroToday = 5.33;
  const libraToday = 6.05;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / libraToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "LIbra Esterlina";
    currencyImg.src = "./assets/libra 1.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertbutton.addEventListener("click", convertValues);
