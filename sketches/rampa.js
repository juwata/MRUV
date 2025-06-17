var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    World = Matter.World,
    Detector = Matter.Detector;

let engine, world;

//Crie os corpos aqui:
let c1 = [], c2 = [], c3=[], l1;
let b1, b2, b3, b4;
let s1, s2, s3, s4;

function setup() {
    createCanvas(1000, 1000);
    engine = Engine.create();
    world = engine.world;

    createCircle(c1, 340, 60, 245, 120, 5, 25, 4.3, 90);
    createCircle(c2, 400, 430, 350, 100, 5, 30, 7.2, 100);
    createCircle(c3, 1200, 180, 700, 170, 5, 30, 13.1, 116);
    l1 = new Rect(775, 210, 5, 340, {isStatic: true, angle:radians(-51.34)});
    ballOptions={
        isStatic: false,
        friction: 0.1
    }
    b1 = new Circle(115, 100, 25, ballOptions);
    b2 = new Circle(115, 600, 25, ballOptions);
    b3 = new Circle(665, 600, 25, ballOptions);
    b4 = new Circle(665, 100, 25, ballOptions);

    console.log(b1)

    s1 = new Rect(350, 300, 5, 10, {isStatic: true, isSensor:true})

    // Instancie objetos aqui:
    console.log(b1.getBody().position.x)


    Engine.run(engine);
}

function draw() {
    background(220);
    drawGrid(1000, 50, true);
    displayMousePosition();

    poliDisplay(c1, "red");
    poliDisplay(c2, "blue");
    poliDisplay(c3, "gold");
    l1.display("green");
    b1.display("red");
    b2.display("blue");
    b3.display("gold");
    b4.display("green");

    if(b1.getBody().position.x>=350){
        push();
        fill("red");
        textSize(50);
        text("VERMELHO GANHOU!", 250, 200);
        pop();
        Engine.stop();
    }
    if(b3.getBody().position.x>=900){
        push();
        fill("gold");
        textSize(50);
        text("AMARELO GANHOU!", 250, 200);
        pop();
        Engine.stop();
    }
    if(b2.getBody().position.x>=350){
        push();
        fill("blue");
        textSize(50);
        text("AZUL GANHOU!", 250, 200);
        pop();
        Engine.stop();
    }
    if(b4.getBody().position.x>=900){
        push();
        fill("green");
        textSize(50);
        text("VERDE GANHOU!", 300, 200);
        pop();
        Engine.stop()
    }
    //Chame os Displays aqui:

}