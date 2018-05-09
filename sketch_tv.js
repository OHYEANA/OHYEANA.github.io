var screenR;
var screenG;
var screenB;



function setup(){
 createCanvas(800,800);

}


function draw(){
   background(255,200,0);
  screenR = random(255);
  screenG = random(255);
  screenB = random(255);


 fill(0,0,0);
 rect(200, 240, 400, 310, 15);
 fill(5,200,0);
 rect(307.5, 260, 82.5, 270);
 fill(190, 0, 0);
 rect(472.5, 260, 82.5, 270, 0, 15, 15,0);
  
  fill(screenR, screenG, screenB);
  rect(225, 260, 82.5, 270, 15, 0, 0,15);
  fill(screenR, screenG, screenB);
  rect(390, 260, 82.5, 270);
  fill(200,0,0);
  ellipse(575,470,15,15);
  fill(0,0,200);
  ellipse(575,500,15,15);
  fill(0,0,0);
  ellipse(307,380,30,30);
  fill(0,0,0);
  ellipse(472,380,30,30);
  line(540,240,460,140);
  line(548,240,628,140);
  fill(0,0,0);
  ellipse(544,240,40,40);
  fill(0,0,0);
  triangle(330,425,440,425,390,496);
  fill(500,500,500);
  rect(370,425,30,20);
  

}