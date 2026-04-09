import { SoundTypes } from "../models/Types.js";

export class SoundController {
  private sounds: {[key in SoundTypes]?: HTMLAudioElement} = {};
  private backAudio: HTMLAudioElement | null = null;

  constructor() {
    this.sounds = {
      flip: new Audio('assets/audio/flip.mp3'),
      match: new Audio('assets/audio/good.mp3'),
      fail: new Audio('assets/audio/fail.mp3'),
      win: new Audio('assets/audio/game-over.mp3'),
      fullTrack: new Audio('assets/audio/fulltrack.mp3'),
    };

    this.backAudio = this.sounds.fullTrack || null;
    if(this.backAudio) {
      this.backAudio.loop = true;
      this.backAudio.volume = 0.3;
    }

  }


   playSound(soundType: SoundTypes) {
    const sound = this.sounds[soundType];
    if(sound) {
      sound.currentTime = 0;
      sound.play().catch((err) => 
         console.warn("Audio playback failed (usually requires user interaction first):", err
      ))
    }
  }

   playBackGroundAudio(){
    if(this.backAudio) {
      this.backAudio.currentTime = 0;
      this.backAudio.play().catch((err) => 
         console.warn("Audio playback failed :", err
      ))
    }
  }

  stopAudio() {
    if(this.backAudio) {
      this.backAudio.pause();
      this.backAudio.currentTime = 0;
    }
  }
}

