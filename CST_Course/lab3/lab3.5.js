var start = Number(prompt("Enter start number"));
var end = Number(prompt("Enter end number"));
var sum = 0, mul3 = " ", mul5 = " ";


for(var i = start; i <= end; i++) {
  if ( i % 3 == 0) {
    sum += i;
    mul3 += i + " ";
  }
  if ( i % 5 == 0) {
    sum += i;
    mul5 += i + " ";
  }
}

document.write("Numbers multiple of 3: " + mul3 + "<br>");
document.write("Numbers multiple of 5: " + mul5 + "<br>");
document.write("Total sum is " + sum);