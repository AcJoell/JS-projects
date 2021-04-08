var edad = 27;
edad++; // incremento

var peso = 50;
var sandwich = 1;
var jugarFutbol = 3;

peso -= 2; // decremento
peso += sandwich;
peso -= jugarFutbol;

var winePrice = 200.3;

var total = winePrice * 3;

// Nos ayuda en caso de que no sepamos cuantos decimales tenemos
var total = Math.round(winePrice * 100 * 3 ) / 100; 

// Redondea a dos decimales en STRING
var totalStr = total.toFixed(2);

// Parseamos STRING a numero decimal
var total2 = parseFloat(totalStr);

var pizza = 8;
var persona = 2;
var cantPorcionesXpersona = pizza / persona;