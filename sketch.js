
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;
var ground;
var ball;


function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
  box1 = new Box(750,545,400,20);	
  box2 = new Box(550,505,20,90);
  box3 = new Box(950,505,20,90);

  ground = new Ground(500,650,1000,20);

  ball = new Ball(50,100,25,25);
}


function draw() {
  rectMode(CENTER);
  background(0);  
   Engine.update(engine);
   keyPressed();
   keyPressed2();
   box1.display();
   box2.display();
   box3.display();
   ball.display();
   ground.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0.9,y:-0.9})
  }
}
function keyPressed2(){
  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position,{x:0,y:0.9})
  }
}


  


