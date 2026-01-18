// Ejemplo: Programa que simula un loro: repite lo que escucha 5 veces.

// 1. IMPORTAR LIBRERÍA
const prompt = require ('prompt-sync')();

// 2. ENTRADA DE DATOS:
// Le pedimos al usuario la frase que el loro va a “escuchar“ y repetir
let textoEscuchado = prompt('Escribí algo para el loro lo pueda repetir:');

console.log (`El loro está comenzando a cantar`);

// 3. BUCLES / CICLOS USANDO FOR
// El “for“ es ideal para cuando sabemos de antemano cuantas veces queremos repetir algo
// ESTRUCTURA: for tiene 3 partes separadas por punto y coma (;):
// A) Inicio (let i = 1): Creamos un contador que empieza en 1
// B) Condicion (i <= 5): (cantidad de repeticiones x ej) i <= 5 : el ciclo va a seguir MIENTRAS el contador sea menor o igual a 5
// C) Modificador (i++): (incremento o decremento) en este caso. Al final de cada vuelta le sumamos 1 al contador

for (let i = 1; i <= 5; i++){
    // lo que pongamos aquí adentro se va a ejecutar 5 veces
    console.log(i + `-`+ textoEscuchado);
}

console.log (`El loro se cansó de cantar. Le debes al loro 500 USD porque no es ningún artista precarizado!`);