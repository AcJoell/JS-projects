//Request para obtener datos (guardar url en una var)

// FORMA 1

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

// Luke Skywalker

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $
      .get(url, opts, callback)
      .fail(() => console.log('Sucedió un error'))
}

// Callback hell o priamide de DOOM

obtenerPersonaje(1, function(person) {
    console.log(`Hola, yo soy ${person.name}`)

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
})