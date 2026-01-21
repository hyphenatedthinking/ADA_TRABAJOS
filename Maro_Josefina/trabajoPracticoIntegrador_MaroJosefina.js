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
    id: 1,
    titulo: "Parásitos perfectos",
    autor: "Luis Carlos Barragán Castro",
    anio: 2021,
    genero: "Cuentos Sci-Fi",
    disponible: true
  },
  {
    id: 2,
    titulo: "Manifiesto Cyborg",
    autor: "Donna Haraway",
    anio: 1991,
    genero: "Ensayo",
    disponible: false
  },
  {
    id: 3,
    titulo: "A la salud de los muertos",
    autor: "Vincianne Despret",
    anio: 2023,
    genero: "Ensayo",
    disponible: true
  },
  {
    id: 4,
    titulo: "En caso de amor",
    autor: "Anne Dufourmantelle",
    anio: 2025,
    genero: "Ensayo",
    disponible: true
  },
  {
    id: 5,
    titulo: "Testo Yonqui",
    autor: "Paul B. Preciado",
    anio: 2021,
    genero: "Filosofía queer",
    disponible: true
  },
  {
    id: 6,
    titulo: "Ímpetu involutivo",
    autor: "Juan Luis Barragán",
    anio: 2023,
    genero: "Post-humanismo",
    disponible: false
  },
  {
    id: 7,
    titulo: "Otro libro A",
    autor: "Autor A",
    anio: 2010,
    genero: "Sci-Fi",
    disponible: false
  },
  {
    id: 8,
    titulo: "Otro libro B",
    autor: "Autor B",
    anio: 2011,
    genero: "Sci-Fi",
    disponible: false
  },
  {
    id: 9,
    titulo: "Otro libro C",
    autor: "Autor C",
    anio: 2012,
    genero: "Ensayo",
    disponible: true
  },
  {
    id: 10,
    titulo: "Otro libro D",
    autor: "Autor D",
    anio: 2013,
    genero: "Ensayo",
    disponible: false
  }
];


// 1. b)

//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
//✔ id (número)
//✔ nombre (string)
//✔ email (string)
//✔ librosPrestados (array de ids de libros).

// Ayuda memoria: los libros prestados son : 2,6,7,8,10

let usuarios = [
  {
    id: 13,
    nombre: "Marta Cáceres",
    email: "marta13@gmail.com",
    librosPrestados: [10]
  },
  {
    id: 150,
    nombre: "Juan Pérez",
    email: "perezjuan@outlook.com",
    librosPrestados: [2]
  },
  {
    id: 1,
    nombre: "Marina Sanchez",
    email: "sanchezmarina@gmail.com",
    librosPrestados: [7, 8]
  },
  {
    id: 15,
    nombre: "Roberto Carrizo",
    email: "carrizoroberto@gmail.com",
    librosPrestados: [6]
  },
  {
    id: 135,
    nombre: "Luciano Abel",
    email: "lucianoabel@hotmail.com",
    librosPrestados: []
  }
];


// 2. Funciones de Gestión de Libros

// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro

// 2. a)

// Ha entrado un libro NUEVO y quiero agregarlo:
// (nota: sirve solo en caso de que entre un libro nuevo ya que para libros devueltos debo realizar otra función)
// agregarLibro es una función que debe usarse una sola vez por libro, lo mismo cuando declaramos cada libro anteriormente. De otra manera estaría duplicando los libros en la biblioteca lo cual causaría una falla en el programa

