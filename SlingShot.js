//class slingshot. used for creating the slingshot                                                     
class SlingShot {                                 
  //constructor, holds all the properties for the bodies to be created                      
  constructor(bodyAInput, pointBInput) {                                                   
    //adding the options. this determines how we place the constraint and what are its properties   
    var options = {                                                     
      bodyA: bodyAInput,                                                   
      pointB: pointBInput,                                                   
      stiffness: 0.14,                                                   
      length: 5,                                                        
    };                                                                                                 
    this.bodyA = bodyAInput;                                                   
    this.pointB = pointBInput;                                                   
                                  
    //loading images for the slings
    this.sling1 = loadImage("images/sling1.png");                                                   
    this.sling2 = loadImage("images/sling2.png");                                                   
    this.sling3 = loadImage("images/sling3.png");                                                   
                                     
    //creating the constraint using matter.js
    this.constraint = Constraint.create(options);  
    
    //adding the constraint to the world                                                 
    World.add(userWorld, this.constraint);                                                   
  }                                                                                                  
  //function Definition to attach a body to the constraint                                                   
                                                                                                 
  attach(body)                                                                                                 
  {                                     
    //the bodyA will be attached to the constraint                                                            
     this.constraint.bodyA = body;                                                   
  }                                                                                                 
                                                                                                 
  //function Definition to detach a body from constraint                                                   
  detach() {                                              
    //the bodyA will be detached from the constraint                                                  
    this.constraint.bodyA = null;                                                   
  }                                                                                                 
                    
  //displaying the constraint using the function display()
  display() {                                                                                                 
    image(this.sling1, 200, 20);                                                   
    image(this.sling2, 170, 20);                                                   
                                                                                                     
    //display constraint(rubberband: 2 lines) only if bodyA is attached                                                         
    //i.e. this.constraint.bodyA != null                                                   
    if (this.constraint.bodyA) {                                                   
      var pointA = this.bodyA.position;                                                   
      var pointB = this.pointB;                                                  
                                                                                                 
      push();                                                                                                 
                                                                                                 
      //display of constraint to hold bird and attach it to slingshot                                                   
      stroke(48, 22, 8);                                                   
                                                                                                 
      if (pointA.x < 220) {                                                   
        strokeWeight(5);                                                   
        line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);                                                   
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);                                                   
        image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30);                                                   
      } else {                                                                                                 
        strokeWeight(2);                                                   
        line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);                                                   
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);                                                   
        image(this.sling3, pointA.x + 25, pointA.y - 10, 15, 30);                                                      
      }                                                                                                 
      pop();                                                                                                 
    }                                                                                                 
  }                                                                                                 
}                                                                                                 
                                                                                                       