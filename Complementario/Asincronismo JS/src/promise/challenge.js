const fetchData = require("../utils/fetchData");

const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => { // se llama
    console.log(data.info.count); 
    return fetchData(`${API}${data.results[0].id}`); // nueva peticion 
  })
  .then((data) => { // obtiene la info del return 
    console.log(data.name); // presentarla
    return fetchData(data.origin.url); // retorna nueva peticion
  })
  .then((data) => {
    console.log(data.dimension); // obtiene la info del return
  })
  .catch((err) => console.error(err)); // x si sale error
