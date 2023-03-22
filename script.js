
/*let divContainer = document.createElement("div")
divContainer.id = "divContainer"

let VideoBalise = document.createElement("video");
VideoBalise.className = "videoPlayer";
divContainer.appendChild(VideoBalise);

let sourceBalise = document.createElement("source");
sourceBalise.src = "testvideo2.mp4";
VideoBalise.appendChild(sourceBalise);


document.body.appendChild(divContainer);*/
let video = document.querySelector('video');
let juice = document.querySelector('.orange-juice');
let btn = document.getElementById('play-pause');
let muteButton = document.getElementById("mute-btn");
let volumeBar = document.getElementById("volume-bar");

function toggleplaypause(){
  if (video.paused){
    btn.className = 'pause';
    video.play();
  }
  else{
    btn.className = "play";
    video.pause();
  }  
}

btn.onclick = function() {
    toggleplaypause();
}
video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if (video.ended){
        btn.className = "play";
    }
})
