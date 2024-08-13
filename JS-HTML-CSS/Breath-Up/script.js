let text = document.getElementById("catInformation");
let containerList = [1,2,3,4,5];
let selectedContainer = 1;
let btnStart = document.getElementById("startButton");
let circle = document.getElementById("circle")

/* Text for the Rythm */
let startingtext = `Inhale 3s
Exhale 5s`;
let Cardiactext = `Inhale 5s
Exhale 5s`;
let Calmtext = `Inhale 4s
Exhale 8s`;
let Reinforcetext = `Inhale 6s
Exhale 6s
Focus 10s`;
let Customtext = `Inhale 5s
Exhale 5s`;

let inhale = "10s"
    
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
    if(selectedContainer == 1)
        text.textContent = startingtext;
    else if(selectedContainer == 2)
        text.textContent = Cardiactext;
    else if(selectedContainer == 3)
        text.textContent = Calmtext;
    else if(selectedContainer == 4)
        text.textContent = Reinforcetext;
    else 
        text.textContent = Customtext;
}
function startAnimation(){
    circle.style.animation = "circleInhale 2s infinite,"
}

btnStart.addEventListener("click",startAnimation)
