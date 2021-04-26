//BaseClass. the main class, i.e. all other classes extend from this one
class BaseClass {
  //constructor, holds all the properties for the bodies to be created
  constructor(xInput, yInput, widthInput, heightInput, angleInput) {
    //the common options that are used in most of the other classes
    var options = {
      restitution: 0.9,
      density: 1.5,
      friction: 1.0,
    };
    this.width = widthInput;
    this.height = heightInput;
    //loading the image for the base
    this.image = loadImage("images/base.png");
    //since most of the bodies to be created are rectangle, then we will create this.body as a rectangle
    this.body = Bodies.rectangle(
      xInput,
      yInput,
      this.width,
      this.height,
      options
    );
    //adding it to the world
    World.add(userWorld, this.body);
  }
  //displaying the body ud=sing the function display()
  display() {
    var angle = this.body.angle;

    push();
    //The translate() function is used to specify the amount to displace objects within the display window. 
    translate(this.body.position.x, this.body.position.y);

    //rotating the angle
    rotate(angle);

    //the image should be placed in the center
    imageMode(CENTER);

    //the properties for the image
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
