var cont = 0;

const LLUEVE = () => Math.random() < 0.2;

do {    
    cont++;
} while (!LLUEVE());

var frecuencia = cont==1 ? "dia" : "dias";
console.log(`Llovió, ${cont} ${frecuencia} despues`);