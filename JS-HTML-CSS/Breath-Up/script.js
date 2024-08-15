let text = document.getElementById("catInformation");
let selectedContainer = starting;
let btnStart = document.getElementById("startButton");
let circle = document.getElementById("circle")
let progress = document.querySelector(".tracker");
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
    if (text.textContent != ""){
        let selectedExercice = exercices[selectedContainer]
        const {inhaleSec, exhaleSec,wait}= selectedExercice 
        let timeOfIteration = (inhaleSec+exhaleSec)
        let numberOfIteration = (((5*60)/timeOfIteration)+1);

        startInhaleAnimation(inhaleSec);
        updateTracker(iteration,numberOfIteration)
        circle.addEventListener('animationend',(event)=>{
            testIteration(
                numberOfIteration,
                inhaleSec,
                exhaleSec,
                event
            );
        })    
    }
}

function testIteration(numberOfIteration,inhaleSec,exhaleSec,event){
    if (iteration < numberOfIteration){
        let animationName = event.animationName;
        if (animationName == 'circleInhale'){   
            startExhaleAnimation(exhaleSec);
            iteration++
            updateTracker(iteration,numberOfIteration)
        }
        else if (animationName == 'circleExhale'){
            startInhaleAnimation(inhaleSec);
        }
    }
}

function startInhaleAnimation(inSec){
    circle.style.animation="none";
    circle.style.animation=`circleInhale ${inSec}s forwards`;
}
function startExhaleAnimation(exSec){
    circle.style.animation="none";
    circle.style.animation=`circleExhale ${exSec}s forwards`;
}

function updateTracker(iteration,numberOfIteration){
    let width = (iteration/numberOfIteration)*100
    progress.style.setProperty("--progress", `${width}%`)
}

btnStart.addEventListener("click",startCycle);