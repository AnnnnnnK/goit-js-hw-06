const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
// console.log(list);

function createMarkup(arr) {
 const markup = arr.map((elem) => {
    const li = document.createElement('li');
    li.textContent = `${elem}`;
    li.classList.add('item');

    return li;
  })
list.append(...markup);
}
// console.log(list);
createMarkup(ingredients);