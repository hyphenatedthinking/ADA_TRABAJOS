//Ejercicio 3:
// 1. Declara dos variables booleanas condicion1 y condicion2 
// 2. Muestra el resultado de diversas combinaciones lógicas.

const prompt = require ('prompt-sync')();

// 1. Declara dos variables booleanas condicion1 y condicion2 y pide al usuario que ingrese dos valores booleanos (true o false).
let condicion1 = prompt('Ingrese el primer valor booleano (true / false):') === 'true';
let condicion2 = prompt('Ingrese el primer valor booleano (true / false):') === 'false';

// 2. Muestra el resultado de diversas combinaciones lógicas.
console.log('Resultados lógicos:');
console.log('AND (&&):' + (condicion1 && condicion2)); // las dos son true
console.log('OR (||):' + (condicion1 || condicion2)); // una tiene que ser true
console.log('NOT condicion1 (!):' + (!condicion1)); // niega invirtiendo el valor


