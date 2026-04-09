"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryGame = void 0;
class MemoryGame {
    constructor() {
        this.state = {
            cards: [],
            flippedCards: [],
            matchesCards: 0,
            totalMatches: 0,
            isGameOver: false,
            progress: 0,
        };
        this.boardElement = document.getElementById('game-board');
        this.progressElement = document.getElementById('game-progress');
        this.startButton = document.getElementById('start-btn');
    }
}
exports.MemoryGame = MemoryGame;
