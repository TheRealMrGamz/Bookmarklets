javascript:(function() {
    var matrixInterval = null;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var columns = Math.floor(window.innerWidth / 10);
    var drops = [];
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "99999";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);
  
    for (var i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height);
    }
  
    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = "#0F0";
      ctx.font = "10px monospace";
  
      for (var i = 0; i < drops.length; i++) {
        var char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 10, drops[i] * 10);
        if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
  
    function startMatrix() {
      matrixInterval = setInterval(drawMatrix, 33);
    }
  
    function stopMatrix() {
      clearInterval(matrixInterval);
      document.body.removeChild(canvas);
    }
  
    if (matrixInterval) {
      stopMatrix();
    } else {
      startMatrix();
    }
  })();  