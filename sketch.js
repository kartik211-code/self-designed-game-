var backgroundImage,backgroundImg ;
var girl , girl_cycling;
var obstaclesGroup,obstacle1,obstacle2;

function preload () {

backgroundImage = loadImage("Background.jpg");
girl_cycling = loadAnimation("PNG/girl1.png","PNG/girl2.png","PNG/girl3.png","PNG/girl4.png","PNG/girl5.png","PNG/girl6.png");

obstacle1 = loadImage("PNG/obstacle1.png");
  obstacle2 = loadImage("PNG/obstacle2.png");


}

function setup (){
createCanvas (1200,800);
backgroundImg = createSprite (0,20,1200,600);
backgroundImg.addImage ("background",backgroundImage);
backgroundImg.scale=4;
//backgroundImg.x=backgroundImg.width/2;
backgroundImg.velocityX = -6;


girl = createSprite (100,600,600,300)
girl.scale = 1.5
girl.addAnimation ("cycling",girl_cycling)


obstaclesGroup = new Group();
  



}

function draw (){
  
background (255)

    


    if (backgroundImg.x<10){

//backgroundImg.x = backgroundImg.width/2;
backgroundImg.x = 1000





}






drawSprites()

spawnObstacles();

}


function spawnObstacles() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(1300,650,600,300);
      //obstacle.debug = true;
      obstacle.velocityX = -6
      
      //generate random obstacles
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.7;
      
      obstacle.lifetime = 300;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }