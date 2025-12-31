let n = Number(prompt("Enter number of elements:"));
let arr = [];


for( let i = 0; i < n; i++) {
    let element = Number(prompt(`Enter element ${i + 1}:`));
    arr.push(element);
}

console.log("Original Array:", arr);

function AscComparisonFunction(a, b) {
    return a - b;
}

function DescComparisonFunction(a, b) {
    return b - a;
}

let asscSortedArr = arr.sort(AscComparisonFunction);
console.log("Ascending Sorted Array:", asscSortedArr);


let descSortedArr = arr.sort(DescComparisonFunction);
console.log("Descending Sorted Array:", descSortedArr);