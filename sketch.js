//Algorithm- a series of steps to be follow to get a particular

var fixedRect, movingRect;

var cd, ad;
var cdy,ady;
function setup() {
  createCanvas(1000,600);

  fixedRect =  createSprite(400, 200, 80, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 400, 80, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  

  fill (255);
  stroke (255);
  textSize(22);

  //move the movingRect with mouse
  movingRect.x =  mouseX; 
  movingRect.y = mouseY;

  //collisiondistance
  cd = fixedRect.width/2 + movingRect.width/2;
  
  ad = Math.abs ( movingRect.x - fixedRect.x )
cdy=fixedRect.height/2+movingRect.height/2;
ady=Math.abs(movingRect.y-fixedRect.y)

  if ( ad <= cd && ady<=cdy){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else { 
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  

  drawSprites();
}

