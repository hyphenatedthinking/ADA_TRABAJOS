// Basado en Ejercicio 10 clase9 pero usando switch:

// 1. Pide al usuario que ingrese un número del 1 al 7 
// 2. Muestra el día de la semana correspondiente al número. 

// 1. IMPORTAR LIBRERÍA
const prompt = require ('prompt-sync')();

// 1. Pide al usuario que ingrese un número del 1 al 7 
let numero = parseInt (prompt (`Ingresa un número del 1 al 7 para indicar un día de la semana: `));

// USANDO SWITCH: Switch evalúa la variable que se pone entre paréntesis.
// 2. Muestra el día de la semana correspondiente al número. Si el número no está dentro de ese rango, muestra un mensaje de error.

switch (numero) {
 case 1:
 console.log(`Lunes`);
 break;

 case 2:
 console.log(`Martes`);
 break;

 case 3:
 console.log(`Miércoles`);
 break;

 case 4:
 console.log(`Jueves`);
 break;

 case 5:
 console.log(`Viernes`);
 break;

 case 6:
 console.log(`Sábado`);
 break;

 case 7:
 console.log(`Domingo`);
 break;

 // DEFAULT : FUNCIONA COMO ELSE FINAL Y por ende tampoco se escribe break en esta línea :)
 default:
 console.log(`Número fuera de rango, intente de nuevo con un número del 1 al 7`)
 }