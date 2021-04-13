var joel = {
    nombre: 'Joel',
    apellido: 'Acosta',
    edad: 17,
    peso: 52
}

console.log(`Enero: ${joel.nombre} con ${joel.peso} Kg`);

const INCREMENTO_PESO = 0.450; // gramos
const MES_DEL_ANNIO = 12;
const META = joel.peso + 3;

const AUMENTAR_PESO = joel => joel.peso += INCREMENTO_PESO; // (200) num son magin numbers
const DISMINUIR_PESO = joel => joel.peso -= INCREMENTO_PESO;
const comiendo = () => Math.random() < 0.4;
const ejercicios = () => Math.random() < 0.2;

var dias = 0;
while(joel.peso < META) {
    //debugger, para verificar donde tenemos alguna falla (en el navegador)
    if(comiendo()){
        AUMENTAR_PESO(joel);
    } else if(ejercicios()){
        DISMINUIR_PESO(joel)
    }
    dias ++;
}

// .toFixed sirve para limitar los decimales
console.log(`Pasaron: ${dias} dias, hasa que Joel aumento ${joel.peso.toFixed(2)} Kg`);


// GUARDANDO EL VALOR EN OTRO OBJETO PARA NO ALTERAR OBJETO PRINCIPAL

