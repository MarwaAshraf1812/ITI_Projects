
let divInfo = document.getElementById("info");
let inputField = document.getElementById("inputField")

inputField.addEventListener('keydown', function(e) {
  let message = "char: " + e.key + "<br>" + "physical: " + e.code + "<br>" 

  if(e.ctrlKey) {
    message += "you are pressing ctrl <br>"
  }

  if(e.shiftKey) {
    message += "you are pressing shift <br>"
  }
  if(e.altKey) {
    message += "you are pressing alt <br>"
  }

  divInfo.innerHTML = message;


  if(e.ctrlKey && e.key.toLowerCase() === "s") {
    e.preventDefault();
    alert("this is key for save as")
  }

})