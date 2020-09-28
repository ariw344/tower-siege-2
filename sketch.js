const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var slingshot;  
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  ground = new Ground(450, 350, 300, 20);
  realGround = new Ground(400, 390, 800, 20)
  block1 = new Box(350, 330, 30, 40);
  block2 = new Box(380, 330, 30, 40);
  block3 = new Box(410, 330, 30, 40);
  block4 = new Box(440, 330, 30, 40);
  block5 = new Box(470, 330, 30, 40);
  block6 = new Box(500, 330, 30, 40);
  block7 = new Box(530, 330, 30, 40);
  block8 = new Box(380, 290, 30, 40);
  block9 = new Box(410, 290, 30, 40);
  block10 = new Box(440, 290, 30, 40);
  block11 = new Box(470, 290, 30, 40);
  block12 = new Box(500, 290, 30, 40);
  block13 = new Box(410, 250, 30, 40);
  block14 = new Box(440, 250, 30, 40);
  block15 = new Box(470, 250, 30, 40);
  block16 = new Box(440, 210, 30, 40);
  polygon = new Box(100, 200, 50, 50);
  slingshot = new SlingShot(polygon.body, {x:150, y:200});
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  drawSprites();
  ground.display();
  realGround.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  slingshot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}
function mouseReleased() {
  slingshot.fly();
}