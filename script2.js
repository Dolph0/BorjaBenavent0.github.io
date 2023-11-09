const numero = document.getElementById("numero");
const llamada = document.getElementById("llamada");
let visible = false; 
const arrow = document.getElementById("arrow");
const videoBackground = document.getElementById("videoBackground");
const llamar = document.getElementById("llamar");
const iconoLlamada = document.getElementById("iconoLlamada");


// Arrow
const videos = ["vid/CAAMWEB.mp4", "vid/GCWEB.mp4", "vid/LOOKINWEB.mov"];
let currentVideoIndex = 1;


if (arrow) {
  arrow.addEventListener("click", function() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoBackground.src = videos[currentVideoIndex];
  });
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

