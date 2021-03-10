class Drop{
    constructor(x,y){
        var options={
            friction: 0.1,
            isStatic:false
        }
        this.body = Bodies.circle(x,y, 1, options);
        World.add(world, this.body);
        this.r = 20

    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("lightblue");
        ellipse(0, 0, this.r, this.r);
        }
}