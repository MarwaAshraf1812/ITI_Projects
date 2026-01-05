function displayVal(val) {
  let elem = val.value;
  let element = document.getElementById("txt1");
  element.value += elem.trim();

}

function eraseVal() {
  let element = document.getElementById("txt1");
  element.value = element.value.slice(0, -1);
}

function clearValues() {
  let element = document.getElementById("txt1");
  element.value = "";
}

function displaySelection() {
  let selectionObj = document.getElementById("menu");
  let selectedValues = [];

  for(let i = 0; i< selectionObj.options.length; i++) {
    if(selectionObj.options[i].selected) {
      selectedValues.push(selectionObj.options[i].value);
    }
  }
  console.log(selectedValues);
}

function displayContent(txtField) {
  var txt = txtField.value;
  document.getElementById("div1id").innerHTML = txt;
}