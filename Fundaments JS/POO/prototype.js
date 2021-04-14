// Funcion del prototipo y retorna el objeto que tenga
function persona(nombre,apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    // this.edad = 20 (el valor para todos serian de 20)
}

const ALTURA_MAYOR = 180;

// FORMA 1
persona.prototype.saludar1 = function (){
    console.log(`Hola, me llamo ${this.nombre}`);
};
// FORMA 2
persona.prototype.saludar2 = () => {
    console.log(`Hola, me llamo ${this.nombre}`);
};

// FORMA 1
persona.prototype.medirAltura = function (){
    return this.altura>ALTURA_MAYOR;
};

var joel = new persona('Joel','Ac',185); // Se crea un nuevo objeto con el prototipo de persona
var paula = new persona('Paula','Co',178);
var sebastian = new persona('Sebastian','Cruz',179);
var cesar = new persona('Cesar','Ortiz',183);

persona();

joel.saludar1();
sebastian.saludar1();

// Con arrow functions no da el resultado
joel.saludar2();
sebastian.saludar2();

console.log(paula.medirAltura()); // false
console.log(cesar.medirAltura()); // true

