const API_URL = 'https://rickandmortyapi.com/api/';
const PLANET_URL = 'location/id';
const CODE = { crossDomain: true };

const answerMessage = planet => console.log(`${planet.id}: ${planet.type}\nPLANET: ${planet.name}\nDIMENSION: ${planet.dimension}`);
const onError = ({id}) => `El error se encuentra ubicado en el id ${id}`;

function getObject (id, callback){
    const URL = `${API_URL}${PLANET_URL.replace('id',id)}`;
    $
      .get(URL, CODE, callback)
      .fail(onError)
}

getObject(1, function(planet){
    answerMessage(planet);

    getObject(2, function(planet){
        answerMessage(planet);
        
        getObject(3, function(planet){
            answerMessage(planet);
            
            getObject(4, function(planet){
                answerMessage(planet);
                
                getObject(5, function(planet){
                    answerMessage(planet);
                    
                    getObject(6, function(planet){
                        answerMessage(planet);
                        
                    })
                })
            })
        })
    })
})