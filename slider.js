        var slides = document.getElementById("slides");
        var totalSlides = slides.childElementCount;
        var selectedSlide = 0;
        var slideOpacitys = new Array(totalSlides);
        for (var i = 0; i < totalSlides; i++) {
          var currentSlide = document.getElementById(i);
          slideOpacitys[i] = 0;
          if (currentSlide.getAttribute("style") == null || currentSlide.getAttribute("style") == "") {
            currentSlide.style = "position:absolute; top: 0; left: 0; width: 100%; height: " + slides.style.height + "; opacity: " + slideOpacitys[i] + ";";
          } else {
            currentSlide.style = "position:absolute; top: 0; left: 0; width: 100%; height: " + slides.style.height + "; opacity: " + slideOpacitys[i] + ";" + currentSlide.style.cssText;
          }
        }
        var fadeSpeed = 0.007;
        var slideCounter = 0;
        var maxTime = 300;
        setInterval(function() {
          for (var i = 0; i < totalSlides; i++) {
            var currentSlide = document.getElementById(i);
            var cop = slideOpacitys[i];
            if (i == selectedSlide) {
              if (cop < 1) {
                cop += fadeSpeed;
              }
              if (cop > 1) {
                cop -= fadeSpeed;
              }
            } else {
              if (cop < 0) {
                cop += fadeSpeed;
              }
              if (cop > 0) {
                cop -= fadeSpeed;
              }
            }
            currentSlide.style.opacity = cop;
            if(selectedSlide == i && cop > 0.5){
                currentSlide.style.zIndex = "900";
                document.write("ss");
            }else{
                currentSlide.style.zIndex = "800";       
            }
            slideOpacitys[i] = cop;
          }
          slideCounter++;
          if (slideCounter > maxTime) {
            slideCounter = 0;
            selectedSlide++;
            if (selectedSlide > 3) {
              selectedSlide = 0;
            }
          }
        }, 10);
