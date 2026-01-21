/* Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando
arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos las notas de los
estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por una
utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a
posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas.
*/

const prompt = require('prompt-sync')();

// array para almacenar notas. Se crea un array vacío
let notas = [];

// definir la cantidad de notas / parseInt porque este es un número entero
let cantidadNotas = parseInt(prompt(`Introduzca la cantidad de notas (1 nota x alumno):`));

let calificacion;

// bucle for 
// parseFloat porque la nota puede ser un número decimal
for(let i = 0; i < cantidadNotas; i++){
    let calificacion = parseFloat(prompt(`Ingrese la nota ${i+ 1}:`));
    notas[i] = calificacion;
}
console.log(notas);