function agregarLibro(id,titulo,autor,anio,género) {
   let nuevoLibro = {
    id : id,
    titulo : titulo,
    autor : autor,
    anio : anio,
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
function ordenarLibros(criterio) {
 const criterioNorm = String(criterio).toLowerCase();

 // Hacemos copia para no mutar el array original (opcional)
 const arr = [...libros];

 // BUBBLE SORT (ordenamiento burbuja)
 for (let i = 0; i < arr.length - 1; i++) {
   for (let j = 0; j < arr.length - 1 - i; j++) {
     const a = arr[j]; // accedo al array en la posicion j
     const b = arr[j + 1];

     let debeCambiar = false;

     if (criterioNorm === "titulo") {
       debeCambiar = a.titulo.toLowerCase() > b.titulo.toLowerCase();
     } else if (criterioNorm === "anio") {
       debeCambiar = a.anio > b.anio;
     } else {
       console.log(" Criterio inválido. Usar 'titulo' o 'anio'.");
       return;
     }

     if (debeCambiar) {
       const temp = arr[j];
       arr[j] = arr[j + 1];
       arr[j + 1] = temp;
     }
   }
 }
}

// 2.d)

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

function borrarLibro(id) {
   let pos = -1;
   for(let i = 0; i < libros.length; i++) {
       if(libros[i].id == id) {
           pos = i;
       }
   }

 // Si no se encontró el libro
 if (pos === -1) {
   console.log("Libro no encontrado");
   return;
 }

 // Eliminamos el libro del array
 libros.splice(pos, 1);

 console.log("Libro borrado correctamente");

}

// 3. Gestión de Usuarios
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

// 3. a) REGISTRAR NUEVO USUARIO

function registrarUsuario(nombre,email){
   let nuevoUsuario = {
    nombre : nombre,
    email : email,
   };
usuarios.push(nuevoUsuario);
}

// 3. b) MOSTRAR TODOS LOS USUARIOS

function mostrarTodosLosUsuarios() {
   return usuarios
}

// 3. c) BUSCAR USUARIO POR SU EMAIL

function buscarUsuario(email){
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            console.log(usuarios[i]);
        }
    }
}

// 3. d) BORRAR USUARIO POR SU EMAIL

function borrarUsuario(email) {
   let pos = -1;
   for(let i = 0; i < usuarios.length; i++) {
       if(usuarios[i].email === email) {
           pos = i;
       }
   }

 // Si no se encontró al usuario
 if (pos === -1) {
   console.log("Usuario no encontrado");
   return;
 }

 // Eliminamos el usuario del array
 usuarios.splice(pos, 1);

 console.log("Usuario borrado correctamente");

}

// 4. Sistema de Préstamos
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.

// 4. PRESTAMO DE LIBROS

// 4. a)
function prestarLibro(idLibro, idUsuario){
   let libro = null;
   let usuario = null;

   // Buscar el libro
   for (let i = 0; i < libros.length; i++) {
       if (libros[i].id === idLibro) {
           libros = libros[i];
           break;
       }
   }
   if (libros === null){
       console.log(`Lo sentimos, el libro que desea no está disponible en este momento`);
       return;
   }

   // Buscar al usuario
   for (let i = 0; i < usuarios.length; i++){
     if (usuarios[i].id === idUsuario){
       usuarios = usuarios[i];
       break;
     }
   }

   if (usuarios === null){
       console.log(`Usuario no encontrado`);
       return;
   }

// Prestar libro
libro.disponible = false;
usuarios.librosPrestados.push(libro);

console.log(`Libro prestado correctamente!`);

}



// 4. b)
function devolverLibro(idLibro, idUsuario){
   let libro = null;
   let usuario = null;

   // Buscar el libro
   for (let i = 0; i < libros.length; i++) {
     if (libros[i].id === idLibro) {
       libro = libros[i];
       break;
   }
 }


   if (libros === null){
       console.log(`Lo sentimos, el libro que desea no está disponible en este momento`);
       return;
   }

   // Buscar al usuario
   for (let i = 0; i < usuarios.length; i++){
     if (usuarios[i].id === idUsuario){
       usuarios = usuarios[i];
       break;
     }
   }

   if (usuarios === null){
       console.log(`Usuario no encontrado`);
       return;
   }

   usuarios.LibrosPrestados.splice(idLibro, 1);
   libro.disponible = true;

   console.log(`Libro devuelto correctamente. Gracias!`);

}

// 5. Reportes
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays
// (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// ✔ Cantidad total de libros.
// ✔ Cantidad de libros prestados.
// ✔ Cantidad de libros por género.
// ✔ Libro más antiguo y más nuevo

// 5. a) REPORTE DE LIBROS

