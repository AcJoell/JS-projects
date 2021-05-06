### SCOPE
Representa el tiempo de vida en el que esta existe, sea una variable o argumento a una funcion.

> LET y CONST nos ayudan a evitar errores comunes

#
```js
// Consola de navegador o editor de texto de programacion
var message = "Hola, cracks, estoy en el scope global";
```
#
---
### SCOPE DE FUNCIONES 
El argumento que le pasemos al invocar la funcion va a crear un nuevo mensaje distinto al del scope global.

```js
// Sobrescribiendo variable $
var $ = function(message){
    console.log(`Say: ${message}`);
}
```

> Aunq declaremos la variable VAR por dentro, JS va a declararla afuera del for.

#
---
### FUNCTION SCOPE
Podemos utilizar una funcion dentro para evitar este error de var.
```js
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
```

#
---
### BLOCK SCOPE

Cambiar variable VAR a LET opera sobre el block scope (scope Local)

```js

function printNumber() {
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
    console.log(i);
    }, 500);
}
}
printNumber(); // 10(10)
```
#
---
### MODULE SCOPE
Hace que la vida de la variable este limitada unicamente al archivo donde esta definido