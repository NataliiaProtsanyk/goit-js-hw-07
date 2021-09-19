// Зберігає поточне значення лічильника
let counterValue = 0;

// Знайти лічильник
let elem = document.getElementById("value");

// Функція зміни значення на сторінці
const newValueCounter = (increment) => {
    counterValue += increment;
    elem.textContent = `${counterValue}`;
  };

// Знайти кнопки управління лічильником
const btnsAction = document.querySelectorAll("#counter button");

// Розставляємо прослушку на кнопки
btnsAction.forEach((elem, index) => {
    switch (elem.dataset.action) {
      case "decrement":
        btnsAction[index].addEventListener("click", () => {
          newValueCounter(elem.textContent | 0);
        });
        break;
      case "increment":
        btnsAction[index].addEventListener("click", () => {
          newValueCounter(elem.textContent | 0);
        });
        break;
    }
  });