function generarReporteLibros() {
  // ✔ Cantidad total de libros
  const totalLibros = libros.length;

  // ✔ Cantidad de libros prestados (disponible === false)
  const librosPrestados = libros.filter(function (l) {
    return l.disponible === false;
  });
  const cantidadPrestados = librosPrestados.length;

  // ✔ Cantidad de libros por género (reduce para contar)
  const librosPorGenero = libros.reduce(function (acum, libro) {
    const g = libro.genero;

    if (acum[g] === undefined) {
      acum[g] = 1;
    } else {
      acum[g] = acum[g] + 1;
    }

    return acum;
  }, {});

  // ✔ Libro más antiguo y más nuevo
  // map para obtener solo los años
  const anios = libros.map(function (libro) {
    return libro.anio;
  });

  // reducimos para encontrar min y max sin usar Math.min/Math.max
  const minMax = anios.reduce(function (acum, anio) {
    if (anio < acum.min) acum.min = anio;
    if (anio > acum.max) acum.max = anio;
    return acum;
  }, { min: anios[0], max: anios[0] });

  const libroMasAntiguo = libros.filter(function (l) {
    return l.anio === minMax.min;
  });

  const libroMasNuevo = libros.filter(function (l) {
    return l.anio === minMax.max;
  });

  // Armamos el reporte final
  const reporte = {
    totalLibros: totalLibros,
    cantidadPrestados: cantidadPrestados,
    librosPorGenero: librosPorGenero,
    libroMasAntiguo: libroMasAntiguo, // puede haber más de uno si comparten año
    libroMasNuevo: libroMasNuevo      // puede haber más de uno si comparten año
  };

  console.log(reporte);

  return reporte;
}

//6. Identificación Avanzada de libros
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre
// todos los libros cuyo título contiene más de una palabra (no títulos que contengan
// números ni otros caracteres).
// b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola

// 6. a)

function librosConPalabrasEnTitulo(){
   const resultados = libros
   .filter(libro => {
       const titulo = libro.titulo

        if (typeof titulo !== "string") { return false; }
        if (titulo === undefined) { return false; }

        const palabras = titulo.trim().split(" ");
       return (
        palabras.length > 1 &&
        /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(titulo)
      );
    })

   .map(libro => libro.titulo); // extraer solo titulos

// 6. b)

   console.log(`Los libros con mas de una palabra en el título son:`,resultados);
   return resultados;
}

// 7. Cálculos Estadísticos
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular
// y mostrar:
// ✔ Promedio de años de publicación de los libros.
// ✔ Año de publicación más frecuente.
// ✔ Diferencia en años entre el libro más antiguo y el más nuevo.

// 7. a)
function calcularEstadisticas(){
   if (libros.lenght === 0){
       console.log(`Lo sentimos. En este momento no ningún libro en la biblioteca`);
       return;
   }

   // Promedio de años de publicación de los libros.
   const sumaAnios = libros.reduce((acum,libro) => acum + libro.anio, 0);
   const promedio = sumaAnios / libros.length;
   const promedioRedondeado = Math.round(promedio);
   // Año de publicación más frecuente.
   const contadorAnios = libros.reduce((acum,libros) => {
       acum[libros.anio] = (acum[libros.anio] || 0) +1;
       return acum;
   }, {});
   const maxCantidad = Math.max(...Object.values(contadorAnios));
   const anioMasFrecuente = Object.keys(contadorAnios).find(anio => contadorAnios[anio] === maxCantidad);

   // Diferencia en años entre el libro más antiguo y el más nuevo.
   const años = libros.map(libro => libro.anio);
   const masAntiguo = Math.min(...años);
   const masNuevo = Math.max(...años);
   const diferencia = masNuevo - masAntiguo;

   console.log(`Estadísticas libros`);
   console.log(`El promedio de años de publicación es:`, promedioRedondeado);
   console.log(`El año de publicación más frecuente es:`, anioMasFrecuente);
   console.log(`La diferencia entre el libro más antiguo y el más nuevo es:`, diferencia);
  

}

//8. Manejo de Cadenas
// a) Crear una función normalizarDatos() que utilice métodos de strings para:
// ✔ Convertir todos los títulos a mayúsculas.
// ✔ Eliminar espacios en blanco al inicio y final de los nombres de autores.
// ✔ Formatear los emails de los usuarios a minúsculas

// 8.a)

