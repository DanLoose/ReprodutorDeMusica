let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let audio = document.getElementById("audio");
let minhasMusicas = [];

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);

function start(){
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
}

function pause(){
    audio.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
}

setInterval(function(){
    let position = (audio.currentTime/audio.duration) * 100;
    document.getElementById("progressBarDark").style.width = position + "%";
}, 15);