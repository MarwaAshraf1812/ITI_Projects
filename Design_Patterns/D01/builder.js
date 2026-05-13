class Pizza {
  #sauce;
  #crust;
  #topping = [];

  _setCrust(c) {
    this.#crust = c;
  }
  _setSauce(s) {
    this.#sauce = s;
  }
  _addTopping(t) {
    this.#topping.push(t);
  }

  getPizzaData() {
    return {
      sauce: this.#sauce,
      crust: this.#crust,
      ingredients: this.#ingredients,
    }
  }
}

class PizzaBuilder {
  #pizza;

  constructor() {
    this.resetKitchen();
  }

  resetKitchen() {
    this.#pizza = new Pizza();
  }

  addSauce(sauce) {
    this.#pizza._setSauce(sauce);
    return this;
  }

  setCrust(crust) {
    this.#pizza._setCrust(crust);
    return this;
  }

  addTopping(topping) {
    this.#pizza._addTopping(topping);
    return this;
  }

  build() {
    const result = this.#pizza;
    this.reset();
    return result;
  }
}

const builder = new PizzaBuilder();
const pizza = builder
  .addSauce("Tomato")
  .setCrust("Thin")
  .addTopping("Cheese")
  .addTopping("Pepperoni")
  .build();

console.log(pizza.getPizzaData());
