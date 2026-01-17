//Ejercicio 9:
// 1. Define una constante PI con el valor de pi (3.14159). 
// 2. Pide al usuario que ingrese el radio de un círculo. 
// 3. calcula su área y perímetro utilizando la constante PI.
// 4. Muestra el resultado al usuario.

const prompt = require ('prompt-sync')();

// 1. Define una constante PI con el valor de pi (3.14159). 
const PI = 3.14159 

// 2. Pide al usuario que ingrese el radio de un círculo. 
let radioCirculo = parseFloat (prompt (`Ingresa el radio del círculo: `));

// 3. calcula su área y perímetro utilizando la constante PI.
let area = PI * radioCirculo * radioCirculo;
let perimetro = 2 * PI * radioCirculo;

// 4. Muestra el resultado al usuario.
console.log(`El área del círculo es:` + area);
console.log(`El perímetro del círculo es:` + perimetro);



