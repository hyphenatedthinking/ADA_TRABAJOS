//Ejercicio 6:
// 1. Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad.
// 2. Muestra un mensaje personalizado según el caso.

const prompt = require ('prompt-sync')();

// 1. Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad.
let edad = parseInt (prompt (`Ingresa tu edad:`));

// 2. Muestra un mensaje personalizado según el caso.
if (edad >= 18){
    console.log('Si puedes ingresar a la siguiente página web')
} else {
    console.log('Lo lamentamos, no puedes tener acceso');
}
