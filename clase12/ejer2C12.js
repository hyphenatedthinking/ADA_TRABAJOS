/*Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la
correcta. La contraseña correcta es "1234".
*/

// Importar libreria
const prompt = require('prompt-sync')();

// Definir contraseña correcta
let contraseña = 1234;

// Intentos
let intentos = 3;

// Do While
do{
    contraseña = parseInt(prompt(`Ingrese su contraseña numérica de 4 dígitos:`));
    if(contraseña !== 1234){
        intentos --;
        console.log(`La contraseña es incorrecta. Tiene ${intentos} restantes`);
    
    }
} while(contraseña !== 1234 && intentos >0);

if(contraseña === 1234){
    console.log(`Acceso correcto!`);
} else {
    console.log(`Acceso denegado. Su cuenta ha sido bloqueada`);

}
