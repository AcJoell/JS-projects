var nombre = 'Joel', edad = 17;

function printAge(n,e){
    console.log(`${n} tiene ${e} años`);
};

printAge(nombre,edad);
printAge('Carlos',16);
printAge('Mario',17);

// JS es un lenguaje interpretado, lee el programa y lo ejecuta
// aunque llamemos una variable y otra no

// Alcance de las funciones

function printNameMayus(n){
    // nombre = nombre.toUpperCase(); Alterar variable global
    n = nombre.toUpperCase();
    console.log(n);
}

/* Va a existir una nueva variable con el mismo nombre
en el alcance local con un valor distinto
si nos referimos dentro de esta clase a nombre
nos estaramos refiriendo a la variable local 
sin alterar la variable global */
function printNameMayus2(nombre){ 
    nombre = nombre.toUpperCase(); // No se altera var global
    console.log(nombre);
}

printNameMayus2(nombre);