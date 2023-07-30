const input = document.querySelector('#validation-input');

 input.addEventListener('blur', handlerInput);

 function handlerInput(evt){
    
    if (Number(evt.currentTarget.getAttribute('data-length')) === evt.currentTarget.value.trim().length){
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid')
    }
 }