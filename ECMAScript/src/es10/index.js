// ECMASCRIPT 10  -   -   -    NOVEDADES

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// CREANDO MATRICES

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// .flat: recibe como argumento la profundidad
// () sin parametro: [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
// (2) con parametro: [ 1, 2, 3, 1, 2,  down   3, 1, 2, 3]

console.log(array.flat(3));

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// .flatMap

let mapeando = [1, 2, 3, 4, 5];

console.log(mapeando.flatMap((value) => [value, value * 2])); // [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// .trim...: eliminar espacios en blanco de un String

let sentence = "         que pasa crack ??            ";

console.log(sentence); //     que pasa crack ??
console.log(sentence.trimStart()); // que pasa crack ??
console.log(sentence.trimEnd()); // que pasa crack ??

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// catch: pasar de forma opcional el parametro de error al valor de catch

try {
} catch {
  // en vez de catch(){}
  error;
}

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// fromEntries: transforma clave valor en un objeto

let entries = [
  ["name", "Joel"],
  ["age", 17],
];

console.log(Object.fromEntries(entries));
// { name: 'Joel', age: 17 }

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// objeto de tipo simbolo: permite acceder a una descripcion

let miSimbolo = `My Symbol`;
let valorSimbolo = Symbol(miSimbolo);
console.log(valorSimbolo.description); // My Symbol
