var dino;
var obst = [];
var points;
var speed = 5;
let dImg;

function setup() {
  createCanvas(800, 400);
  dImg = loadImage('dino.png');
  dino = new Dinossaur();
  //obst = new Obstacle();
  obst.push(new Obstacle());
  points = 0;
  textSize(25);
}

function draw() {
  
  fill(255);
  background(220);
  dino.update();
  dino.show();
  
  //obstacle meanagement
  fill(0, 51, 0);
  if(random(1) < 0.1){  
        if(obst[obst.length-1].getX() < width-200){
          obst.push(new Obstacle()); 
        }
  }
  for(var i = 0; i < obst.length; i++){
    obst[i].update();
    obst[i].show();
    //check if dead
  if(collideRectRect(dino.getX(),dino.getY(),dino.getW(),dino.getH(),obst[i].getX(),obst[i].getY(),obst[i].getW(),obst[i].getH())){
    dino.die();
  }
    if(obst[i].getX() < 0-obst[i].getW()){
      obst.shift();
    }  
  }
  points++;
  if(points%100 == 0){
    speed += .01;
  }
  fill(0);
  text(points, 15, 30 );
  
}

function keyPressed(){
   if(key == ' '){
      dino.jump(); 
   }
}