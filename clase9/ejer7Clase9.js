//Ejercicio 7:
// 1. Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. 
// 2. Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)

const prompt = require ('prompt-sync')();

// 1. Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. 
let pesoKg = parseFloat (prompt (`Ingresa tu peso en kg:`));

let pesoLibras = pesoKg * 2.20462;

// 2. Muestra el resultado con un mensaje. 
console.log(`Tu peso en libras es:` + pesoLibras);




