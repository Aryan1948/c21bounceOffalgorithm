 var fixedObject;
 var movingObject;
 var fixedObject2;
 var movingObject2;
function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(100,200,50,100);
  fixedObject.velocityX=3;
  fixedObject.shapeColor="green";
  fixedObject.debug=true;
  movingObject = createSprite(600,200,50,100);
  movingObject.velocityX=-3;
  movingObject.shapeColor="green";
  movingObject.debug = true;
  fixedObject2 = createSprite(600,300,50,100);
  movingObject2 =createSprite(600,100,50,100);
  fixedObject2.velocityY=-3;
  movingObject2.velocityY=3;


}

function draw() {
  background("black");  
  
  


  
  bounceOff(fixedObject,movingObject);
  bounceOff(fixedObject2,movingObject2);
  drawSprites();
    }


function bounceOff(object1,object2){
  if (object2.x-object1.x<object2.width/2+object1.width/2
    && object1.x-object2.x<object2.width/2+object1.width/2)


  {
    object1.velocityX=object1.velocityX*(-1);
     object2.velocityX=object2.velocityX*(-1);

  }

  if (object2.y-object1.y<object2.height/2+object1.height/2
    && object1.x-object2.y<object2.height/2+object1.height/2){
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
    


  }







}


















