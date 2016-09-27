// Dominique Ketchens hw5 //

var angle = 0
var s = 1;
var r = 0;
var t = 0;
var bDir = 2;
var ry = 0;
var ty = 0;

// background //

function setup() {
createCanvas(500, 500);
background(0);

}

function draw(){
translate(width/2, height/2);
    r = r - 15;

    if(t > 300) {
      bDir = 0;
      ry = random(PI, height/TWO_PI);
      ty = random(0, height/2);
    }

if (t <-300) {
  bDir = 1;
  ry = random(0, height/5);
  ty = random(height/2);
}

    if(bDir == 1) {
      t++;
    } else {
      t--;
    }
translate(t, ty)
rotate(angle)
angle += .5
noStroke()
// Green //
fill(114, 230, 84)
ellipse (0, t, 50, 50);
// Purple //
fill(193, 141, 245)
ellipse(t, 0, 44, 44)
// Orange //
fill(246, 161, 75)
ellipse(t, 0, 40, 40)
// Yellow //
fill(255, 220, 40)
ellipse(0, t, 33, 33)
// Blue //
fill(57, 183, 246)
ellipse(t, 0, 26, 26)
// Pink //
/fill(283, 99, 201)
ellipse(0, t, 22, 22)
// White //
fill(255, 255, 255)
ellipse(t, 0, 10, 10)
}
