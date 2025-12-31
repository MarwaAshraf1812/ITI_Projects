let adWindow;
let timer;

let dx = 20;
let dy = 20;

function fillContent(wind) {
  wind.document.write("<h1>This is the Ad Window</h1>");
  for (let i = 0; i < 100; i++) {
    wind.document.write(
      "<p>This is some sample content to enable scrolling. Line " + (i + 1) + "</p>"
    );
  }
}

function openAdTimeout() {
  adWindow = window.open("", "_blank", "width=300,height=200", "scrollbars=yes");

  fillContent(adWindow);

  performScroll();
}

function performScroll() {

    if (!adWindow || adWindow.closed) {
      clearInterval(timer);
      return;
    }

    adWindow.scrollBy(0, 5);

    if ( (adWindow.innerHeight + adWindow.scrollY) >= adWindow.document.body.offsetHeight) {
      return;
    }
  timer = setTimeout(performScroll, 50);
}

function stopScrolling() {
  clearTimeout(timer);
  adWindow.focus();
}
