import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button_play = document.getElementById("button-play");
const button_mute = document.getElementById("button-mute");

// instanciamos un player a partir del prototype
  // pasamos un objeto de config siendo el video el parametro por defecto
const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay()
]});

// Al hacer click en el boton ejecuta el metodo
button_play.onclick = () => player.tooglePlay();
button_mute.onclick = () => player.toggleMute();