var boy,boyImg
var apple,appleImg, appleG
var cake, cakeImg, cakeG
var play
var end
var gamestate
var salad, saladImg, saladG
var cookie, cookieImg, cookieG
var score = 0

function preload(){
boyImg = loadImage("boy.png")
appleImg = loadImage("apple.png")
cakeImg = loadImage("cake.png")
saladImg = loadImage("salad.png")
cookieImg = loadImage("cookie.png")
}

function setup() {
 createCanvas(600,600)

 boy = createSprite(550,550,30,30)
 boy.addImage("boyimg",boyImg)
boy.scale = 0.45

appleG = createGroup();
cakeG = createGroup();
saladG = createGroup();
cookieG = createGroup();
}

function draw() {
background(255)

if(gamestate === play){
boy.y = World.mouseY
spawn_Apples();
spawn_Cake();
spawn_Salad();
spawn_Cookies();
}

if(boy.isTouching(appleG)){
score = score+1
appleG.destroyEach();
}
if(boy.isTouching(saladG)){
    score = score+2
    saladG.destroyEach();
}
if(boy.isTouching(cakeG)||boy.isTouching(cookieG)){
    gamestate = end
    boy.y = 550
    boy.x = 550
    appleG.destroyEach();
    cakeG.destroyEach();
    cookieG.destroyEach();
    saladG.destroyEach();
    score = 0
}

 drawSprites();
 textSize(25)
 text("Score: "+ score,30,30)
 textSize(17)
 text("Make sure the boy eats healthy food!", 30, 60)
}

function spawn_Apples(){
    if(World.frameCount%130 === 0){
    apple = createSprite(40,random(50,560),20,20)
    apple.addImage("a",appleImg)
    apple.velocityX = 6
    apple.scale = 0.1
    apple.lifetime = 150
    appleG.add(apple)
    }
}

function spawn_Cake(){
    if(World.frameCount%170 === 0){
    cake  = createSprite(40,random(50,560),20,20)
    cake.addImage("c",cakeImg)
    cake.velocityX = 7
    cake.scale = 0.25
    cake.lifetime = 120
    cakeG.add(cake) 
    }
}

function spawn_Salad(){
    if(World.frameCount%160 === 0){
    salad = createSprite(40,random(50,560),20,20)
    salad.addImage("s",saladImg)
    salad.velocityX = 7
    salad.scale = 0.2
    salad.lifetime = 150
    saladG.add(salad)
    }
}

function spawn_Cookies(){
    if(World.frameCount%140 === 0){
    cookie = createSprite(40,random(50,560),20,20)
    cookie.addImage("c",cookieImg)
    cookie.velocityX = 7
    cookie.scale = 0.25
    cookie.lifetime = 150
    cookieG.add(cookie)
    }
}