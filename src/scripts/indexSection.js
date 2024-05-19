
//  ALIEN ANIMATION
const alienAnimation = () => {
    let creative = document.getElementById("creative");
    let alienNuevo = document.getElementById("alienNuevo");
  
    creative.addEventListener("mouseover", () => {
      if (screen.width > 991) {
        alienNuevo.classList.remove("noMostrar");
      } else {
        const cartel = document.createElement("div");
        cartel.innerHTML = "Abrí la web en PC para ver la magia ;)";
        cartel.classList.add("cartel");
  
        const alienWarning = document.createElement("img");
        alienWarning.src = "./media/img/fotos/alien-warning-min.png";
        alienWarning.classList.add("alien-warning");
  
        document.body.appendChild(cartel);
        document.body.appendChild(alienWarning);
  
        setTimeout(function () {
          document.body.removeChild(cartel);
          document.body.removeChild(alienWarning);
        }, 4000);
      }
    });
    creative.addEventListener("mouseout", () => {
      alienNuevo.classList.add("noMostrar");
    });
  };
  alienAnimation();


//      GONZA TEXT ANIMATE
const gonzaTextAnimate = () => {
    let gonzaText = document.getElementById("gonzaText");
    let fotoGonzaIndex = document.getElementById("fotoGonzaIndex");
    let fotoGonzaAlienIndex = document.getElementById("fotoGonzaAlienIndex");
    gonzaText.addEventListener("mouseover", () => {
      fotoGonzaAlienIndex.classList.remove("noMostrar");
      fotoGonzaIndex.classList.add("noMostrar");
    });
    gonzaText.addEventListener("mouseleave", () => {
      fotoGonzaAlienIndex.classList.add("noMostrar");
      fotoGonzaIndex.classList.remove("noMostrar");
    });
  };
  gonzaTextAnimate();

  const aboutMeButton = document.getElementById('aboutMeButton');

  const hideButton = () => {
    if (window.innerHeight > window.innerWidth) {
      aboutMeButton.classList.add('noMostrar')
    }
  }

  window.addEventListener('load', hideButton)