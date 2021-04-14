const ALTURA_MAYOR = 180;

class Persona {
    constructor(nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    medirAltura(){
        return this.altura>ALTURA_MAYOR;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
    }
}

var joel = new Persona('Joel','Ac',185);
var paula = new Desarrollador('Paula','Co',178);
var cesar = new Desarrollador('Cesar','Ortiz',183);

joel.saludar(); // Hola, me llamo Joel Ac
console.log(joel.medirAltura()); // true
paula.saludar(); // Hola, me llamo Paula Co y soy desarrollador/a
console.log(cesar.medirAltura()); // true