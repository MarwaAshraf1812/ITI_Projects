let userAgreed = confirm("Do you want to start waiting for 5 seconds?");

function startWait5Sec() {
  if (userAgreed) {
      let startTime = new Date().getTime();
      let endTime = startTime + 5000;

      while(Date.now() < endTime) {}
      document.body.innerHTML = "Finished waiting for 5 seconds.";
  }
}


startWait5Sec();