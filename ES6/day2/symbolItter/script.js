const truncator = {
  [Symbol.replace](str) { 
    if(str.length > 15) {
      return str.substring(0, 15) + "...";
    }
    return str;
  }
};

let text1 = "Hello from JavaScript ES6 features";
console.log(text1.replace(truncator));

let text2 = "short text";
console.log(text2.replace(truncator));