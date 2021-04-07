var auto = {
    marca: "BMW",
    modelo: "Coupe 6",
    annio: 2021,
    asientos: 4,
    // Crear metodo dentro de un objeto
    detalle: function(){
        console.log(`Auto: ${this.modelo} | ${this.annio}`);
    }
};

// Llamar todo el objeto
console.log(auto);

// Llamar una parte del objeto
console.log("Marca: "+auto.marca);

// Llamar metodo de un objeto
console.log(auto.detalle());

// FUNCION CONSTRUCTORA

// Utilizar funcion constructora

function fillAuto(marca,modelo,annio,asientos){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.asientos = asientos;
}

var newAuto = new  fillAuto("Tesla","Model 3",2021,5);
var newAuto2 = new fillAuto("Tesla","Model x",2019,6);
var newAuto3 = new fillAuto("Renault","Logan",2021,6);