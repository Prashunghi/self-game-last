var player;
var lazer1, lazer2, lazer3, lazer4, lazer5, lazer6, lazer1Img,lazer2Img;
var diamond, diamondImg;
var edges,leftBoundary,rightBoundary;
var score=0;
var redCarImg,blueCarImg,orangeCarImg, yellowCarImg, pinkCarImg, trackImg;
var bg, bgImg;
var lazer1Group, lazer2Group, lazer3Group, lazer4Group;
function preload(){

//lazer1Img = loadImage("lazer1.png");
//lazer2Img = loadImage("lazer2.png");
diamondImg = loadImage("diamond.png")
redCarImg= loadImage("red.png");
blueCarImg= loadImage("bluecar.png");
orangeCarImg= loadImage("orange.png");
yellowCarImg = loadImage("yellow.png");
pinkCarImg = loadImage("pink.png");
trackImg = loadImage("track.jpg")
bgImg = loadImage("track.jpg")
}


function setup(){
    var canvas = createCanvas(700,800);
 bg = createSprite(350,300)
 bg.addImage(bgImg)
 bg.scale = 1
 bg.velocityY = 10;
/*lazer1 = createSprite(random(150,500),random(300,500),random(10,15),random(50,100));
lazer1 = createSprite(300,0,10,80);
lazer1.addImage(orangeCarImg);
lazer1.scale = 0.75
lazer1.setCollider("rectangle",0,0,100,250);
lazer1.velocityY = 10;*/


/*lazer2 = createSprite(random(25,500),random(25,500),random(10,15),random(50,100));
lazer2 = createSprite(180,0,10,80);
lazer2.addImage(blueCarImg);
lazer2.setCollider("rectangle",0,0,100,250);
lazer2.scale = 0.3
lazer2.velocityY = 10;



//lazer3 = createSprite(random(75,500),random(50,500),random(10,15),random(50,100));
lazer3 = createSprite(510,0,10,80);
lazer3.addImage(pinkCarImg)
lazer3.setCollider("rectangle",0,0,100,250);
lazer3.scale = 0.7
lazer3.velocityY = 10;

//lazer4 = createSprite(random(200,500),random(75,500),random(10,15),random(50,100));
lazer4 = createSprite(400,0,10,80);
lazer4.addImage(yellowCarImg)
lazer4.setCollider("rectangle",0,0,100,250);
lazer4.scale = 0.7
lazer4.velocityY = 10; */







 diamond = createSprite(random(200,400),600,40,40);
diamond.addImage(diamondImg);
diamond.scale = 0.4;
diamond.setCollider("rectangle",0,0,50,50);

//diamond.debug = true;


player = createSprite(300,650,50,50);
//player.shapeColor = "black";
player.addImage(redCarImg)
player.scale = 0.75;
player.setCollider("rectangle",0,0,100,250);
//player.debug = true;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
  

score = 0;
stroke("black");
fill("black");
textSize(20);

lazer1Group = new Group; 

lazer2Group = new Group; 

lazer3Group = new Group; 

lazer4Group = new Group; 


}

function draw(){
    background(0);

    if (bg.y >700){
      bg.y = bg.height/2;
    }

    if(keyIsDown(RIGHT_ARROW)){
        player.velocityX = 5;
        player.velocityY = 0;
      }
      
  /*    if(keyIsDown(UP_ARROW)){
        player.velocityX = 0;
        player.velocityY = -10;
      }
      
      if(keyIsDown(DOWN_ARROW)){
        player.velocityX = 0;
        player.velocityY = 10;
      }
    */  
      if(keyIsDown(LEFT_ARROW)){
        player.velocityX = 5;
        player.velocityY = 0;
      }
   

      spawnLazers1();
      spawnLazers2();
      spawnLazers3();
      spawnLazers4();

  
if(player.isTouching(diamond)){

  score= score+1;
 // diamond.visible = false;
diamond.y = 600
diamond.x = Math.round(random(75, 550))
}





    drawSprites();

text("Score:" + score,35,50)




function spawnLazers1(){
  if(World.frameCount % 250 === 0){
    lazer1 = createSprite(300,800,10,80);
    lazer1.addImage(orangeCarImg);
    lazer1.scale = 0.75
    lazer1.setCollider("rectangle",0,0,100,250);
    lazer1.debug = true;
    lazer1.velocityY = 10;
    lazer1.y = Math.round(random(-10,-500));
    lazer1Group.add(lazer1);
  }

  
}
function spawnLazers2(){
  if(World.frameCount % 200 === 0){
    lazer2 = createSprite(180,800,10,80);
    lazer2.addImage(blueCarImg);
    lazer2.scale = 0.33
    lazer2.setCollider("rectangle",0,0,270,600);
    lazer2.debug = true;
    lazer2.velocityY = 10;
    lazer2.y = Math.round(random(-10,-500));
    lazer2Group.add(lazer2);
  }

  
}


function spawnLazers3(){
  if(World.frameCount % 150 === 0){
    lazer3 = createSprite(510,800,10,80);
    lazer3.addImage(pinkCarImg);
    lazer3.scale = 0.75
    lazer3.setCollider("rectangle",0,0,100,250);
    lazer3.debug=true;
    lazer3.velocityY = 10;
    lazer3.y = Math.round(random(-10,-700));
    lazer3Group.add(lazer3);
  }

  
}

if(lazer1Group.isTouching(player)){
  stroke("white");
  fill (0);
  textSize (70);
  text("Game Over", 200, 400);
  lazer1Group.setVelocityYEach(0);
  lazer2Group.setVelocityYEach(0);
  lazer3Group.setVelocityYEach(0);
  lazer4Group.setVelocityYEach(0);
  player.velocityX = 0

}
if(lazer2Group.isTouching(player)){
  stroke("white");
  fill (0);
  textSize (70);
  text("Game Over", 200, 400);
  lazer1Group.setVelocityYEach(0);
  lazer2Group.setVelocityYEach(0);
  lazer3Group.setVelocityYEach(0);
  lazer4Group.setVelocityYEach(0);
  player.velocityX = 0

}
if(lazer3Group.isTouching(player)){
  stroke("white");
  fill (0);
  textSize (70);
  text("Game Over", 200, 400);
  lazer1Group.setVelocityYEach(0);
  lazer2Group.setVelocityYEach(0);
  lazer3Group.setVelocityYEach(0);
  lazer4Group.setVelocityYEach(0);
  player.velocityX = 0;

}
if(lazer4Group.isTouching(player)){
  stroke("white");
  fill (0);
  textSize (70);
  text("Game Over", 200, 400);
  lazer1Group.setVelocityYEach(0);
  lazer2Group.setVelocityYEach(0);
  lazer3Group.setVelocityYEach(0);
  lazer4Group.setVelocityYEach(0);
  player.velocityX = 0

}

function spawnLazers4(){
  if(World.frameCount % 150 === 0){
    lazer4 = createSprite(400,0,10,80);
    lazer4.addImage(yellowCarImg);
    lazer4.scale = 0.75
    lazer4.setCollider("rectangle",0,0,100,250);
    lazer4.debug = true;
    lazer4.velocityY = 10;
    lazer4.y = Math.round(random(-10,-1000));
    lazer4Group.add(lazer4);
    
  }

  
}




}
