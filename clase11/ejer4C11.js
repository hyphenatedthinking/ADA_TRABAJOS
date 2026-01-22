/*Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un
número y determine si es par o impar. Muestra un mensaje explicativo indicando qué
significa cada caso.
*/

const prompt = require('prompt-sync')();

let numeroIngresado = parseInt(prompt(`Ingrese un número por favor:`));

if (numeroIngresado < 0){
    console.log(`El número ingresado es negativo`);
} else if (numeroIngresado >= 0) {
    console.log(`El número ingresado es positivo`)
}