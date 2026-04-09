# 🎮 Memory Game - TypeScript Edition

A premium, modern web-based Memory Matching game built with **TypeScript**, featuring high-end aesthetics, immersive sound effects, and smooth animations.


## ✨ Features

- **Premium UI/UX**: Designed with a modern **Glassmorphism** aesthetic, deep dark theme, and neon accents.
- **Dynamic Gameplay**: Smooth card flipping mechanics with built-in match detection and board locking.
- **Immersive Audio**: 
    - 🎵 Atmospheric background music.
    - 🔊 Snappy feedback sounds for flips, matches, and mismatches.
    - 🏆 Triumphal victory sound effect.
- **Real-time Progress**: A glowing neon progress bar that tracks your matching accuracy in real-time.
- **Responsive Design**: Optimized for everything from large desktops to mobile devices.
- **Strict TypeScript**: Built with type safety, ensuring a robust and maintainable codebase.

## 🛠️ Tech Stack

- **Logic**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (Custom Glassmorphism + Neon utilities)
- **Framework**: [Bootstrap 5](https://getbootstrap.com/) (Grid & Layout support)
- **Audio**: Web Audio API

## 🚀 Getting Started

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and the TypeScript compiler installed on your system.

```bash
npm install -g typescript
```

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd memoryGame
   ```

3. **Compile the TypeScript files**:
   ```bash
   tsc
   ```

4. **Open the game**:
   Simply open `index.html` in your favorite browser. 
   
   *Note: For the best experience (and to bypass browser audio restrictions), it is recommended to serve the folder using a local server like `Live Server` in VS Code.*

## 📁 Project Structure

```text
memoryGame/
├── assets/
│   ├── audio/       # Sound effects and background music
│   └── images/      # Card front images
├── dist/            # Compiled JavaScript files
├── src/
│   ├── core/
│   │   ├── Game.ts            # Central game logic
│   │   └── SoundController.ts # Audio management system
│   ├── models/
│   │   └── Types.ts           # Shared interfaces and types
│   └── main.ts                # Application entry point
├── styles/
│   └── style.css              # Custom premium styling
├── index.html                 # Game layout
└── tsconfig.json              # TypeScript configuration
```

## 🎮 How to Play

1. Click **"Start New Game"** to initialize the board.
2. Click on a card to reveal its symbol.
3. Select a second card to try and find a match.
4. If they match, they stay revealed and faded.
5. If they don't match, they flip back over after a short delay.
6. Fill the progress bar to 100% to win!

---

Built with ❤️ by [Marwa Ashraf/ITI]
