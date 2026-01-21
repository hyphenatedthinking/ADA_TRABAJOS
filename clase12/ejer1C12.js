/*Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los
números ingresados.
*/

// Importar libreria
const prompt = require('prompt-sync')();

// Acumulación
let suma = 0;

// Número ingresado x usuario
let numeroIngresado = parseInt(prompt(`Ingrese un número por favor:`))

while (numeroIngresado >= 0){
    suma = numeroIngresado + suma
    numeroIngresado = parseInt(prompt(`Ingrese un número por favor:`))
}
  console.log(suma);