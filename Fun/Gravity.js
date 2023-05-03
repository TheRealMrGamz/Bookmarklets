javascript:(function(){
    var elements = document.querySelectorAll("*");
    var initialPositions = [];
    for (var i = 0; i < elements.length; i++) {
        var rect = elements[i].getBoundingClientRect();
        initialPositions.push({ x: rect.x, y: rect.y });
    }

    var gravity = 0.1; // adjust this value to change gravity strength
    function fall() {
        for (var i = 0; i < elements.length; i++) {
            var rect = elements[i].getBoundingClientRect();
            elements[i].style.top = rect.y + gravity + "px";
        }
    }
    var timer = setInterval(function() {
        fall();
        var screenBottom = window.innerHeight;
        for (var i = 0; i < elements.length; i++) {
            var rect = elements[i].getBoundingClientRect();
            if (rect.bottom >= screenBottom) {
                elements[i].style.top = initialPositions[i].y + "px";
            }
        }
    }, 30); // adjust this value to change the animation speed
})();
