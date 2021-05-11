### TYPESCRIPT:

Es un **lenguaje de programación** de código abierto desarrollado y mantenido por Microsoft.

Es un **superset** de JavaScript, añade **tipos** a nuestras variables y objetos basados en clases. Ayudando asi a la detección de errores de forma temprana y mejorando el autocompletado.

En TypeScript, admitimos los mismos tipos de datos que esperaria en JavaScript, con un tipo de **enumeración** conveniente para ayudar a las cosas.

#

---

#

### ¿Qué es  Superset?

Es un lenguaje escrito **encima** de otro lenguaje, es decir, compila a otro lenguaje. En el caso de **TypeScipt** es un lenguaje que compila a **JavaScript**, pero que incluye muchas facilidades y ventajas.

#

---

#

### Parcel

Para lograr trabajar con TypeScript necesitamos instalar un diferente tipo de servidor; **live-server** no es capaz de **transpirar** código TypeScript a JavaScript. Para eso, vamos a **utilizar** una herramienta que se llama **Parcel**.

Básicamente, los navegadores **no entienden TypeScript** asi que lo vamos a **transpilar** a JavaScript usando Parcel


#

### 1. Instalando Parcel
-D hace referencia al desarrollo
`npm install -D parcel-bundler`

### 2. Removiendo live-server
`npm rm live-server`

### 3. Corremos el servidor 
`npm start`

### 4. Si te sale error al cambiarte de ubicacion
Cierras el servidor y luego borramos:
`rm -rf .cache dist`
Luego corremos el servidor nuevamente
`npm start`
__Listo__