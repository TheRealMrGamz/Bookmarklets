javascript:(function() {
    var countdown = 3;
    var gifUrl = "https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif";
  
    var countdownEl = document.createElement("div");
    countdownEl.style.position = "fixed";
    countdownEl.style.top = "50%";
    countdownEl.style.left = "50%";
    countdownEl.style.transform = "translate(-50%, -50%)";
    countdownEl.style.fontSize = "4rem";
    countdownEl.style.color = "white";
    countdownEl.style.textShadow = "1px 1px black";
    countdownEl.innerHTML = countdown;
    document.body.appendChild(countdownEl);
  
    var countdownInterval = setInterval(function() {
      countdown--;
      countdownEl.innerHTML = countdown;
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        document.body.removeChild(countdownEl);
        explode();
      }
    }, 1000);
  
    function explode() {
      var explosionEl = document.createElement("div");
      explosionEl.style.position = "fixed";
      explosionEl.style.top = "50%";
      explosionEl.style.left = "50%";
      explosionEl.style.transform = "translate(-50%, -50%)";
      explosionEl.style.width = "100vw";
      explosionEl.style.height = "100vh";
      explosionEl.style.backgroundColor = "black";
      explosionEl.style.backgroundImage = "url('" + gifUrl + "')";
      explosionEl.style.backgroundRepeat = "no-repeat";
      explosionEl.style.backgroundPosition = "center";
      explosionEl.style.backgroundSize = "contain";
      explosionEl.style.animation = "explode 1s forwards";
      document.body.appendChild(explosionEl);
  
      var elements = document.querySelectorAll("*");
      for (var i = 0; i < elements.length; i++) {
        var rect = elements[i].getBoundingClientRect();
        var dx = rect.left - window.innerWidth / 2;
        var dy = rect.top - window.innerHeight / 2;
        var distance = Math.sqrt(dx*dx + dy*dy);
        var angle = Math.atan2(dy, dx);
        var force = 10000 / distance;
        var fx = Math.cos(angle) * force;
        var fy = Math.sin(angle) * force;
        elements[i].style.transition = "transform 1s";
        elements[i].style.transform = "translate(" + fx + "px, " + fy + "px)";
      }
    }
  })();
  
