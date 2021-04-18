// FUNCIONES RECURSIVAS

/*
SON LAS QUE SE LLAMAN A SI MISMAS, CUMPLE ELPROPOSITO DE UNA FUNCION
Y ASI NO REESCRBIR EL CODIGO MULTIPLES VECES
P.D. ESTO NO ES TAN EFICIENTE
*/

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

/*

// ESTRUCTURAS DE DATOS INMUTABLES

const joel = {
  nombre: "S. Joel",
  apellido: "Ac",
  edad: 17,
};

// const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = (persona) => ({
  ...persona,
  edad: persona.edad + 1,
  imprimir: console.log(persona.edad),
});

var joelMasViejo = cumpleanosInmutable(joel);
console.log(joelMasViejo); // edad = 18
console.log(joel); // edad = 17


// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

// CLOSURES DE JS

function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`);
  };
}

const saludoArgentino = crearSaludo("che");
const saludoMexicano = crearSaludo("güey");
const saludoColombiano = crearSaludo("amigo");

saludoArgentino("Sacha"); // Hola Sacha che
saludoMexicano("Sacha"); // Hola Sacha güey
saludoColombiano("Sacha"); // Hola Sacha amigo

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

// RECURSIVIDAD

/* 
Dividendo(13)  -   divisor(4)

    13  |_4___

    13 - 4 = 9      1
    9 - 4 = 5       1
    5 - 4 = 1       1
    1 - 4 = -3      0

*

function divisionEntera(dividendo, divisor) {
  if (dividendo < divisor) { // Si es menor, la operacion se acaba
    return 0;
  }

  return 1 + divisionEntera(dividendo - divisor, divisor);
}

console.log(divisionEntera(150,5)) // 30

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

// MANEJO DE FECHAS

function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 * 24; // mms * sg * min * hr
  const diferencia = Math.abs(fecha1 - fecha2);
  return Math.floor(diferencia / unDia); // Math.floor sirve para redondear hacia abajo
}

const hoy = new Date();
const nacimiento = new Date(2004, 2, 19); // 19 Marzo del 2004
console.log(diasEntreFechas(hoy,nacimiento)) // 6238
console.log((6238/365).toFixed(2)) // 17.09 años
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

// AHORRANDO COMPUTO

// !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720

function factorial(n) {
  // Crea una cache interna en caso de que no exista

  if (!this.cache) {
    this.cache = {};
  }

  debugger;
  // Si existe segun n entonces finalizamos
  if (this.cache[n]) { 
    return this.cache[n];
  }

  if (n === 1) {
    return 1;
  }

  // Asi guardamos en la cache
  this.cache[n] = n * factorial(n - 1);
  debugger;
  return this.cache[n];
}

console.log(factorial(6)); // 720

// this.cache[0] = undefined
// this.cache[1] =  1
// this.cache[2] =  2
// this.cache[3] =  6
// this.cache[4] =  24
// this.cache[5] =  120
// this.cache[6] =  720

*/
