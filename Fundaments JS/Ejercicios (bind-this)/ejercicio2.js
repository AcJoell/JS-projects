/* Calcular el total que una persona debe pagar en un Almacén de llantas teniendo en cuenta 
que el valor de las llantas depende del número de llantas que compre:
 el precio de cada llanta es de $200.000, si se compran menos de 5 llantas, y
 de $180.000 se compran 5 o más. */

class compra {
  constructor() {
    console.log(this);
    this.consultarCompra();
  }

  consultarCompra = () => {
    this.cant = Number.parseInt(prompt("Digite cuantas llantas compro"));
    this.determinarValor();
  };

  determinarValor = () => {
    this.cant <= 5 ? (this.precioUnit = 200000) : (this.precioUnit = 180000);
    this.precioTotal = this.precioUnit * this.cant;
    //console.log(`PrecioTtl: ${this.precioTotal} = PrecioUnit: ${this.precioUnit} * Cantidad: ${this.cant}`)
    this.ejecutar();
  };

  ejecutar = () =>
    console.log(
      `Por la compra de ${this.cant} ud debe pagar ${this.precioTotal}`
    );
}

function empezar() {
  console.log(this);
  window.ejemplo = new compra();
}