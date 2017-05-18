var cols = 50;
var rows = 30;
var canvas;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
	var widthC = document.getElementById("body-container").clientWidth;
	var heightC = window.innerHeight;
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.class("bg");
	canvas.parent('body-container');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	var widthAdj = windowWidth * 0.8;
	var heightAdj = windowHeight * 0.6;

	for (var i = 1; i < cols; i++) {
		for (var j = 1; j < rows; j++) {
			fill (255);
			ellipse (i*(width/cols), j*(height/rows), 2, 2);
		}
	}
}