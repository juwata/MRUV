var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    World = Matter.World;

var engine, world;

//Crie os corpos aqui:
let c1=[], c2=[], c3=[];
let b1, b2, b3;

function setup() {
    createCanvas(1000, 1000);
    engine = Engine.create();
    world = engine.world;

    createCircle(c1, 500, 50, 250, 100, 10, 30, 1.99);
    createCircle(c2, 500, 400, 250, 100, 10, 30, 1.99);
    createCircle(c3, 500, 700, 250, 100, 10, 30, 1.99);

    b1 = new Circle(270, 50, 30);
    b2 = new Circle(320, 540, 30);
    b3 = new Circle(430, 918, 30);

    //Instancie objetos aqui:


    Engine.run(engine);
}

function draw() {
    background(255);
    drawGrid(1000, 50, true);
    displayMousePosition();

    poliDisplay(c1, "red");
    poliDisplay(c2, "blue");
    poliDisplay(c3, "gold");

    poliDisplay([b1, b2, b3], "gray")

    //Chame os Displays aqui:
    if(b1.getBody().position.x>=500){
        engine.stop();
    }

}