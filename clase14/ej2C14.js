/*Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.
*/

const prompt = require('prompt-sync')();

// crear un array vacío donde ir poniendo las calificaciones
let calificaciones = [];

for (let i = 1; i <= 5; i++){
    let cal = parseFloat(prompt(`Ingrese la primera calificación ${i}:`).trim());
    calificaciones.push(cal); //push va agregando las calificaciones al array
}

const calcularPromedio = (arr) => arr.reduce((acum,val) => acum + val, 0) / arr.length;

let promedio = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);


