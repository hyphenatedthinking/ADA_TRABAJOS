//Ejercicio 8:
// 1. Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
// 2. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require ('prompt-sync')();

// 1. Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
console.log(`Hola! Define los lados de tu triángulo en primero, segundo y tercero:`);

let ladoTriangulo1 = parseFloat (prompt (`Ingresa la longitud del primer lado de tu triágulo:`));
let ladoTriangulo2 = parseFloat (prompt (`Ingresa la longitud del segundo lado de tu triágulo:`));
let ladoTriangulo3 = parseFloat (prompt (`Ingresa la longitud del tercer lado de tu triágulo:`));

if (ladoTriangulo1 === ladoTriangulo2 && ladoTriangulo2 === ladoTriangulo3){
        console.log(`Tu triángulo es Equilátero`)
    } else if (ladoTriangulo1 === ladoTriangulo2 || ladoTriangulo2 === ladoTriangulo3 || ladoTriangulo1 === ladoTriangulo3){
        console.log(`Tu triángulo es Isósceles`)
    }else {
        console.log(`Tu triángulo es Escaleno`);
    }
