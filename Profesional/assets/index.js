import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("video");
const button = document.querySelector("button");

// instanciamos un player a partir del prototype
  // pasamos un objeto de config siendo el video el parametro por defecto
const player = new MediaPlayer({ el: video });

// Al hacer click en el boton ejecuta el metodo
button.onclick = () => player.tooglePlay();

export default MediaPlayer;