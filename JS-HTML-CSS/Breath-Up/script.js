let text = document.getElementById("catInformation");
let containerList = [1,2,3,4,5];
let selectedContainer = 1;
let btnStart = document.getElementById("startButton");
let circle = document.getElementById("circle")

/* Text for the Rythm */
let startingText = `Inhale 3s
Exhale 5s`;
let cardiacText = `Inhale 5s
Exhale 5s`;
let calmText = `Inhale 4s
Exhale 8s`;
let reinforceText = `Inhale 6s
Exhale 6s
Focus 10s`;
let customText = `Inhale 5s
Exhale 5s`;

let inhaleSec = 3;
let exhaleSec = 5;
let pauseSec = 0;
let durationMin = 5;
    
containerList.forEach(element => {
    initialyze(element);
});

function resetSelected(){
    containerList.forEach(element => {
        if(element != selectedContainer){
            let container = document.getElementById(element)
            container.style.animation = "";
        }
    });
}

function initialyze(nbContainer){
    let container = document.getElementById(nbContainer);
    function changeSelection(){
        container.style.animation = "smoothColorChange 1s forwards";
        selectedContainer = nbContainer;
        resetSelected();
        changeText();
    }
    container.addEventListener('click',changeSelection);
}
function changeText(){
    if(selectedContainer == 1){
        text.textContent = startingText;
        inhaleSec = 3;
        exhaleSec = 5;
    }
    else if(selectedContainer == 2){
        text.textContent = cardiacText;
        inhaleSec = 5;
        exhaleSec = 5;
    }
    else if(selectedContainer == 3){
        text.textContent = calmText;
        inhaleSec = 4;
        exhaleSec = 8;
    }
    else if(selectedContainer == 4){
        text.textContent = reinforceText;
        inhaleSec = 6;
        exhaleSec = 6;
        pauseSec = 10;
    }
    else {
        text.textContent = customText;
        inhaleSec = 5;
        exhaleSec = 5;
    }
}

function startCycle(){    
    let iteration = 0;
    let numberOfIteration = ((5*60)/inhaleSec+exhaleSec);
    startInhaleAnimation();
    circle.addEventListener('animationend',(event)=>{
        if (iteration < numberOfIteration){
            let animationName = event.animationName;
            if (animationName == 'circleInhale'){   
                startExhaleAnimation();
                iteration++
            }
            else if (animationName == 'circleExhale'){
                startInhaleAnimation();
            }
        }
    })
}

function startInhaleAnimation(){
    circle.style.animation="none";
    circle.style.animation=`circleInhale ${inhaleSec}s forwards`;
}
function startExhaleAnimation(){
    circle.style.animation="none";
    circle.style.animation=`circleExhale ${exhaleSec}s forwards`;
}
btnStart.addEventListener("click",startCycle);
