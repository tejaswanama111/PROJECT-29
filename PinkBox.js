class PinkBox{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255, 192, 203);
        strokeWeight(3);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
  }
  