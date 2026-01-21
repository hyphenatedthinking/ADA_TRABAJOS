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

const prompt = require('prompt-sync')();

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
    genero: "Cuentos, Sci-Fi",
    disponible: true
  },
  {
    id: 2,
    titulo: "Manifiesto Cyborg",
    autor: "Donna Haraway",
    anio: 1991,
    genero: "Ensayo, Post-Humanismo",
    disponible: false
  },
  {
    id: 3,
    titulo: "A la salud de los muertos: relatos de quienes quedan",
    autor: "Vincianne Despret",
    anio: 2022,
    genero: "Ensayo filosófico, Post-humanismo",
    disponible: true
  },
  {
    id: 4,
    titulo: "En caso de amor",
    autor: "Anne Dufourmantelle",
    anio: 2025,
    genero: "Ensayo filosófico",
    disponible: true
  },
  {
    id: 5,
    titulo: "Testo Yonqui",
    autor: "Paul B. Preciado",
    anio: 2021,
    genero: "Ensayo filosófico, Filosofía queer",
    disponible: true
  },
  {
    id: 6,
    titulo: "Ímpetu involutivo, Afectos y conversaciones entre plantas, insectos y científicos",
    autor: "Carla Hustak y Natasha Myers",
    anio: 2012,
    genero: "Ensayo filosófico, Epistemología, Evolucionismo",
    disponible: false
  },
  {
    id: 7,
    titulo: "Las cosas que perdimos en el fuego",
    autor: "Mariana Enriquez",
    anio: 2016,
    genero: "Cuentos, Terror",
    disponible: false
  },
  {
    id: 8,
    titulo: "Witches, Witch-Hunting and Women",
    autor: "Silvia Federici",
    anio: 2018,
    genero: "Ensayo filosófico, Feminismo, Idioma: inglés",
    disponible: false
  },
  {
    id: 9,
    titulo: "Caliban y la bruja",
    autor: "Silvia Federici",
    anio: 2004,
    genero: "Ensayo filosófico, Feminismo",
    disponible: true
  },
  {
    id: 10,
    titulo: "Primavera con Monique Wittig: el devenir lesbiano con el dildo en la mano de Spinoza transfeminista",
    autor: "Leonor Silvestri",
    anio: 2019,
    genero: "Ensayo filosófico, Filosofia queer",
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

function agregarLibro(id,titulo,autor,anio,genero) {
   let nuevoLibro = {
    id : id,
    titulo : titulo,
    autor : autor,
    anio : anio,
    genero: genero,
    disponible: true
   };

libros.push(nuevoLibro);
console.log(`El libro ha sido agregado con éxito!`);


}

// 2. b)

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.

function buscarLibro(criterio, valor) {
  const resultados = [];
  criterio = criterio.toLowerCase();

    for (let i = 0; i < libros.length; i++) {
        const libroValor = libros[i][criterio];
        if (libroValor && libroValor.toString().toLowerCase() === valor.toLowerCase()){
          resultados.push(libros[i]);
        }
      }

    if (resultados.length === 0){
      console.log(`Lo sentimos, no se encontró el libro`);
    }
    return resultados;
  
}

// 2.c)

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio) {
 let criterioNorm = String(criterio).toLowerCase();
 criterioNorm = criterioNorm.replace("í","i"); //en caso de que el usuario use í

 // Copia para no cambiar el array original
 const arr = [...libros];

 // BUBBLE SORT 
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
       console.log(" Criterio inválido. Usar 'titulo' o 'año'.");
       return;
     }

     if (debeCambiar) {
       const temp = arr[j];
       arr[j] = arr[j + 1];
       arr[j + 1] = temp;
     }
   }
 }
 return arr;
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
    id: usuarios.length + 1,
    nombre: nombre,
    email: email,
    librosPrestados: []
   };
   usuarios.push(nuevoUsuario);
   console.log(`El usuario ha sido registrado correctamente`);
}

// 3. b) MOSTRAR TODOS LOS USUARIOS

function mostrarTodosLosUsuarios() {
   return usuarios
}

// 3. c) BUSCAR USUARIO POR SU EMAIL

function buscarUsuario(email){
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            return(usuarios[i]);
        }
    }
    return null;
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
  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!libro) {
    console.log("Libro no encontrado");
    return;
  }
  if (!usuario) {
    console.log("Usuario no encontrado");
    return;
  }
  if (!libro.disponible) {
    console.log("Lo sentimos, el libro que desea no está disponible en este momento");
    return;
  }

  libro.disponible = false;
  usuario.librosPrestados.push(idLibro);

  console.log("Libro prestado correctamente!");
}

