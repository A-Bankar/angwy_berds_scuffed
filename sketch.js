//class24 - 34: Physics Engine, inheritance, JSON, API, Arrays.
//Developer: Aditya
//Topics: PhysicsEngine, Inheritence, JSON, API, functions, Arrays, Push()pop()

//Declare variables for game objects and behaviour indicators(FLAGS)

//constant engine.a constant engine is the controller that manages updating the simulation of the world.
const Engine = Matter.Engine;

//the constant world. the world is being manipulated and stimulated by the engine
const World = Matter.World;

//Matter.Bodies are rigid bodies stimulated by the engine
const Bodies = Matter.Bodies;

//Matter.Constraint are also manipulated by the engine.
const Constraint = Matter.Constraint;

//creating variables to store objects for Matter.Engine and Matter.World
var userEngine, userWorld;

//creating a variable for the bird
var bird;

//creating a variable for the catapult
var catapult;

//creating a variable for the pigs
var pig1, pig2;

//creating a variable for the platform and the ground 
var platform, ground;

//creating a variable for the logs
var log1, log2, log3, log4;

//creating a variable for the boxes
var box1, box2, box3, box4, box5;

//creating a variable for the gamestates
var gameState;

//creating a variable for the score, bockground Image and an Image path to use the images
var score, backgroundImg, imagePath;

//creating a variable for the number of times playes
var timesPlayed;

//creating variables to load the path of external sound files
var releaseSound;
var pigSound;
var birdSound;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {

  //function call to set background image based on time
  setBackgroundImg();

  //adding sounds
  releaseSound = loadSound("sounds/bird_flying.mp3");
  pigSound = loadSound("sounds/pig_snort.mp3");
  birdSound = loadSound("sounds/bird_select.mp3");
}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {

  //creating the canvas of height 1200 and width 400 to create bodies on it
  var canvas = createCanvas(1200, 400);

  //creating the userEngine
  userEngine = Engine.create();

  //creating a userWorld for the userEngine
  userWorld = userEngine.world;

  //in the gamestate onSlingShot, the bird is attached to the slingshot. This gamestate is the by-default gamestate because when the game starts
  //we want the bord on the slingshot.
  gameState = "onSlingShot";

  //creating an object for class Ground. a static horizontal rectangle body to support all the other bodies. 
  //It will be placed at the bottom of the canvas 
  ground = new Ground(600, height - 10, 1200, 20);

  //creating a platform object using ground.js on the ground.
  //it is a big box which has the slingshot holding the bird.
  platform = new Ground(150, 305, 300, 170);

  //creating the bird using bird.js.
  //it is placed on coordinates 200 and 30 on the canvas. initially it will be attached to the constraint and will be released after performing the mouseReleased
  //function. it can also be dragged using the mouseDragged function.
  bird = new Bird(200, 30, 50, 50);

  //creation of catapult with constraint. Body of bird will be attached to the constraint.
  catapult = new SlingShot(bird.body, { x: 200, y: 50 });

  //creation of 1st layer using matter.js
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350, 60, 60);
  log1 = new Log(810, 260, 300, PI / 2);

  //creation of 2nd layer using matter.js
  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  pig2 = new Pig(810, 220, 60, 60);
  log2 = new Log(810, 180, 300, PI / 2);

  //playing the pigsound 
  pigSound.play();

  //creation of 3rd layer using matter.js
  box5 = new Box(810, 160, 70, 70);
  log3 = new Log(750, 110, 150, PI / 7);
  log4 = new Log(850, 110, 150, -PI / 7);

  //playing the birdsound
  birdSound.play();

  //the initial value of the number of times played and score will be zero
  timesPlayed = 0;
  score = 0;
}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.

function draw() {

  //adding the background Iamge 
  if (backgroundImg){
    background(backgroundImg);                    
  }
  else{
    background(0);
  }

  //updating 
  Engine.update(userEngine);

  //display of ground using matter.js
  ground.display();

  // displaying the platform
  platform.display();

  //display of bird using matter.js
  bird.display();

  //display of catapult with constraint. Body of bird will be attached to the constraint.
  catapult.display();

  //display  of 1st layer using matter.js
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  //display of 2nd layer using matter.js
  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  //display of 3rd layer using matter.js
  box5.display();
  log3.display();
  log4.display();

  //writing the things that will happen when the gamestate is equal to detached.
  if (gameState == "detached") {
    //trigger score based on visibility of each object of PIG class
    pig1.score();
    pig2.score();

    /* 
    //trigger score based on visibility of each object of LOG class
    log1.score();                      
    log2.score();
    log3.score();
    log4.score();

    //trigger score based on visibility of each object of BOX class
    box1.score();
    box2.score();
    box3.score();                        
    box4.score();
    box5.score();
    */
  }

  // display score
  //we dont want an outline
  noStroke();

  //the text size should be 35
  textSize(35);

  //the font colour should be white 
  fill("white");

  //displaying the score using the text() function
  text("Score : " + score, width - 300, 50);

  //if the number of timesplayed is equal to 4, then the game will be over with -
  if (timesPlayed == 4) {
    //a text that has no outline
    noStroke();

    // a text that has a size of 100
    textSize(100);

    //a text in white colour
    fill("white");

    //a text saying GAME OVER which is placed at the center of the canvas
    text("GAME OVER", width / 2 - 100, height / 2);
  }
  //displaying winning message when the pigs visibility is equal to or less than 0
  if (pig1.visibility <= 0 && pig2.visibility <= 0) {

    //the gamestate will change to win
    gameState = "WIN";

    //a text ,essage will be displayed with no outline
    noStroke();

    //the size of the text will be 100
    textSize(100);

    //the colour of the text will be white
    fill("white");

    //the text message will say YOU WIN and it will be located in the center of the canvas
    text("YOU WIN", width / 2 - 100, height / 2);
  }
}

//function triggered when a mouse is clicked and dragged
function mouseDragged() {
  if (catapult.constraint.bodyA != null && mouseX < width / 3) {
    //function for bird to move with repsect to mouse
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
  }
}

//function triggered when a clicked mouse is released
function mouseReleased() {
  //function call to detach(release) a body for(this.sling.bodyA) om constraint (t
  catapult.detach();
  gameState = "detached";
  releaseSound.play();
}

//function triggered when a key on keyboard is pressed
function keyPressed() {
  //writing an if condition that states that if the up arrow key is pressed and the no of times played is smaller than 4
  //and the gamestate is not equal to win then the bird will be attached back to the constraint with the timesPlaye increasing by 1
  if (keyCode == 32 && timesPlayed < 4 && gameState != "WIN") {
    //function call to attach a body to CONSTRAINT (this.sling.bodyA)
    catapult.attach(bird.body);
    timesPlayed += 1;
  }
}

//function definition to set background image based on time
async function setBackgroundImg() {
  var originalResponse = await fetch("http://worldclockapi.com/api/json/est/now");

  var jsonResponse = await originalResponse.json();

  var dateTime = jsonResponse.currentDateTime;

  var hour = dateTime.slice(11, 13);

  if (hour >= 06 && hour <= 18) {
    imagePath = "images/day.png";
  } else if (hour >= 19 && hour <= 05) {
    imagePath = "images/night3.jpg";
  }

  backgroundImg = loadImage(imagePath);
}
