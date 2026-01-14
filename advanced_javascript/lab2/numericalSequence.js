function numericalSequence(start, end, step) {
  console.log(start, end, step);
  var list = [];

  this.Exist = function(value) {
    for (let i=0; i < list.length; i++) {
      if(value == list[i]) {
        return true;
      }
    }
    return false;
  }

  this.CheckEmpty = function() {
    if (list.length === 0) {
      return true;
    }
    return false
  }
  this.GetList = function () {
    var copyList = [];
    for (let i = 0; i < list.length; i++) {
      copyList.push(list[i]);
    }
    return copyList;
  }

  var InitSequence = function() {
    if (step <= 0) {
      throw new Error("Exception: The value must be bigger than 0.")
    }
    for (let i = start; i < end; i+=step) {
      list.push(i)
    }
  }

  InitSequence()

  this.Append = function(value) {
    if (this.CheckEmpty()) {
        list.push(value);
        return;
    }
    let lastNum = list[list.length - 1];
    if ((lastNum + step) !== value) throw new Error("Exception: The number must be followed by steps number");
    
    if (this.Exist(value)) throw new Error("Exception: Number already exists");

    list.push(value);
  }

  this.Prepend = function(value) {if (this.CheckEmpty()) {
        list.push(value);
        return;
    }
    let firstNum = list[0];

    if (value >= (firstNum - step)) throw new Error("Exception: The number must be followed by steps number")
    
    if (this.Exist(value)) throw new Error("Exception: Number already exists");
    
    list.unshift(value)
  }


  this.Pop = function() {
    if(this.CheckEmpty()) throw new Error("Exception: The list is empty");

    list.pop();
  }


  this.Dequeue = function() {
    if(this.CheckEmpty()) throw new Error("Exception: The list is empty");

    list.shift();
  }
}

let seq;
try {
  seq = new numericalSequence(1, 10, 2);
  console.log("Initial sequence:", seq.GetList());
} catch(e) {
  console.log(e.message);
}


try {
  seq.Append(11);
  console.log("After Append 11:", seq.GetList());
} catch(e) {
  console.log(e.message);
}

try {
  seq.Prepend(-2)
  console.log("After Prepend -1:", seq.GetList());
} catch(e) {
  console.log(e.message);
}


try {
  seq.Pop();
  console.log("After delete last elemnet:", seq.GetList());
} catch(e) {
  console.log(e.message);
}

try {
  seq.Dequeue();
  console.log("After delete first elemnet:", seq.GetList());
} catch(e) {
  console.log(e.message);
}


try {
  seq.Prepend(20);
} catch (error) {
  console.log("Error in Prepend:", error.message);
}