const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    bird1 = new Bird(200,100);
    bird2 = new Bird(150,100);
    bird3 = new Bird(100,100);
    bird4 = new Bird(250,100);
    bird5 = new Bird(300,100);

    log7 = new Ground(200,10,300,30);
    chain1 = new Chain(log7.body,bird1.body,0);
    chain2 = new Chain(log7.body,bird2.body,-50);
    chain3 = new Chain(log7.body,bird3.body,-100);
    chain4 = new Chain(log7.body,bird4.body,50);
    chain5 = new Chain(log7.body,bird5.body,100);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    log7.display();

    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
       
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bird3.body,bird3.body.position,{x:-50,y:-10})

}
}

