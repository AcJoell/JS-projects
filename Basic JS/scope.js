// Scope global
// NO Puedo tener acceso a las variables
//de scope global

var nombre = "Diego";


// Scope Local
// SI Puedo tener acceso a las variables
//de scope global

function fun(){
    var apellido ="De Granda";
    return nombre + " " + apellido;
} 

// ________--------------_________

var miNombre = "Joel";

function fun(){
    var miApellido ="Acosta";
    console.log(`Hola ${miNombre} ${miApellido}`);
} 

fun();
// Success


console.log(miApellido);
//Error