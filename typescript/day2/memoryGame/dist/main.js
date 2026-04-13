import { MemoryGame } from "./core/Game.js";
const startBTN = document.getElementById('start-btn');
startBTN === null || startBTN === void 0 ? void 0 : startBTN.addEventListener('click', () => {
    new MemoryGame();
});
