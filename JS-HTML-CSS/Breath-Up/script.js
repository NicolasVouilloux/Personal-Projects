let containerList = [1,2,3,4,5];
let container = document.getElementById("1");
let selectedContainer = 0;

containerList.forEach(element => {
    initialyze(element);
});

function resetSelected(){
    containerList.forEach(element => {
        if(element != selectedContainer)
            container.style.animation = "";
    });
}

function initialyze(nbContainer){
    let container = document.getElementById(nbContainer);
    function changeSelection(){
        container.style.animation = "smoothColorChange 1s forwards";
        selectedContainer = nbContainer;
        resetSelected();
    }
    container.addEventListener('click',changeSelection);
}
