// Coerciones implicitas
// Es cuando el lenguaje nos ayuda a cambiar el tipo de valor.

console.log("\nCOERCION IMPLICITA\n");

// El mas sirve para concatenaer <> valores

var a = 4 + "7";
console.log("A es "+ a +" = "+ typeof a);

var b = 4 * "7";
console.log("B es "+ b +" = "+ typeof b);

// Coerciones explicitas
// Es cuando obligamos a que cambie el tipo de valor
console.log("\nCOERCION EXPLICITA\n");

var c = 20;
var d = c + "";
console.log("D es "+ d +" = "+ typeof d);

var e = String(c);
console.log("E es "+ e +" = "+ typeof e);

var f = Number(c);
console.log("F es "+ f +" = "+ typeof f);