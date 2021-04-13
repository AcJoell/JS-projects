// FUNCION REDUCE

var joel = {
    nombre: 'Joel',
    apellido: 'Acosta',
    altura: 1.75,
    cantidadLbros: 35
}
var paula = {
    nombre: 'Paula',
    apellido: 'Arango',
    altura: 1.55,
    cantidadLbros: 68
}
var andres = {
    nombre: 'Andres',
    apellido: 'Garcia',
    altura: 1.62,
    cantidadLbros: 30
}
var sebastian = {
    nombre: 'Sebastian',
    apellido: 'Cruz',
    altura: 1.72,
    cantidadLbros: 25
}
var camilo = {
    nombre: 'Camilo',
    apellido: 'Santana',
    altura: 1.73,
    cantidadLbros: 42
}

var personas = [joel, paula, andres, sebastian, camilo]; // Es una coleccion o array que almacena objetos

const pasarAlturaAcm = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasEnCm = personas.map(pasarAlturaAcm);
//personasEnCm;

// FORMA 1
var acum = 0;

for (var i=0;i<personas.length;i++){
    acum += personasEnCm[i].cantidadLbros
}

console.log(`En total todos tienen ${acum} libros`);

// FORMA 2
const reducer = (acumulador, {cantidadLbros}) => acumulador + cantidadLbros;

var acumul = personas.reduce(reducer,0); // (funcion, valor inicial del acumulador)
console.log(`En total todos tienen ${acumul} libros`);

/*
const newData = [0,1,2,3,4,5].reduce(  
    // function
    (
        valorAnterior,
        valorActual,
        indice
    )=> {
        return valorAnterior + valorActual
    }
    
    // function
    ,
    0
)
console.log(newData)
*/