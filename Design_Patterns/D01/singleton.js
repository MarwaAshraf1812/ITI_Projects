class CounterService {
  static instance;
  static counter = 0;
  constructor() {
    if(CounterService.instance) {
      return CounterService.instance;
    }
    CounterService.counter++;
    CounterService.instance = this;
  }

  getInstance() {
    return CounterService.instance;
  }
}


const c1 = new CounterService();
const c2 = new CounterService();
const c3 = new CounterService();

console.log(CounterService.counter);
