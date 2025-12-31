let childWindow;
let timer;

let dx = 20;
let dy = 20;

function openFlyingWindow() {
  childWindow = window.open("", "_blank", "width=300,height=200");
  childWindow.document.write("<h1>This is the Child Window</h1>");

  moveWindow();
}

function moveWindow() {
  if (!childWindow || childWindow.closed) return;
  childWindow.moveBy(dx, dy);
  childWindow.focus();
  childWindow.resizeTo(300, 200);

  if (
    childWindow.screenX <= 0 ||
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

  timer = setTimeout(moveWindow, 300);
}

function stopFlying() {
  clearTimeout(timer);
  if(childWindow) childWindow.focus();
}
