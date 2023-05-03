javascript:(function(){
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      var websites = ['https://longdogechallenge.com/', 'https://puginarug.com/', 'https://onesquareminesweeper.com/'];
      var randomWebsite = websites[Math.floor(Math.random() * websites.length)];
      links[i].href = randomWebsite;
    }
  })();  