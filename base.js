class Base{
    constructor(x, y, width, height){
       var options = {
        'friction': 1,
        'density': 1,
        'restitution': 0.8, 
        'isStatic': false
       }
       this.body = Bodies.rectangle(x, y, width, height, options)
       this.width = width
       this.height = height
       this.image = loadImage("sprites/base.png")
       World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
        pop()
    }
}