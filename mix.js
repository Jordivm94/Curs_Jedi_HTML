window.onload = function () {
	setInterval(next,2000); 
	setInterval(Clock,1000); 
	document.getElementById("welcome").onkeypress = write;
}

function write(){
	document.getElementById("par").innerText = "Hola " + document.getElementById("welcome").value;
}

var seg1 = 0;
var min = 0;
var h = 0;
function next(){
	if (seg1%3 == 0) document.getElementById("image").src = "red.png";
	if (seg1%3 == 1) document.getElementById("image").src = "blue.png";
	if (seg1%3 == 2) document.getElementById("image").src = "green.png";
	++seg1;
}
var seg = 0;
function Clock(){
		++seg;
		var seg2;
		var min2;
		var h2;
		if (seg == 60) {
				seg = 0;
				++min;
		}
		if (min == 60){
				min = 0;
				++h;
		}
		if (h == 24){
				h = 0;
		}
		if (h < 10)  h2 = "0" + h;
		else h2 = h;
		if (min <  10)  min2 = "0" + min;
		else min2 = min;
		if (seg < 10) seg2 = "0" + seg;
		else seg2 = seg;
		document.getElementById("time").innerText = h2+":"+min2+":"+seg2;
}
