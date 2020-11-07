
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,500) ;
  
  monkey=createSprite(50,450,10,10);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(250,490,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0
}
  
function draw() {
background(255,225,102)
  if(ground.x<0){
    ground.x=ground.width/2
    
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
    
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstacleGroup.setVelocityXEach(0);
FoodGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(-1);
FoodGroup.setLifetimeEach(-1);
  }
  if(FoodGroup.isTouching(monkey))
{
FoodGroup.destroyEach();
score= score+1;
}                                             
  spawnFood();
  spawnobstacle();
  drawSprites();
  stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 400,50);
  
}

function spawnFood(){
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,320));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime=300
    monkey.depth=banana.depth+1
    FoodGroup.add(banana)
  }
  
}

function spawnobstacle(){
  
if (frameCount % 300 === 0){
   var obstacle = createSprite(800,470,10,40);
   obstacle.velocityX = -(6 + score/100);
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.15
  obstacle.lifetime=300
  obstacleGroup.add(obstacle)
}
}
  






