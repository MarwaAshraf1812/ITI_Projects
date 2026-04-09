import { SoundTypes } from "../models/Types.js";

export class SoundController {
  private sounds: { [key in SoundTypes]?: HTMLAudioElement } = {};
  private ambientMusic: HTMLAudioElement | null = null;

  constructor() {
    this.sounds = {
      flip: new Audio('assets/audio/flip.mp3'),
      match: new Audio('assets/audio/good.mp3'),
      fail: new Audio('assets/audio/fail.mp3'),
      win: new Audio('assets/audio/game-over.mp3'),
      fullTrack: new Audio('assets/audio/fulltrack.mp3'),
    };

    this.ambientMusic = this.sounds.fullTrack || null;
    if (this.ambientMusic) {
      this.ambientMusic.loop = true;
      this.ambientMusic.volume = 0.3;
    }
  }

  playSound(type: SoundTypes) {
    const sound = this.sounds[type];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch((e) =>
        console.warn("Audio playback failed (usually requires user interaction first):", e)
      );
    }
  }

  playAmbient() {
    if (this.ambientMusic) {
      this.ambientMusic.currentTime = 0;
      this.ambientMusic.play().catch((e) =>
        console.warn("Ambient music playback failed:", e)
      );
    }
  }

  stopAmbient() {
    if (this.ambientMusic) {
      this.ambientMusic.pause();
      this.ambientMusic.currentTime = 0;
    }
  }
}
