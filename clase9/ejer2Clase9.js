//Ejercicio 2:
// 1.Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. 
// 2.Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.

const prompt = require ('prompt-sync')();

// 1.Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección.
const RANGO_MINIMO = 1500;
const RANGO_MAXIMO = 2500;

// 2.Pide al usuario que ingrese un número 
let user = parseFloat (prompt(`Ingresa un número para verificar el rango:`));

//Verifica si está dentro del rango definido por las constantes.
if (user >= RANGO_MINIMO && user <= RANGO_MAXIMO){
    console.log('El número ingresado está dentro del rango! Felicitaciones');
} else {
    console.log('Lo sentimos! El número no está dentro del rango');
}


