const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var circles;
var box;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var option={
        isStatic: true
    }
    box=Bodies.rectangle(200,200,20,20,option)

    var ground_options ={
        isStatic: true
    }
    var options={
        restitution:2
    }
   

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    circles= Bodies.circle(200,200,30,options)
    World.add(world,circles)
    World.add(world,box)

    console.log(ground);
    console.log(circles);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(circles.position.x,circles.position.y,30,30)
    rect(box.position.x,box.position.y,20,20)
}