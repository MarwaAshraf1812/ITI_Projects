let ansField = document.getElementById("Answer");

function EnterNumber(num) {
  ansField.value += num.trim();
}
function EnterOperator(op) {
  ansField.value += op;
}

function EnterClear() {
  ansField.value = "";
}

function EnterEqual() {
  let val = ansField.value;
  let splitted = val.split(/(\+|\*|\/|\-)/);
  console.log(splitted);
  console.log(splitted.length);

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === "*") {
      let result = Number(splitted[i - 1]) * Number(splitted[i + 1]);
      splitted.splice(i - 1, 3, result);
      console.log(splitted);
    }
    else if (splitted[i] === "/") {
      let result = Number(splitted[i - 1]) / Number(splitted[i + 1]);
      splitted.splice(i - 1, 3, result);
      console.log(splitted);
    }
  }
  console.log(splitted.length);

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === "+") {
      let result = Number(splitted[i - 1]) + Number(splitted[i + 1]);
      splitted.splice(i - 1, 3, result);
      console.log(result);
    }

    else if (splitted[i] === "-") {
      let result = Number(splitted[i - 1]) - Number(splitted[i + 1]);
      splitted.splice(i - 1, 3, result);
      console.log(result);
    }
  }
  console.log(splitted.length);

  ansField.value = splitted[0];
}


