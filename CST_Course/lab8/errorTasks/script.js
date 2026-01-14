function handle2params(num1, num2) {
  if(arguments.length < 2 || arguments.length > 2 ) {
    throw new Error("Error: You must provide exactly 2 parameters.")
  }
  return num1 + num2;
}


function handleNParams() {
  let total = 0;
  
  if (arguments.length == 0) {
    throw new Error("Empty inputs!");
  }

  for(let i =0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new Error("Error: All inputs must be numbers!");
    }
    total += arguments[i];
  }
  return total;
}

try {
    console.log("2 params (Valid): " + handle2params(2, 3)); // 5
    console.log(handle2params(2, 3, 4)); // Will throw Error
} catch (e) {
    console.error(e.message);
}

try {
    console.log("Sum N (Valid): " + handleNParams(10, 20, 30)); // 60
    console.log(handleNParams(10, "Text")); // Will throw Error
} catch (e) {
    console.error(e.message);
}