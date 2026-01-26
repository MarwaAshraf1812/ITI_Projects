function minAndMax(...params){
  let minVal = Math.min(...params);
  let maxVal = Math.max(...params);
  return [minVal , maxVal];
}


let arr= [1,2,3,4,5];

let[minValue, maxValue] = minAndMax(...arr);

console.log("Min Value: " + minValue);
console.log("Max Value: " + maxValue); 