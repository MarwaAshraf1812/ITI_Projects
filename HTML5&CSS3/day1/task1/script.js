var video = document.getElementById("vidField");
var playBtn = document.getElementById("playBtn");
var stopBtn = document.getElementById("stopBtn");
var muteBtn = document.getElementById("muteBtn");
var scrapper = document.getElementById("scrapperId");
var speed = document.getElementById("speedId");
var vol = document.getElementById("volumeId");
var beginBtn = document.getElementById("beginBtn");
var backBtn = document.getElementById("backBtn");
var fwdBtn = document.getElementById("fwdBtn");
var endBtn = document.getElementById("endBtn");
var timeDisplay = document.getElementById("timeDisplay");

video.poster = "./frozen.jpg";
video.autoplay = false;
video.controls = false;


playBtn.addEventListener("click", function() {
  video.play();
});


stopBtn.addEventListener("click", function() {
  video.pause();
  video.currentTime = 0; 
});


muteBtn.addEventListener("click", function() {
  video.muted = !video.muted;
  if (video.muted) {
    muteBtn.innerText = "Unmute";
  } else {
    muteBtn.innerText = "Mute";
  }
});

video.addEventListener("loadedmetadata", function () {
  scrapper.max = video.duration;
});

video.addEventListener("timeupdate", function () {
  scrapper.value = video.currentTime;
  
  var currentMIn = Math.floor(video.currentTime / 60);
  var currentSEc = Math.floor(video.currentTime - currentMIn * 60);
  var durationMIn = Math.floor(video.duration / 60); 
  var durationSEc = Math.floor(video.duration - durationMIn * 60);

  if (currentSEc < 10) currentSEc = "0" + currentSEc;
  if (durationSEc < 10) durationSEc = "0" + durationSEc;

  timeDisplay.innerHTML = currentMIn + ":" + currentSEc + " / " + durationMIn + ":" + durationSEc;
});


scrapper.addEventListener("input", function () {
  video.currentTime = scrapper.value;
});

vol.addEventListener("input", function (e) {
  video.volume = vol.value;
});


beginBtn.addEventListener("click", function (e) {
  video.currentTime = 0;
});

backBtn.addEventListener("click", function (e) {
  video.currentTime -= 5;
});

fwdBtn.addEventListener("click", function (e) {
  video.currentTime += 5;
});

endBtn.addEventListener("click", function (e) {
  video.currentTime = video.duration;
});

// 9. التحكم في السرعة
speed.addEventListener("input", function () {
  video.playbackRate = speed.value;
});