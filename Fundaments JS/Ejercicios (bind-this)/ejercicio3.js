// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

var jaime = {
  nombre: "Jaime",
  apellido: "Garzon",
  saludar: function () {
    return console.log(`Hola, ${this.nombre} ${this.apellido}`);
  },
};

jaime.saludar(); // HOLA, JAIME GARZON

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

var saludando = jaime.saludar;

saludando(); // HOLA, UNDEFINED UNDEFINED

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

var martin = {
  nombre: "Martin",
  apellido: "Bower",
};

var trySaludar = jaime.saludar.bind(martin);
trySaludar(); // HOLA, MARTIN BOWER

// Dentro del parametro le hacemos referencia al objeto sobre el cual queremos que salude

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

console.log(saludando.call(martin));