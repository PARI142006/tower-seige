
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
	
}

function setup() {
	var canvas =createCanvas(1800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//My ground
	ground=new Ground(654,540,1944,21)
	polygonObj=new Polygon(230,315,65,65)
	chain= new Chain(polygonObj.body,{x:230,y:315})

	//paths 
	path1=new Ground(694,364,291,8)
	path2=new Ground(1080,290,190,8)

	//bottom blocks p1
	block1= new Block(600,213,30,43)
	block2= new Block(630,213,30,43)
	block3= new Block(660,213,30,43)
	block4= new Block(690,213,30,43)
	block5= new Block(720,213,30,43)
	block6= new Block(750,213,30,43)
	block7= new Block(780,213,30,43)
     
	//level three p1
	block8= new Block(630,103,30,43)
	block9= new Block(660,103,30,43)
	block10= new Block(690,103,30,43)
	block11= new Block(720,103,30,43)
	block12= new Block(750,103,30,43)

	//level two p1
	block13= new Block(660,29,30,43)
	block14= new Block(690,29,30,43)
	block15= new Block(720,29,30,43)

	//top p1
	block16= new Block(690,8,30,43)
	
	
	//bottom blocks p2
	blockA= new Block(1010,44,30,43);
	blockB= new Block(1040,44,30,43);
	blockC= new Block(1070,44,30,43);
	blockD= new Block(1100,44,30,43);
	blockE= new Block(1130,44,30,43);

	//LEVEL2 BLOCKS P2
	blockF= new Block(1040,12,30,43);
	blockG= new Block(1070,12,30,43);
	blockH= new Block(1100,12,30,43);

	//TOP P2B
    blockI= new Block(1070,90,30,43)


	
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(4,225,259);
  
  drawSprites();
  polygonObj.display();
  chain.display();
  ground.display();
  path1.display();
  path2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();
  blockF.display();
  blockG.display();
 blockH.display();
 blockI .display()
 textSize(21)
 text ("Drag the hexagonal stone and  Release it, to Launch it Towards Blocks ",350,79)
}
function mouseDragged(){
    Matter.Body.setPosition(polygonObj.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
chain.fly();

}


