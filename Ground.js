class Ground{     
constructor (x,y,width,height){
 //construction of ground using matter.js
 var options = {
    isStatic: true
  };
  this.width = width;
  this.height = height;
  this.body = Bodies.rectangle(x, y, width, height, options);
  World.add(userWorld, this.body);
}

display(){
    rectMode(CENTER);
    fill("brown");
    strokeWeight(3);
    stroke("black");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);  
}

}