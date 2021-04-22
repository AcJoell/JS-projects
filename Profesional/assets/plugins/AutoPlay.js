function AutoPlay() {};
// recibimos instancia
AutoPlay.prototype.run = function (player) {
    // Si lo tenemos en modo mudo poemos hacer autoPlay
    player.mute();
    player.play();
};

export default AutoPlay;