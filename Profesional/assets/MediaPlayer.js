function MediaPlayer(config) {
    // leemos el elemento que represente el media
    this.media = config.el;
  }
  
  // -----------------------------------------------
  
  // Ejecucion del boton para play y pause
  
  // El metodo se instancia en el prototipo en donde se pause el video
  MediaPlayer.prototype.pause = function () {
    this.media.pause();
  };
  
  // El metodo se instancia en el prototipo en donde se arranque el video
  MediaPlayer.prototype.play = function () {
    // leemos el media
    this.media.play();
  };
  
  // El metodo se instancia en el prototipo en donde se arranque y pause el video
  MediaPlayer.prototype.tooglePlay = function () {
      // paused devuelve un booleano que nos dice si nuestro viedo esta pausado o no
      player.media.paused ? player.play() : player.pause();  
  }