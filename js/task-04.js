const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');

const counter = document.querySelector('#value');

let counterValue = Number(counter.textContent);

decrementBtn.addEventListener('click', handlerDecrement);
incrementBtn.addEventListener('click', handlerIncrement);

function handlerDecrement() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

function handlerIncrement(){
    counterValue += 1;
    counter.textContent = counterValue;
}