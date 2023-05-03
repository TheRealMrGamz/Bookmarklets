javascript:(function(){
    var errorMessages = [
        "Error: Server not found",
        "Error: Connection lost",
        "Error: Page not found",
        "Error: Invalid input",
        "Error: System overload"
    ];
    var randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    alert(randomError);
    document.body.style.backgroundColor = "magenta";
    document.body.style.color = "yellow";
    var audio = new Audio('https://www.myinstants.com/media/sounds/untitled_hG6mBU5.mp3');
    audio.play();
})();