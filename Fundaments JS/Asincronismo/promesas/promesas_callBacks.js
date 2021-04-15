//Request para obtener datos (guardar url en una var)

// FORMA 1

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

// Luke Skywalker

function obtenerPersonaje(id){

    return new Promise((resolve,reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
        .get(url, opts, function(data) {
            resolve(data)
        })
        .fail(() =>reject(id))
    })
}

onError = id => console.log(`Sucedio un error al obtener el personaje ${id}`);

obtenerPersonaje(1)
    .then(person1 =>{
        console.log(`El personaje 1 es ${person1.name}`)
        return obtenerPersonaje(2)
    })
    .then(person2 =>{
        console.log(`El personaje 2 es ${person2.name}`)
        return obtenerPersonaje(3)
    })
    .then(person3 =>{
        console.log(`El personaje 3 es ${person3.name}`)
        return obtenerPersonaje(4)
    })
    .then(person4 =>{
        console.log(`El personaje 4 es ${person4.name}`)
    })
    .catch(onError)



/*
Promesas:

Valores que aun no conocemos
Las promesas pueden ser SINCRONAS
Ahi va a haber un valor en futuro

Estados:

1. Pending:
    Estado al crear la promesa, al resolverse, pasa a...

2. Fulfilled:
    Si sale todo bien en la accion asincrona
    FUNCION: .then(val => {...}) obtener valor SI esta es exitosa

    2.1 Promise o pending(Encadenamiento):
        Si pasa todo bien podemos retornar otra promesa y encadenarla
    
3. Rejerted
    Si NO sale todo bien en la accion asincrona
    FUNCION: .catch(val => {...}) obtener error SI salio mal

Creando promesas
Dos funciones, en caso de que salga bien (resolve) o mal (reject)

new Promise(function(resolve,reject){...})


    obtenerPersonaje(2, function(person) {
        console.log(`Hola, yo soy ${person.name}`)

        obtenerPersonaje(3, function(person) {
            console.log(`Hola, yo soy ${person.name}`)

            obtenerPersonaje(4, function(person) {
                console.log(`Hola, yo soy ${person.name}`)

                obtenerPersonaje(5, function(person) {
                    console.log(`Hola, yo soy ${person.name}`)
                })
            })
        })
    })

*/


