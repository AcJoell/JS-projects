//ECMASCRIPT 8  -   -   -    NOVEDADES

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// MATRICES

const data = {
  frontend: "Joel",
  backend: "Cesar",
  desgin: "Carol",
};

const entries = Object.entries(data);
console.log(entries); // ...
console.log(entries.length); // 3

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// OBJECT VALUES: Convierte valores de un objeto a un arreglo

const data2 = {
  frontend: "Joel",
  backend: "Cesar",
  desgin: "Carol",
};

const values = Object.values(data2);
console.log(data2); // { frontend: 'Joel', backend: 'Cesar', desgin: 'Carol' }

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// PADDING

// (num: long final, add word)
const texto = "What´s up?"; //Se suma la long actual mas los nuevos caracteres
console.log(texto.padStart(20, "Ey guys!. ")); // 10 long
console.log(texto.padEnd(18, " Come on")); // 8 long

// -    -    -    -    -    -    -    -    -    -
// -    -    -    -    -    -    -    -    -    -

// ASYNC - AWAIT

const helloGuys = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello guys, I´m here"), 2500)
      : reject(new Error("Hay un error en tu codigo"));
  });
};

// propuesta 1

const helloAsync = async () => {
  const hello = await helloGuys();
  //const hello2 = await ...()
  console.log(hello);
};
helloAsync(); // Hello guys, I´m here

// propuesta 2

const helloAsync2 = async () => {
  try {
    const hello = await helloGuys();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
helloAsync2(); // Hello guys, I´m here
