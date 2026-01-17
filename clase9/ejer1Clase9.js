//Ejercicio 1:
// 1. Declara dos variables numéricas numero1 y numero2. 
// 2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require ('prompt-sync')();

//1. Declara dos variables numéricas numero1 y numero2. 

let numero1 = parseFloat (prompt (`Ingrese el primer número: `));
let numero2 = parseFloat (prompt (`Ingrese el segundo número: `));

// 2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

if (numero1 > numero2){
    console.log(`El primer número (`+ numero1 +`) es mayor que el segundo número`)
} else if (numero1 < numero2){
    console.log(`El segundo número (`+ numero2 +`) es mayor que el primer número`)
} else {
    console.log(`Los dos números son iguales`);
}

