let custObj = {
  description: "This object generates getters and setters",
  
  getSetGen: function () {
    let self = this;

    for (let key in this) {
      if (typeof this[key] !== "function") {
        (function(prop) {
          let setName = 'set' + prop;
          let getName = 'get' + prop;

          self[getName] = function() {
            return self[prop];
          } 

          self[setName] = function(val) {
            self[prop] = val;
          }

        })(key);
      }
    }
  }
}


let obj =  {
  id : "SD-10",
  location: "SV",
  addr:"123 st."
}

custObj.getSetGen.call(obj)

console.log(obj);

let userId = obj.getid();
console.log(userId)

obj.setlocation("giza");
let  loc = obj.getlocation();
console.log(loc)