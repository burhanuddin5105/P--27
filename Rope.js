class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }

    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);

        var hook1X = point1.x;
        var hook1Y = point1.y;

        var hook2X = point2.x+this.offsetX;
        var hook2Y = point2.y+this.offsetY;

        line(hook1X,hook1Y,hook2X,hook2Y);
    }
}