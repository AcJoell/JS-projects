const API_URL = 'https://rickandmortyapi.com/api/';
const PERSON_URL = 'character/id';
const CODE = {crossDomain: true};

const answerMessage = person => console.log(`${person.id}. ${person.species}: ${person.name} (${person.status})`);

function getPerson(id){
    const URL = `${API_URL}${PERSON_URL.replace('id',id)}`;
    $
    .get(URL, CODE, answerMessage);
}

// Todo aparece en desorden, es imposible saber el orden de llagada

getPerson(1);
getPerson(2);
getPerson(3);
getPerson(4);
getPerson(5);
getPerson(6);
getPerson(7);
getPerson(8);
getPerson(9);
getPerson(10);