class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true
        }
       

        this.body = Bodies.circle(x,y, 50, options);
        World.add(world,this.body)
        
        this.image = loadImage("walking_1.png");
       
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0 ,0, 400, 400);
        pop();
    }
}