fullname = "Patricio Estrella";

const person = {
  brother: {
    fullname: 'Gari el caracol'
  },
  fullname: "Bob Cuadrado",
  saludar: function () {
    return this.fullname;
  }
};

console.log(person.saludar()); // Bob cuadrado

var imprimir = person.saludar;
console.log(imprimir()); // Patricio estrella

var imprimirHermano = person.saludar.bind(person.brother)
console.log(imprimirHermano()); // Gari el caracol