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

async function obtenerPersonajes(){
    
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id) )
    
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }
    catch (id){
        onError
    }

}

obtenerPersonajes();