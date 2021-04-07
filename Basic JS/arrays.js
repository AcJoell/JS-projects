// Los arrays son de tipo objeto

// Crear array y Darle valor
var frutas = ["Manzana","Pera","Banano","Mango"];

// (name) Llamar los elementos del array
console.log(frutas); 

// (.length) Contar los elementos del array
console.log("Longitud: "+frutas.length);

// (name[num]) Llamar un solo elemento del array
console.log(frutas[0]);

// (name.push("item")) Agregar elemento
var masFrutas = frutas.push("Fresa");
console.log(frutas);

// (name.pop("item")) Quitar ultimo elemento del array
var ultimo = frutas.pop("Fresa");
console.log(frutas);

// (name.unshift("item")) Agregar elemento en la posicion 0
var nuevaLong = frutas.unshift("Melon");
console.log(frutas);

// (name.shift("item")) Eliminar elemento en la posicion 0
var nuevaLong = frutas.shift("Melon");
console.log(frutas);

// (name.indexOf("item")) Conocer posicion del elemento
var posicion = frutas.indexOf("Banano");
console.log("Posicion: "+posicion);