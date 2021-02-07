
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob,bob1,bob2,bob3,bob4;
var roof;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	bobDiameter=40
	startbobpositionx=width/2
	startbobpositiony=height/4+500

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(startbobpositionx-bobDiameter*2,startbobpositiony,bobDiameter);
	bob1 = new Bob(startbobpositionx-bobDiameter,startbobpositiony,bobDiameter);
	bob2 = new Bob(startbobpositionx,startbobpositiony,bobDiameter);
	bob3 = new Bob(startbobpositionx+bobDiameter,startbobpositiony,bobDiameter);
	bob4 = new Bob(startbobpositionx+bobDiameter*2,startbobpositiony,bobDiameter);
	roof = new Ground(350,70,400,20)

	rope= new Rope(bob.body,roof.body,-bobDiameter*2,0);
	rope1 =new Rope(bob1.body,roof.body,-bobDiameter*1,0);
	rope2 =new Rope(bob2.body,roof.body,0,0);
	rope3 =new Rope(bob3.body,roof.body,+bobDiameter,0);
	rope4 =new Rope(bob4.body,roof.body,+bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 bob.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 roof.display();
 rope.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:50,y:-45})
	}
}


