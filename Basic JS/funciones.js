// Hay 2 tipos de funciones

    // Funcion declarativa
    function miFuncion(){
        return 3;
    }

    miFuncion();

    // Funcion expresiva
    var miFuncion = function(a,b){
        return a + b;
    }

    miFuncion();

// EJ:

function saludar2(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludar2("Carlos Andres");

var saludar3 = function(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludar3("Cesar");

function sumar(a,b){
    var answer = a+b;
    var message = console.log(`La suma de ${a} + ${b} = ${answer}`);
    return message;
}

sumar(5,7);