const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
var paper;

function preload()
{
	dustbinimage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(900,600);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(55,300);
	ground = new Ground (700,550,1400,10);
	dustbin1 = new Dustbin(690,538,150,15);
	dustbin2 = new Dustbin(624,445,15,170);
	dustbin3 = new Dustbin(755,445,15,170);
	
	
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("lightblue");

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
	image(dustbinimage,590,346,200,200);

  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:98,y:-98})

	}

}



