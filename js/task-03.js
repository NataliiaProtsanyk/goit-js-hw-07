const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  //Створити шаблонну строку
 const setListImg = (elem) =>
 `<li class = "list-item">
 <img class = "gallery-image" 
 src = ${elem.url} 
 alt = ${elem.alt}> 
 </li>`;

//Cтворити масив даних для виведення
const getListImg = () => images.map((image) => setListImg(image)).join(" ");

// Внести змінни в DOM
document
  .querySelector("#gallery")
  .insertAdjacentHTML("afterbegin", getListImg());