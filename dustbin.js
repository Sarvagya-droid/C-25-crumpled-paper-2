class Dustbin{
    constructor(x, y, width, height){
        var options ={
            isStatic:true,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/Dustbin.png")
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        fill("yellow");
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
    }
}