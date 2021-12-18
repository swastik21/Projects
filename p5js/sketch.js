class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.radius = m * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }

  contactEdge() {
    // The mover is touching the edge when it's within one pixel
    return (this.position.y > height - this.radius - 1);
  }

  bounceEdges() {
    // A new variable to simulate an inelastic collision
    // 10% of the velocity's x or y component is lost
    let bounce = -0.9;
    if (this.position.x > width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= bounce;
    } else if (this.position.x < this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= bounce;
    }
    if (this.position.y > height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= bounce;
    }
  }

}


let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover(width / 2, 30, 5);
  createP('Click mouse to apply wind force.');
}

function draw() {
  background(51);

  let gravity = createVector(0, 1);
  //{!1} I should scale by mass to be more accurate, but this example only has one circle
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
  }

  if (mover.contactEdge()) {
    //{!5 .bold}
    let c = 0.1;
    let friction = mover.velocity.copy();
    friction.mult(-1);
    friction.setMag(c);

    //{!1 .bold} Apply the friction force vector to the object.
    mover.applyForce(friction);
  }

  mover.bounceEdges();
  mover.update();
  mover.display();
}