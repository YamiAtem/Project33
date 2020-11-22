class Plinko {
    constructor(x, y) {
        var properties = {
            isStatic: true
        }

        this.r = 10

        this.body = Bodies.circle(x, y, this.r, properties);
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push();

        fill("white");

        translate(pos.x, pos.y);

        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);

        pop();
    }
}