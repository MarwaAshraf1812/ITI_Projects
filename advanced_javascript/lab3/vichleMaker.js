function Vehicle(speed, color) {
  if (typeof speed !== "number") throw new Error("Speed must be a number");
  if (typeof color !== "string") throw new Error("Color must be a string");

  var _speed = speed;
  var _color = color;

  Object.defineProperty(this, "speed", {
    get: function(){ return _speed},
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "color", {
    get: function(){ return _color},
    configurable: false,
    enumerable: false,
  });

  this.goForward = function (s, accel) {
    _speed += (s + accel);
    console.log("Going Forward at speed: " + _speed);
  }

  this.goBackward = function (s, accel) {
    _speed -= (s + accel)
    console.log("Going backward at speed: " + _speed);
  }
}

Vehicle.prototype.turnLeft = function () {
  console.log("Vehicle turning left");
}
Vehicle.prototype.turnRight = function () {
  console.log("Vehicle turning right");
}

Vehicle.prototype.start = function () {
  return true;
}
Vehicle.prototype.stop = function () {
  return false;
}

Vehicle.prototype.toString = function() {
    return "Vehicle Speed: " + this.speed + ", Color: " + this.color;
}
Vehicle.prototype.valueOf = function() {
    return this.speed;
}


function MotorVehicle(speed, color, sizeOfEngine, licencePlate) {
  Vehicle.call(this, speed, color);
  if (typeof sizeOfEngine !== "number") throw new Error("Engine size must be number");
  if (typeof licencePlate !== "string") throw new Error("Plate must be string");

  Object.defineProperty(this, "sizeOfEngine", {
    value: sizeOfEngine,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "licencePlate", {
    value: licencePlate,
    writable: false,
    configurable: false,
    enumerable: false,
  });
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

MotorVehicle.prototype.getSizeOfEngine = function () {
  console.log("size Of Engine:", this.sizeOfEngine);
}

MotorVehicle.prototype.getLicencePlate = function () {
  console.log("licence Plate", this.licencePlate);
}

function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);

  this.ringBell = function () {
  console.log("Ringing......");
  }
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

function Car(speed, color, sizeOfEngine, licencePlate, numOfDoors, numWheels, weight) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
  if (typeof numWheels !== "number") throw new Error("Wheels must be number");
  if (typeof numOfDoors !== "number") throw new Error("Doors must be number");
  if (typeof weight !== "number") throw new Error("Weight must be number");

  Object.defineProperty(this, "numOfDoors", {
    value: numOfDoors,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "numWheels", {
    value: numWheels,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "weight", {
    value: weight,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.switchOnAir = function () {
  console.log("switching....");
}
Car.prototype.getNumofDoors = function () {
  return this.numOfDoors;
}


function DumpTruck(speed, color, sizeOfEngine, licencePlate, loadCapacity, numWheels, weight) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
  if (typeof numWheels !== "number") throw new Error("The number of wheels should be number");
  if (typeof loadCapacity !== "number") throw new Error("The load of capacity of doors must be number");
  if (typeof weight !== "number") throw new Error("The weight must be number");

  Object.defineProperty(this, "loadCapacity", {
    value: loadCapacity,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "numWheels", {
    value: numWheels,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "weight", {
    value: weight,
    writable: false,
    configurable: false,
    enumerable: false,
  });
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

DumpTruck.prototype.lowerLoad = function () {
  console.log("loading....");
}

DumpTruck.prototype.raiseLoad = function () {
  console.log("raising....");
}

try {
    var v1 = new Vehicle(100, "Red");
    console.log("1. Created Vehicle:", v1.toString()); 

    v1.goForward(20, 5); 
    console.log("2. Speed after acceleration:", v1.valueOf());

    console.log("3. Attempting to change speed directly...");
    v1.speed = 500; 
    console.log("   Speed after attempt:", v1.speed);
    
} catch (e) {
    console.error(e.message);
}

try {
    var bike = new Bicycle(15, "Blue");
    bike.ringBell(); 
    console.log("1. Is bike an instance of Vehicle?", bike instanceof Vehicle); 
    console.log("2. Is bike an instance of Bicycle?", bike instanceof Bicycle); 
} catch (e) {
    console.error(e.message);
}


try {
    var myCar = new Car(180, "Black", 2000, "ABC-123", 4, 4, 1500);
    
    console.log("1. Car Created successfully!");
    console.log("2. Car toString:", myCar.toString()); 
    
    console.log("3. Accessing Parent Prop (Licence):", myCar.licencePlate);
    console.log("4. Accessing Child Prop (Doors):", myCar.getNumofDoors());

    console.log("5. Inheritance Check:");
    console.log("   - Instance of Car?", myCar instanceof Car); 
    console.log("   - Instance of MotorVehicle?", myCar instanceof MotorVehicle); 
    console.log("   - Instance of Vehicle?", myCar instanceof Vehicle); 

} catch (e) {
    console.error("Car Error:", e.message);
}

try {
    var truck = new DumpTruck(80, "Yellow", 5000, "TRK-999", 1000, 6, 3000);
    truck.raiseLoad(); 
    truck.lowerLoad(); 
    console.log("1. Truck License:", truck.licencePlate);
} catch (e) {
    console.error(e.message);
}

try {
    console.log("Test A: Creating Vehicle with String speed...");
    var badVehicle = new Vehicle("FAST", "Red"); 
} catch (e) {
    console.log("Caught Expected Error:", e.message);
}

try {
    console.log("Test B: Creating Car with String wheels...");
    var badCar = new Car(100, "White", 1500, "XYZ", 4, "four", 1000);
} catch (e) {
    console.log("Caught Expected Error:", e.message);
}
