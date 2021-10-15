
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftRect;
var rightRect;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballOptions = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(600,200,20,ballOptions);
	World.add(world,ball);
	ground = new Ground(600,590,1200,10);
	leftRect = new Ground(750,535,10,100);
	rightRect = new Ground(900,535,10,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(CENTER);
  fill ("red");
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  leftRect.display();
  rightRect.display();
  drawSprites();
 
}
function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})	
	}
}



