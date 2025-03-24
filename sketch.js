//namespacing
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
//variables for game
var engine
var world
var object
var floor
var backgroundImage
var objectOptions
var floorOptions
var circle1
var cOptions
var r
var rOptions

function preload(){

}

function setup(){
    createCanvas(windowWidth, windowHeight)
    engine = Engine.create()
    world = engine.world;

    floorOptions = {
        'isStatic': true
    }
    floor = Bodies.rectangle(0, height-30, width, height, floorOptions)
    floor.width = width
    floor.height = height
    World.add(world, floor)

    cOptions = {
        'isStatic': false
    }
    circle1 = Bodies.circle(width/2, height/2, 100, cOptions)
    World.add(world, circle1)

    rOptions = {
        'isStatic': false
    }
    r = Bodies.rectangle(width/2, height+30, width, height, rOptions)
    r.width = 50
    r.height = 200
    World.add(world, r)

    objectOptions = {
        'isStatic': false,
        'restitution': 0.9
    }
    object = Bodies.rectangle(width/2, height/2, width, height, objectOptions)
    w = 50
    h = 50
    World.add(world, object)
    console.log(object)
}

function draw(){
    background("white")
    Engine.update(engine)

    push()
    fill("green")
    var floorPos = floor.position
    rect(floorPos.x, floorPos.y, floor.width, floor.height)
    pop()

    push()
    fill("blue")
    var circle1Pos = circle1.position
    ellipse(circle1Pos.x, circle1Pos.y, 100)
    pop()

    push()
    fill("orange")
    var rPos = r.position
    rect(rPos.x, rPos.x, r.width, r.height)
    pop()

    push()
    fill("red")
    var pos = object.position
    rect(pos.x, pos.y, w, h)
    pop()
}