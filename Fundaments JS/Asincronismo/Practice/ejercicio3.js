const API_URL = 'https://rickandmortyapi.com/api/';
const PERSON_URL = 'character/id';
const CODE = { crossDomain: true };

message = person => console.log(`${person.id}. ${person.species}: ${person.name} (${person.status})`)
onError = id => console.log(`Sucedio un error al obtener el personaje ${id}`);

function getObject(id){
    return new Promise((resolve,reject)=>{
        const URL = `${API_URL}${PERSON_URL.replace('id',id)}`
        $
          .get(URL,CODE, data=>resolve(data))
          .fail(()=>reject(id))
    })
}

getObject(1)
  .then(person1 => {
    message(person1);
    return getObject(2);
  })
  .then(person2 => {
    message(person2);
    return getObject(3);
  })
  .then(person3 => {
    message(person3);
    return getObject(4);
  })
  .then(person4 => {
    message(person4);
    return getObject(5);
  })
  .then(person5 => {
    message(person5);
    return getObject(6);
  })
  .then(person6 => {
    message(person6);
  })
  .catch(onError)
