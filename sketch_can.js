var can;
var w;
var i,j;
var r,t;
function preload() {
  can = loadImage('can.png');
  w=loadImage('w.png');
}
function setup() {
createCanvas(500,500);
frameRate(5);

}

function draw() {
  image(w,0,0,500,500);
  if(mouseIsPressed){
    for(r=0;r<width/50;r+=1){
      for(t=0;t<height/50;t+=1){
       fill(random(255),random(255),random(255),random(200));
       noStroke();
        rect(50*r,50*t,50,50);
      }
    }
    
    for(i=0;i<500;i+=100){
      for(j=0;j<500;j+=100){
        image(can,i,j,100,100);
      }
    }
  }
   
    
    
    
  
  
}