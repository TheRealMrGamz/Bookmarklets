var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");




        var BORDER = '1px solid #000';
        var TIME_FOR_MOVEMENT = 40;
        var PX_FOR_MOVEMENT = 20;
        var PX_FOR_DIAG_MOVEMENT = 15;
        var previousPoint;
        var keys = {};
        var gridObj;
                
        function sqrtDotProduct(x,y) {
                return Math.sqrt(x*x + y*y);
        }
        
        function angleBetweenTwoPoints(prevPoint, currPoint, newPoint) {
                var xDiffOfPrevCurr =  currPoint.x - prevPoint.x;
                var yDiffOfPrevCurr =  currPoint.y - prevPoint.y;
                var xDiffOfCurrNew = newPoint.x - currPoint.x;
                var yDiffOfCurrNew = newPoint.y - currPoint.y;
                
                var oldVectorLength = sqrtDotProduct(xDiffOfPrevCurr, yDiffOfPrevCurr);
                var newVectorLength = sqrtDotProduct(xDiffOfCurrNew, yDiffOfCurrNew);
                
                var normalizedOldVectorX = xDiffOfPrevCurr/oldVectorLength;
                var normalizedOldVectorY = yDiffOfPrevCurr/oldVectorLength;
                var normalizedNewVectorX = xDiffOfCurrNew/newVectorLength;
                var normalizedNewVectorY = yDiffOfCurrNew/newVectorLength;
                
                //return (Math.acos(normalizedOldVectorX*normalizedNewVectorX + normalizedOldVectorY*normalizedNewVectorY)/ 6.28 *360);
                return (Math.atan2(normalizedNewVectorY, normalizedNewVectorX) - Math.atan2(normalizedOldVectorY, normalizedOldVectorX)/6.28*360);
        } 
        
        function Grid(docW, docH) {
                var grid = [],
                        NUMBER_OF_X_CELLS = 100,
                        NUMBER_OF_Y_CELLS = 100;
                        
                var CELL_WIDTH;
                var CELL_HEIGHT;
                
                this.setCellWidth = function (documentWidth) {
                        CELL_WIDTH = documentWidth/NUMBER_OF_X_CELLS;
                }
                
                this.setCellHeight = function (documentHeight) {
                        CELL_HEIGHT = documentHeight/NUMBER_OF_Y_CELLS;
                }
                
                this.setCellWidth(docW);
                this.setCellHeight(docH);
                
                this.addToGrid = function(elem) {
                        var off = $(elem).offset();
                        var w = $(elem).width();
                        var h = $(elem).height();
                        if(CELL_WIDTH && CELL_HEIGHT) {
                                var rowIndexStart = Math.floor(off.top/CELL_HEIGHT);
                                var columnIndexStart = Math.floor(off.left/CELL_WIDTH);
                                var numberOfRowsSpanned = Math.ceil(h/CELL_HEIGHT);
                                var numberOfColsSpanned = Math.ceil(w/CELL_WIDTH);
                                
                                if(grid === undefined) {
                                        grid = [];
                                }
                                for(var i = rowIndexStart; i <= rowIndexStart + numberOfRowsSpanned; i++) {
                                        if(grid[i] === undefined) {
                                                grid[i] = [];
                                        }
                                        for(var j = columnIndexStart; j <= columnIndexStart + numberOfColsSpanned; j++) {
                                                if(grid[i][j] === undefined) {
                                                        grid[i][j] = [];
                                                }        
                                                grid[i][j].push(elem);
                                        }


                                }


                        }
                }
                
                this.checkCollision = function(nyanCatOffset, nyanCatWidth, nyanCatHeight) {
                        var rowIndex = Math.floor(nyanCatOffset.top/CELL_HEIGHT);
                        var columnIndex = Math.floor(nyanCatOffset.left/CELL_WIDTH); 
                        var numOfCols = Math.ceil(nyanCatWidth/CELL_WIDTH);
                        var numOfRows = Math.ceil(nyanCatHeight/CELL_HEIGHT);
                                for(var j = rowIndex; j <= rowIndex+numOfCols; j++) {
                                        for( var q = columnIndex; q <=  columnIndex+numOfRows; q++) {
                                                if(grid && grid[j] && grid[j][q]) {
                                                        for(var i = 0; i<grid[j][q].length; i++) {
                                                                if(grid[j][q][i].style.visibility != 'hidden') {
                                                                var elemCopy = document.createElement('div');
                                                                if (grid[j][q][i].tagName == 'SPAN') {
                                                                        elemCopy.innerHTML = grid[j][q][i].innerHTML;
                                                                } else {
                                                                        elemCopy = grid[j][q][i].cloneNode(true);
                                                                }
                                                                $(elemCopy).css({
                                                                                                        'position': 'absolute',
                                                                                                        'z-index': '10000',
                                                                                                        'left': $(grid[j][q][i]).offset().left,
                                                                                                        'top': $(grid[j][q][i]).offset().top,
                                                                                                        'width': $(grid[j][q][i]).width(),
                                                                                                        'height': $(grid[j][q][i]).height()
                                                                                                });
                                                                $('body').append(elemCopy);
                                                                grid[j][q][i].style.visibility = 'hidden';
                                                                grid[j][q].splice(i,i+1);
                                                                $(elemCopy).animate({
                                                                                        top: $(window).scrollTop()+$(window).height()+500 },
                                                                                        1000, 
                                                                                        function() {
                                                                                                elemCopy.style.visibility = 'hidden';
                                                                                                $(this).remove();
                                                                                        }
                                                                                );
                                                                }        
                                                        }
                                                }
                                        }
                                }
                        }
        }


