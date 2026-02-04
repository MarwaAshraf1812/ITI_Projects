var redScrapperId = document.getElementById('redScrapper')
var greenScrapperId = document.getElementById('greenScrapper')
var blueScrapperId = document.getElementById('blueScrapper')
var text = document.getElementById("colorText")



function changeColor() {
  var r = redScrapperId.value;
  var b = blueScrapperId.value;
  var g = greenScrapperId.value;


  var colorCode = "rgb(" + r + "," + g + "," + b + ")";
  text.style.color = colorCode;
}


redScrapperId.addEventListener('input', changeColor);
greenScrapperId.addEventListener('input', changeColor)
blueScrapperId.addEventListener('input', changeColor)