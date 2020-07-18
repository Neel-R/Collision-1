var fixedRect, movingRect;

function setup() {
  createCanvas(2000,2000);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ) {

  movingRect.shapeColor = "cyan";
  fixedRect.shapeColor = "cyan";
  fixedRect.velocityY = 9;
  fixedRect.velocityX = 5;
  }

  else{movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";}

  drawSprites();
}