// Початковий масив данних
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

// Додати кожний елемент масиву як окремий елемент
function getListIngredient() {
    const liArray = [];
    ingredients.forEach(function(ingredient) {
        const liElem = document.createElement("li");
        liElem.textContent = ingredient;
        liArray.push(liElem);
    });
return liArray;
}
document.querySelector("#ingredients").append(...getListIngredient());