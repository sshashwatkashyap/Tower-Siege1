class Polygon{

    constructor(x, y){
   
     var options = {
   
      'isStatic':false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
      
     }
   
     this.body = Bodies.circle(x, y, 70, options);
       
     World.add(world, this.body)
   
    }
   
    display(){
   
     var pos = this.body.position
   
     push()
       
     ellipseMode(CENTER)
   
     translate(pos.x, pos.y)
   
     rotate(this.body.angle)
  
     ellipse(0, 0, this.width, this.height);
   
     pop()
   
   }
   }