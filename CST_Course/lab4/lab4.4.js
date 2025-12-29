var userName = prompt("Enter your Name:");
var phone = prompt("Enter your Phone Number (8 digits):");
var mobile = prompt("Enter your Mobile Number (11 digits, starts with 010/011/012):");
var email = prompt("Enter your Email:");
var color = prompt("Choose a color (red, green, blue):");


var nameRegex = /^[a-zA-Z]+$/;

var phoneRegex = /^[0-9]{8}$/;

var mobileRegex = /^(010|011|012)[0-9]{8}$/;

var emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;



if(nameRegex.test(userName) && phoneRegex.test(phone) && mobileRegex.test(mobile) && emailRegex.test(email))
{
  var today = new Date();

  document.write("<div style='color:" + color + "'>");
  document.write("<h1>welcome, "+ userName +"</h1>");
  document.write("<p>Date: "+ today.toDateString() +"</p>");
  document.write("<p>Phone: " + phone + "</p>");
  document.write("<p>Mobile: " + mobile + "</p>");
  document.write("<p>Email: " + email + "</p>");
  document.write("</div>");
} else {
  alert("Invalid Inputs! PLease check your info!")
}