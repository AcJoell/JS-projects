// ----   ----   ---- Interface ----   ----   ----

// Declaramos dentro su propiedad y tipo

enum Color {
  rojo = "Rojo",
  amar = "Amarillo",
  azul = "Azul",
}

interface Rectangulo {
  ancho: number;
  alto: number;
  // opcional
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.azul,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString()); // [Object Object]

rect.toString = function () {
  return this.color
    ? `Un rectangulo ${this.color}`
    : `Un rectangulo muy bonito`;
};

console.log(rect.toString());
