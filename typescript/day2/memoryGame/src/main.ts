import { MemoryGame } from "./core/Game.js";

const startBTN = document.getElementById('start-btn');

startBTN?.addEventListener('click', ()=> {
    new MemoryGame();
})