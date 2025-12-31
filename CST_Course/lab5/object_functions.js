// ------------------------------------------1.2.1------------------------------------
// function showAddr(addrObj) {
//   let today = new Date();

//   return addrObj.building + ", " + addrObj.street + ", "  + addrObj.city + " registered in " + today.toLocaleDateString();
// }

// let addrObj = {
//   street: " 15 abc st.",
//   building: "15",
//   city: "xyz"
// }
// console.log(showAddr(addrObj));

// ------------------------------------------1.2.2------------------------------------
function dispVal(obj, key) {
  return obj[key];
}

let obj = {
  nm : "ali",
  age : 10,
}

console.log(dispVal(obj, "nm"));
console.log(dispVal(obj, "age" )+ " years old");