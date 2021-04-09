// ESTRUCTURAS DE CONTROL

var joel = {
    nombre: 'Joel',
    edad: 'Apellido',
    edad: 17,
    ingeniero: true,
    cantante: false,
    dj: false,
    jugador: true
};

function imprimirProfesion(persona){
    //Template String / Interpolar variables
    console.log(`${persona.nombre} es:`);
    
    if(persona.ingeniero) { // === true
        console.log('Ingeniero');
    }
    if(persona.cantante) { // === true
        console.log('Cantante');
    }
    if(persona.dj) { // === true
        console.log('DJ');
    } else { console.log('No es DJ'); }
    if(persona.jugador) { // === true
        console.log('Jugador');
    }
}
imprimirProfesion(joel);
/*
Joel es:
Ingeniero
Jugador
*/

//  -----------   -----------   -----------   ----------- 

// RETO: imprimir si es mayor de edad

var tere = {
    nombre: 'Teresa',
    apellido: 'Soto',
    edad: 25
}

const MAYORIA_DE_EDAD = 18; // al ser un valor numero fijo le ponemos const

//  -----------    -----------    -----------    ----------- 

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD // a 18 se le dice magic number
}

function printIf(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es MAYOR de edad`);
    } else {
        console.log(`${persona.nombre} es MENOR de edad`);
    }
}

printIf(tere); // Teresa es mayor de edad


//--------------------------------------------------

