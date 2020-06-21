const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,bar1,bar2,bar3;

function setup(){
    var canvas = createCanvas(1536,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,697,50,50);
    ground = new Ground2(1536/2,698,1536,20);
    
    bar1 = new Ground(1150,650,15,100);
    bar2 = new Ground((1150+1350)/2,698,200,20);
    bar3 = new Ground(1350,650,15,100);
}

function draw(){
    background("blue");
    Engine.update(engine);
    box1.display();
    ground.display();
    bar1.display();
    bar2.display();
    bar3.display(); 
}
function keyPressed() {
    if(keyCode === UP_ARROW){
       Matter.Body.applyForce(box1.body,box1.body.position,{x:200,y:-200});
    }
}
