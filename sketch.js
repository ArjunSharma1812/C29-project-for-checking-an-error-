const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1, wall2;
var bridge;
var jointLink;
var joinPoint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall1 = new Base(width-200 ,height-100 ,370, 300);
  wall2 = new Base(180 ,830 ,370, 300);
  joinPoint = new Base(1560, height-200, 50, 50);
  bridge = new Bridge(10,{x: 365 ,y: 980 });
  Matter.Composite.add(bridge.body, joinPoint)
  jointLink = new Link(bridge, joinPoint);
}

function draw() {
  background(51);
  Engine.update(engine);
  wall1.display();
  wall2.display();
  joinPoint.display();
  bridge.show();
}