function devolverLibro(idLibro, idUsuario){
  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!libro || !usuario) {
    console.log("Datos incorrectos");
    return;
  }

  const index = usuario.librosPrestados.indexOf(idLibro);
  if (index === -1){
    console.log("El libro no ha sido prestado por este usuario");
    return;
  }

  usuario.librosPrestados.splice(index, 1);
  libro.disponible = true;

  console.log("Libro devuelto correctamente. Gracias!");

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
  // Cantidad total de libros
  const totalLibros = libros.length;

  // Cantidad de libros prestados
  const librosPrestados = libros.filter(l => !l.disponible);
  const cantidadPrestados = librosPrestados.length;

  // Cantidad de libros por género (contando cada género por separado)
  const librosPorGenero = libros.reduce((acum, libro) => {
    // separar los géneros por coma y quitar espacios
    const generos = libro.genero.split(',').map(g => g.trim());

    generos.forEach(g => {
      if (!acum[g]) {
        acum[g] = 1;
      } else {
        acum[g] += 1;
      }
    });

    return acum;
  }, {});

  // Libro más antiguo y más nuevo
  const anios = libros.map(libro => libro.anio);

  const minMax = anios.reduce((acum, anio) => {
    if (anio < acum.min) acum.min = anio;
    if (anio > acum.max) acum.max = anio;
    return acum;
  }, { min: anios[0], max: anios[0] });

  const libroMasAntiguo = libros.filter(l => l.anio === minMax.min);
  const libroMasNuevo = libros.filter(l => l.anio === minMax.max);

  // Armamos el reporte final
  const reporte = {
    totalLibros,
    cantidadPrestados,
    librosPorGenero,
    libroMasAntiguo, 
    libroMasNuevo    
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
   if (libros.length === 0){
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

   console.log(`Los datos han sido normalizados correctamente!`);
}


//9. Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

function menuPrincipal() {
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
2) Buscar libro (Tipea la palabra: título o autor o género)
3) Ordenar libros (Titulo / Año) 
4) Borrar libro
5) Registrar usuario
6) Mostrar todos los usuarios
7) Buscar usuario por email
8) Borrar usuario
9) Prestar libro
10) Devolver libro
11) Generar reporte libros 
12) Libros con +1 palabra en título
13) Calcular estadísticas 
14) Normalizar datos 
0) Salir
`);

   const opcion = prompt(`Opción:....`);

   switch (opcion) {
    
      //Agregar libro
       case "1": 
        agregarLibro(
          libros.length + 1, 
          prompt("Título: "),
          prompt("Autor: "),
          Number(prompt("Año: ")),
          prompt("Género: "),
        );
        break;
     
      //Buscar libro
       case "2": 
        console.table(
          buscarLibro(
            prompt("Critero: ").toLowerCase(),
            prompt("Valor:")
          )
        );
        break;
     
     //OrdernarLibros
       case "3": 
        console.table(ordenarLibros(prompt("Título o Año: ")));
        break;
     
     //Borrar libro
       case "4": 
        borrarLibro(Number(prompt("Id: ")));
        break;
   
     //Registrar usuario
        case "5": 
        registrarUsuario(prompt("Nombre: "), prompt("Email: "));
        break;
     
     //Mostrar todos los usuarios
        case "6": 
        console.table(usuarios);
        break;
    
     //Buscar usuario
        case "7": 
        console.log(buscarUsuario(prompt("E-mail: ")));
        break;
     
     //Borrar usuario
        case "8": 
        borrarUsuario(prompt("Email usuario: "));
        break;

     //Prestar libro
        case "9": 
        prestarLibro(
          Number(prompt("Id libro: ")),
          Number(prompt("Id usuario: "))
        );
        break;

     //Devolver libro
        case "10": 
        devolverLibro(
          Number(prompt("Id libro: ")),
          Number(prompt("Id usuario: "))
        );
        break;

     //Generar reporte de libros
         case "11": 
         generarReporteLibros();
         break;
     
     //Libros con +1 palabras en título
         case "12": 
         librosConPalabrasEnTitulo();
         break;
     
     //Calcula estadísticamente los libros en base a los años de edición
         case "13": 
         calcularEstadisticas();
         break;
     
     //Normalizar datos
         case "14": 
         normalizarDatos();
         break;
  
     //Salir
         case "0": 
         salir = true;
         console.log("Saliendo...");
         break;
     

     default:
       console.log(" Opción inválida.");
    }
  }
}

menuPrincipal()