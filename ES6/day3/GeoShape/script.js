`1) Using ES6 new Syntax & features:
 Write a script to create different shapes (rectangle, square,
circle, triangle) make all of them inherits from polygon.
 Display the area and each object parameter in your console
by overriding toString()`;

class Polygon {
  constructor(name) {
    this.name = name;
    if (this.constructor === Polygon) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
  calcArea() {
    return 0;
  }

  toString() {
    return `Shape: ${this.name} and Area: ${this.calcArea().toFixed(2)}`;
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  calArea() {
    return this.width * this.height;
  }

  toString() {
    return `${super.toString()}, Width: ${this.width}, Height: ${this.height}`;
  }

    draw(ctx, x, y) {
      ctx.fillStyle = "#3498db"; 
      ctx.fillRect(x, y, this.width, this.height);
      ctx.strokeRect(x, y, this.width, this.height);
      ctx.fillStyle = "black";
      ctx.fillText("Rect", x + 10, y + 20);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.name = "Square";
    this.side = side;
  }

  toString() {
    return `Shape: ${this.name} | Area: ${this.calcArea().toFixed(2)} | Side: ${this.side}`;
  }

  draw(ctx, x, y) {
    ctx.fillStyle = "#e74c3c"; 
    ctx.fillRect(x, y, this.side, this.side);
    ctx.strokeRect(x, y, this.side, this.side);
    ctx.fillStyle = "white";
    ctx.fillText("Square", x + 10, y + 20);
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calcArea() {
    return Math.PI * this.radius ** 2;
  }
  toString() {
    return `Shape: ${this.name} | Area: ${this.calcArea().toFixed(2)} | radius: ${this.radius}`;
  }

  draw(ctx, x, y) {
    ctx.beginPath();
    ctx.fillStyle = "#2ecc71"; 
    ctx.arc(x + this.radius, y + this.radius, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText("Circle", x + this.radius - 15, y + this.radius + 5);
  }
}


class Triangle extends Polygon {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }

  calcArea() {
    return (this.base * this.height) * 0.5;
  }

  toString() {
    return `${super.toString()} | Base: ${this.base}, Height: ${this.height}`;
  }

  draw(ctx, x, y) {
    ctx.beginPath();
    ctx.fillStyle = "#f1c40f"; 
    ctx.moveTo(x, y + this.height); 
    ctx.lineTo(x + this.base, y + this.height); 
    ctx.lineTo(x + (this.base / 2), y); 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText("Triangle", x + this.base/2 - 20, y + this.height - 10);
  }
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.font = "14px Arial";

const shapes = [
  new Rectangle(120, 80),
  new Square(80),
  new Circle(40),
  new Triangle(100, 100)
];

let currentX = 20;
const currentY = 50;

shapes.forEach(shape => {
  console.log(shape.toString());

  shape.draw(ctx, currentX, currentY);

  let shift = 100;
  if(shape instanceof Rectangle) shift = shape.width + 30;
  else if (shape instanceof Circle) shift = (shape.radius * 2) + 30;
  else if (shape instanceof Triangle) shift = shape.base + 30;
  
  currentX += shift;
});
