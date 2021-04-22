/*

SCOPE:

Representa el tiempo devidaen el que esta existe, 
sea una variable o argumento a una funcion

let y const nos ayudan a evitar errores comunes

var message = "Hola, cracks, estoy en el scope global";

SCOPE DE FUNCIONES 

el argumento que le pasemos al invocar la funcion
va a crear un nuevo mensaje distinto al del scope global

var $ = function(message){
    console.log(`Say: ${message}`);
}

Aunq declaremos la variable VAR por dentro
JS va a declararla afuera del for

FUNCTION SCOPE

utilizamos una funcion dentro para evitar 
este error de var

function printNumber(){
    for(var i = 0; i<10;i++){
        function eventuallyPrint(n){
            setTimeout(function(){
                console.log(n);
            },500)
        }
        eventuallyPrint(i)
    }
}
printNumber(); // 10(10)

o cambiamos la variable a LET para que
solo se ejecute en el block scope

BLOCK SCOPE
let opera sobre el block scope (scope Local)

function printNumber() {
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
    console.log(i);
    }, 500);
}
}
printNumber(); // 10(10)

MODULE SCOPE
hace que la vida de la variable
va a estar limitado al archivo donde esta definido


*/