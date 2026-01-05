// let btn = document.getElementById("submitBtn");

// btn.addEventListener("click", function (e) {
//   let username = document.getElementById("name").value;
//   let pass = document.getElementById("password").value;
//   let submitConfirm = confirm("Do you want to confirm submission?");
//   if (!submitConfirm) {
//     e.preventDefault();
//     console.log("Form submission cancelled by user.");
//     console.log("Username: " + username);
//     console.log("Password: " + pass);
//     console.log("Confirmation Status: " + submitConfirm);

//   } else {
//     alert("Form submitted successfully!");
//   }
// });



//task A.2.2
let timer;
let customEvent = new Event("userInfoEvent");

document.addEventListener("userInfoEvent", function() {
  alert("Warning: 30 seconds passed without user information!");
})
function startTimer() {
  timer = setTimeout( function() {
    let currentName = document.getElementById("name").value;
    let currentPass = document.getElementById("password").value;
    if (currentName === "" && currentPass === "") {
    document.dispatchEvent(customEvent);
    console.log("Event Fired! No user information provided.");
    } else {
      console.log("User information provided. Event not fired.");
    }
  }, 30);
}
startTimer()
