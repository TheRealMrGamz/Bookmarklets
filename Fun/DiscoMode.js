javascript:(function() {
    var discoInterval = null;
    var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  
    function startDisco() {
      discoInterval = setInterval(function() {
        var color = colors[Math.floor(Math.random() * colors.length)];
        var elements = document.querySelectorAll("*");
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.backgroundColor = color;
        }
      }, 100);
    }
  
    function stopDisco() {
      clearInterval(discoInterval);
      var elements = document.querySelectorAll("*");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
      }
    }
  
    if (discoInterval) {
      stopDisco();
    } else {
      startDisco();
    }
  })();
  