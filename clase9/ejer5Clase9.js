//Ejercicio 5:
// 1. Escribe un programa que pida al usuario que ingrese tres números 
// 2. Determine cuál es el mayor de los tres.

const prompt = require ('prompt-sync')();

// 1. Escribe un programa que pida al usuario que ingrese tres números 
let numero1 = parseFloat (prompt (`Ingrese el primer número:`));
let numero2 = parseFloat (prompt (`Ingrese el segundo número:`));
let numero3 = parseFloat (prompt (`Ingrese el tercer número:`));

// 2. Determine cuál es el mayor de los tres.
if (numero1 > numero2 && numero1 > numero3){
    console.log(`El primer número (`+ numero1 +`) es mayor que los demas números`)
} else if (numero2 > numero1 && numero2 > numero3){
    console.log(`El segundo número (`+ numero2 +`) es mayor que los demas números`)
} else if (numero3 > numero1 && numero3 > numero3 > numero2);{
  console.log(`El tercer número (`+ numero3 +`) es mayor que los demas números`)
}


