let userInfo = window.location.search;
console.log("User Info from URL:", userInfo);

let queryString = userInfo.substring(1);
console.log("Query String without '?':", queryString);


let urlParams = queryString.split('&');
console.log("URL Parameters Array:", urlParams);

let userName = urlParams[0].split('=')[1];
let jobTitle = urlParams[1].split('=')[1];
let userEmail = urlParams[2].split('=')[1];
let userMobile = urlParams[4].split('=')[1];
let userAddress = urlParams[5].split('=')[1];
let userGender = urlParams[6].split('=')[1];


let greetingMsg = document.getElementById('greetingMsg').innerHTML = 'Hello ' + userName + ', welcome to the Registration Page!';


let userInfoDetails = document.getElementById('userInfo').innerHTML =
    '<h3>User Info</h3> <br>' +
    "<ul>" +
    "<li><strong>UserName:</strong> " + userName + '<br>' + "</li>" +
    "<li><strong>Job Title:</strong> " + jobTitle + '<br>' + "</li>" +
    "<li><strong>Email:</strong> " + userEmail + '<br>' + "</li>" +
    "<li><strong>Mobile:</strong> " + userMobile + '<br>' + "</li>" +
    "<li><strong>Address:</strong> " + userAddress + '<br>' + "</li>" +
    "<li><strong>Gender:</strong> " + userGender + '<br>' + "</li>";
    "</ul>";


let userAgent = navigator.userAgent;
let warningMsg = document.getElementById('wariningMsg')

console.log("User Agent:", userAgent.indexOf("Chrome"));

if (userAgent.indexOf("Chrome") === -1) {
  warningMsg.innerHTML = "Recommendation: For better experience, please use Google Chrome browser!";
}