

function registerUser() {
  let expireDate = new Date();
  expireDate.setMonth(expireDate.getHours() + 1);

  let username = document.getElementById("nameInput").value;
  let userAge = document.getElementById("ageInput").value;
  let color = document.getElementById("colorSelect").value;

  let userGender = document.querySelector('input[name="gender"]:checked');
  let userGenderValue =  userGender ? userGender.value : "unkown";
  console.log(username, userAge, color, userGenderValue)

  setCookies("username", username, expireDate)
  setCookies("userAge", userAge, expireDate)
  setCookies("userColor", color, expireDate)
  setCookies("userGender", userGenderValue, expireDate)
  setCookies("visits", "0", expireDate);

  location.replace("profile.html");
}

function setCookies(cookieName, cookieValue, expiryDate) {

  if (arguments.length < 2) {
    throw new Error("Error: You must pass at least cookieName and cookieValue.");
  }

  if (typeof cookieName !== "string") {
    throw new Error("Error: cookieName must be a String.");
  }

  let expires = "";
  if (expiryDate) {
    expires = "; expires=" + expiryDate.toUTCString()
  }

  document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
}

function getCookie(cookieName) {
  let splittedvalues = document.cookie.split(";");
  console.log(splittedvalues);
  // let value = splittedvalues[0].split("=");
  // console.log(value);
  // let cookieValue = value[1];
  // console.log(cookieValue)

  if (arguments.length === 0) {
    throw new Error("Error: You must pass a parameter (cookieName).");
  }

  if (typeof cookieName !== "string") {
    throw new Error("Error: The parameter must be a String.");
  }


  for (let i =0; i < splittedvalues.length; i++) {
    let cookiePair = splittedvalues[i].split("=");

    let key = cookiePair[0].trim();
    let value = cookiePair[1];

    if (key == cookieName) {
      console.log(value);
      return value;
    }
  }
  return null;
}


function deleteCookie(cookieName) {
  let expireDate = new Date();
  expireDate.getDate() - 1;
  document.cookie = cookieName + "=;" + expireDate;

  let splittedvalues = document.cookie.split(";");
  console.log(splittedvalues);

  if(getCookie(cookieName) === null) {
    console.log("Deleted Successfully");
    return true;
  } else {
    console.log("Failed to delete");
    return false;
  }
}

function allCookieList() {

  let cookiesList = {}

  if (document.cookie === "") {
    return cookiesList;
  }
  let splittedvalues = document.cookie.split(";");

  for (let i =0; i < splittedvalues.length; i++) {
    let cookiePair = splittedvalues[i].split("=");
    let key = cookiePair[0].trim();
    let value = cookiePair[1];

    cookiesList[key] = value;
  }
  return cookiesList;

}

let cookieList = allCookieList();
console.log(cookieList)

function hasCookie(cookieName) {
  let splittedvalues = document.cookie.split(";");

  for (let i =0; i < splittedvalues.length; i++) {
    let cookiePair = splittedvalues[i].split("=");
    let key = cookiePair[0].trim();

    if (key == cookieName) {
      return true;
    }
  }
  return false;
}

if (hasCookie("username")) {
    console.log("User is logged in");
} else {
    console.log("User is a guest");
}
