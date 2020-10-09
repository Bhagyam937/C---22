const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var ground;
var ball;

function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  options = {
     isStatic:true
  }

  ground = Bodies.rectangle(200,370,400,20,options);

  World.add(world,ground);

  console.log(ground.position.x);
  console.log(ground.position.y);
  
  var ball_options = {
    restitution:1    
  }
  ball = Bodies.circle(200,100,20,ball_options);


  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

  var pos = ground.position;
  
  rectMode(CENTER);
  rect(pos.x,pos.y,400,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y,20,20);
  

}