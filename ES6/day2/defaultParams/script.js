function courseManager(obj = {}) {
  let allowedProp = ["courseName", "courseDuration", "courseOwner"];
  const passedKeys = Object.keys(obj);

  for(let key of passedKeys) {
    if(!allowedProp.includes(key)) {
      throw new Error(`Property '${key}' is not allowed!`);
    }
  }

  let defaultObj = {
    courseName:"ES6",
    courseDuration:"3days",
    courseOwner:"JavaScript"
  }

  let settings = Object.assign({}, defaultObj, obj);
  return `Course: ${settings.courseName}, Duration: ${settings.courseDuration}, Owner: ${settings.courseOwner}`;
}

console.log(courseManager({courseName: "React"}));

console.log(courseManager());

try {
  console.log(courseManager({ courseName: "Angular", price: 5000 }));
} catch (e) {
  console.error(e.message); 
}