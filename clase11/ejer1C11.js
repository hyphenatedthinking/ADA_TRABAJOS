/*Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida
al usuario un número cualquiera. El programa deberá analizar si el número ingresado es
positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje
explicativo en cada caso
*/


const prompt = require('prompt-sync')();

// Número ingresado x usuario
let numeroIngresado = parseInt(prompt(`Ingrese un número por favor:`));

if (numeroIngresado === 0){
    console.log(`El número ingresado es igual a 0`)
} else if (numeroIngresado < 0){
    console.log(`El número ingresado es negativo`)
} else {
    console.log(`El número ingresado es positivo`);
}