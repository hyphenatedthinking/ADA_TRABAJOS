// Consigna

//Creá un programa que simule un sistema de calificación basado en la nota de un estudiante 
//(un valor numérico del 0 al 100). El programa debe determinar si el estudiante ha reprobado.
//aprobado o ha obtenido una calificación excelente, según las siguientes condiciones


//si la nota es menor a 60, el estudiante ha reprobado
//si la nota está entre 60 y 89 (inclusive) el estudiante ha aprobado
//si la nota es mayor a 90, el estudiante ha obtenido una calificación excelente.
//usar el condicional if, else if y else para mostrar el mensaje correspondiente en la consola.

let nota = 75;

if (nota < 60) {
    console.log('Reprobado');
} else if (nota >= 60 && nota <=89){
    console.log('Aprobado');
} else {
    console.log('Calificación EXCELENTE');
}

