/* Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en
un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se
encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su
desarrollo)
*/

const prompt = require('prompt-sync')();

let nombres = [];

for(let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}`);
    nombres[i] = nombre;
}

console.log(`Nombres ingresados:`, nombres);

let nombreBuscado = prompt(`Ingrese el nombre que desea buscar:`);

let encontrado = false;

for (let i = 0; i < nombres.length; i++){
    if (nombres[i] === nombreBuscado) {
        encontrado = true;
    }
}

if (encontrado){
    console.log(`El nombre si está aquí`);
} else {
    console.log(`El nombre no se encuentra`);
}
