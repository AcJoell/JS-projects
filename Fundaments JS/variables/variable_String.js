// VARIABLES
// Es debilmente tipado debido a que no se nos imposibilita que una variable cambie de tipo de valor

var nombre = 'Joel', apellido = 'Stiven';
var edad = 17;

edad = '17 años'

console.log('Hola ' + nombre + ' ' + apellido);
console.log('Tengo '+ edad);


//---------------------------------

var nombreEnMayus = nombre.toUpperCase(); // a mayusculas
var apeEnMinus = apellido.toLowerCase(); // a minusculas

var primeraLetra = nombre.charAt(); // primera letra
var cantLetras = nombre.length; // vector de variable

var nombreCompleto = `${apellido.toUpperCase()}`; // interpolacion de texto con funciones
var str = nombre.substr(0,2); // conseguir valor str segun la posicion | 1 pos | 2 long

var reto = nombre.substr(-1); // posicion / ultima letra /

console.log(
    nombreEnMayus + '\n' + 
    apeEnMinus + '\n' +
    primeraLetra + '\n' + 
    cantLetras  + '\n' +
    nombreCompleto + '\n' + 
    str + ' ' + reto);