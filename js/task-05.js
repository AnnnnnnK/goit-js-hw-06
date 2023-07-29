const input = document.querySelector('#name-input');
console.log(input);

const output = document.querySelector('#name-output');
console.log(output);

// let value = input.value;

input.addEventListener('input', handlerInput);

function handlerInput(){
    output.textContent = input.value;
}