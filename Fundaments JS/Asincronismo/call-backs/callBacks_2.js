//Request para obtener datos (guardar url en una var)

// FORMA 1

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = (person) => console.log(`Hola, yo soy ${person.name}`)
// Luke Skywalker

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opts, onPeopleResponse)
}

// ASINCRONISMO EN SU MAXIMA EXPRESION (No tenemos idea de que tarea llegara primero)
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);


/* FORMA 2
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = (person) => console.log(`Hola, yo soy ${person.name}`)
// Luke Skywalker

// La funcion solo se ejecuta si el request es exitoso
$.get(lukeUrl, opts, onPeopleResponse)
*/