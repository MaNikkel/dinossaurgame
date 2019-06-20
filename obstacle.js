class Obstacle{
 constructor(){
   this.w = 35;
   this.h = 50;
   this.v = speed;
   this.x = width + this.w; 
   this.y = height - this.h;
  }  
  
  update(){
      this.x -= this.v;
  }
  
  show(){
    rect(this.x, this.y, this.w, this.h);
  }
  
  getX(){
   return this.x; 
  }
  
  getY(){
   return this.y; 
  }
  
  getW(){
   return this.w; 
  }
  
  getH(){
   return this.h; 
  }
}