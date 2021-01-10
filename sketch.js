const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;

var ground;

var plinkos = [];
var divi = [];
var particles = [];

var gameState, particle, turn, score;

gameState = "start";
turn = 0;
score = 0;

var divisionHeight = 300;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  // create ground
  ground = new Ground(width/2,height,width,20);

  //creating plinkos
  createPlinkos();

  // creatind divisions
  createDivisons();

}

function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);
  Engine.update(engine);

  // divison scores
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  // displaying ground
  ground.display();

  //displaying plinkos
  displayPlinkos();

  // display particles
  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 300) {
        score += 500;

        particle = null;

        if (turn >= 5) {
          gameState = "end";
        }
      } else if (particle.body.position.x < 600 && particle.body.position.x > 301) {
        score += 100;
        particle=null;
        if (turn >= 5) {
          gameState ="end";
        }
      } else if (particle.body.position.x < 900 && particle.body.position.x > 601) {
        score += 200;
        particle=null;
        if (turn >= 5) {
          gameState ="end";
        }
      }
    }
  }
  
  // displaying divisions
  displayDivisons();

  if ( gameState == "end") {
    textSize(100);
    text("GameOver", 150, 250);
  }

  drawSprites();
}

// create particle of mouse click
function mousePressed() {
  if (gameState === "start") {
    turn++;
    particle = new Particle(mouseX, 10, 10, 10)
  }
}
