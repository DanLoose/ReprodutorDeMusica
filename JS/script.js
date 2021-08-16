let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let audio = document.getElementById("audio");
let progressBar = document.getElementById("progressBarDark");


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

