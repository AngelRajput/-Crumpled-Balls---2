class Dustbin  {
    constructor(x,y,width,height)   {
        var options = {
            isStatic:true
        }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   
     World.add(world,this.body);
    }

    display()   {
      push();
        var dustpos= this.body.position;
        translate(dustpos.x,dustpos.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}