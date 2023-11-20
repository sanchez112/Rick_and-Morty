const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = new RegExp("[0-9]");

export default function validation(input) {
    const errors = {};
    

    if(!input.email.length) errors.email ="Ingrese su email";
    else{
        if(!regexEmail.test(input.email)) errors.email = "Debe ser un correo electrónico";
        if(input.email.length > 35 ) errors.email = "Menor a 35 caracteres";
    }


    if(!input.password.length) errors.password ="ingrese su password";
        if(!regexPassword.test(input.password)) errors.password = "Debe ingresar almenos un numero";
        if(input.password.length < 6)errors.password="Contraseña tiene que tener una longitud minima 6 caracteres."
        if(input.password.length > 10)errors.password="Contraseña tiene que tener una longitud maxima de 10 caracteres."




    return errors;
}
// console.log(validation({
//     email:"juangmail.com",
//     password:"a24442222226",
// }))