/*
CLOUSURE: combinacion del SCOPE de una funcion y la funcion donde fue definida

IIFE: expresion que se invoca inmediatamente lo hacemos con el fin 
de que las variables sean del scope local

*/

(function () {
  let color = "Green";
  function printColor() {
    console.log(color);
  }
  printColor();
})();
// al final se pone () para que se ejecute

// ----------------------------------------------
// FUNCIONES QUE REGRESAN FUNCIONES

// function makeColorPrinter(color) {
//   let colorMessage = `The color is ${color}`;
//   return function () {
//     console.log(colorMessage);
//   };
// }
// let greenColorPrinter = makeColorPrinter("green");

/*
si imprimimos la variable sin parentesis regresara
el codigo mas no el resultado esperado 
*/
//console.log( greenColorPrinter );

/* 
esta funcion esta recordando la funcion (makeColor..)
recordando los valores con los que fue definida
el scope se lo memorizo y asi lo aplico, eso es clousures.
Asi sale el resultado esperado
*/
//console.log(greenColorPrinter());

// ----------------------------------------------
// VARIABLES "PRIVADAS"
/*
El valor no se puede leer directamente o modificar
directamente, se hace a traves (dentro) de unas 
funciones del objeto que se regresan
*/

//   const cont = {
//       count: 3
//   }

//   console.log(cont.count); // 3
//   cont.count = 99; // esto altera el resultado, y eso no lo queremos
//   console.log(cont.count); // 99

// function makeCont(n) {
//   esta vairable queda privada y solo pueden acceder a ella las funciones del objeto retornado
//   let count = n; 
//   return {
//     // retornamos un objeto
//     increase: function () {
//       count += 1;
//     },
//     decrease: function () {
//       count -= 1;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }

// let counter = makeCont(7); // definimos variable a traves de nuestra funcion

/*
console.log(conter.count) // undefined
console.log(`The count is: ${counter.getCount()}`); // 7
counter.decrease();
console.log(`The count is: ${counter.getCount()}`); // 6
counter.decrease();
console.log(`The count is: ${counter.getCount()}`); // 5
counter.increase();
console.log(`The count is: ${counter.getCount()}`); // 6
counter.count = 0; // No se puede alterar, nuestra variable no esta expuesta
*/