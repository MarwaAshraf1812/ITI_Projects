var circleRadius = Number(prompt("Enter the radius of the circle:"));
var input = prompt("Enter a value to calculate its square root:");
var angle = prompt("Enter an angle (in degrees) to calculate its cos:");


var area = Math.PI * Math.pow(circleRadius , 2);
var sqrtValue = Math.sqrt(input);
var radians = angle * (Math.PI / 180);
var calculatedAngle = Math.cos(radians);



alert("Area of the circle is: " + area);
alert("Square root of " + input + " is: " + sqrtValue);
console.log("Cos(" + angle + "°) is: " + calculatedAngle); 
document.write("<p>Check the console for the Cos value result.</p>");