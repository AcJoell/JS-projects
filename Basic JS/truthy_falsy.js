Boolean(); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean(false); // false
Boolean(0); // false

Boolean(1); // true
Boolean(" "); // true, aunque sea con un espacio
Boolean([]); // true, por medio de un array
Boolean({}); // true, por medio de un objeto
Boolean(function(){}); // true, cualquier funcion es verdadera
Boolean(true); // true
