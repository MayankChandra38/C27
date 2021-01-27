class Chain{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1,
            length :1
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
      }
      display(){
        var PointA = this.chain.bodyA.position;
        var PointB = this.chain.bodyB.position;

        line(PointA.x,PointA.y,PointB.x,PointB.y);
      }
}