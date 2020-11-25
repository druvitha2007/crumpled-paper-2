class paper {
    constructor(x,y,r){
        var options = {
            'isStactic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body);
        this.image=loadImage("paper.png")
}
display(){
    var paperpos = this.body.position;
    push();
   // fill ("blue");
    translate(paperpos.x,paperpos.y);
    //ellipseMode(RADIUS);
    //ellipse(0,0,this.r,this.r);
    imageMode(RADIUS)
    image(this.image,0,0,85,85);
    pop();
    }
}