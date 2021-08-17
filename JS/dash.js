let rock = document.getElementById("rock");
let funk = document.getElementById("funk");
let eletronica = document.getElementById("eletronica");

let buttonRock = document.getElementById("buttonRock");
let buttonFunk = document.getElementById("buttonFunk");
let buttonEletronica = document.getElementById("buttonEletronica");

buttonRock.addEventListener("click", selectRock);
buttonFunk.addEventListener("click", selectFunk);
buttonEletronica.addEventListener("click", selectEletronica);

function selectRock(){
    rock.style.display = "block";
    funk.style.display = "none";
    eletronica.style.display = "none";
}

function selectFunk(){
    rock.style.display = "none";
    funk.style.display = "block";
    eletronica.style.display = "none";
}

function selectEletronica(){
    rock.style.display = "none";
    funk.style.display = "none";
    eletronica.style.display = "block";
}

// Music Control 
var audioControl = document.getElementById("audioControl");
function changeMusic(audio){
    audioControl.pause();
    audioControl = audio;
    playMusic();
}

// Play & Pause

function playMusic(){
    let play = document.getElementById("play").style;
    let pause = document.getElementById("pause").style;

    if(audioControl != document.getElementById("audioControl")){
        audioControl.play();
        play.display = "none";
        pause.display = "block";
    }
    
}

function pauseMusic(){
    let play = document.getElementById("play").style;
    let pause = document.getElementById("pause").style;

    audioControl.pause();
    play.display = "block";
    pause.display = "none";
}


function selectMusic(e){
    let audio = e.children[2];
    changeMusic(audio);
}

