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
    audioControl.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
}

function pauseMusic(){
    audioControl.pause();
    document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";
}


function selectMusic(e){
    let audio = e.children[2];
    changeMusic(audio);
}

