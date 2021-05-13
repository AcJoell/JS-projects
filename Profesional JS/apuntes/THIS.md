> Sugerencia: Ver primero el archivo SCOPE.md para comprender mejor este.

#

---

#

### THIS:

Se refiere a un objeto. Ese objeto es el que actualmente esta ejecutando un pedazo de codigo.

#

---

#

#### THIS EN EL SCOPE GLOBAL

Cuando estamos entre etiquetas y no hay ninguna funcion u objeto.
Siempre que utilicemos [this]() en este concepto, el browser lo va a asignar a Window

```js
console.log(`this: ${this}`); // this: {object Window}
```

Como resultado [this]() apuntaria al objeto [Window]()

#

---

#

#### THIS EN EL SCOPE DE UNA FUNCION

Cuando estamos dentro de una funcion, sucede que al llamar el objeto directamente desde la ventana
este apuntaria nuevamente al [this]() y en modo estricto nos daria un valor [undefined]()

```js
function whoIsThis() {
  return this;
}
console.log(`whotIsThis(): ${whoIsThis()}`); // whotIsThis(): {object Window}

// MODO ESTRICTO
// "use strict"; Sirve para activar el modo estricto

function whoIsThisStrict() {
  "use strict";
  return this;
}
console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`); // undefined
```

#

---

#

#### THIS EN EL CONTEXTO DE UN OBJETO

Si una funcion esta dentro de un objeto, [this]() se refiere al objeto que actualmente esta ejecutando ese pedazo de codigo.

[this]() apuntaria al objeto:

```js
const person = {
  name: "Juan",
  saludar: function () {
    console.log(`Hola, soy ${this.name}`);
  },
};

person.saludar(); // Hola, soy Juan
```

Aqui el resultado seria vacio, debido a que [accion]() no se esta llamando dentro del contexto de un objeto, solo se esta asignando como valor mediante el objeto (en widnow), por lo tal, [this]() no apuntaria hacia dentro del objeto [person]()

```js
const accion = person.saludar;

accion(); // Hola, soy
```

#

---

#

#### THIS EN EL CONTEXTO DE UNA "CLASE"

Al instanciar un objeto de una clase, [this]() se va a referir a la instancia () no a su clase o a su metodo, sino a donde se instancia, en este caso seria en la clase [const angela]()

```js
// Le damos un argumento, asi como un constructor
function Person(nombre, edad) {
  // al asignar estos valores al argumento, lo estamos haciendo sobre la instancia, no sobre el objeto prototipal
  this.nombre = nombre; // es igual que; this = {} (un objeto vacio)
  this.edad = edad;
}

// una manera de hacer un metodo al objeto es a traves de su prototype
Person.prototype.saludar = function () {
  console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`);
};

const laura = new Person("Laura", 19); // al instanciarlo sobre laura el this apuntaria sobre este mismo
laura.saludar(); // Me llamo Laura y tengo 19 años
```
