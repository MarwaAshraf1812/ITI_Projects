import { GameState } from '../models/Types.js';
import { SoundController } from './SoundController.js';

export class MemoryGame {
  private state: GameState;
  private images: string[] = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
  ];
  private gameBoardElem: HTMLElement;
  private progressElem: HTMLElement;
  private lockBoard: boolean = false;
  private soundControl: SoundController;

  constructor(){
    this.soundControl = new SoundController();
    this.gameBoardElem = document.getElementById('game-board')!;
    this.progressElem = document.getElementById('game-progress')!;
    this.state = {
      cards: [],
      matchesCards: 0,
      flippedCards: [],
      isGameOver: false,
      totalMatches: 0,
      progress: 0,
    }

    this.initGame();
    this.state.matchesCards = 0;
    this.state.totalMatches = this.images.length / 2;
    this.state.isGameOver = false;
    this.state.progress = 0;
    this.updateProgress();
    this.setupEventListeners();
    this.soundControl.playBackGroundAudio();
  }

  private setupEventListeners() {
    this.gameBoardElem.addEventListener('click', (e) => {
      const cardContainer = (e.target as HTMLElement).closest('.card-container');
      if (cardContainer) {
        const id = parseInt(cardContainer.getAttribute('data-id')!);
        this.handleCardClick(id);
      }
    });
  }

  private initGame() {
    const shuffledImages = this.shuffle(this.images);
    this.state.cards = shuffledImages.map((image, index) => ({
      id: index,
      value: image,
      isFlipped: false,
      isMatched: false,
    }));
    this.render();
  }

  private shuffle<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  private render() {
    this.gameBoardElem.innerHTML = '';
    this.state.cards.forEach(card => {
      const cardHtml = `
                <div class="col d-flex justify-content-center">
                    <div class="card-container ${card.isMatched ? 'matched' : ''}" data-id="${card.id}" style="width: 100%;">
                        <div class="card-inner ${card.isFlipped ? 'flipped' : ''}">
                            <div class="card-back"></div>
                            <div class="card-front">
                                <img src="assets/images/${card.value}" alt="card">
                            </div>
                        </div>
                    </div>
                </div>
            `;
      this.gameBoardElem.insertAdjacentHTML('beforeend', cardHtml);
    })
  }
  private updateProgress(): void {
    this.state.progress = (this.state.matchesCards / this.state.totalMatches) * 100;
    this.progressElem.style.width = this.state.progress + '%';
    const percentElem = document.getElementById('progress-percent');
    if (percentElem) {
      percentElem.textContent = Math.round(this.state.progress) + '%';
    }
  }

  private handleCardClick(id: number) {
    if (this.lockBoard) return;
    
    const card = this.state.cards.find(c => c.id === id);
    if (!card || card.isFlipped || card.isMatched) return;

    card.isFlipped = true;
    this.state.flippedCards.push(card);
    this.soundControl.playSound('flip');
    this.render();

    if (this.state.flippedCards.length === 2) {
      this.checkMatch();
    }
  }

  private checkMatch() {
    const [card1, card2] = this.state.flippedCards;
    const isMatch = card1.value === card2.value;

    isMatch ? this.handleMatch() : this.handleMismatch();
  }

  private handleMatch() {
    const [card1, card2] = this.state.flippedCards;
    card1.isMatched = true;
    card2.isMatched = true;
    this.state.matchesCards++;
    this.state.flippedCards = [];
    this.soundControl.playSound('match');
    this.updateProgress();
    this.render();

    if (this.state.matchesCards === this.state.totalMatches) {
      this.state.isGameOver = true;
      this.soundControl.stopAudio();
      this.soundControl.playSound('win');
      setTimeout(() => alert('Congratulations! You matched all cards!'), 500);
    }
  }

  private handleMismatch() {
    this.lockBoard = true;
    this.soundControl.playSound('fail');
    const [card1, card2] = this.state.flippedCards;
    setTimeout(() => {
      card1.isFlipped = false;
      card2.isFlipped = false;
      this.state.flippedCards = [];
      this.lockBoard = false;
      this.render();
    }, 1000);
  }
}

