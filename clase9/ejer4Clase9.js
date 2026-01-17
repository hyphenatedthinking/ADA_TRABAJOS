//Ejercicio 4:
// 1. Declara una variable nombre.
// 2. Pide al usuario que ingrese su nombre.  
// 3. Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require ('prompt-sync')();

// 1. Declara una variable nombre y 
let nombre = 'JOSEFINA';

// 2. Pide al usuario que ingrese su nombre. 
let nombreUsuario = (prompt(`Adivina el nombre del personaje, PISTA: J _ S _ _ _ _ A:  `));

// 3. Verifica si el nombre ingresado es igual a tu nombre.
if (nombre === nombreUsuario){
    console.log('Felicitaciones, adivinaste el nombre del personaje!');
 } else { 
    console.log('Lo sentimos, no has adivinado la respuesta! Inténtalo otra vez!');
 }

