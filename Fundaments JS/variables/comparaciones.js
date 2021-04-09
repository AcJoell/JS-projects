// ------------------------

var x = 4, y = '4';
x == y //true
x === y //false

// ------------------------

var joel = {
    nombre: 'Joel'
};
// Objeto literal
var paula = {
    nombre: 'Joel'
};

joel == paula // false
joel === paula // false

// ------------------------

var paula = joel;

joel == paula // true
joel === paula // true

// -------------------------

// Objeto literal

// Diferente objeto
// Diferente posicion en memoria RAM

var paula = {
    ...joel
};

joel == paula // false
joel === paula 
paula.nombre = 'Jaime'
joel; // Joel
paula; // Jaime

// --------------------------

var stiven = {
    nombre: 'Stiven'
}

var aleja = stiven; 
// Es el mismo objeto
//La misma posicion en memoria RAM

stiven; // Stiven 
aleja; // Stiven
aleja.nombre = 'Nando';
stiven; // Nando
aleja; // Nando