javascript:(function(){
    var x = 0, y = 0;
    var spreadInterval = setInterval(spread, 50);
    var elements = document.getElementsByTagName("*");
  
    function spread() {
      var color = "rgba(0, 0, 0, 0.5)";
      var spreadRadius = 50;
      var spreadSpeed = 10;
  
      var spreadElement = document.createElement("div");
      spreadElement.style.position = "absolute";
      spreadElement.style.left = x + "px";
      spreadElement.style.top = y + "px";
      spreadElement.style.width = spreadRadius + "px";
      spreadElement.style.height = spreadRadius + "px";
      spreadElement.style.borderRadius = "50%";
      spreadElement.style.background = color;
      document.body.appendChild(spreadElement);
  
      x += Math.floor(Math.random() * (spreadSpeed * 2)) - spreadSpeed;
      y += Math.floor(Math.random() * (spreadSpeed * 2)) - spreadSpeed;
  
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element !== spreadElement && !isAncestor(spreadElement, element)) {
          var elementBounds = element.getBoundingClientRect();
          var spreadBounds = spreadElement.getBoundingClientRect();
  
          if (boundsOverlap(spreadBounds, elementBounds)) {
            if (element.tagName === "IMG") {
              element.src = "https://source.unsplash.com/random/200x200";
            } else if (element.tagName === "A") {
              element.style.fontFamily = "Impact, Charcoal, sans-serif";
              element.style.textShadow = "0 0 3px rgba(255, 255, 255, 0.5)";
            }
          }
        }
      }
  
      if (x < -spreadRadius || x > window.innerWidth + spreadRadius ||
          y < -spreadRadius || y > window.innerHeight + spreadRadius) {
        clearInterval(spreadInterval);
        document.body.removeChild(spreadElement);
      }
    }
  
    function isAncestor(ancestor, element) {
      while (element.parentNode) {
        if (element.parentNode === ancestor) {
          return true;
        }
        element = element.parentNode;
      }
      return false;
    }
  
    function boundsOverlap(rect1, rect2) {
      return !(rect1.right < rect2.left ||
               rect1.left > rect2.right ||
               rect1.bottom < rect2.top ||
               rect1.top > rect2.bottom);
    }
  })();
  
