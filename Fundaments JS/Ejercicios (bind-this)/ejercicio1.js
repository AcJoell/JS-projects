const marca = "MARCA POR FUERA";
const marca2 = "MARCA 2 POR FUERA";
const modelo = "MODELO POR FUERA";

class auto {
  constructor() {
    this.marca = "Renault";
    this.marca2 = "Ferrari";
    this.modelo = 2017;
    this.consultar();
  }
  consultar = () => {
    this.marca3 = "marca31";
    console.log(
      `Marca: ${this.marca} \nMarca2: ${this.marca2} \nMarca3: ${this.marca3} \nModelo: ${this.modelo}`
    );
    this.consultando();
  };
  consultando = () => {
    this.marca3 = "marca32";
    console.log(
      `Marca: ${this.marca} \nMarca2: ${this.marca2} \nMarca3: ${this.marca3} \nModelo: ${this.modelo}`
    );
  };
}

function ejecutar() {
  window.autoJoel = new auto();
}