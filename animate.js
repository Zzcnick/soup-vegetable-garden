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

// EventListener Functions
var DVD = function(e) {    
    clear();
    window.cancelAnimationFrame(rid);
    var x, y, dx, dy;
    x = Math.floor(Math.random() * (width - 100));
    y = Math.floor(Math.random() * (height - 100));
    dx = 2; dy = 2;

    // Rectangle
    var r = document.createElementNS(ns, "rect");
    var color = getRandomColor();
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
    t1.setAttribute("font-style", "italic");
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
    t2.setAttribute("font-style", "italic");
    t2.setAttribute("font-size", "24px");
    t2.setAttribute("text-anchor", "middle");
    t2.setAttribute("fill", "white");
    t2.textContent = "Video";
    s.appendChild(t2);
    count++;

    var bounce = function() {
	if (x < 0 || x > width - 100) {
	    dx *= -1;
	    r.setAttribute("fill", getRandomColor());
	    dx > 0 ? dx += 0.2 : dx -= 0.2;
	    dy > 0 ? dy += 0.2 : dy -= 0.2;
	}
	if (y < 0 || y > height - 100) {
	    dy *= -1;
	    r.setAttribute("fill", getRandomColor());
	    dx > 0 ? dx += 0.2 : dx -= 0.2;
	    dy > 0 ? dy += 0.2 : dy -= 0.2;
	}
	x += dx; y += dy;
	r.setAttribute("x", x);
	r.setAttribute("y", y);
	t1.setAttribute("x", x + 49);
	t1.setAttribute("y", y + 43);
	t2.setAttribute("x", x + 49);
	t2.setAttribute("y", y + 71);
	rid = window.requestAnimationFrame(bounce);
    }	
    bounce();
}

var breathe = function(e) {
    clear();
    window.cancelAnimationFrame(rid);
    var color = getRandomColor();
    var r = 0;
    var dr = 0;
    var cycle = 0;

    // Circle
    var c = document.createElementNS(ns, "circle");
    c.setAttribute("r", r);
    c.setAttribute("cx", width / 2);
    c.setAttribute("cy", height / 2);
    c.setAttribute("fill", color);
    s.appendChild(c);
    count++;

    // Text
    var t = document.createElementNS(ns, "text");
    t.setAttribute("x", width / 2);
    t.setAttribute("y", height * 0.8);
    t.setAttribute("font-family", "sans-serif");
    t.setAttribute("font-style", "italic");
    t.setAttribute("font-size", "24px");
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("fill", "#202020");
    t.textContent = "";
    s.appendChild(t);
    count++;

    var changed = false;
    var circle = function() {
	r += dr / 13; if (r < 0) r = 0;
	cycle++;
	if (cycle % 45 == 0) {
	    if (dr > 8) {
		dr *= -1;
	    } else {
		dr++;
	    }
	    cycle = 0;
	}
	c.setAttribute("r", r);
	c.setAttribute("fill", color);

	dr < 0 ?
	    t.textContent = "Breathe Out" :
	    t.textContent = "Breathe In";

	rid = window.requestAnimationFrame(circle);
    }
    circle();
}

// Backend Functions
var getRandomColor = function() {
    var newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
	Math.floor(Math.random() * 256) + ',' + 
	Math.floor(Math.random() * 256) + ')';
    return newColor;
}
var stop = function(e) {
    window.cancelAnimationFrame(rid);
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
b1.addEventListener("click", stop);
var b2 = document.getElementById("dvd");
b2.addEventListener("click", DVD);
var b3 = document.getElementById("circle");
b3.addEventListener("click", breathe);

// s.addEventListener("click", connect);

console.log("Loaded js.");
