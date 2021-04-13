// FUNCION FILTER
// Es mas prolijo manejarlo en distintas variables apra mejorar la lectura

var joel = {
    nombre: 'Joel',
    apellido: 'Acosta',
    altura: 1.75
}
var paula = {
    nombre: 'Paula',
    apellido: 'Arango',
    altura: 1.55
}
var andres = {
    nombre: 'Andres',
    apellido: 'Garcia',
    altura: 1.62
}
var sebastian = {
    nombre: 'Sebastian',
    apellido: 'Cruz',
    altura: 1.72
}
var camilo = {
    nombre: 'Camilo',
    apellido: 'Santana',
    altura: 1.73
}

var personas = [joel, paula, andres, sebastian, camilo]; // Es una coleccion o array que almacena objetos

// Filtrando mediante un array y una condicion
var esAlta = ({altura}) => altura > 1.7;
var esBaja = ({altura}) => altura <= 1.7;

var personasAltas = personas.filter(esAlta); // Entre parentesis la condicion
personasAltas;

var personasBajas = personas.filter(esBaja);
personasBajas;

/* MODO DISTINTO
var esAlta = persona => persona.altura > 1.7
var personasAltas = personas.filter(function (persona) {
    return persona => persona.altura > 1.7;
}); 
Una funcion dentro de los parentesis */
