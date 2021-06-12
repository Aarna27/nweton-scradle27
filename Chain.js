class Chain{
    constructor(A, B, offsetX){
        var options = {
            bodyA: A,
            pointA: {x:offsetX,y:0},
            bodyB: B,
            stiffness: 0.04,
            length: 200
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.X = offsetX
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x + this.X, pointA.y, pointB.x, pointB.y);
    }
    
}