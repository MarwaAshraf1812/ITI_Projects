var x, y , z;
var sum = 0;
var result = " ";

do {
  x = parseInt(prompt("Enter x : "));
  y = parseInt(prompt("Enter y : "));
  z = prompt("Enter even or odd or no : ");

} while (isNaN(x) || isNaN(y));

if (x < y) {
  for (var i = x; i <= y; i++){
    if(checkType(i, z)){
      result += i + " ";
      sum += i;
    }
  }
} else {
  for (var i = x; i >= y; i--){
    if(checkType(i, z)){
      result += i + " ";
      sum += i;
    }
  }
}

function checkType(num, type){
  if(type == "even" && num % 2 == 0) return true;
  if(type == "odd" && num % 2 != 0) return true;
  if(type == "no") return true;
  return false;
}

console.log("result: " + result);
console.log("sum: " + sum);


document.write("<h3>Result: "+ result + "</h3>");
document.write("<p>Sum: "+ sum + "</p>");