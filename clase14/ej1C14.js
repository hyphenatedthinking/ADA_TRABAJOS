/*Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.
*/

const prompt = require('prompt-sync')();

let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let porcentajeIva = parseFloat(prompt(`Ingrese el porcentaje de IVA: `));

const calcularPrecioFinal = (precio, porcentajeIva) => precio + (precio * porcentajeIva / 100);{

let precioFinal = calcularPrecioFinal(precio,porcentajeIva);
console.log(`El precio final con IVA es: $${precioFinal.toFixed(2)}`);
    

}

