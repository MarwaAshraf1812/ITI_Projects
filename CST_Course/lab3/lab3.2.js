var sum = 0;
var input;

do {
  input = prompt("Enter number");
  input = parseInt(input);
  if (isFinite(input)) {
    if (input != 0) {
      sum += input;
    }
  } else {
    alert("Enter valid number");
  }
} while (sum <= 100 && input != 0);

document.write("Sum : " + sum);
