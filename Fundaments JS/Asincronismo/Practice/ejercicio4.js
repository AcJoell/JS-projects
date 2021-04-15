const API_URL = 'https://rickandmortyapi.com/api/'
const PLACE_URL = 'location/id'
const CODE = { crossDomain: true }

onError = id => console.log(`El error se ubica en el ID ${id}`)

function getPlace (id) {
    return new Promise ((resolve,reject)=>{
        const URL = `${API_URL}${PLACE_URL.replace('id',id)}`
        $
        .get(URL,CODE,data=>resolve(data))
        .fail(()=>reject(id))
    })
}

var ids = [20,21,22,23,24,25,26,27,28,29]

var clone = ids.map(id=>getPlace(id))

Promise
  .all(clone)
  .then(data=>console.log(data))
  .catch(onError)
