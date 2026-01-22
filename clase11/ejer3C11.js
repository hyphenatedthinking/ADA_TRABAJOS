/*Ejercicio 3: ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo. El programa deberá contar
desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para
realizar la tarea.
*/

const prompt = require('prompt-sync')();

let numeroIngresado = parseInt(prompt(`Ingrese un número positivo por favor:`));

if (numeroIngresado > 0){
    for (let i = 1; i <= numeroIngresado; i++){
         console.log(i);
    }
} else {
    console.log(`Por favor, ingrese un número mayor a 0`);
}

