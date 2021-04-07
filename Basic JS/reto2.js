

var win = "You win!";
var lose = "You lose!";
var tie = "You tie!";

console.log("1) Piedra | 2) Papel | 3) Tijera");

function jugar(user,pc){
    switch (true){
        case (user == 1 && pc == 3)||(user == 2 && pc == 1)||(user == 3 && pc == 2):
            console.log(win);
            break;
        case user == pc :
            console.log(tie);
            break;
        default:
            console.log(lose);
            break;
    }
}

jugar(3,3);