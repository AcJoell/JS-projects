function AutoPlay() {}
// recibimos instancia
AutoPlay.prototype.run = function (player) {
  // Si lo tenemos en modo mudo poemos hacer autoPlay
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};

export default AutoPlay;
