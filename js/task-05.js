// Знайти поле введення
const inputValueEl = document.querySelector("#name-input");

// Знайти місце введення текста
const outputValueEl = document.querySelector("#name-output");

// Зберегти значення введення за замовчуванням
const defaultValue = outputValueEl.textContent;

// Визначити зміни значення
const changeValue = (currentValue) => {
    if (currentValue !== "") {
      return newValueOutput(currentValue);
    }
// Повернути початковий стан, якщо нічого не змінилося
return newValueOutput(defaultValue);
};

// Записати нове значення
const newValueOutput = (newValue) => (outputValueEl.textContent = newValue);

// Дивитись зміни в полі введення
inputValueEl.addEventListener("input", () => changeValue(inputValueEl.value));