const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 
var particles = [];
var plinkos = [];
var divisions =[];

var particle;

var divisionHeight=300;
var score =0;
var turn=0;

var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  
   
    

    
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
 
  if(gameState==="end"){
    fill("white");
    textSize(70);
    text("GAME OVER", 200, 400);
   }

   fill("white");
   textSize(30);
   text("Score :"+score, 350, 50);

   text("500", 20, 700);
   text("500", 100, 700);
   text("500", 180, 700);
   text("500", 260, 700);

   text("100", 340, 700);
   text("100", 420, 700);
   text("100", 500, 700);

   text("200", 580, 700);
   text("200", 660, 700);
   text("200", 740, 700);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
   }*/

   
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display();

   if(particle!=null){
    particle.display();
      if(particle.body.position.y>760){
       if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(turn===5){
          gameState="end";
        }
       }else if(particle.body.position.x<600&&particle.body.position.x>301){
         score=score+100;
         particle=null;
         if(turn===5){
           gameState="end";
         }
        }else if(particle.body.position.x<900&&particle.body.position.x>601){
         score=score+200;
         particle=null;
         if(turn===5){
           gameState="end";
         }
        } 
      
      }
   }

   
}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    
     particle=new Particle(mouseX, 10,10);
    
  

  
  }
  
}