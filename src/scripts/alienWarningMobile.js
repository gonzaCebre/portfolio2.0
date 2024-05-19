const alienWarning = () => {
    if (screen.width < 991) {
      setTimeout(function () {
        const cartel = document.getElementById('cartelWarning')
        cartel.classList.remove("noMostrar");

        const alienWarningImg = document.getElementById('alienWarningImg')
        alienWarningImg.classList.remove("noMostrar");

      }, 5000);
    }
  };
  alienWarning();