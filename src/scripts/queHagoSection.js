const blobChange = () => {
    //ANIMATIONS
    let animacionServiciosFrontend = document.getElementById(
      "animacionServiciosFrontend"
    );
    let animacionServiciosBackend = document.getElementById(
      "animacionServiciosBackend"
    );
  
    //TITLES
    let frontendTitle = document.getElementById("frontendTitle");
    let backendTitle = document.getElementById("backendTitle");
  
    //CONTAINERS
    let frontendContainer = document.getElementById("frontendContainer");
    let backendContainer = document.getElementById("backendContainer");
  
    //HIDING ANIMATIONS
    window.onload = () => {
      animacionServiciosBackend.classList.add("noMostrar");
    };
  
    //DOWN ARROW
    let frontendArrow = document.getElementById("frontendArrow");
  
    //TEXT
    let frontendText = document.getElementById("frontendText");
  
    //FRONTEND SELECTED
    frontendTitle.addEventListener("click", () => {
      let contenido = frontendTitle.nextElementSibling;
      if (contenido.classList.contains("noMostrar")) {
        contenido.classList.remove("noMostrar"); //Abre el contenedor
        animacionServiciosFrontend.classList.remove("noMostrar"); //Muestra la animacion
        animacionServiciosBackend.classList.add("noMostrar"); //Oculta la animacion
  
        //Modifica las flechas
        frontendArrow.classList.add("up-arrow");
        frontendArrow.classList.add("selected");
        backendArrow.classList.remove("up-arrow");
        backendArrow.classList.remove("selected");
  
        //Modifica los textos
        frontendText.classList.add("selected");
        backendText.classList.remove("selected");
  
        //Oculta los otros contenedores
        backendContainer.classList.add("noMostrar");
      }
    });
  
    //BACKEND SELECTED
    backendTitle.addEventListener("click", () => {
      let contenido = backendTitle.nextElementSibling;
      if (contenido.classList.contains("noMostrar")) {
        //Oculta los otros contenedores
        frontendContainer.classList.add("noMostrar");
  
        //Muestra el contenido
        contenido.classList.remove("noMostrar"); //Abre el contenedor
        animacionServiciosFrontend.classList.add("noMostrar"); //Muestra la animacion
        animacionServiciosBackend.classList.remove("noMostrar"); //Oculta la animacion
  
        //Modifica la flecha
        backendArrow.classList.add("up-arrow");
        backendArrow.classList.add("selected");
        frontendArrow.classList.remove("up-arrow");
        frontendArrow.classList.remove("selected");
  
        //Pinta el texto
        backendText.classList.add("selected");
        frontendText.classList.remove("selected");
      }
    });
  };
  blobChange();