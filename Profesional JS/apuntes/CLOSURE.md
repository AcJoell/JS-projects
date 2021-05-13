### CLOUSURE
Combinacion del SCOPE de una funcion y la funcion donde fue definida.
#
---

### IIFE
Expresion que se invoca inmediatamente, lo hacemos con el fin de que las variables sean del scope local.

```js
(function () {
  let color = "Green";
  function printColor() {
    console.log(color);
  }
  printColor();
})();
```
> Encerramos la funcion dentro de parentesis para retornarlo,
> al final se pone ( ) para que se ejecute automaticamente.
#
---

### FUNCIONES QUE REGRESAN FUNCIONES
```js
function makeColorPrinter(color) {
   let colorMessage = `The color is ${color}`;
   return function () {
     console.log(colorMessage);
   };
}
let greenColorPrinter = makeColorPrinter("green");
```

> Si imprimimos la variable sin parentesis regresara
> el codigo de la funcion, mas no el resultado esperado.
#
```js
console.log( greenColorPrinter );
```

> Esta funcion esta recordando la funcion (makeColor..)
> sus valores definidos, el scope se lo memorizo y asi lo aplico,
> eso es clousures. Asi sale el resultado esperado con parentesis

```js
console.log( greenColorPrinter() );
```
#
---
### VARIABLES 'PRIVADAS'

El valor no se puede leer directamente o modificar directamente, se hace a traves (dentro) de unas funciones del objeto que se regresan.

La variable no queda privada, cualquiera puede cambiar sus valores.
```js
const cont = {
    count: 3
}
console.log(cont.count); // 3
cont.count = 99; // esto altera el resultado, y eso no lo queremos
console.log(cont.count); // 99
```
La variable queda privada y solo puede acceder a ella el objeto retornado
```js
function makeCont(n) { 
   let count = n; 
   return { // retornamos un objeto y creamos funciones dentro de este
     increase: function () {
       count += 1;
     },
     decrease: function () {
       count -= 1;
     },
     getCount: function () {
       return count;
     },
   };
 }
let counter = makeCont(7); // definimos la variable a traves de nuestra funcion
```
Utilizamos la funcion que retornamos del objeto e imprimimos.
```js
console.log(conter.count) // undefined
console.log(`The count is: ${counter.getCount()}`); // 7
counter.decrease(); 
console.log(`The count is: ${counter.getCount()}`); // 6
counter.decrease();
console.log(`The count is: ${counter.getCount()}`); // 5
counter.increase();
console.log(`The count is: ${counter.getCount()}`); // 6
counter.count = 0; // No se puede alterar, nuestra variable no esta expuesta
```