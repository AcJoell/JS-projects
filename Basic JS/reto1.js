console.log("1) Piedra | 2) Papel | 3) Tijera");

function jugar(user,pc){
    if(user == 1 && pc == 3){console.log("You win!");}
    else if(user == 2 && pc == 1){console.log("You win!");}
    else if(user == 3 && pc == 2){console.log("You win!");}
    else if(user == pc){console.log("Tie!");}
    else {{console.log("You lose!");}}
}

jugar(2,1);