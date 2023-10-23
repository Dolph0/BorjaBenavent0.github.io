const numero = document.getElementById("numero");
const llamada = document.getElementById("llamada");
let visible = false;
const arrow = document.getElementById("arrow");
const video = document.getElementById("video");


const videos = ["vid/CAAMWEB.MP4", "vid/GCWEB.MP4", "vid/LOOKINWEB.mov"];
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
    llamada.innerHTML = `
        <li class="menu-item" id="llamada">
            <a href="tel:+627094473" target="_blank" rel="noopener noreferrer">
                <img src="img/llamada-telefonica (1).png" alt="teléfono" class="icon">
            </a>    
        </li> 
    `;
  } else {
    llamada.innerHTML = `
        <li class="menu-item" id="llamada">
            <img src="img/llamada-telefonica (1).png" alt="teléfono" class="icon">
        </li>
    `;

    llamada.addEventListener("click", function() {
        visible = !visible;
    
        if (visible) {
            numero.style.display = "block";
        } else {
            numero.style.display = "none";
        }
    });
  }

  







