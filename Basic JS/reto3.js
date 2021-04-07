// OBJECTS: Y FUNCION CONSTRUCTORA

var auto = {
    marca: "Default",
    modelo: "Default",
    annio: 2020
};

function constructor(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var long = parseInt(prompt("Digite la longitud del arreglo"));

var coleccion = [];

for (var i=0;i<long;i++){
    var marca = input("Digite la marca");
    var modelo = input("Digite el modelo");
    var annio = parseInt(input("Digite el año"));
    coleccion.push(new constructor(marca,modelo,annio));
}

for (var x=0;x<coleccion.length;x++){
    console.log(coleccion[x]);
}