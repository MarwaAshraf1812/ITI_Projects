var x = Number(prompt("Enter x: "));
var y = Number(prompt("Enter y: "));
var z = Number(prompt("Enter z: "));

if(y > 0 || z > 0) {
  if (x % y == 0 && x % z == 0) {
    document.write(x + "is divible by both " + y + " and " + z);
  } else if (x % y == 0) {
    document.write(x + "is divible by " + y);
  } else if ( x % z == 0) {
    document.write(x + "is divible by "+ z);
  } else {
    document.write(x + " is not divisible by neither " + y + " nor " + z);
  }
}