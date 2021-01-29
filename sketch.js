var elephantImage, hippoImage, monkeyImage, pandaImage, panda, elephant,hippo,monkey
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32
var score=0
function preload(){
elephantImage=loadImage("/images/elephants.png")
hippoImage=loadImage("/images/hippo.png")
monkeyImage=loadImage("/images/monkey.png")
pandaImage=loadImage("/images/panda.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight+300);
   panda=createSprite(900,750);
  panda.addImage(pandaImage)
  panda.scale=0.15

  elephant=createSprite(250,250);
  elephant.addImage(elephantImage)
  elephant.scale=0.13

  hippo=createSprite(720,350);
  hippo.addImage(hippoImage)
  hippo.scale=0.13

  monkey=createSprite(990,450);
  monkey.addImage(monkeyImage)
  monkey.scale=0.14

  elephant2=createSprite(1280,480);
  elephant2.addImage(elephantImage)
  elephant2.scale=0.13



   wall1=createSprite(250,150,5,100)
   wall2=createSprite(330,150,5,100)
   wall3=createSprite(700,150,5,530)
   wall4=createSprite(780,150,5,380)
   wall5=createSprite(153,200,200,5)
   wall6=createSprite(153,280,200,5)
   wall7=createSprite(250,380,5,200)
   wall8=createSprite(330,330,5,100)
   wall9=createSprite(415,200,177,5)
   wall10=createSprite(377,280,100,5)
   wall11=createSprite(430,415,5,270)
   wall12=createSprite(500,330,5,255)
   wall13=createSprite(520,550,180,5)
   wall14=createSprite(598,460,200,5)
   wall15=createSprite(700,510,5,100)
   wall16=createSprite(610,600,5,100)
   wall17=createSprite(840,560,280,5)
   wall18=createSprite(710,650,200,5)
   wall19=createSprite(805,725,5,150)
   wall20=createSprite(980,485,5,150)
   wall21=createSprite(840,415,280,5)
   wall22=createSprite(915,336,280,5)
   wall23=createSprite(1055,435,5,200)
   wall24=createSprite(1155,535,200,5)
   wall25=createSprite(1255,440,5,200)
   wall26=createSprite(1350,340,200,5)
   wall27=createSprite(1265,615,430,5)
   wall28=createSprite(1050,725,5,215)
   wall29=createSprite(360,383,60,5)
   wall30=createSprite(280,475,60,5)
   wall31=createSprite(310,570,5,200)
  wall32=createSprite(390,580,5,400)





}

function draw() {
  background("green");  
  if(keyDown(LEFT_ARROW)){
panda.x=panda.x-2
  }
  if(keyDown(RIGHT_ARROW)){
    panda.x=panda.x+2
  }
  if(keyDown(UP_ARROW)){
    panda.y=panda.y-2
  }
  if(keyDown(DOWN_ARROW)){
    panda.y=panda.y+2
  }

  panda.collide(wall1)
  panda.collide(wall2)
  panda.collide(wall3)
  panda.collide(wall4)
  panda.collide(wall5)
  panda.collide(wall6)
  panda.collide(wall7)
  panda.collide(wall8)
  panda.collide(wall9)
  panda.collide(wall10)
  panda.collide(wall11)
  panda.collide(wall12)
  panda.collide(wall13)
  panda.collide(wall14)
  panda.collide(wall15)
  panda.collide(wall16)
  panda.collide(wall17)
  panda.collide(wall18)
  panda.collide(wall19)
  panda.collide(wall20)
  panda.collide(wall21)
  panda.collide(wall22)
  panda.collide(wall23)
  panda.collide(wall24)
  panda.collide(wall25)
  panda.collide(wall26)
  panda.collide(wall27)
  panda.collide(wall28)
  panda.collide(wall29)
  panda.collide(wall30)
  panda.collide(wall31)
  panda.collide(wall32)
  drawSprites();
  fill("black")
  textSize(20)
text("score "+score,10,20)
}

 