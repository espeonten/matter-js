//create base class with same properties
//in options change experiment restitution friction density
//create 3 objects from class w/ different options


//namespacing
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
//variables for game
var engine
var world
var floor
var backgroundImage
var ground
var greenR
var purpleR
var blackR
var bird
var box1
var log1

function preload(){

}

function setup(){
    createCanvas(windowWidth, windowHeight)
    engine = Engine.create()
    world = engine.world;

    ground = new Ground(width/2, height-15, 2000, 40)

    greenR = new Base(width/2, height/2 + 20, 50, 50)
    purpleR = new Base(width/2, height/1.5, 60, 60)
    blackR = new Base(width/2, height/3, 200, 50)

    bird = new Bird(width/2 + 50, height/5, 50, 50)

    box1 = new Box(width/2, height/2, 75, 75)

    log1 = new Log(width/2, height/4, 250, 20)
}

function draw(){
    background("white")
    Engine.update(engine)

    ground.display()

    greenR.display("green")

    blackR.display("black")

    purpleR.display("purple")

    bird.display()

    box1.display()

    log1.display()
}
