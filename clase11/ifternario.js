// Ejercicio para verificar si una persona es mayor de edad
// utilizando if ternario

// 1. IMPORTAR LIBRERÍA
const prompt = require ('prompt-sync')();

// 2. ENTRADA DE DATOS: Pide al usuario que ingrese su edad
let edad = parseInt (prompt (`Ingresa tu edad: `));

// 3. LÓGICA CON IF TERNARIO
// if ternario tiene una forma abreviada en solo una línea.
// estructura: (condición) ? ´´primera expresión (valor si es true)´´ : ´´segunda expresión (valor si es false)´´

// EXPLICACIÓN
// el signo de interrogación (?) actúa como el “if“ y pregunta: se cumple esto?
// El signo dos puntos (:) actúa como “else“ 

let mensaje = (edad >= 18) ? `Sos mayor de edad` : `Sos menor de edad`;

console.log(mensaje);












