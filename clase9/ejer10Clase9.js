//Ejercicio 10:
// 1. Pide al usuario que ingrese un número del 1 al 7 
// 2. Muestra el día de la semana correspondiente al número. 

const prompt = require ('prompt-sync')();

// 1. Pide al usuario que ingrese un número del 1 al 7 
let numero = parseFloat (prompt (`Ingresa un número del 1 al 7 para indicar un día de la semana: `));

// 2. Muestra el día de la semana correspondiente al número. Si el número no está dentro de ese rango, muestra un mensaje de error.
if (numero === 1){
console.log(`Lunes`);
} else if (numero === 2){
console.log(`Martes`);
} else if (numero === 3){
console.log(`Miércoles`)
} else if (numero === 4){
console.log(`Jueves`)
} else if (numero === 5){
console.log(`Viernes`)
} else if (numero === 6){
console.log(`Sábado`)
} else if (numero === 7){
console.log(`Domingo`)
} else {
console.log(`Número fuera de rango, intente de nuevo con un número del 1 al 7`)
}


