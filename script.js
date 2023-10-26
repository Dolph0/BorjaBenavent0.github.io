const numero = document.getElementById("numero");
const llamada = document.getElementById("llamada");
let visible = false;
const arrow = document.getElementById("arrow");
const video = document.getElementById("video");
const llamar = document.getElementById("llamar");
const iconoLlamada = document.getElementById("iconoLlamada");




const videos = ["vid/CAAMWEB.mp4", "vid/GCWEB.mp4", "vid/LOOKINWEB.mov"];
let currentVideoIndex = 1; // Inicializar con la fuente "vid/GCWEB.MP4"

arrow.addEventListener("click", function() {
    // Cambiar al siguiente video en el array
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    video.src = videos[currentVideoIndex];
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

  







