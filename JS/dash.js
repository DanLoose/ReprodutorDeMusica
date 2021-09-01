let rock = document.getElementById("rock");
let funk = document.getElementById("funk");
let eletronica = document.getElementById("eletronica");

let buttonRock = document.getElementById("buttonRock");
let buttonFunk = document.getElementById("buttonFunk");
let buttonEletronica = document.getElementById("buttonEletronica");

// buttonRock.addEventListener("click", selectRock);
// buttonFunk.addEventListener("click", selectFunk);
buttonEletronica.addEventListener("click", selectEletronica);

function selectRock(){
    rock.style.display = "block";
    funk.style.display = "none";
    eletronica.style.display = "none";

    buttonRock.style.color = "#1ABC9C";
    buttonFunk.style.color = "white";
    buttonEletronica.style.color = "white";
}

function selectFunk(){
    rock.style.display = "none";
    funk.style.display = "block";
    eletronica.style.display = "none";

    buttonRock.style.color = "white";
    buttonFunk.style.color = "#1ABC9C";
    buttonEletronica.style.color = "white";
}

function selectEletronica(){
    rock.style.display = "none";
    funk.style.display = "none";
    eletronica.style.display = "block"; 

    buttonRock.style.color = "white";
    buttonFunk.style.color = "white";
    buttonEletronica.style.color = "#1ABC9C";
}

// Music Control 
var audioControl = document.getElementById("audioControl");
function changeMusic(audio){
    audioControl.pause();
    audioControl = audio;
    playMusic();
}

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

var repeat = false;
let repetirAtivado = document.getElementById("repetirAtivado");
let repetirDesativado = document.getElementById("repetir");

function setRepeat(){
    repeat = !repeat;
    
    repeat == true? repetirAtivado.style.display = "block" : repetirAtivado.style.display = "none";
    repeat == true? repetirDesativado.style.display = "none" : repetirDesativado.style.display = "block";

    while(repeat == true){
        audioControl.loop();
    }
}

var random = false;
let randomAtivado = document.getElementById("aleatorio");
let randomDesativado = document.getElementById("aleatorioAtivado");

function setRandom(){
    random = !random;
    
    random == true? randomAtivado.style.display = "block" : randomAtivado.style.display = "none";
    random == true? randomDesativado.style.display = "none" : randomDesativado.style.display = "block";
}

var selected;
function selectMusic(e){

    let audio = e.children[2];
    changeMusic(audio);

    // selected.classList.toggle("unSelected");
    // selected = e;
    // selected.classList.toggle("selected");
}

