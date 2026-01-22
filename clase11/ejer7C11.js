const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Elija una operación (+, -, *, /): ").trim();

switch (operacion) {
  case "+":
    console.log(`Resultado: ${numero1 + numero2}`);
    break;

  case "-":
    console.log(`Resultado: ${numero1 - numero2}`);
    break;

  case "*":
    console.log(`Resultado: ${numero1 * numero2}`);
    break;

  case "/":
    if (numero2 === 0) {
      console.log("Error: no se puede dividir por cero.");
    } else {
      console.log(`Resultado: ${numero1 / numero2}`);
    }
    break;

  default:
    console.log("Operación inválida. Use +, -, * o /.");
}