function StickyNodes() {
    var domNodes = [],
        REPLACE_WORDS_IN = {
            a: 1, b: 1, big: 1, body: 1, cite:1, code: 1, dd: 1, div: 1,
            dt: 1, em: 1, font: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1,
            i: 1, label: 1, legend: 1, li: 1, p: 1, pre: 1, small: 1,
            span: 1, strong: 1, sub: 1, sup: 1, td: 1, th: 1, tt: 1
        };


    function addDomNode(el) {
        if (el !== undefined && el !== null) {
            el.khIgnore = true;
                        gridObj.addToGrid(el);
            domNodes.push(el);
        }
    }
    this.addDomNode = addDomNode;


    this.addWords = function (el) {
        var textEls = [];
        function shouldAddChildren(el) {
            return el.tagName && REPLACE_WORDS_IN[el.tagName.toLowerCase()];
        }


        function buildTextEls(el, shouldAdd) {
            var i, len;
            if (shouldAdd && el.nodeType === Node.TEXT_NODE &&
                    el.nodeValue.trim().length > 0) {
                textEls.push(el);
                return;
            }
            if (!el.childNodes || el.khIgnore) {
                return;
            }
            shouldAdd = shouldAddChildren(el);
            for (i = 0, len = el.childNodes.length; i < len; i++) {
                buildTextEls(el.childNodes[i], shouldAdd);
            }
        }


        function wordsToSpans(textEl) {
            var p = textEl.parentNode,
                words = textEl.nodeValue.split(/\s+/),
                ws = textEl.nodeValue.split(/\S+/),
                i, n, len = Math.max(words.length, ws.length);
            /* preserve whitespace for pre tags. */
            if (ws.length > 0 && ws[0].length === 0) {
                ws.shift();
            }
            for (i = 0; i < len; i++) {
                if (i < words.length && words[i].length > 0) {
                    n = document.createElement('span');
                    n.innerHTML = words[i];
                    p.insertBefore(n, textEl);
                    addDomNode(n);
                }
                if (i < ws.length && ws[i].length > 0) {
                    n = document.createTextNode(ws[i]);
                    p.insertBefore(n, textEl);
                }
            }
            p.removeChild(textEl);
        }


        buildTextEls(el, shouldAddChildren(el));
        textEls.map(wordsToSpans);
    };


    /* includes el. */
    this.addTagNames = function (el, tagNames) {
        var tname = el.tagName && el.tagName.toLowerCase(),
            i, j, els, len;
        if (el.khIgnore) {
            return;
        }
        if (tagNames.indexOf(tname) !== -1) {
            addDomNode(el);
        }
        if (!el.getElementsByTagName) {
            return;
        }
        for (i = 0; i < tagNames.length; i++) {
            els = el.getElementsByTagName(tagNames[i]);
            for (j = 0, len = els.length; j < len; j++) {
                if (!els[j].khIgnore) {
                    addDomNode(els[j]);
                }
            }
        }
    };
}
        
        function addMouseMovement() {
                $(document).mousedown(function(e){
                          var off = $('#nyan').offset();
                          var currentPoint = {
                                                x: off.left,
                                                 y: off.top
                                             };
                          var newPoint = {
                                                        x: e.pageX,
                                                        y: e.pageY
                                                 };
                          var angle = angleBetweenTwoPoints(previousPoint, currentPoint, newPoint);
                          if(isNaN(angle))
                                angle = 0;
                          gridObj.checkCollision(off);
                      $('#nyan').animate(
                                        {
                                                left: e.pageX,
                                                top: e.pageY,
                                                rotate: -angle+'deg'
                                        },
                                        {
                                                duration: 300,
                                                step: function (now, fx) {
                                                        gridObj.checkCollision($('#nyan').offset(), $('#nyan').width(), $('#nyan').height() );
                                                },
                                                complete: function() {
                                                        previousPoint = currentPoint;
                                                        currentPoint = newPoint;
                                                        newPoint = undefined
                                                }
                                           });
                });
        }
        
        function addKeyboardMovement() {
                $(document).keydown(function (e) {
                    keys[e.which] = true;


                    movement();
                });


                $(document).keyup(function (e) {
                    delete keys[e.which];
                });


                function movement() {
                        gridObj.checkCollision($('#nyan').offset());
                        movementCodes = {        LEFT: 37,
                                                                RIGHT: 39,
                                                                UP: 38,
                                                                DOWN: 40
                                                        };
                        if(keys[movementCodes.RIGHT] && keys[movementCodes.UP]) {
                                $('#nyan').animate(
                                        {"left": "+=" + PX_FOR_DIAG_MOVEMENT + "px",
                                         "top": "-=" + PX_FOR_DIAG_MOVEMENT + "px"},
                                        TIME_FOR_MOVEMENT,
                                        function () {
                                                //alert('hi');
                                        }
                                );
                        }
                        else if(keys[movementCodes.RIGHT] && keys[movementCodes.DOWN]) {
                                $('#nyan').animate(
                                        {"left": "+=" + PX_FOR_DIAG_MOVEMENT + "px",
                                         "top": "+=" + PX_FOR_DIAG_MOVEMENT + "px"},
                                        TIME_FOR_MOVEMENT,
                                        function () {
                                                //alert('hi');
                                        }
                                );
                        }
                        else if(keys[movementCodes.LEFT] && keys[movementCodes.UP]) {
                                $('#nyan').animate(
                                        {"left": "-=" + PX_FOR_DIAG_MOVEMENT + "px",
                                         "top": "-=" + PX_FOR_DIAG_MOVEMENT + "px"},
                                        TIME_FOR_MOVEMENT,
                                        function () {
                                                //alert('hi');
                                        }
                                );
                        }
                        else if(keys[movementCodes.LEFT] && keys[movementCodes.DOWN]) {
                                $('#nyan').animate(
                                        {"left": "-=" + PX_FOR_DIAG_MOVEMENT + "px",
                                         "top": "+=" + PX_FOR_DIAG_MOVEMENT + "px"},
                                        TIME_FOR_MOVEMENT,
                                        function () {
                                                //alert('hi');
                                        }
                                );
                        }
                        else if(keys[movementCodes.RIGHT]) {
                                $('#nyan').animate(
                                        {"left": "+=" + PX_FOR_MOVEMENT + "px"},
                                        TIME_FOR_MOVEMENT,
                                        function () {
                                                //alert('hi');
                                        }
                                );
                        }
                        else if(keys[movementCodes.LEFT]) {
                                $('#nyan').animate(
                                        {
                                                left: "-="+ PX_FOR_MOVEMENT + "px"
                                        },
                                        TIME_FOR_MOVEMENT,
                                        function () {
                                                //alert('hi');
                                        }
                                );
                        }
                        else if(keys[movementCodes.DOWN]) {
                                $('#nyan').animate(
                                        {"top": "+="+ PX_FOR_MOVEMENT + "px"},
                                        TIME_FOR_MOVEMENT,
                                        function () {
                                                //alert('hi');
                                        }
                                );
                        }
                        else if(keys[movementCodes.UP]) {
                                $('#nyan').animate(
                                        {"top": "-="+ PX_FOR_MOVEMENT + "px"},
                                        TIME_FOR_MOVEMENT,
                                        function () {
                                                //alert('hi');
                                        }
                                );
                        }
                };
        }


