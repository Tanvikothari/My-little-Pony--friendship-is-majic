var gameState= "start";
textSize(20);

 var Twilight= createSprite(104,318,20,20);
 Twilight.addImage("Twilight.jfif_1");
 Twilight.scale= 0.8;

var kid1= createSprite(346,50,20,20);
kid1.addImage("kid_36_1");
kid1.scale= 0.3;
kid1.visible= false;
var coin= createSprite(216,138,20,20);
coin.addImage("coin_gold_1");
coin.scale= 0.7; 

var welcome= createSprite(200,200,400,400);
welcome.scale=1.8;
Twilight.visible= false;

var Tscore= 0;
var Kscore= 0;
  var AppleStarsImg, LadyJusticeImg, LeadwingImg, NoteworthyImage, pinacoladaImage,CoinImg;
  var TwilightImage, AppleJackImage;
function preload () {
AppleStarsImg= loadImage ("My little pony/AppleStars.png");
AppleJackImage= loadImage ("My little pony/Applejack.png");
CoinImg= loadImage ("My little pony/Coin.png");
LadyJusticeImg= loadImage ("My little pony/LadyJustice.png");
LeadwingImg= loadImage ("My little pony/Leadwing.png");
NoteworthyImage= loadImage ("My little pony/Noteworthy.png");
pinacoladaImage= loadImage ("My little pony/ PinaColada.png");
TwilightImage= loadImage ("My little pony/Twilight.png");
}
 function setup () {

  var Twilight= createSprite(104,318,20,20);
  Twilight.addImage("TwilightImage");
  Twilight.scale= 0.8;
 
 var pinacolada= createSprite(346,50,20,20);
   pinacolada.addImage("pinacoladaImage");
 pinacolada.scale= 0.3;
 pinacolada.visible= false;
 var coin= createSprite(216,138,20,20);
 coin.addImage("coin_gold_1");
 coin.scale= 0.7; 
 
 var welcome= createSprite(200,200,400,400);
 welcome.scale=1.8;
 Twilight.visible= false;
 
 }
function draw() {
  background("White");
  fill("purple");
 text(Tscore,10,220);
 text(Kscore,10,190);

if (gameState=== "start"){
  welcome.addImage("Welcome");
 
  
    
      text("Hey welcome to my game", 70,376);
      text("Press 'f' to start", 110,396);
}

if(keyDown("f")){
  welcome.visible= false;
  gameState="serve";
}

if (gameState==="serve"){
  
    text("PRESS's'TO SERVE",80,185);
    Twilight.visible= true;
    kid1.visible= true;
  
}

  if(keyDown("s")&&gameState==="serve"){
    gameState="play";
//Twilight.visible= true;
//kid1.visible= true;
//welcome.visible= false;
  coin.velocityX=+2;
  coin.velocityY=-2;
  
  }

//kid1.bounceOff(coin);

    
  Twilight.x= coin.x;

kid1.x= World.mouseX;
  
  
  
createEdgeSprites();
coin.bounceOff(leftEdge);
coin.bounceOff(rightEdge);
 coin.bounceOff(kid1);
  coin.bounceOff(Twilight);

if (coin.y>400 || coin.y<0 ) {
  coin.x= 200;
  coin.y= 200;
  coin.velocityY= 0;
  coin.velocityX= 0;

  if (coin.y>400) {
    
  Kscore++;
  }
  else {
    
    Tscore++;
  }
  gameState="serve";
}
if (Tscore===3){
  
    Twilight.addImage("Fluttershy...jfif_1");
  }
if (Tscore===6){
    
  Twilight.addImage("Rarity.jfif_1");
  }
if (Tscore===9){
    
  Twilight.addImage("Pinkie pie.jfif_1");
  }
  if (Tscore===12){
      
  Twilight.addImage("applejack.jfif_1");
  }
  if (Tscore===15){
     
  Twilight.addImage("ranbow dasn.jfif_1");
 
  }
  
  if(Tscore===18){
  gameState= "end";  
  }
  
  if(gameState==="end"){
    
     welcome.addImage("Welcome");
    
      text("Game Over", 70,76);
      text("Press 'r' to start", 70,96);
    
  }
  
  if(keyDown("r")&&gameState==="end"){
    gameState="serve";
    Tscore=0;
    Kscore=0; 
  }
  
  drawSprites();
  
}
