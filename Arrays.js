// var listaDeCompras = [];

// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';

//console.log(listaDeCompras);
//listaDeCompras[1];
// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);

// console.log(listaDeCompras.length);



// --- PUSH y UNSHIFT ---
// var colores = ['amarillo','azul'];
// colores.push('rojo');
// colores.unshift('verde');
// --- POP y SHIFT ---
// colores.pop();
// colores.shift();
// console.log(colores)

// --- INCLUDES ---
// var pintores = ['Picasso','Velazquez','Van Gogh','Dali'];
// var incluyePintor = pintores.includes('Velazquez');
// console.log(incluyePintor);

// --- EVERY ---
// var numeros = [10, 6, 8, 9];
// var cumpleCondicion = numeros.every((num) => {
//     return num > 5;
// });
// console.log(cumpleCondicion);

// --- SPLIT ---
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');
// palabraSeparada.pop();
// palabraSeparada.push('y');
// console.log(palabraSeparada);
// --- JOIN ---
// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

// --- FOREACH ---
// var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => console.log(num));
// numeros.forEach((num) => {
//     if (num === 3) {
//         console.log(num) 
//     }
// });

// --- MAP ---
// var masUno = numeros.map(num => {return num + 1});
// console.log(masUno);

// Métodos varios
// 1) El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.
// 2) El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
// 3) El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
// 4) El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.

// Métodos de recorrido
// 1) El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
// 2) El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.

// var numeros = [1,2,3,4,5];
// for (let index = 0; index < numeros.length; index++) {
//     console.log(numeros[index]);    
// }

// function encontrarLetraP(string) {
//     var arr = string.split('');
//     for (let index = 0; index < arr.length; index++) {
//        if (arr[index] === 'p') {
//            console.log(`${string} contiene la letra P en la posición ${[index]}`);
//        }
//     }
// }
// encontrarLetraP('Alejo');
// encontrarLetraP('Colapinto');

var arr = [];

while (arr.length < 5) {
    arr.push('BOOM');
}
console.log(arr);