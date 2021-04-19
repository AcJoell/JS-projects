//ECMASCRIPT 9  -   -   -    NOVEDADES

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// OPERADOR DE REPOSO: extraer propiedades de un objeto que aun no se ha construido

const obj = {
  name: "Joel",
  age: 17,
  country: "Col",
};

// name: Elemento que se extrae del objeto
// ...all: Se encapsula en el objeto all por medio de este operador
// obj: de donde se esta etrayendo la data

let { name, ...all } = obj;
console.log(name, all); // Joel { age: 17, country: 'Col' }

// Ej: si solo necesitonombre y edad...

let { country, ...all2 } = obj;
console.log(all2); // { name: 'Joel', age: 17 }

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// PROPIEDADES DE PROPAGACION: unir varios elementos de objetos a un nuevo objeto

const obj1 = {
  name: "Joel",
  age: 17,
};

const obj2 = {
  ...obj1,
  lastName: "Ac",
  country: "Col",
};

console.log(obj2); // { name: 'Joel', age: 17, lastName: 'Ac', country: 'Col' }

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// PROMISE .FINALLY saber cuando ha terminado el llamado para poder llamar una funcion

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Houston, hemos llegado"), 2500)
      : reject(new Error("Tenemos un error, Houston"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => "Ha finalizado la promesa");

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// MEJORAS SOBRE REGEX

// año: ( [ del 0 al 9  ] { long de 4 digitos } )
// mes: ( [ del 0 al 9  ] { long de 2 digitos } )
// dia: ( [ del 0 al 9  ] { long de 2 digitos } )

const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regex.exec("2020-04-18");
const year = match[1],
  month = match[2],
  day = match[3];

console.log(` AÑO: ${year} | MES: ${month} | DIA: ${day}`);
// AÑO: 2020 | MES: 04 | DIA: 18
