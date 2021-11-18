var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.05
	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05
	console.log("Speed: " + video.playbackRate);
});



document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 15
	if (video.currentTime == 67.403333){ 
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	if (document.getElementById("mute").innerHTML == "Mute"){ 
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
		document.getElementById("volume").innerHTML = "0%";
	}
	else{ 
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
		document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
	}
});

document.querySelector("#slider").addEventListener("change", function(){   
	video.volume = document.querySelector("#slider").value / 100;  
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
	console.log(video.volume); 
});  


document.querySelector("#vintage").addEventListener("click", function() {
	// var element = document.getElementById("vintage");
	video.classList.add("oldSchool");
	console.log("Old School Style");
  });

  document.querySelector("#orig").addEventListener("click", function() {
	// var element = document.getElementById("orig");
	video.classList.remove("oldSchool");
	console.log("Remove Old School Style");
});


