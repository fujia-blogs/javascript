class Circle {
  draw() {
    console.log('to draw a circle');
  }
}

class Decorator {
  private circle: Circle;

  constructor(circle: Circle) {
    this.circle = circle;
  }

  draw() {
    this.circle.draw(); // the basic methods
    this.setBorder(); // the decorate method
  }

  private setBorder() {
    console.log('to set the border of circle');
  }
}
