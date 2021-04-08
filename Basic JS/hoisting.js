// EMASCRIPT <=5 Hositing solo sirve con function y var
// EMASCRIPT >5 Hositing sirve con function, var, let y const

//----------------------
console.log(miNombre);

var miNombre;
minombre = "Joel";
// Undefined
//----------------------

//----------------------
var miNombre = undefined;
console.log(miNombre + " I´m here");
minombre = "Joel";
// Undefined I´m here
//----------------------

//----------------------
var name = "Stiven";
hey();
function hey(){
    console.log("Hola "+name);
}
// Hola Stiven
//----------------------

//----------------------
hey2();
function hey2(){
    console.log("Hola "+name2);
}
var name2 = "Stiven";
// Hola undefined
//----------------------

