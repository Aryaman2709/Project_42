const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine, world;
var drops=[];
var sky
function preload(){
    thunderImage=loadImage("thunder.png");
    image2=loadImage("2.png");
    image3=loadImage("3.png");
    image4=loadImage("4.png");
}

function setup(){
   createCanvas(400, 600);
   engine=Engine.create();
   world=engine.world;


   man=new Umbrella(200,425);

   var maxDrops=100;
   for(var i=0; i<maxDrops; i++){
       drops.push(new Drop(random(0, 400), random(0,400)));
   }

   if(frameCount%300===0){
    sky=createSprite(200,100)
    sky.addImage(thunderImage);
    sky.lifetime=10;
}

}

function draw(){
    Engine.update(engine);
    background(0);
    man.display();

   spawnThunder();

   for(var i=0; i<drops.length; i++){
    drops[i].display();
    drops[i].update();
   }

   drawSprites();
   


}   

function spawnThunder(){
    if (frameCount % 30 < 10) {
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1 : image(thunderImage, width / 2, 100, 100, 200)
                      break;
            case 2 : image(image2, width / 2, 100, 100, 200)
                     break;
            case 3 : image(image3, width / 2, 100, 100, 200)
                     break;
            case 4 : image(image4, width / 2, 100, 100, 200)
                     break;
            default: break;
            
        }
}
}
