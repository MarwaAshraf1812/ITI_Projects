let adWindow;
let timer;

function fillContent(wind) {
  wind.document.write("<h1>This is the Ad Window</h1>");
  for (let i = 0; i < 100; i++) {
    wind.document.write(
      "<p>This is some sample content to enable scrolling. Line " + (i + 1) + "</p>"
    );
  }
}
function openAdInterval() {
  adWindow = window.open(
    "",
    "_blank",
    "width=300,height=200",
    "scrollbars=yes"
  );
  fillContent(adWindow);
  
  timer = setInterval(function () {
    if (!adWindow || adWindow.closed) {
      clearInterval(timer);
      return;
    }

    adWindow.scrollBy(0, 5);

    if ( (adWindow.innerHeight + adWindow.scrollY) >= adWindow.document.body.offsetHeight) {
      clearInterval(timer);
    }
  }, 50);
}

function stopScrolling() {
  clearInterval(timer);
  adWindow.focus();
}