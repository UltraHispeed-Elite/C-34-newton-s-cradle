class Pendulum {
    constructor(x, y, colors) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'density':1.0,
          'slop':1.0,
          'inertia':Infinity
      }
      this.body = Bodies.rectangle(x, y, 40,40, options);
      this.x = x;
      this.y = y;
      this.color=color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
    
      
      stroke("Red");
      ellipse(0, 0, 60, 60);
      pop();
    }
  };