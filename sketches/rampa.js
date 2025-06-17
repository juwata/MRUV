var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    World = Matter.World,
    Detector = Matter.Detector;

let engine, world;
let STATE;

//Crie os corpos aqui:
let c1 = [], c2 = [], c3 = [], l1;
let catch1 = [], catch2 = [], catch3 = [], catch4 = [];
let b1, b2, b3, b4;
let s1, s2, s3, s4;
let frame;

function setup() {
    createCanvas(1000, 1000);
    engine = Engine.create();
    world = engine.world;
    STATE = 0;

    createCircle(c1, 340, 60, 245, 120, 5, 25, 4.3, 90); //Perimetro: 357,9px.
    createCircle(catch1,370, 315, 20, 15, 5, 10, 1.7, -5)
    catch1.push(new Rect(390, 285, 5, 50, {isStatic:true}));

    createCircle(c2, 400, 475, 335, 150, 5, 25, 6.25, 100); //Perimetro: 346,72px.
    createCircle(catch2,370, 815, 20, 15, 5, 10, 1.7, -5);
    catch2.push(new Rect(390, 785, 5, 50, {isStatic:true}));

    createCircle(c3, 1200, 175, 700, 250, 5, 30, 13, 116); //Perimetro: 335,7px.
    createCircle(catch3,925, 815, 20, 15, 5, 10, 1.7, -5)
    catch3.push(new Rect(945, 785, 5, 50, {isStatic:true}));

    l1 = new Rect(775, 206, 5, 340, { isStatic: true, angle: radians(-51.34) }); //Perimetro: ~320
    createCircle(catch4,925, 315, 20, 15, 5, 10, 1.7, -5)
    catch4.push(new Rect(945, 285, 5, 50, {isStatic:true}));
    
    ballOptions = {
        isStatic: false,
        friction: 0,
        isSleeping: true,
    }
    b1 = new Circle(112, 100, 20, ballOptions);
    b2 = new Circle(110, 620, 20, ballOptions);
    b3 = new Circle(662, 600, 20, ballOptions);
    b4 = new Circle(662, 100, 20, ballOptions);

    console.log(b1)

    s1 = new Rect(350, 300, 5, 10, { isStatic: true, isSensor: true })

    // Instancie objetos aqui:
    console.log(b1.getBody().position.x)


    Engine.run(engine);
}

function draw() {
    background(255); 
    drawGrid(1000, 50, true);
    // displayMousePosition();
    // displayFrameCount(60);

    flag(350, 300, "red");
    flag(350, 800, "blue");
    flag(905, 800, "gold");
    flag(905, 300, "green")

    poliDisplay(c1, "red");
    poliDisplay(catch1, "red");
    poliDisplay(c2, "blue");
    poliDisplay(catch2,"blue");
    poliDisplay(c3, "gold");
    poliDisplay(catch3, "gold");
    l1.display("green");
    poliDisplay(catch4, "green");
    
    b1.display("red");
    b2.display("blue");
    b3.display("gold");
    b4.display("green");

    if(STATE === 0){
        push();
        textSize(40);
        stroke("gray");
        text("QUAL BOLA CHEGA PRIMEIRO AO FINAL?", 100, 50);
        textSize(25);
        text("aperte 'espaço' para soltar", 325, 75);
        pop();

        push();
        textSize(20)
        stroke(0);
        fill("red")
        text("perimetro: ~357px", 150, 100);
        pop();

        push();
        textSize(20)
        stroke(0);
        fill("Green")
        text("perimetro: ~320px", 700, 100);
        pop();

        push();
        textSize(20)
        stroke(0);
        fill("Blue")
        text("perimetro: ~346px", 150, 600);
        pop();

        push();
        textSize(20)
        stroke(0);
        fill("Gold")
        text("perimetro: ~335px", 700, 600);
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
            awake([b1,b2,b3,b4])
        }
    }


    if (STATE === 2) {
        if (b1.getBody().position.x >= 350) {
            push();
            fill("red");
            textSize(50);
            text("VERMELHO GANHOU!", 250, 200);
            pop();
            // Engine.stop();
        } 
        else if (b2.getBody().position.x >= 350) {
            push();
            fill("blue");
            textSize(50);
            text("AZUL GANHOU!", 250, 200);
            pop();
            // Engine.stop();
        }
        else if (b3.getBody().position.x >= 900) {
            push();
            fill("gold");
            textSize(50);
            text("AMARELO GANHOU!", 250, 200);
            pop();
            // Engine.stop();
        }
        
        else if (b4.getBody().position.x >= 900) {
            push();
            fill("green");
            textSize(50);
            text("VERDE GANHOU!", 300, 200);
            pop();
            // Engine.stop();
        }
    }
    //Chame os Displays aqui:
}

function keyPressed() {
    if (key === ' ' && STATE === 0){
        STATE = 1;
    }
}

