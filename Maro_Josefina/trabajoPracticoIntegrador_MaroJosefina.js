// Trabajo Practico Integrador: Introducción a JavaScript / ADA ITW
// Alumna: Josefina Maro

// 1. Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
//✔ id (número)
//✔ título (string),
//✔ autor (string),
//✔ año (número),
//✔ género (string),
//✔ disponible (booleano).

// IMPORTAR LIBRERÍA

const prompt = require ('prompt-sync')();

// SALUDAR AL USUARIO 

console.log(`Queridx lectorx! Bienvenidx! En esta biblioteca podés encontrar libros de distintos géneros como: 
Literatura Sci-Fi, Post-humanismo, Feminismo y Filosofía queer, esperamos que encuentres lo que estás buscando!`);

// 1. Estructura de Datos

// 1. a)

// ARRAY OBJETOS LIBROS: 
// En esta biblioteca (que contiene 10 libros) podés encontrar libros de distintos géneros como: 
// literatura Sci-Fi 
// Post-humanismo 
// Feminismo
// Filosofía queer

let libros = [

    {
     id : [1],
     titulo : [`Parásitos perfectos`],
     autor : [`Luis Carlos Barragán Castro`],
     año : [2021],
     género : [`Cuentos: Sci-Fi`],
     disponible : [true]
    },
    {
     id : [2],
     titulo : [`Manifiesto Cyborg`],
     autor : [`Donna Haraway`],
     año : [1991],
     género : [`Ensayo: Post-humanismo/Feminismo`],
     disponible : [false]
    },
    {
     id : [3],
     titulo : [`A la salud de los muertos: relatos de quienes quedan`],
     autor : [`Vincianne Despret`],
     año : [2023],
     género : [`Ensayo: Post-humanismo/Feminismo`],
     disponible : [true]
    },
    {
     id : [4],
     titulo : [`En caso de amor`],
     autor : [`Anne Dufourmantelle`],
     año : [2025],
     género : [`Ensayo: Feminismo`],
     disponible : [true]
    },
    {
     id : [5],
     titulo : [`Testo Yonquie`],
     autor : [`Paul B. Preciado`],
     año : [2021],
     género : [`Ensayo: Filosofía queer`],
     disponible : [true]
    },
    {
     id : [6],
     titulo : [`Ímpetu involutivo`],
     autor : [`Juan Luis Barragán`],
     año : [2023],
     género : [`Ensayo: Post-humanismo`],
     disponible : [false]
    },
    {
     id : [7],
     titulo : [`Ímpetu involutivo`],
     autor : [`Juan Luis Barragán`],
     año : [2023],
     género : [`Ensayo: Post-humanismo`],
     disponible : [false]
    },
    {
     id : [8],
     titulo : [`Ímpetu involutivo`],
     autor : [`Juan Luis Barragán`],
     año : [2023],
     género : [`Ensayo: Post-humanismo`],
     disponible : [false]
    },
    {
     id : [9],
     titulo : [`Ímpetu involutivo`],
     autor : [`Juan Luis Barragán`],
     año : [2023],
     género : [`Ensayo: Post-humanismo`],
     disponible : [true]
    },
    {
     id : [10],
     titulo : [`Ímpetu involutivo`],
     autor : [`Juan Luis Barragán`],
     año : [2023],
     género : [`Ensayo: Post-humanismo`],
     disponible : [false]
    },

]

// 1. b)

//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
//✔ id (número)
//✔ nombre (string)
//✔ email (string)
//✔ librosPrestados (array de ids de libros).

// Ayuda memoria: los libros prestados son : 2,6,7,8,10 

let usuarios = [

    {
     id : [13],
     nombre : [`Marta Cáceres`],
     email : [`marta13@gmail.com`],
     librosPrestados : [10],
    },
    {
     id : [150],
     nombre : [`Juan Pérez`],
     email : [`perezjuan@outlook.com`],
     librosPrestados : [2],
    },
    {
     id : [1],
     nombre : [`Marina Sanchez`],
     email : [`sanchezmarina@gmail.com`],
     librosPrestados : [7,8],
    },
    {
     id : [15],
     nombre : [`Roberto Carrizo`],
     email : [`carrizoroberto@gmail.com`],
     librosPrestados : [6],
    },
    {
     id : [135],
     nombre : [`Luciano Abel`],
     email : [`lucianoabel@hotmail.com`],
     librosPrestados : [],
    },        
]

// 2. Funciones de Gestión de Libros

// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro

// 2. a)

// Ha entrado un libro NUEVO y quiero agregarlo: 
// (nota: sirve solo en caso de que entre un libro nuevo ya que para libros devueltos debo realizar otra función) 
// agregarLibro es una función que debe usarse una sola vez por libro, lo mismo cuando declaramos cada libro anteriormente. De otra manera estaría duplicando los libros en la biblioteca lo cual causaría una falla en el programa

function agregarLibro(id,titulo,autor,año,género){
    let nuevoLibro = {
     id : id,
     titulo : titulo,
     autor : autor,
     año : año,
     género: género,
     disponible: true
    };

libros.push(nuevoLibro);

}

// 2. b)

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.

function buscarLibro(criterio, valor) {
 for (let i = 0; i < libros.length; i++) {
 if (libros[i][criterio] === valor) {
    console.log(libros[i]);

 }
} 
}

// 2.c)

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.






