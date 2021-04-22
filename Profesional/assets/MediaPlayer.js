// RETO: crear unmute en un boton xd

function MediaPlayer(config) {
  // leemos el elemento que represente el media
  this.media = config.el;
  this.plugins = config.plugins || [];
  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  //por cada plugin lo va a ejecutar
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
};

//  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---

MediaPlayer.prototype.play = function(){
  this.media.play();
}

MediaPlayer.prototype.pause = function(){
  this.media.pause();
}

// El metodo se instancia en el prototipo en donde se arranque y pause el video
MediaPlayer.prototype.tooglePlay = function () {
  // paused devuelve un booleano segun el estado del video
  this.media.paused ? this.play() : this.pause();
};

//  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function () {
  this.media.muted ? this.unmute() : this.mute()
}

//  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---

export default MediaPlayer;