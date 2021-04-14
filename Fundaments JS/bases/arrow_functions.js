// ----------- ARROW  -----------  FUNCTIONS  ----------- 

var krito = {
    nombre: 'Krito',
    apellido: 'Solovan',
    edad: 29
}

const MAYORIA_DE_EDAD = 18; // al ser un valor numero fijo le ponemos const

//  -----------   -----------   -----------   ----------- 

// NOTA: TODOS LOS PASOS TIENEN EL MISMO SIGNIFICADO, PERO SE ESCRIBEN DE DISTINTO MODOAL EMPLEAR EL ARROW =>

// PASO 1
const prueba1EsMayorDeEdad = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD; // a 18 se le dice magic number
}

// PASO 2
const prueba2EsMayorDeEdad = (persona) => { 
    return persona.edad >= MAYORIA_DE_EDAD;
}

// PASO 3
// Se pueden quitar los parentesis si solo hay un parametro | Cada vez que este la variable y => es una funcion
const prueba3EsMayorDeEdad = persona => { 
    return persona.edad >= MAYORIA_DE_EDAD;
}

// PASO 4
// Se puede implicitamennte retornar el valor, asi como a continuacion
const prueba4EsMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

// PASO 5
// Desestructurar parametro con {}
const prueba5EsMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;

//  -----------   -----------   -----------   ----------- 

function printIfArrow(persona){
    if(prueba5EsMayorDeEdad(persona)){
        console.log(`${persona.nombre} es MAYOR de edad`); // Krito es mayor de edad
    } else {
        console.log(`${persona.nombre} es MENOR de edad`);
    }
}

function permitirAcceso(persona){
    if(!prueba5EsMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO');
    } else {console.log('ACCESO CONCEDIDO');}
}

printIfArrow(krito);
permitirAcceso(krito)

// ----------   ----------   ----------  RETO  ----------   ----------   ---------- 

var profe = {
    nombre: 'Sacha',
    edad: 19
}

// FORMA 1

const menorEdad = ({edad, nombre}) => edad < MAYORIA_DE_EDAD ?
console.log(`ACCESO DENEGADO _ ${nombre}`) : console.log(`ACCESO CONCEDIDO _ ${nombre}`);

menorEdad(profe);

// FORMA 2

const menorEdad2 = ({edad}) => edad < MAYORIA_DE_EDAD;

function procesoMenorEdad2 ({nombre}){ //  ! (Si la condicion es falsa)
    if(!menorEdad2(nombre)){ // Si NO es menor de edad, se concede el acceso
        console.log(`ACCESO CONCEDIDO _ ${nombre}`); // No, NO es MENOR de edad
    } else { // Si es menor de edad, se niega el acceso
        console.log(`ACCESO DENEGADO _ ${nombre}`); // Si, SI es MENOR de edad
    }
}

procesoMenorEdad2(profe);