class Dinossaur{
 constructor(){
   this.x = 50;
   this.h = 70;
   this.w = 50;
   this.y = height-this.h;
   this.force = 0;
   this.grav = .5;
  }
  
  jump(){
    if(this.y == height-this.h)
      this.force = 11; 
  }
  
  update(){
    this.force -= this.grav;
    this.y -= this.force;
    this.y = constrain(this.y, 0, height-this.h);
  }
  
  show(){
   image(dImg, this.x, this.y, this.w, this.h); 
  }
  
  die(){
    fill(204, 51, 0);
    textSize(25);
    text('Game Over', width/2, height/2 );
    fill(0, 51, 0);
    noLoop();
  }
  
  getX(){ return this.x;}
  getY(){ return this.y;}
  getW(){ return this.w;}
  getH(){ return this.h;}
  
  
}