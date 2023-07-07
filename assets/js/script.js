// toma el input que el usuario selecciona
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (input) =>{
        validate(input.target);
    })
})

// valida si el dato es correcto y agrega o quita el error segun corresponda en el span
function validate(input){
    const inputType = input.dataset.type;

    if(input.validity.valid){
        input.parentElement.classList.remove('contacto__input__container--invalid');
        input.parentElement.querySelector('.contacto__error').innerHTML = '';
    } else {
        input.parentElement.classList.add('contacto__input__container--invalid');
        input.parentElement.querySelector('.contacto__error').innerHTML = showError(inputType, input);
    }
}

// Toma los valores de posibles errores
const errorType = [
    "valueMissing",
    "typeMismatch"
]

// Se crean los mensajes de error custom
const errorMessage = {
    name: {
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: `El correo debe contener "@" y un dominio`
    },
    subject: {
        valueMissing: "Este campo no puede estar vacio"
    },
    message: {
        valueMissing: "Este campo no puede estar vacio"
    }
}

// recorre los errores y lo agrega a una variable para retornarlo al ser llamada
function showError(inputType, input){
    let message = "";

    errorType.forEach(error =>{
        if(input.validity[error]){
            message = errorMessage[inputType][error];
        }
    })

    return message;
}