function normalizarDatos (){

   // Convertir todos los títulos de los libros a mayúsculas
   libros.forEach(libro => {
    if (typeof libro.titulo === "string") {
      libro.titulo = libro.titulo.toUpperCase();
    }
   });

   // Eliminar espacios en blanco al inicio y al final del nombre de los autores
   libros.forEach(libro => {
    if (typeof libro.autor === "string") {
       libro.autor = libro.autor.trim();
    }
   });

   // Formatear emails de usuarios a minúsculas
   usuarios.forEach(usuario => {
    if (typeof usuario.email === "string") {
        usuario.email = usuario.email.toLowerCase();
    }
   });
}


//9. Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

function preguntar(texto) {
 return new Promise(resolve => {
     return rl.question(texto, resolve);
 });
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

async function menuPrincipal() {
 let salir = false;

    while (!salir) {
   console.log(`
=========================
   MENÚ PRINCIPAL
=========================

Queridx lectorx! Bienvenidx!
En esta biblioteca podés encontrar libros de distintos géneros como:
Literatura Sci-Fi, Post-humanismo, Feminismo y Filosofía queer,
Esperamos que encuentres lo que estás buscando!

1) Agregar libro
2) Buscar libro (titulo/autor/genero)
3) Ordenar libros (titulo/anio) [bubble sort]
4) Borrar libro
5) Registrar usuario
6) Mostrar todos los usuarios
7) Buscar usuario por email
8) Borrar usuario
9) Prestar libro
10) Devolver libro
11) Generar reporte libros (map/filter/reduce)
12) Libros con +1 palabra en título
13) Calcular estadísticas (Math)
14) Normalizar datos (Strings)
0) Salir
`);

   const opcion = (await preguntar("Elegí una opción: ")).trim();

   switch (opcion) {
    
      //Agregar libro
      case "1": {
       const titulo = await preguntar("Título: ");
       const autor = await preguntar("Autor: ");
       const anio = await preguntar("Año: ");
       const genero = await preguntar("Género: ");
       agregarLibro(undefined, titulo, autor, Number(anio), genero);
       break;
     }
  
      //Buscar libro
     case "2": {
       const criterio = await preguntar("Criterio (titulo/autor/genero): ");
       const valor = await preguntar("Valor a buscar: ");
       const res = buscarLibro(criterio, valor);
       console.table(res);
       break;
     }

     //OrdernarLibros
     case "3": {
       const criterio = await preguntar("Ordenar por (titulo/anio): ");
       ordenarLibros(criterio);
       break;
     }

     //Borrar libro
     case "4": {
       const id = await preguntar("ID del libro a borrar: ");
       borrarLibro(Number(id));
       break;
     }
   
     //Registrar usuario
     case "5": {
       const nombre = await preguntar("Nombre: ");
       const email = await preguntar("Email: ");
       registrarUsuario(nombre, email);
       break;
     }

     //Mostrar todos los usuarios
     case "6": {
       console.table(mostrarTodosLosUsuarios());
       break;
     }

     //Buscar usuario
     case "7": {
       const email = await preguntar("Email del usuario: ");
       const user = buscarUsuario(email);
       if (!user) console.log(" Usuario no encontrado.");
       else console.log(user);
       break;
     }

     //Borrar usuario
     case "8": {
       const nombre = await preguntar("Nombre del usuario: ");
       const email = await preguntar("Email del usuario: ");
       borrarUsuario(nombre, email);
       break;
     }

     //Prestar libro
     case "9": {
       const idLibro = await preguntar("ID Libro: ");
       const idUsuario = await preguntar("ID Usuario: ");
       prestarLibro(Number(idLibro), Number(idUsuario));
       break;
     }

     //Devolver libro
     case "10": {
       const idLibro = await preguntar("ID Libro: ");
       const idUsuario = await preguntar("ID Usuario: ");
       devolverLibro(Number(idLibro), Number(idUsuario));
       break;
     }

     //Generar reporte de libros
     case "11": {
       generarReporteLibros();
       break;
     }

     //Libros con +1 palabras en título
     case "12": {
       librosConPalabrasEnTitulo();
       break;
     }

     //Calcula estadísticamente los libros en base a los años de edición
     case "13": {
       calcularEstadisticas();
       break;
     }

     //Normalizar datos
     case "14": {
       normalizarDatos();
       break;
     }

     //Salir
     case "0": {
       salir = true;
       break;
     }

     default:
       console.log(" Opción inválida.");
   }}

    rl.close();
    console.log("Saliendo...");
}

menuPrincipal()