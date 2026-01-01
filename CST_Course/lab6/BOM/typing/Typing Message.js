let typingWindow ;
let message = "Hello! This is a typing message created by JavaScript BOM.";
let timer;


function createWindow() {
  typingWindow = window.open(
    "",
    "_blank",
    "width=400,height=200"
  );
  typingWindow.focus();

  if (typingWindow) {
    typingWindow.document.body.innerHTML = "<h3></h3><p id='msg'></p>";
  }
}



function showTypingMessage() {
  if (!typingWindow || typingWindow.closed) {
    createWindow();
  }

  let counter =0;
  timer = setInterval(function() {
    if(counter < message.length) {
      typingWindow.document.getElementById("msg").innerHTML += message.charAt(counter);
      counter++;
    }


  }, 50);
  }
