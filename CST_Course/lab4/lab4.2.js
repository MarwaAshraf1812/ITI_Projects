var input = prompt("Enter a string to check if it's a Palindrome:");
var isCaseSensitive = confirm("Do you want to consider case sensitivity?");

if (!isCaseSensitive)
{
  input = input.toLowerCase();
}

var reversedString = '';

for(var i = input.length - 1; i >= 0; i--)
{
  reversedString += input.charAt(i);
}


if (input == reversedString)
{
  alert("The string is a Palindrome.");
} else {
  alert("The string is not a Palindrome.");
}
