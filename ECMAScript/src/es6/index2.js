// SCOPE

{
  var globalVar = "Global var";
}

{
  let globalLet = "Global let";
  console.log(globalLet); // Global let
}

// globalLet is not defined // globalVar = GLobar var
console.log(globalVar);

const a = "constante a";
console.log(a);

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// ASIGNACION DE OBJETOS

let name = "Joel";
let age = 17;

// antes
obj = { name: name, age: age };

// despues - obtiene el valor de las variables que estan en el scope global
obj2 = { name, age };
console.log(obj2);

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// ARROW FUNCTIONS

const names = [
  { name: "Joel", age: 17 },
  { name: "Johanna", age: 23 },
];

// antes
let listOfNames1 = names.map(function (item) {
  console.log(item.name); // Joel, Johanna
});
listOfNames1;

// despues
let listOfNames2 = names.map((item) => console.log(item.name));
listOfNames2;

const listOfNames3 = (name, age) => {
  // code xd
};

const square = (num) => num * num;
square(2);

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// PROMESAS

// JS no es un lenguaje sincronico

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("hola crack"))
  .catch((error) => console.log(error));

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// CLASES

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(5, 6)); // 11

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// TRABAJANDO CON MODULOS  / IMPORT AND EXPORT /

import hello from "module1.js";
console.log(hello());

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// GENERATOR retorna valores segun el algoritmo
// yield: permite retornar algo, guarda el estado de manera interna

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World.";
  }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

/*  Resultado:
Hello, 
World.
undefined
*/
