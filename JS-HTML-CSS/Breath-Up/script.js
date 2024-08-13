let text = document.getElementById("catInformation");
let selectedContainer = starting;
let btnStart = document.getElementById("startButton");
let circle = document.getElementById("circle")
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
        inhaleSec :5,
        exhaleSec :5,
        wait:0,
    },
    reinforce :{
        inhaleSec :4,
        exhaleSec :8,
        wait:10,
    },
    custom :{
        inhaleSec :5,
        exhaleSec :5,
        wait:0,
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
    let selectedExercice = exercices[selectedContainer]
    const {inhaleSec, exhaleSec,wait}= selectedExercice 
    let iteration = 0;
    let numberOfIteration = ((5*60)/inhaleSec+exhaleSec);
    startInhaleAnimation(inhaleSec);
    circle.addEventListener('animationend',(event)=>{
        if (iteration < numberOfIteration){
            let animationName = event.animationName;
            if (animationName == 'circleInhale'){   
                startExhaleAnimation(exhaleSec);
                iteration++
            }
            else if (animationName == 'circleExhale'){
                startInhaleAnimation(inhaleSec);
            }
        }
    })
}

function startInhaleAnimation(inSec){
    circle.style.animation="none";
    circle.style.animation=`circleInhale ${inSec}s forwards`;
}
function startExhaleAnimation(exSec){
    circle.style.animation="none";
    circle.style.animation=`circleExhale ${exSec}s forwards`;
}
btnStart.addEventListener("click",startCycle);

