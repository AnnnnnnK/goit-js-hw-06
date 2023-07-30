const input = document.querySelector('#name-input');
console.log(input);

const output = document.querySelector('#name-output');
console.log(output);


input.addEventListener('input', handlerInput);

function handlerInput(evt){
  output.textContent = evt.currentTarget.value.trim();
  if(evt.currentTarget.value.trim() === '') {
    output.textContent = 'Anonymous';
  }
}

