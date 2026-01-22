/*Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa
debe mostrar todos los números pares que se encuentran entre esos dos valores,
incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el
inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un
mensaje indicando que los valores son inválidos.
*/

const prompt = require('prompt-sync')();

let numeroInicio = parseInt(prompt(`Ingrese el primer número por favor:`));
let numeroFin = parseInt(prompt(`Ingrese el segundo número por favor:`));

if (numeroInicio > numeroFin){
    console.log(`Valores inválidos`);
    } else 
    console.log('Números pares entre', numeroInicio, 'y', numeroFin, 'son:');
    
    for(let i = numeroInicio; i <= numeroFin; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }


