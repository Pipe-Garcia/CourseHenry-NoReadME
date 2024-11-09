// var deportes = { 
//     conBalon: ["Football", "Basketball", "Rugby"] , 
//     sinBalon: ["Boxeo", "Surf", "Trekking"]
// };

// var persona = {
//     nombre: 'Lucas',
//     edad: 26,
//     estudios: {esProgramador: true}
// };

// // console.log(persona.edad);
// persona.nombre = 'Martin';
// //console.log(persona.nombre)
// persona.edad = 32;
// // console.log(persona.edad);

// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// delete autos.marcas;
// console.log(autos)

// var misFunciones = {
//     saludar: function () {
//         console.log('Hola')
//     }
// }

// misFunciones.saludar();

// // ACCEDER
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// console.log(persona.edad);

// // ASIGNAR
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// persona.nombre = 'Martín';
// console.log(persona.nombre);

// //CREAR
// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// console.log(autos);

// //BORRAR
// delete autos.marcas;
// console.log(autos);

// DOT NOTATION
// var atuendos = {
//     manos: ['Guantes', 'Anillos'],
//     pies: ['Zapatos', 'Soquetes']
// };
// // console.log(atuendos.manos);
 
// // BRACKET DOTATION
// atuendos["piernas"] = ['Bermudas', 'Pantalones'];
// // console.log(atuendos);

// var comidas = {};
// var diferenciaDeNotaciones = function (propUno, propDos) {
//     comidas[propUno] = ["Frutas", "Vegetales"]
//     comidas[propDos] = ["Hamburguesas", "Papas fritas"]
// };
// diferenciaDeNotaciones("saludable", "noSaludable");
// console.log(comidas);


// var libro = {
//     autor: 'Borges',
//     genero: 'Policial',
//     año: 1990
// };

// HAS OWN PROPERTY
// El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.
// var tienePropiedad = libro.hasOwnProperty('autor');
// // console.log(tienePropiedad);

// KEYS
// El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.
// var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

// var mundo = {continentes: 7, paises: 195, oceanos: 5};
// for (const prop in mundo) {
//     console.log(`Esta es la propiedad: ${prop}`);
//     console.log(`Este es el valor: ${mundo[prop]}`)
// }

// THIS
// var mascota = {
//     animal: 'Perro',
//     raza: 'Ovejero Alemán',
//     amistoso: true,
//     dueño: 'Felipe Garcia',
//     info: function() {
//         console.log(`Mi perro es un ${this.raza}`)
//     }
// };
// mascota.info();


