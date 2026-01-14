function checkUsers() {
  let name = getCookie("username");
  console.log("name")

  if(!name) {
    location.replace("register.html")
  } else {
    let visitsNum = Number(getCookie("visits") || 0) + 1;
    let color = getCookie("userColor")
    let gender = getCookie("userGender")

    let date = new Date();
    date.setMonth(date.getMonth() + 1);
    setCookies("visits", visitsNum, date);
    console.log("updated", visitsNum)


    
    let greetingMsg = document.getElementById("welcomeMsg");
    greetingMsg.innerHTML = "Welcome " + name;
    greetingMsg.style.color = color;

    document.getElementById("visitCount").innerHTML = visitsNum;

    if(gender == "male") {
      document.getElementById("profilePic").src = "./cookies/1.jpg";
    } else {
      document.getElementById("profilePic").src = "./cookies/2.jpg";
    }
  }
}