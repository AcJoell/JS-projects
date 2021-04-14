var word = prompt('Digita una palabra entre: \nfutbol\ncomputador\ncocina\nblog\nplatzi\naprendizaje');

console.log(word);

switch(word){
    case 'fútbol':
    case 'futbol':
        console.log('El futbol es un deporte que requiere de mucha exigencia');
        break;
    case 'computador':
        console.log('Para poder programar solo es necesario tener un computador');
        break;
    case 'cocina':
        console.log('Yo me la paso mucho tiempo en la cocina');
        break;
    case 'blog':
        console.log('Los blogs tienen informacion muy interesante');
        break;
    case 'platzi':
        console.log('Platzi tiene las mejores escuelas en las que podemos aprender');
        break;
    case 'aprendizaje':
        console.log('Nunca pares de aprender');
        break;
    default:
        console.log('No encontramos la palabra registrada');
}