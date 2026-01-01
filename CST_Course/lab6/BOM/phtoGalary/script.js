let srcArray = [
    "./SlideShow/1.jpg",
    "./SlideShow/2.jpg",
    "./SlideShow/3.jpg",
    "./SlideShow/4.jpg",
    "./SlideShow/5.jpg",
    "./SlideShow/6.jpg",
]
let imageGallary = document.getElementById('photo');
let timer;
let counter=0;


function slideShowBtn() {
  if(timer) clearInterval(timer);

  timer = setInterval(
    function() {
        imageGallary.src = srcArray[counter];
        counter++;
        console.log(counter);
      if (counter >= srcArray.length) {
        counter = 0;
      }
    }, 2000);
}

function stopSlideShowBtn() {
  clearInterval(timer);
}


function nextBtn() {
  if(timer) clearInterval(timer);

  if (counter < srcArray.length - 1) {
    counter++;
    imageGallary.src = srcArray[counter];
  } else {
    console.log("End of the images");
  }

}

function pervBtn() {
  if(timer) clearInterval(timer);

  if (counter > 0)  {
    counter--;
    imageGallary.src = srcArray[counter];
  } else {
    console.log("This is the first image");
  }
}
