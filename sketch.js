const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;

var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, 590, 3200, 20, "#795548", true);
  leftWall = new Base(110, 350, 600, 100, "#8d6e63", true);
  rightWall = new Base(1400, 350, 600, 100, "#8d6e63", true);

  bridge = new Bridge(16, { x: 350, y: 300});
  jointPoint = new Base(1100, 300 + 10, 40, 20, "#8d6e63", true);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(500, 900);
    var y = random(-10, 140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  bridge.show();
  leftWall.show();
  rightWall.show();

  for (var stone of stones) {
    stone.show();
  }
}
