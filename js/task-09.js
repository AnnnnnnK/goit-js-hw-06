function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorValueSpan = document.querySelector('.color');

btn.addEventListener('click', handlerClick);

function handlerClick() {
  let randomClr = getRandomHexColor();
  body.style.backgroundColor = randomClr;
  colorValueSpan.textContent = randomClr;
}
