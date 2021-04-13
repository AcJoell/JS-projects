// FUNCION MAP
// Devuelve un nuevo array modificando q le vayamos pasando del array principal

// Ej: Pasar la altura de metros a centimetros

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

// MODO DE RETORNO 1
const pasarAlturaAcm = persona => {
    return {
        ...persona, // ... (spread operator)
        altura: persona.altura * 100
    }
}

// MODO DE RETORNO 2
const pasarAlturaAcm_2 = persona => ({
    ...persona, // ... (spread operator)
    altura: persona.altura * 100
})

var personasCM = personas.map(pasarAlturaAcm); // Lo transforma segun lo que pongamos dentro de parentsis (condicion)
var personasCM_2 = personas.map(pasarAlturaAcm_2);

// objetos en memoria totalmente distintos
console.log(personas);
console.log(personasCM);
console.log(personasCM_2);