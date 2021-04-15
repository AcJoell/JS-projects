const API_URL = 'https://rickandmortyapi.com/api/';
const PERSON_URL = 'character/id';
const CODE = { crossDomain: true}
onError = id => console.log(`El error se encuentra ubicado en el ID ${id}`);

function getPerson(id){
    return new Promise((resolve,reject)=>{
        const URL = `${API_URL}${PERSON_URL.replace('id',id)}`
        $
        .get(URL,CODE,data=>resolve(data))
        .fail(()=>reject(id))
    })
}

async function getPersons(){
    var ids = [30,31,32,33,34,35,36,37,38,39]
    var clone = ids.map(id=>getPerson(id))
    try{
        var persons = await Promise.all(clone)
        console.log(persons)
    }
    catch(id){
        onError
    }
}

getPersons()

