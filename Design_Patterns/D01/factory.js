class TransportaionType {
  order() {}
}

class Car extends TransportaionType {
  constructor() {
    super();
  }
  order() {
    console.log("Car ordered");
  }
}

class Bike extends TransportaionType {
  constructor() {
    super();
  }
  order() {
    console.log("Bike ordered");
  }
}

class TransportationFactory {
  createTransportation(type) {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        throw new Error("Invalid transportation type");
    }
  }
}

const factory = new TransportationFactory();
const car = factory.createTransportation("car");
const bike = factory.createTransportation("bike");

car.order();
bike.order();
