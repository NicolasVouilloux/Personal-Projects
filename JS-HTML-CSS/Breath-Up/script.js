let text = document.getElementById("informationAboutCycle");
let selectedContainer = starting;
let btnStart = document.getElementById("startButton");
btnStart.addEventListener("click",startCycle);
let circle = document.getElementById("circle")
let progress = document.getElementById("innerTracker");
let iteration = 1;

const exercices={
    starting :{
        inhaleSec :3,
        exhaleSec :5,
        wait:0,
    },
    cardiac :{
        inhaleSec :5,
        exhaleSec :5,
        wait:0,
    },
    calm :{
        inhaleSec :4,
        exhaleSec :8,
        wait:0,
    },
    reinforce :{
        inhaleSec :6,
        exhaleSec :6,
        wait:10,
    },
}
let containerList = Object.keys(exercices)
    
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

function initialyze(exerciceName){
    let container = document.getElementById(exerciceName);
    function changeSelection(){
        container.style.animation = "smoothColorChange 1s forwards";
        selectedContainer = exerciceName;
        resetSelected();
        changeText();
    }
    container.addEventListener('click',changeSelection);
}

function changeText(){
    let selectedExercice = exercices[selectedContainer]
    const {inhaleSec, exhaleSec,wait}= selectedExercice
    let desc = `inhale ${inhaleSec}s
    exhale ${exhaleSec}s`
    if (wait != 0)
        desc += `
    pause ${wait}s`
    text.textContent= desc
}


function startCycle(){
    progress.style.animation = "none";
    circle.style.animation = "none";
    circle.offsetWidth;
    progress.offsetWidth;
    if (text.textContent != ""){
        startProgressAnimation()
        let selectedExercice = exercices[selectedContainer]
        const {inhaleSec, exhaleSec,wait}= selectedExercice 
        let timeOfIteration = (inhaleSec+exhaleSec+wait)
        let numberOfIteration = (((5*60)/timeOfIteration)+1);

        startInhaleAnimation(inhaleSec)
        circle.addEventListener('animationend',(event)=>{
            testIteration(
                numberOfIteration,
                inhaleSec,
                exhaleSec,
                wait,
                event
            );
        })    
    }
}

function testIteration(numberOfIteration,inhaleSec,exhaleSec,waitSec,event){
    if (iteration < numberOfIteration){
        let animationName = event.animationName;
        if (animationName == 'circleInhale'){   
            startExhaleAnimation(exhaleSec);
            iteration++
        }
        else if (animationName == 'circleExhale'){
            startPauseAnimation(waitSec);
        }
        else if (animationName == 'wait'){
            startInhaleAnimation(inhaleSec);
        }
    }
}

function startInhaleAnimation(inSec){
    circle.style.animation="none !important";
    circle.style.animation=`circleInhale ${inSec}s forwards`;
}
function startExhaleAnimation(exSec){
    circle.style.animation="none !important";
    circle.style.animation=`circleExhale ${exSec}s forwards`;
}
function startPauseAnimation(waitSec){
    circle.style.animation="none !important";
    circle.style.animation=`wait ${waitSec}s forwards`;
}
function startProgressAnimation(){
    progress.style.animation="none !important";
    progress.style.animation=`progressBar ${5*60}s forwards`
}

