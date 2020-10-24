var bullet1, wall, line1, line2;
var speed,weight;

function setup() {
  createCanvas(1536,300);
  bullet1 = createSprite(50, 50, 50, 20);
  bullet2 = createSprite(50, 150, 50, 20);
  bullet3 = createSprite(50, 250, 50, 20);
  line1 = createSprite(width/2-40, 100, width-10, 10);
  line2 = createSprite(width/2-40, 200, width-10, 10);
  wall = createSprite(1500,150,20,height)
  speed = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  weight = random(400,1500);
  bullet1.velocityX = speed;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet1.shapeColor = color("white")
  bullet2.shapeColor = color("white")
  bullet3.shapeColor = color("white")
  wall.shapeColor = color("white")
}

function draw() {
  background(0,0,0); 
  if(wall.x-bullet1.x < (bullet1.width+wall.width)/2) {
    var def=0.5*weight*speed*speed/22500
    bullet1.velocityX = 0
  }
  if(wall.x-bullet2.x < (bullet2.width+wall.width)/2) {
    var def2=0.5*weight*speed*speed/22500
    bullet2.velocityX = 0
  }
  if(wall.x-bullet3.x < (bullet3.width+wall.width)/2) {
    var def3=0.5*weight*speed*speed/22500
    bullet3.velocityX = 0
  }

  if(def> 180){
    bullet1.shapeColor=color(255,0,0)
  }
  if(def<180 && def>100){
    bullet1.shapeColor=color(230,230,0)
  }
  if(def<100){
    bullet1.shapeColor=color(0,255,0)
  }

  if(def2> 180){
    bullet2.shapeColor=color(255,0,0)
  }
  if(def2<180 && def2>100){
    bullet2.shapeColor=color(230,230,0)
  }
  if(def2<100){
    bullet2.shapeColor=color(0,255,0)
  }

  if(def3> 180){
    bullet3.shapeColor=color(255,0,0)
  }
  if(def3<180 && def3>100){
    bullet3.shapeColor=color(230,230,0)
  }
  if(def3<100){
    bullet3.shapeColor=color(0,255,0)
  }
  drawSprites();
}