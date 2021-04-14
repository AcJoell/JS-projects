const ALTURA_MAYOR = 180;

function heredaDe(prototipoHijo, prototipoPadre){
    var noop = function (){}
    noop.prototype = prototipoPadre.prototype // Se le asigna el prototipoPadre
    prototipoHijo.prototype = new noop // Al prototipo (hijo) se le dice que su prototype sera un nuevo objeto
    prototipoHijo.prototype.constructor = prototipoHijo // Asignar funcion constructora
}

function Persona(nombre,apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

// FORMA 1
Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

// FORMA 1
Persona.prototype.medirAltura = function (){
    return this.altura>ALTURA_MAYOR;
};

// var paula = new Persona('Paula','Co',178);
// var seba//stian = new Persona('Sebastian','Cruz',179);
// var cesar = new Persona('Cesar','Ortiz',183);

function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
};

var joel = new Persona('Joel','Ac',185);
joel.saludar();

var cesar = new Desarrollador('Cesar','Ortiz',183);
cesar.saludar();
console.log(cesar.medirAltura());

console.log(Persona.prototype); // Interpreta los metodos y sus valores
console.log(Desarrollador.prototype);