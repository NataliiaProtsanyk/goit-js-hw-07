// Знайти список категорій
const listCategoriesEl = document.querySelector("#categories");







// Знайти усі категорії у списку і вивести у консоль


const liItemEl = listCategoriesEl.querySelectorAll(".item");
console.log(`В списке ${liItemEl.length} категории`);







// Вивести в консоль усі назви підкатегорій і кількість елементів в них


liItemEl.forEach((elem) => {
  console.log(`Категория: ${elem.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${elem.querySelectorAll("li").length}`);
});