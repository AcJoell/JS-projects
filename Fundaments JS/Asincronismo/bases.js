//// Funcion SET_TIMEOUT => con 2 parametros (funcion y delay)
// Si decidimos modificar algun elemento, se ejecutaria de manera asincrona (TENER EN CUENTA)
// (las funciones se ejecutan cunado el programa principal finaliza)

console.log('a');

//FORMA 1 Arrow functions
setTimeout(() => console.log('b'), 2000); // R/ a, d, c, b (va a cola de tareas)

setTimeout(() => console.log('c'), 0); // R/ a, d, c, b (va a cola de tareas)

console.log('d');

//setTimeout(()=> console.log('e'), 2000);

for(var i=0; i<100000000; i++){} // Al tener mucho trabajo se demoraria demasiado


/* Forma extensa
setTimeout(function(){
    console.log('b');
}, 20000) // milisegundos (2seg)
*/