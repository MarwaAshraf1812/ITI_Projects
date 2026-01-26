var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let allStrings = fruits.every(fruit => typeof fruit === 'string');
console.log("Is every element a string? " + allStrings);

let checkA =  fruits.some(fruit => fruit.startsWith("a"));
console.log(checkA);

let filtered = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
console.log("Filtered Fruits: ", filtered);


let newString = fruits.map(fruit => `I like ${fruit}`);
console.log("Fruits: ", newString);

newString.forEach(fruit => console.log(fruit));