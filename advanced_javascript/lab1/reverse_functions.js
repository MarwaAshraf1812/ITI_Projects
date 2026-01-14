function reverseArr() {
  return [].slice.call(arguments).reverse();
}

let reversed = reverseArr(2,4,5,6);
console.log(reversed);

function way2Reverse() {
  return [].reverse.apply(arguments)
}

console.log(way2Reverse(1,2,3,4,5,6,7))
