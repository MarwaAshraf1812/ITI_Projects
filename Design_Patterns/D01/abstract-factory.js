class Chair {
  create() {}
}

class sofa {
  create() {}
}

class ModernChair extends Chair {
  create() {
    console.log("Creating a modern chair");
  }
}

class ModernSofa extends sofa {
  create() {
    console.log("Creating a modern sofa");
  }
}

class VictorianChair extends Chair {
  create() {
    console.log("Creating a victorian chair");
  }
}

class VictorianSofa extends sofa {
  create() {
    console.log("Creating a victorian sofa");
  }
}

class FurnitureFactory {
  createChair() {}
  createSofa() {}
}

class ModernFurnitureFactory extends FurnitureFactory {
  createChair() {
    return new ModernChair();
  }
  createSofa() {
    return new ModernSofa();
  }
}

class VictorianFurnitureFactory extends FurnitureFactory {
  createChair() {
    return new VictorianChair();
  }
  createSofa() {
    return new VictorianSofa();
  }
}

const modernFactory = new ModernFurnitureFactory();
const victorianFactory = new VictorianFurnitureFactory();

const modernChair = modernFactory.createChair();
const modernSofa = modernFactory.createSofa();
const victorianChair = victorianFactory.createChair();
const victorianSofa = victorianFactory.createSofa();

modernChair.create();
modernSofa.create();
victorianChair.create();
victorianSofa.create();