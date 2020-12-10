const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup(){
 var canvas = createCanvas(1200,800);

 engine = Engine.create();
 world = engine.world;
  
 ground = new Base(600,400,1200,20);
  
 
}

function draw(){
 background(0); 
 Engine.update(engine); 
    

 ground.display();

 
}

