// ----   ----   ---- Function ----   ----   ----

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 8);
console.log(sum); // 12

// ---- Return Function ----

// esto representa a una funcion = " : () => "

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addNumber = createAdder(5);
const fivePlus6 = addNumber(6);

// "name?: string" permite que el argumento sea undefined o string
// name:string = 'smith' valor en caso de que no reciba uno (valor por omisión)

function fullName(firstName: string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}`    
}

const stiven = fullName('Stiven');
// sin valor por omisión = Stiven undefined
// con ? = Stiven Smith
console.log(stiven)