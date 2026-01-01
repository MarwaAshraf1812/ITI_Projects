let orangeCiricleSRC = "./marbels/marble3.jpg"
let greyCiricleSRC = "./marbels/marble1.jpg"
let imgs = document.getElementsByTagName("img");
let timer;
let counter = 0;



function  moveMarble() {

  imgs[counter].src = greyCiricleSRC;
  counter++;
  

  if(counter >= imgs.length) {
    counter = 0
  }
  imgs[counter].src = orangeCiricleSRC;

}

function startMove() {
  if (timer) clearInterval(timer);
  timer = setInterval(moveMarble, 1000);
}

function stopMove() {
  clearInterval(timer);
}

startMove();