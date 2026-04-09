export interface Card {
  readonly id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}


export interface GameState {
  cards: Card[];
  flippedCards: Card[];
  matchesCards: number;
  totalMatches: number;
  isGameOver: boolean;
  progress: number;
}

export type SoundTypes = "fullTrack" |"match" | "flip" | "win" | "fail";