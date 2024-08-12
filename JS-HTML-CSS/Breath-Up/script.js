let containerList = [1,2,3,4,5];
let container = document.getElementById("1");
let selectedContainer = 0;

containerList.forEach(element => {
    initialyze(element);
});

function initialyze(nbContainer){
    let container = document.getElementById(nbContainer);
    let isSelected = false;
    function changeSelection(){
        isSelected = true;
        container.style.animation = "smoothColorChange 1s forwards";
        selectedContainer = nbContainer;
    }
    container.addEventListener('click',changeSelection);
}
