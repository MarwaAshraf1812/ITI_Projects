var timer;
var step1 = 10; 
var step2 = 10;
var stepTop = 10;

function go() {
  if (timer) return;

  timer = setInterval(function() {
  var img1 = document.getElementById('icon1');
  var img2 = document.getElementById('icon2');
  var imgTop = document.getElementById('iconTop');

  var currentImg1 = parseInt(img1.style.left || 0);
  if (currentImg1 >= 550 || currentImg1 < 0) {
    step1 *= -1;
  }

  img1.style.left =  (currentImg1 + step1) + "px";


  var currentImg2 = parseInt(img2.style.right || 0);
  if (currentImg2 >= 550 || currentImg2 < 0) {
    step2 *= -1;
  }

  img2.style.right =  (currentImg2 + step1) + "px";


  var currentImgTop = parseInt(imgTop.style.top || 0);
  if (currentImgTop >= 250 || currentImgTop < 0) {
    stepTop *= -1;
  }

  imgTop.style.top =  (currentImgTop + stepTop) + "px";
  }, 50);
}

function stop() {
  clearInterval(timer);
  timer = null;

}

function reset() {
  stop();
  var img1 = document.getElementById('icon1');
  var img2 = document.getElementById('icon2');
  var imgTop = document.getElementById('iconTop');

  img1.style.left = "0px";
  img2.style.right = "0px";
  imgTop.style.top = "0px";

  var step1 = 10; 
  var step2 = 10;
  var stepTop = 10;
}