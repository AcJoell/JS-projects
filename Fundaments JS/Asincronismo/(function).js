const ALTURA_MAYOR = 180;

class Persona {
    constructor(nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        var {nombre,apellido} = this
        //var nombre = this.nombre
        //var apellido = this.apellido
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if(fn){
            fn(nombre, apellido)
        }
    }
    medirAltura(){
        return this.altura>ALTURA_MAYOR;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        var {nombre,apellido} = this
        //var nombre = this.nombre
        //var apellido = this.apellido
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mirá, eres desarrollador/a`);
    }
}


var joel = new Persona('Joel','Ac',185);
var paula = new Desarrollador('Paula','Co',178);
var cesar = new Desarrollador('Cesar','Ortiz',183);

joel.saludar(); // Hola, me llamo Joel Ac
paula.saludar(); // Hola, me llamo Paula Co y soy desarrollador/a

joel.saludar(responderSaludo); // Buen dia Joel Ac
paula.saludar(responderSaludo); // Buen dia Paula Co | Ah mirá, eres desarrollador/a

