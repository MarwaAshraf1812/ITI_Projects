var input = Number(prompt("Enter the number of rows "));

for(var i = 1; i <=input; i++) {
  for (var j = 1; j <= i; j++){
    document.write(" * ");
  }
  document.write("<br>");
}