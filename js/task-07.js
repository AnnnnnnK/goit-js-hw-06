const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', handlerInput);

function handlerInput(evt){
    text.style.fontSize = `${evt.currentTarget.value}px`
}