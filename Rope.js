class Rope{
    constructor(bodyA,bodyB,x,y){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
           
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        //this.pointB = pointB;
        this.x = x;
    }
    
    
    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;//birds position
        var posB = this.sling.bodyB.position;
        strokeWeight(3)
        line(posA.x,posA.y,posB.x+this.x,posB.y)
        }
    }
}