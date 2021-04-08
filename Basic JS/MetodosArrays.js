//Metodos para recorrer el contenido del array

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 300},
    {nombre: "Celular", costo: 9800},
    {nombre: "Laprop", costo: 28000},
    {nombre: "Mesa", costo: 900},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
    {nombre: "Camara", costo: 800},
    {nombre: "Mouse", costo: 600},
    {nombre: "Lampara", costo: 100}
]

// .filter sirve para validar si es verdad o falso, genera nuevo array (retorna todas las coincidencias)

var articleFilter = articulos.filter(function(article){
    return article.costo <= 500;
});

console.log(articleFilter);

// .map sirve para mapear ciertos articulos, genera nuevo array

var nameArticle = articulos.map(function(article){
    return article.nombre;
});

console.log(nameArticle);

// .find, valida si existe o no y genera nuevo array (retorna la 1er coincidencia)

var findArticle = articulos.find(function(article){
    return article.costo <= 500;
});

console.log(findArticle);

// .forEach, no genera nuevo array, solo filtra datos sin modificar

articulos.forEach(function(article){
    console.log(article.nombre);
});

// .some regresa validacion de verdadero o falso, genera nuevo array

var cheapArticle = articulos.some(function(article){
    return article.costo <= 700;
});

console.log(cheapArticle); // true

// .push permite agregar elementos al final del array

var numArray = [1,2,3,4,5];
console.log(numArray);

function newNum(){
    numArray.push(6,7,8,9);
    //Si es string ("M","A","R")
    //console.log(numArray);
}

newNum();
console.log(numArray);

// .shift elimina el primer elemento de un array

var array = [1,2,3,4,5];
console.log(array);

var shiftArray = array.shift();
console.log(array);

// .pop elimina el ultimo elemento de un array

var array2 = [1,2,3,4,5];
console.log(array2);

var popArray = array2.pop();
console.log(array2);

//
var articulos = [1,2,3,4,5];
articulos.splice(2, 1);
//el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
console.log(articulos);