const form = document.querySelector('.login-form')

form.addEventListener('submit', handlerSubmit);

function handlerSubmit (evt) {
    evt.preventDefault();
    const {email, password} = evt.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
      }

      const result = {
        email : email.value,
        password : password.value,
      }
      
      console.log(result);
      evt.currentTarget.reset();
}