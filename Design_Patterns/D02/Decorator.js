function Teacher(name) {
  this.name = name;

  this.getDetails = function() {
    return `the name is ${this.name}`
  };
}


function WithSalary(teacher, salary) {
  return {
    getDetails() {
      return teacher.getDetails() + ` and the salary is ${salary}`
    }
  }
}

function WithNationality(teacher, nationality) {
  return {
    getDetails() {
      return teacher.getDetails() + ` and the nationality is ${nationality}`
    }
  }
}

function WithStreet(teacher, street) {
  return {
    getDetails() {
      return teacher.getDetails() + ` and the street is ${street}`
    }
  }
}

// client code 
let teacher = new Teacher('Ali');
console.log(teacher.getDetails());

let decoratedTeacher = WithStreet(WithNationality(WithSalary(teacher, 3000), 'Egyptian'), 'Giza');
console.log(decoratedTeacher.getDetails());