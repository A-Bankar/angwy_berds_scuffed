//this class is used for creating the bird. it also extends the base class, that is inherits the properties of the base class
class Bird extends BaseClass {
  //construction of bird using matter.js
  constructor(xInput, yInput, widthInput, heightInput) {

    //the common property for all the bodies, i.e. the xInput, yInput, widthInput, heightInput
    super(xInput, yInput, widthInput, heightInput);

    //loading the image for the bird
    this.image = loadImage("images/bird.png");
  }

  //displaying the bird in display() function
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
  