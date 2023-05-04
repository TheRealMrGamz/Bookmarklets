javascript:(function(){
var audio = new Audio('https://www.myinstants.com/media/sounds/mrbeast-rap-battle-announcer.mp3');
audio.loop = true;
audio.play();
var imgs = document.getElementsByTagName('img');
for(var i = 0; i < imgs.length; i++){
imgs[i].src = 'https://media.tenor.com/IIXy6CqR5l8AAAAC/mrbeast-ytpmv.gif';
}
})();
