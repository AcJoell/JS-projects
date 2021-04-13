var joel = {
    nombre: 'Joel',
    apellido: 'Acosta',
    edad: 17,
    peso: 52
}

console.log(`Enero: ${joel.nombre} con ${joel.peso} Kg`);

const INCREMENTO_PESO = 0.650; // gramos
const MES_DEL_ANNIO = 12;
const AUMENTAR_PESO = joel => joel.peso += INCREMENTO_PESO; // (200) num son magin numbers
const DISMINUIR_PESO = joel => joel.peso -= INCREMENTO_PESO;

/* 
#generar un número aleatorio entre dos números & redondeamos el decimal que nos devuelve envolviendo todo en Math.round 
    const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin);
*/

function pesoFinDeAño (persona){
    for(var i=1; i<=MES_DEL_ANNIO; i++){
        var random = Math.random();  // Random entre 0 y 1
        if(random<0.25){ // Aumenta de peso
            AUMENTAR_PESO(joel);
        } else if(random<0.5) { // Disminuye de peso
            DISMINUIR_PESO(joel);
        }
    }
}

pesoFinDeAño(joel);

// .toFixed sirve para limitar los decimales
console.log(`Diciembre: ${joel.nombre} con ${joel.peso.toFixed(2)} Kg`);


// GUARDANDO EL VALOR EN OTRO OBJETO PARA NO ALTERAR OBJETO PRINCIPAL

