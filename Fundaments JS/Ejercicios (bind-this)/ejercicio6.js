window.x = 1;
window.y = 1;

let c1 = {
    x: 15,
    y: 20
}
let c2 = {
    x: 25,
    y: 168
}

function printCoordinates(){
    console.log(`X: ${this.x} \nY: ${this.y}`)
}

let c1_func = printCoordinates.bind(c1);
c1_func; // 5, 10

let c2_func = printCoordinates.bind(c2);
c2_func; // 25, 168