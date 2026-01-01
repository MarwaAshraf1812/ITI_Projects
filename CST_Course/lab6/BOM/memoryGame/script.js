let images = [
  "./memory Game/1.gif",
  "./memory Game/2.gif",
  "./memory Game/3.gif",
  "./memory Game/4.gif",
  "./memory Game/5.gif",
  "./memory Game/6.gif",
  "./memory Game/1.gif",
  "./memory Game/2.gif",
  "./memory Game/3.gif",
  "./memory Game/4.gif",
  "./memory Game/5.gif",
  "./memory Game/6.gif",
];

let firstCard = -1;
let secondCard = -1;
let matchedCards = 0;


function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function startGame() {
  shuffle(images);

  firstCard = -1;
  secondCard = -1;
  matchedCards = 0;


  for (let i = 0; i < images.length; i++) {
    document.images[i].src = "./memory Game/Moon.gif";
  }

}

function flipCard(index) {
  if (secondCard != -1) return;

  let clickedCard = document.images[index];
  if(clickedCard.src.indexOf("Moon.gif") == -1) return;

  clickedCard.src = images[index];

  if (firstCard == -1) {
    firstCard = index;
  } else {
    secondCard = index;
    setTimeout(matchCard, 500);
  } 

}


function matchCard() {
  let firstImage = document.images[firstCard];
  let secondImage = document.images[secondCard];


  if (images[firstCard] == images[secondCard]) {
    matchedCards ++;
    if (matchedCards == images.length / 2) {
      alert("Congratulations! You've matched all the cards!");
    }
    
  } else {
      firstImage.src = "./memory Game/Moon.gif";
      secondImage.src = "./memory Game/Moon.gif";
  }
    firstCard = -1;
    secondCard = -1;
  
}


startGame();