var joel = {
    nombre: 'Joel',
    apellido: 'Acosta',
    edad: 17
};

function printNameMayus(persona){
    console.log(persona.nombre.toUpperCase());
}

function printNameMayus2({ nombre }){
    console.log(nombre.toUpperCase());
}

printNameMayus(joel);
printNameMayus2(joel);
printNameMayus2({nombre:'Pepito'}); // Definir nuevo objeto aqui mismo
//printNameMayus2({}); Error

function printNameMayus3(persona){
    // var nombre = persona.nombre
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

printNameMayus3(joel);

function cumpleanos(persona){
    persona.edad++;
}

cumpleanos(joel);
console.log(joel.edad);

// Devolver un nuevo objeto (Herencia basica)
// no se altera el objeto principal

function cumpleanos(persona){
    return {
        ...persona,
           edad: persona.edad + 1
    };
};
cumpleanos(joel); // Su edad sube pero no altera la variable global
console.log(joel); // No ha cambiado nada

var joelMasViejo = cumpleanos(joel); // Se guarda en un var el retorno de la funcion
console.log(joelMasViejo); // La edad cambio, es como una clase hija