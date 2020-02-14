var frect,mrect;

function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 30, 80);
  frect.shapeColor = "green";

  mrect = createSprite(500,600,30,80);
  mrect.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  
  if(mrect.x - frect.x < mrect.width/2 + frect.width/2
    && frect.x - mrect.x < mrect.width/2 + frect.width/2
    && mrect.y - frect.y < mrect.height/2 + frect.height/2
    && frect.y - mrect.y < mrect.height/2 + frect.height/2){
      frect.shapeColor = "red";
      mrect.shapeColor = "red";
    }
    else{
      frect.shapeColor = "green";
      mrect.shapeColor = "green";
    }
  drawSprites();
}