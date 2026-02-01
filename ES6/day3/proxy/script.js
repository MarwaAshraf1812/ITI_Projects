`2) Proxy
create a dynamic object using Proxy such that it has only the
following properties
 name property that accepts only string of 7 characters
 address property that accepts only string value
 age property that accepts numerical value between 25 and
60`


var proxyValidationHandler = {
  set : function (targetObj, prop, value) {
    if (prop === 'name') {
      if(typeof value !== 'string') {
        throw new TypeError('The "name" property must be a string.');
      }
      if (value.length !== 7) {
        throw new RangeError('The "name" property must be exactly 7 characters long.');
      }
    }
    if (prop === 'address') {
      if(typeof value !== 'string') {
        throw new TypeError('The "address" property must be a string.');
      }
    }
    if (prop === 'age') {
      if (value <25 || value > 60) {
        throw new RangeError('The "age" property must be between 25 and 60.');
      }
    }

    targetObj[prop] = value;
    return true;
  }
}

const person = new Proxy({}, proxyValidationHandler);
try {
  person.name = "MarwaAs";
  person.address = "1812 street";
  person.age = 26;
  console.log("Person object:", person);
} catch (e) {
  console.error("Error caught:", e.message);
}

try {
  person.name = "Ali";
} catch (e) {
  console.error("Error caught:", e.message);
}

try {
  person.address = 12345;
} catch (e) {
  console.error("Error caught:", e.message);
}

try {
  person.age = 20;
} catch (e) {
  console.error("Error caught:", e.message);
}