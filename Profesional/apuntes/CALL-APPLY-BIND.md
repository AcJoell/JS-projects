> Sugerencia: Ver primero el archivo THIS.md para comprender mejor este.

> NOTA de esta clase: Todas las funciones tienen call, apply y bind ya empaquetadas y listas para usar

#

---

#

### CÓDIGO BASE:

```js
function saludar() {
  console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
}

function caminar(metros, direccion) {
  console.log(`${this.nombre} camina ${metros} metros hacia ${direccion}.`);
}

const camilo = {
  nombre: "Camilo",
  apellido: "Rodriguez",
};

const daniel = {
  nombre: "Daniel",
  apellido: "Martinez",
};
```
---

#

### CALL:

Permite que una función/método, ser asignada y llamada desde otro lugar

#

#### EJEMPLOS

El primer argumento que recibimos es el this que queremos establecer (camilo)

```js
saludar.call(camilo);
```

Cuando tenemos mas argumentos, los pasamos despues de establecer el this

```js
caminar.call(camilo, 400, "Norte");
```

#

---

#

### APLY:

Invoca una determinada función asignando explícitamente el objeto this y un array como parámetros ([argum1, argum2]) para dicha función.

#

#### EJEMPLOS

En lugar de pasar 'metros' y 'direccion' con comas, se pasa como parte de un arreglo y dentro de ese arreglo vamos a poner todos los argumentos a excepcion al establecer el this

```js
caminar.apply(camilo, [800, "Noreste"]);
```

#

---

> CONCLUSIÓN: Call => coma | Apply => arreglo

---

#

### BIND:

Crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado, con una secuencia de argumentos dados precediendo a este.

#

#### EJEMPLOS

Construye una nueva funcion con el this integrado ahi

Creamos una nueva funcion, porque si la llamamos: saludar.bind(daniel);
no nos daria resultado, por ende la metemos dentro de una funcion y la llamamos

```js
const danielSaluda = saludar.bind(daniel);
danielSaluda(daniel);
```

Con varios argumentos...

Forma 1

```js
      const danielCamina1 = caminar.bind(daniel);
      danielCamina1(1000, "este");
```

Forma 2

```js
      const danielCamina2 = caminar.bind(daniel, 2000, "sur");
      danielCamina2();
```

Forma 3 - argumentos parciales (podemos poner argumentos tanto cunado la instanciamos o cuando la llamamos)

```js
      const danielCamina3 = caminar.bind(daniel, 500);
      danielCamina3("oeste");
```