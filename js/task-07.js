//Отримаємо елемент введення
const inputEl = document.querySelector("#font-size-control");

//Отримали текст для зміни
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", InputFontSize);

function InputFontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}