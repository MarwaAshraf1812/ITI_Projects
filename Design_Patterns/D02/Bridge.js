// Bridge Pattern: Decouples an abstraction from its implementation so that the two can vary independently.

// Layer 1: The Implementation Hierarchy
// This part defines the actual objects that do the work (Devices).
// Changes here won't affect the Remote controls.
class Device {
  setVolume(volume) {}
  getVolume() {}
  setMute() {}
  isMuted() {}
}


class TV extends Device {
  constructor() {
    super();
    this.volume = 0;
    this.muted = false;
  }

  setVolume(volume) {
    this.volume = volume;
    console.log('tv volume changed');
  }

  getVolume() {
    return this.volume;
  }

  setMute() {
    this.muted = true;
    console.log('tv muted');
  }

  isMuted() {
    return this.muted;
  }
}


class Speaker extends Device {
  constructor() {
    super();
    this.volume = 50;
    this.muted = false;
  }

  setVolume(volume) {
    this.volume = volume;
    console.log('speaker volume changed');
  }

  getVolume() {
    return this.volume;
  }

  setMute() {
    this.muted = true;
    console.log('speaker muted');
  }

  isMuted() {
    return this.muted;
  }
}
// Layer 2: The Abstraction Hierarchy (The "Bridge")
// This part defines the interface for the user (Remote Controls).
// It maintains a reference to a 'Device' object (The Bridge).
// You can add new Remotes without changing the Device code.
class BasicRemote {
  constructor(device) {
    this.device = device;
  }

  // The "Bridge" in action: The remote delegates the task to the device.
  increaseVolume() {
    const current = this.device.getVolume();
    this.device.setVolume(current + 10);
  }

  decreaseVolume() {
    const current = this.device.getVolume();
    this.device.setVolume(current - 10);
  }
}

class AdvancedRemote extends BasicRemote {
  constructor(device) {
    super(device);
  }

  mute() {
    const state = this.device.isMuted();
    this.device.setMute(!state);
  }
}


// client code
console.log("--- tv with basic remote ---");
const myTV = new TV();
const basicRemote = new BasicRemote(myTV);
basicRemote.increaseVolume(); 

console.log("\n--- speaker with advanced remote ---");
const mySpeaker = new Speaker();
const advancedRemote = new AdvancedRemote(mySpeaker);
advancedRemote.increaseVolume();
advancedRemote.mute();

// Summary of the Bridge Process:
// 1. Abstraction (Remote): Provides the high-level logic (increaseVolume, mute).
// 2. Implementation (Device): Provides the low-level logic (setVolume, setMute).
// 3. The Bridge: The 'device' property in the Remote links the two layers.
// 4. Benefit: You can add a 'Radio' device or a 'TouchRemote' without breaking existing code.