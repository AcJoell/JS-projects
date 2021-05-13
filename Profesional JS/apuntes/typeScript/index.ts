console.log("Hello, TypeScript");

// ----   ----   ---- Boolean ----   ----   ----

let muted: boolean = true;
muted = false;
// muted = "Callado"; error, porq solo puede ser boolean

// ----   ----   ---- Number ----   ----   ----

let numerador: number = 42;
let denominador: number = 46;
let resultado = numerador / denominador;

// ----   ----   ---- String ----   ----   ----

let nombre: string = "Joel";
let saludo = `Me llamo ${nombre}`;

// ----   ----   ---- Array ----   ----   ----

// arreglo unicamente de String
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push(9000) no puede ser diferente a un string

// arreglo de string y number
let peopleAndNumber: Array< string | number > = [];
peopleAndNumber.push('Ricardo')
peopleAndNumber.push(1234)

// ----   ----   ---- Enum ----   ----   ----

// Algo que esta ya predefinido abstractamente

// Lista de valores
// NOTA: Si no le damos algun valor, entonces enum unicamente los va a listar

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Amarillo

// Sin valor: Mi color favorito es 3
// Con valor: Mi color favorito es Amarillo
console.log(`Mi color favorito es ${colorFavorito}`)

// ----   ----   ---- Any ----   ----   ----

// puede ser lo que queramos

let comodin:any  = 'Joker';
comodin = {type: 'WildCard'}

// ----   ----   ---- Object ----   ----   ----

let someObject:object = {type: 'ball'}