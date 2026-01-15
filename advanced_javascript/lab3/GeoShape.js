function Shape(dim1,dim2) {
  if (this.constructor === Shape) {
    throw "This is an Abstract Class";
  }
  Object.defineProperty(this, "width", {
    value: dim1,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "height", {
    value: dim2,
    writable: false,
    configurable: false,
    enumerable: false,
  });
}

Shape.prototype.calcArea = function() {
  return this.width * this.height;
};

Shape.prototype.calcPerimeter = function() {
  return 2 * (this.width * this.height);
};

Shape.prototype.toString = function() {
  return "Dimensions: " + this.width + " X " + this.height +
        ", Area: " + this.calcArea() +
        ", Perimeter: " + this.calcPerimeter();
};

Shape.prototype.valueOf = function() {
  return this.calcArea()
};

function Rectangle(width, height) {
    if (this.constructor === Rectangle && Rectangle.count >= 1) {
      throw new Error("you can create only one Rectangle instance")
    }
  Shape.call(this, width, height);
  if(this.constructor === Rectangle) {
    Rectangle.count++;
  }
}

Rectangle.count = 0;
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(length) {
  if (this.constructor === Square && Square.count >= 1) {
      throw new Error("you can  create only one Square instance")
    }
  Rectangle.call(this, length, length);
  if(this.constructor === Square) {
    Square.count++;
  }
}

Square.count = 0;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

try {
  var rect1 = new Rectangle(10, 20);

  var sq1 = new Square(10);

  console.log(rect1.toString());
  
  console.log(sq1.toString());

  var rect2 = new Rectangle(5, 10);
  console.log(rect2.toString());
  
  console.log("rect1 + rect2 = " + (rect1 + rect2)); // 250
  console.log("rect1 - rect2 = " + (rect1 - rect2)); // 150

  console.log("Squares created: " + Square.count);
  console.log("Rectangles created: " + Rectangle.count);

} catch(e) {
  console.log(e);
}
