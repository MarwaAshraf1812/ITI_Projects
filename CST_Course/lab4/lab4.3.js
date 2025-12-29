var input = prompt("Enter your message");

function countLargestWord(sentence){

  var words = sentence.split(" ");
  var largestWord = "";


  for(let i = 0; i < words.length; i++)
  {
    if (words[i].length > largestWord.length)
    {
      largestWord = words[i]
    }
  }

  return largestWord;
}

var result = countLargestWord(input);
alert("The largest word is " + result);