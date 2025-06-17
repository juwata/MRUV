class Rect {
    constructor(x, y, w, h,options = { isStatic: false }) {
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
        let pos = this.body.position;

        this.display = function (color = "gray") {
            
            let angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle)
            rectMode(CENTER);
            fill(color);
            rect(0, 0, w, h);
            pop();
        }

        this.outOfBounds = function () {
            if( (pos.y < 0 || pos.y > height) || (pos.x < 0 || pos.x > width)){
                return false;
            }
            else{
                return true;
            }
        }

        this.displayImg = function (image) {    
            let pos = this.body.position;
            let angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            image(image, 0, 0, w, h);
            pop();
        }
        this.getBody = function(){
            return this.body;
        }
    }
}

class Circle {
    constructor(x, y, r, options = { isStatic: false }) {
        this.body = Bodies.circle(x, y, r / 2, options);
        this.r = r;
        World.add(world, this.body);

        this.display = function (color = 122) {
            let pos = this.body.position;
            let angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(color);
            ellipse(0, 0, r);
            pop();
        }
        this.getBody = function(){
            return this.body;
        }
    }
    
}

// Funções Extras

//Display para varios objetos. 
//Coloque no primeiro parâmetr uma array com tudo o que quiser.
//No segundo parâmetro especifica a cor de todos os corpos da primeira array.
function poliDisplay(bodies, color="white"){
    for(let i = 0; i<bodies.length; i++){
        bodies[i].display(color, false);
    }
}
    
//Função pra desenhar um circulo
//Eu não quero explicar isso :(
//Inicialmente, indique uma array VAZIA onde os circulos serão colocados.
//Defina depois as posições do centro do circulo, o raio, o numero de quadrados que compoêm o circulo
//Em Square Width e Square Height, você pode definir a altura e largura dos quadrados, caso não quiser pode deixar squareHeight vazio
//Division divide o circulo em uma fração, tipo se você colocar 2, ele vai mostrar apenas 1/2 (meio) do circulo. caso 3, 1/3 (terço) e assim vai.
function createCircle(circleArray, centerX, centerY, radius, numSquares, squareWidth, squareHeight=squareWidth, division=1, starterAngle=0) {

    for (let i = 0; i < numSquares/division; i++) {
        let angle = map(i, 0, numSquares, 0, TWO_PI)+radians(starterAngle);

        let x = centerX + radius * cos(angle);
        let y = centerY + radius * sin(angle);

        circleArray[i] = new Rect(x, y, squareWidth, squareHeight, {isStatic: true, angle:angle});
        // circleArray[i].angle(angle);
    }
}

function drawGrid(w, gap, intersections=false){
    line(w/2, 0, w/2, w);
    line(0, w/2, w, w/2);
    for(let i = 0; i<w; i+=gap){
        if(intersections===true){
            push();
            stroke("#e1e1e1");
            line(0, i, w, i);
            line(i, 0, i, w);
            pop();
        }
        line(w/2-10, i, w/2+10, i);
        line(i, w/2-10, i, w/2+10);
        
    }
}

function displayMousePosition(){
    push();
    text("mouse X: "+mouseX, 0, 20);
    text("mouse Y: "+mouseY, 0, 35)
    pop();
}

function displayFrameCount(division=1){
    push();
    text("Frame Count: "+floor(frameCount/division), 0, 50);
    pop();
}

function awake(bodies){
    for(let i = 0; i<bodies.length; i++){
        Matter.Sleeping.set(bodies[i].getBody(), false);
    }
}

function flag(x, y, color){
    push();
    rectMode(CENTER)
    rect(x,y-15, 2.5,50);
    fill(color)
    triangle(x, y-40,  x, y-20,  x+20,y-30);
    pop();
}