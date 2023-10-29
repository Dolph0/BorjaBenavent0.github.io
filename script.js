const numero = document.getElementById("numero");
const llamada = document.getElementById("llamada");
let visible = false;
const arrow = document.getElementById("arrow");
const videoBackground = document.getElementById("videoBackground");
const llamar = document.getElementById("llamar");
const iconoLlamada = document.getElementById("iconoLlamada");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const videoSocial = document.getElementById("videoSocial");


// Esta funcion deberia funcionar para ambos reproductores, no lo hace, por ahora tengo esta para videoSpcial
// y la siguiente para la landing, volver aqui y hacerlo crema despues de lanzar
// Función para cambiar el video
function changeVideo(videosArray, videoElement, currentIndex, isSocial) {
    const videoSource = isSocial ? socialVideos : videosArray;
    currentIndex = (currentIndex + 1) % videoSource.length;
    videoElement.src = videoSource[currentIndex];
    return currentIndex;
  }
  
  // Identificar si estamos en la página principal o secundaria
  const isMainPage = document.getElementById("arrow") !== null;
  
  // Asignar eventos a las flechas izquierda y derecha
  if (isMainPage) {
    arrow.addEventListener("click", function() {
      currentVideoIndex = changeVideo(videos, videoSocial, currentVideoIndex, false);
    });
  } else {
    leftArrow.addEventListener("click", function() {
      currentVideoIndex = changeVideo(socialVideos, videoSocial, currentVideoIndex, true);
    });
  
    rightArrow.addEventListener("click", function() {
      currentVideoIndex = changeVideo(socialVideos, videoSocial, currentVideoIndex, true);
    });
  }
  
  // Aquí defines tus arreglos de videos
  const videos = ["vid/CAAMWEB.mp4", "vid/GCWEB.mp4", "vid/LOOKINWEB.mov"];
  const socialVideos = ["vid/ReelWEb.mov", "vid/ReelWeb1.mov", "vid/ReelWeb2.mov"];
  
  let currentVideoIndex = 1; // Inicializar con la fuente "vid/GCWEB.MP4"
  
// aqui esta comentado porque ya estan definidos arriba, solo descomentar en caso de usar la funcion de mainpage y no la
// otra
// const videos = ["vid/CAAMWEB.mp4", "vid/GCWEB.mp4", "vid/LOOKINWEB.mov"];
// let currentVideoIndex = 1; // Inicializar con la fuente "vid/GCWEB.MP4"

arrow.addEventListener("click", function() {
    // momentaneo porque asi funciona, idealmente eliminar esto y hacer que la de arriba funcione correctamente para todo
    // volver a esto mas adelante, despues de lanzar
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoBackground.src = videos[currentVideoIndex];
});





function esTelefonoMovil() {
    return window.matchMedia("(max-width: 767px)").matches;
  }
  
  if (esTelefonoMovil()) {
        numero.style.display = "none";

  } else {
    llamar.style.display = "none";
    iconoLlamada.style.display = "block";

    llamada.addEventListener("click", function() {
        visible = !visible;
    
        if (visible) {
            numero.style.display = "block";
        } else {
            numero.style.display = "none";
        }
    });
  }

//   const socialVideos = ["vid/ReelWEb.mov", "vid/ReelWeb1.mov", "vid/ReelWeb2.mov"];


