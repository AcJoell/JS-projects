//ECMASCRIPT 6  -   -   -    NOVEDADES

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// PARAMETROS POR DEFECTO

// Inicializando valores antes
function newFunction(name, age, country) {
  var name = name || "Joel"; // asi se pone valor por defecto
  var age = age || 17;
  var country = country || "Col";
  console.log(naem, age, country);
}

// Iniciando valores ahora
function newFunction2(name = "Joel", age = 17, country = "Col") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Jaime", 23, "Col");

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// TEMPLATE LITERALS

let hello = "Hello";
let world = "World";

// Antes
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
// Despues

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// MULTILINEA EN STRINGS

// antes
let lorem =
  "Qui consequatur. Commodi. Ipsum vel duis yet \n" +
  "otra frase epica que necesitaria";

// despues
let lorem2 = `otraa frase que necesitamos
ahora podemos hacerlo de esta manera`;

console.log(lorem);
console.log(lorem2);

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// ESTRUCTURACION DE ELEMENTOS

let person = {
  name: "Joel",
  age: 17,
  country: "Col",
};

// antes
console.log(person.name, person.age, person.country);

// despues
let { name, age, country } = person;

// es lo mismo
console.log(name, age, country);

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// OPERADOR DE PROPAGACION

let team1 = ["Joel", "Paula", "Andres"];
let team2 = ["Natalia", "Valentina", "David"];

// antes
let prueba = [
  "Anderson",
  "Joel",
  "Paula",
  "Andres",
  "Natalia",
  "Valentina",
  "David",
];

// ahora
let education = ["Anderson", ...team1, ...team2];

console.log(education);

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -
