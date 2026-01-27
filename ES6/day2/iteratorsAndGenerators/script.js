let myStats = {
  level: "mid",
  score: 100,
  active: true,

  [Symbol.iterator]() {
    let keys = Object.keys(this);
    let counter = 0;

    let that = this; 

    return {
      next: () => {
        if (counter < keys.length) {
          let key = keys[counter];
          let val = that[key];
          
          counter++;
          return { 
            value: [key, val],
            done: false 
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    }
  }
};


for (let item of myStats) {
  console.log(item); 
}