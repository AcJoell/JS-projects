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

console.log(personas[0]); // Acceder a una posicion del array

// Acceder a los atributos  R/ 1.75
console.log(personas[0].altura);
console.log(personas[0]['altura']); // poniendo atributo dentro de string

for (var i=0;i<personas.length;i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} mts`);
}