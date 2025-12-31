let childWindow;
let timer;

let dx = 20;
let dy = 20;

function openFlyingWindow() {
  childWindow = window.open(
    "",
    "_blank",
    "width=300,height=200"
  );

  childWindow.document.write("<h1>This is the Child Window</h1>");
  timer = setInterval(moveChild, 100);
}

function moveChild() {
  if (!childWindow || childWindow.closed) {
    clearInterval(timer);
    return;
  }
  childWindow.moveBy(dx, dy);
  childWindow.focus();

  if (
      childWindow.screenX <=0 ||
      childWindow.screenX >= screen.availWidth - 300
    ) {
      dx = -dx;
    }

    if (
      childWindow.screenY <= 0 ||
      childWindow.screenY >= screen.availHeight - 200
    ) {
      dy = -dy;
    }
}

function stopFlying() {
  clearInterval(timer);
  if(childWindow) {
    childWindow.close();
  }
}