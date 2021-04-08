var miObjeto1 = {
    camisa: 'Polo',
    pantalon: 'Arturo C',
    tennis: 'Adidas'
}

var miObjeto2 = {
    camisa: 'Seven&Seven',
    pantalon: 'Koaj',
    tennis: 'Nike'
}

// -----------------------------------

function imprimir1({camisa, pantalon}){
    console.log(`Datos: ${camisa} y ${pantalon}`);
};

imprimir1(miObjeto1);
imprimir1(miObjeto2);
imprimir1({camisa: 'Platzi',pantalon:'Koaj'});

//---------------------------------------

function imprimir2(outFit){
    var {camisa} = outFit;
    var {pantalon} = outFit;
    console.log(`Camisa: ${camisa} | Pantalon: ${pantalon}`);
};

imprimir2(miObjeto1);

//-----------------------------------------