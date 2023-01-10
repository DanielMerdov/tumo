new p5()

let currentTime = int(millis() / 1000)

function setup() {
    let cnv = createCanvas(800,500);
    let xPosition = (windowWidth - width) / 2;
    let yPosition = (windowHeight - height) / 2;
    cnv.position(xPosition, yPosition);
    Game.addCommonBalloon()
};

function draw() {
    background('skyblue');

    for (let balloon of Game.balloons) {    
        balloon.display();
        balloon.move(Game.score);

        if (Math.floor(balloon.y) <= Math.floor(balloon.size / 2)) {
            Game.checkIfBalloonDeleted()
        }

        if (Math.floor(balloon.y) <= Math.floor(balloon.size / 2) && balloon.color != 'black' && balloon.color != 'orange' && Game.lifes > 0) {
            Game.lifes -= 1
            console.log(Math.floor(balloon.y))
        };
        
        if (Game.lifes == 0) {
            noLoop();
            Game.balloons.length = 0;
            background(136, 220, 166);
            let finalScore = Game.score;
            textSize(64);
            fill('white');
            textAlign(CENTER, CENTER);
            text('FINISH', 400, 230);
            textSize(34);
            text('Score: ' + finalScore, 400, 280); 
        };
    };

    textSize(32);
    fill('black');
    textAlign(LEFT, CENTER);
    if (Game.lifes != 0) {
        text('Score: ' + Game.score, 20, 40);
    } else {
        
    };

    textSize(32);
    fill('black');
    if (Game.lifes > 0) {
        text('Lifes: ' + Game.lifes, 20, 80);
    }else {
        
    };

    if (frameCount % 50 === 0) {
        Game.addCommonBalloon();
    };

    if (frameCount % 90 === 0) {
        Game.addUniqBalloon();
    };

    if (frameCount % 120 === 0) {
         Game.addAngryBalloon();
    };
    if (frameCount % 500 === 0) {
        Game.addLifeBalloon();
    };
};

function mousePressed() {
    if (!isLooping()) {
        loop()
        Game.score = 0
        Game.lifes = 1
    };
    Game.chekIfBalloonBurst()
};

class Game {
    static balloons = [];
    static score = 0;
    static lifes = 1

    static addCommonBalloon() {
        let commonBalloon = new CommonBalloon('blue', 50);
        this.balloons.push(commonBalloon);
    };

    static addUniqBalloon() {
        let uniqBalloon = new UniqBalloon('green', 30);
        this.balloons.push(uniqBalloon);
    };

    static addAngryBalloon() {
        let angryBalloon = new AngryBalloon('black', 50);
        this.balloons.push(angryBalloon);
    };
    static addLifeBalloon() {
        let lifeBalloon = new LifeBalloon('orange', 25);
        this.balloons.push(lifeBalloon);
    };    

    static chekIfBalloonBurst() {
        this.balloons.forEach((balloon, index) => {
            let distance = dist(balloon.x, balloon.y, mouseX, mouseY);
            if (distance <= balloon.size/2) {
                balloon.burst(index)
            }
        })
    }

    static checkIfBalloonDeleted() {
        this.balloons.forEach((balloon, index) => {
            if (Math.floor(balloon.y) <= Math.floor(balloon.size / 2)) {
                balloon.delete(index)
            }
        })
    }
};




class CommonBalloon {
    constructor(color, size) {
        this.x = random(width);
        this.y = random(height - 10, height + 50);
        this.color = color;
        this.size = size;
    };

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
        line (this.x, this.y + this.size / 2, this.x, this.y + 2*this.size);
    };

    
    move(score) {
        if (score <  100) {
            this.y -= 1 
        }else if (score >= 100 && score <= 200) {
            this.y -= 1.5
        } else {
            this.y -= 2
        };
        
    };

    burst(index) {
        Game.balloons.splice(index, 1);
        Game.score += 1;
    };

    delete(index){
        if (Math.floor(this.y) <= Math.floor(this.size / 2)) {
            Game.balloons.splice(index, 1)
        };
    };
};

class UniqBalloon extends CommonBalloon {
    constructor(color, size) {
        super (color, size)
    };

    burst(index) {
        Game.balloons.splice(index, 1);
        Game.score += 10;
    };
};

class AngryBalloon extends CommonBalloon {
    constructor(color, size) {
        super (color, size)
    };

    burst(index) {
        Game.balloons.splice(index, 1);
        Game.score -= 10;
    };
};

class LifeBalloon extends CommonBalloon {
    constructor(color, size) {
        super (color, size)
    };

    burst(index) {
        Game.balloons.splice(index, 1);
        Game.lifes += 1;
    };
};


 


  




