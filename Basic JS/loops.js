var array = ["Maria","Sergio","Juan","Pablo","Camilo"];

//--------------------------
// Loops: FOR Version con funcion
function saludar(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var i=0;i<array.length;i++){
    saludar(array[i]);
}
//--------------------------

console.log();

//--------------------------
// Version sin funcion
for(var i=0;i<array.length;i++){
    console.log(`${i}) Hola, `+array[i]);
}
//--------------------------

console.log();

//--------------------------
// Version for of.. 
//(No hay necesidad de usar .length) se recorre auto.
for(var z of array){
    saludar(z);
}
//--------------------------

console.log("________________________________\n");

var array2 = ["Perro","Gato","Loro","Cocodrilo","Iguana"];

//--------------------------
// Loops: WHILE

function indentificar(animal){
    console.log(`Es un ${animal}`);
}

while(array2.length>0){
    console.log(array2);
    var metodo = array2.shift();
    indentificar(metodo);
}
//--------------------------