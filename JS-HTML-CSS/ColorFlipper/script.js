let colorArray = ['Select a Color','Brown','Black', 'Red', 'Yellow', 'Orange'];
let btn = document.getElementById('ColorChange');

function fill(array) {
    let selectElement = document.getElementById('ColorSelect');
    array.forEach(item => {
        let option = document.createElement('option');
        option.value = item;
        option.text = item;
        selectElement.appendChild(option);
    });
}

fill(colorArray);

function changeBackground(){
    let e = document.getElementById("ColorSelect");
    colorArray.forEach(item => {
        if (e.value == 'Select a Color'){
            return false;}
        else document.getElementById('body').style.backgroundColor=e.value;
    })
}


btn.addEventListener('click',changeBackground);