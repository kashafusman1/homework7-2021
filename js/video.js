var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow Down");
  video.playbackRate *= 0.95;
  console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed Up");
  video.playbackRate *= 1.05;
  console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  if (video.duration - video.currentTime - 15 > 0) {
    video.currentTime = video.currentTime + 15;
    console.log("Current video" + video.currentTime);
  } else {
    video.currentTime = 0;
    console.log("Beggining of thr video");
  }
});

document.querySelector("#mute").addEventListener("click", function () {
  console.log("Mute Video");

  if (video.muted) {
    video.muted = false;
    document.getElementById("mute").innerHTML = "Mute";
  } else {
    video.muted = true;
    document.getElementById("mute").innerHTML = "Unmute";
  }
});

document.querySelector("#slider").addEventListener("click", function () {
  console.log(this.value);
  video.volume = this.value / 100;
  document.getElementById("volume").innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
  console.log("Change to Oldschool");
  document.querySelector("#player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  console.log("Remove Oldschool");
  document.querySelector("#player1").classList.remove("oldSchool");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
