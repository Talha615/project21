var canvas;
var music;
var blue;
var red;
var green;
var yellow;
var block

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
blue=createSprite(700,500,150,50)
red=createSprite(500,500,150,50)
green=createSprite(300,500,150,50)
yellow=createSprite(100,500,150,50)
block=createSprite(400,300,50,50)
blue.shapeColor="blue"
red.shapeColor="red"
green.shapeColor="green"
yellow.shapeColor="yellow"
block.shapeColor="purple"
    //create box sprite and give velocity
    block.velocityY=5
    block.velocityX=1
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
block.bounceOff(edges)

drawSprites()

    //add condition to check if box touching surface and make it box
    if (isTouching(block,blue)&&block.bounceOff(blue)){
        block.shapeColor="blue"
    }
    if (isTouching(block,red)&&block.bounceOff(red)){
        block.shapeColor="red"
    }
    if (isTouching(block,blue)&&block.bounceOff(blue)){
        block.shapeColor="green"
    }
    if (isTouching(block,yellow)&&block.bounceOff(yellow)){
        block.shapeColor="yellow"
    }
}
