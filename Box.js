//this class is used for creating the boxes. It also extends the base class, that is inherits the properties of the base class
class Box extends BaseClass {
  //construction of box using matter.js
  constructor(xInput, yInput, widthInput, heightInput) {

    //the common property for all the bodies, i.e. the xInput, yInput, widthInput, heightInput
    super(xInput,yInput,widthInput,heightInput);

    //loading the image for the boxes
    this.image = loadImage("images/wood1.png");

    //setting the visibility of the boxes to max so that when we decrease the visibility after the speed increases, it will work
    this.visibility = 255;

   
  }

  //using the display() function to display the boxes
  display(){

    //writing the if condition which states that if the speed of the body is less than 4, the body should be displayed
    if (this.body.speed < 4) {
      super.display();
    } 
    else{

      //if the body's speed is greater than 4, the body will be removed from the world
      World.remove(userWorld, this.body);

      push();

      //the visibility will start decreasing by 15 
      this.visibility = this.visibility - 15;

      //The tint() function is used to set a fill value for images. 
      tint(255, this.visibility);

      //displaying the image at the certain positions
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }
  
    //generate score based on visibility of each object of this class
    score(){
      //using an if condition to display the score. the condition states that if the visibility is smaller than 0 and greater than -1005, score will increase
      if (this.visibility < 0 && this.visibility > -1005) {
        score++;
      }
    }
  }


//EXPLICITLY
//Implicitly
