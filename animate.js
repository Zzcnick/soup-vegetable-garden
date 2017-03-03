// Initialization
var s = document.getElementById("world");
var ns = "http://www.w3.org/2000/svg";
var height = $(window).height() * 0.9;
var width = $(window).width();
s.height = height;
s.width = width;
var rid = -1;
var bg = document.createElementNS(ns, "rect");
bg.setAttribute("width", width);
bg.setAttribute("height", height);
bg.setAttribute("style", "fill:rgb(0,0,0)");
s.appendChild(bg);
console.log(bg);    

var count = 0;

var dvd = null;
var txt1 = null;
var txt2 = null;
var circle = null;

// EventListener Functions
var createDVD = function(e) {
    // Rectangle
    var r = document.createElementNS(ns, "rect");
    var color = getRandomColor();
    x = Math.floor(Math.random() * (width - 100));
    y = Math.floor(Math.random() * (height - 100));
    r.setAttribute("x", x);
    r.setAttribute("y", y);
    r.setAttribute("width", 100);
    r.setAttribute("height", 100);
    r.setAttribute("fill", color);
    s.appendChild(r);
    count++;
    
    // DVD
    var t1 = document.createElementNS(ns, "text");
    t1.setAttribute("x", x + 49);
    t1.setAttribute("y", y + 43);
    t1.setAttribute("font-family", "sans-serif");
    t1.setAttribute("font-size", "24px");
    t1.setAttribute("text-anchor", "middle");
    t1.setAttribute("fill", "white");
    t1.textContent = "DVD";
    s.appendChild(t1);
    count++;
   
    // Video
    var t2 = document.createElementNS(ns, "text");
    t2.setAttribute("x", x + 49);
    t2.setAttribute("y", y + 71);
    t2.setAttribute("font-family", "sans-serif");
    t2.setAttribute("font-size", "24px");
    t2.setAttribute("text-anchor", "middle");
    t2.setAttribute("fill", "white");
    t2.textContent = "Video";
    s.appendChild(t2);
    count++;
}
var bounce = function() {
    window.cancelAnimationFrame(rid);
    var x, y, dx, dy;
    
}


var addLastCircle = function() {
    s.appendChild(lastCircle);
    count++;
}

var addLine = function(e) {
    var l = document.createElementNS(ns, "line");
    var newX = e.clientX;
    var newY = e.clientY;
    l.setAttribute("x1", x);
    l.setAttribute("y1", y);
    l.setAttribute("x2", newX);
    l.setAttribute("y2", newY);
    l.setAttribute("stroke", "white");
    l.setAttribute("stroke-width", "1");
    s.appendChild(l);
    count++;
}

// Backend Functions
var getRandomColor = function() {
    var newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
	Math.floor(Math.random() * 256) + ',' + 
	Math.floor(Math.random() * 256) + ')';
    return newColor;
}
var clear = function(e) {
    lastCircle = null;
    while (count) {
	removeLast();
    }
}
var removeLast = function(e) {
    s.removeChild(s.lastChild);
    return count--;
}

// Adding Event Listeners
var b1 = document.getElementById("clear");
b1.addEventListener("click", clear);
var b2 = document.getElementById("dvd");
b2.addEventListener("click", createDVD);
var b3 = document.getElementById("circle");

// s.addEventListener("click", connect);

console.log("Loaded js.");
