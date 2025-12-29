var input = prompt("Enter a string: ");
var char = prompt("Enter the character you want to count:");
var isCaseSensitive = confirm("Do you want to consider case sensitivity?");


var senFlag = isCaseSensitive ? "g": "gi";

var searchPattern = new RegExp(char, senFlag);

var matchedChar = input.match(searchPattern)
var count = matchedChar ? matchedChar.length : 0;

alert("The character '" + char + "' appears " + count + " times.");