function main() {
            
                window.nyanned = true;
                previousPoint = {
                                        x: 15,
                                        y: 15
                                };
                
                gridObj = new Grid($(document).width(), $(document).height());
                
                window.lols = new StickyNodes();
                window.lols.addWords(document.body);
                for (i = 0, len = document.body.childNodes.length; i < len; i++) {
                            el = document.body.childNodes[i];
                            window.lols.addTagNames(el, [
                                'button', 'canvas', 'iframe', 'img', 'input', 'select',
                                'textarea'
                                    ]);
                }


                $("<div id='nyan' style='left:15px; top:15px; position: absolute;z-index=1000;'></div>").appendTo("body");


                $('<img />', {
                    id: 'nyan-cat',
                    src: 'https://i.pinimg.com/originals/b0/da/cd/b0dacd0bb277315b8582d2d0e07d62a8.gif',
                }).appendTo("#nyan");
                
                $(document).css({
                        overflow: 'hide'
                });
                addMouseMovement();
                addKeyboardMovement();
                
                var bgmusic = document.createElement('audio');
                bgmusic.id = 'nyanmusic';
                bgmusic.loop = 'loop';
                bgmusic.src = 'https://web.archive.org/web/20150821045612/http://nyan.alternative.ly/nyanlooped.mp3';
                bgmusic.volume = 0.009;
                bgmusic.play();
        }
        
        if(!window.nyanned) {
                main();
        }


}
/*
     FILE ARCHIVED ON 04:56:12 Aug 21, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:25:19 Mar 01, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.


     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 964.403
  exclusion.robots: 0.189
  exclusion.robots.policy: 0.176
  RedisCDXSource: 1.187
  esindex: 0.009
  LoadShardBlock: 943.18 (3)
  PetaboxLoader3.datanode: 150.191 (5)
  PetaboxLoader3.resolve: 2667.688 (3)
  load_resource: 1880.42 (2)
*/