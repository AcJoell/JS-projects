const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Well done") : reject("Whooops");
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
  .finally(() => console.log("Ha finalizado la promesa..."));

// true: Well done / Ha finalizado la promesa...
// false: Whooops / Ha finalizado la promesa...

// ---   ---   ---   ---   ---   ---   ---   ---   ---
//    ---   ---   ---   ---   ---   ---   ---   ---
// ---   ---   ---   ---   ---   ---   ---   ---   ---

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Todo se manejo de manera correcta");
      }, 2000);
    } else {
      const error = new Error("Whooops");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
  .finally(() => console.log("Operacion terminada"));

// true: Todo se manejo de manera correcta / Ha finalizado la promesa...
// false: Whooops / code...code/ Operacion terminada

// ---   ---   ---   ---   ---   ---   ---   ---   ---
//    ---   ---   ---   ---   ---   ---   ---   ---
// ---   ---   ---   ---   ---   ---   ---   ---   ---

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log("Array of results", response))
  .catch((bad => console.error(bad)));
