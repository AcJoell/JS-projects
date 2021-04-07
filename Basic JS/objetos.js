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

// Replicar objeto

