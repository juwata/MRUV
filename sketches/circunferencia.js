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
let STATE = 0;

function setup() {
    createCanvas(1000, 1000);
    engine = Engine.create();
    world = engine.world;

    var ball_options={
        isStatic:false,
        isSleeping: true
    }

    createCircle(c1, 500, 150, 250, 100, 10, 30, 1.99);
    createCircle(c2, 500, 450, 250, 100, 10, 30, 1.99);
    createCircle(c3, 500, 700, 250, 100, 10, 30, 1.99);

    b1 = new Circle(270, 150, 30, ball_options);
    b2 = new Circle(320, 592, 30, ball_options);
    b3 = new Circle(430, 918, 30, ball_options);
    console.log(b1)

    //Instancie objetos aqui:

    Engine.run(engine);
}

function draw() {
    background(255);
    drawGrid(1000, 50, true);
    // displayMousePosition();

    if(STATE === 0){
        push();
        textSize(40);
        stroke("gray");
        text("QUAL BOLA CHEGA PRIMEIRO AO VALE?", 100, 50);
        textSize(25);
        text("aperte 'espaço' para soltar", 325, 75);
        pop();
        secondStop = floor(frameCount/60);
    }

    if(STATE === 1){
        push();
        countdown = secondStop + 5 - ~~(frameCount/60)
        textSize(75);
        stroke("gray");
        text( countdown, 450, 75);
        pop();
        if(countdown===0){
            STATE = 2;
            awake([b1, b2, b3]);
        }
    }

    poliDisplay(c1, "red");
    poliDisplay(c2, "blue");
    poliDisplay(c3, "yellow");

    b1.display("brown");
    b2.display("darkblue");
    b3.display("gold");

    flag(500, 385,"red");
    flag(500, 685,"blue");
    flag(500, 935,"yellow");

    push();
    text()
    pop();

    //Chame os Displays aqui:
    if(b1.getBody().position.x>=500){
        push();
        textSize(40);
        stroke("gray");
        text("TODAS!!", 425, 50);
        pop();
        engine.stop();
    }
}

function keyPressed(){
    if(key === ' ' && STATE === 0){
        STATE = 1;
    }
}