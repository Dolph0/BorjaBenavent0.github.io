const numero = document.getElementById("numero");
const llamada = document.getElementById("llamada");
let visible = false; // Declarar la variable visible
const arrow = document.getElementById("arrow");
const videoBackground = document.getElementById("videoBackground");
const llamar = document.getElementById("llamar");
const iconoLlamada = document.getElementById("iconoLlamada");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const videoSocial = document.getElementById("videoSocial");


// Resto del código...




// Identificar si estamos en la página principal o secundaria
const isMainPage = document.getElementById("arrow") !== null;

// Asignar eventos a las flechas izquierda y derecha
if (isMainPage) {
  arrow.addEventListener("click", function() {
    currentVideoIndex = changeVideo(videos, videoBackground, currentVideoIndex, false);
  });
} else {
  leftArrow.addEventListener("click", function() {
    currentVideoIndex = changeVideo(socialVideos, videoSocial, currentVideoIndex, true);
  });

  rightArrow.addEventListener("click", function() {
    currentVideoIndex = changeVideo(socialVideos, videoSocial, currentVideoIndex, true);
  });
}

// Arreglos de videos
const videos = ["vid/CAAMWEB.mp4", "vid/GCWEB.mp4", "vid/LOOKINWEB.mov"];
const socialVideos = ["vid/ReelWEb.mov", "vid/ReelWeb1.mov", "vid/ReelWeb2.mov"];

let currentVideoIndex = 1; // Inicializar con la fuente "vid/GCWEB.MP4"

// Función para cambiar el video
function changeVideo(videosArray, videoElement, currentIndex, isSocial) {
  const videoSource = isSocial ? socialVideos : videosArray;
  currentIndex = (currentIndex + 1) % videoSource.length;
  videoElement.src = videoSource[currentIndex];
  return currentIndex;
}

// Función para hacer que las imágenes se vean a pantalla completa
function enableFullScreen(imgElement) {
  const fullPage = document.querySelector('#fullpage');
  fullPage.style.backgroundImage = 'url(' + imgElement.src + ')';
  fullPage.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  const imgs = document.querySelectorAll('#gridPic img');
  imgs.forEach(img => {
    img.addEventListener('click', function() {
      enableFullScreen(img);
    });
  });
});

// Función para verificar si es un teléfono móvil
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

