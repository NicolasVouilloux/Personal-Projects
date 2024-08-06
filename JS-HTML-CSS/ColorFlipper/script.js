let colorArray = ['Select a Color','Brown','Black', 'Red', 'Yellow', 'Orange'];


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
    let value = e.options[e.selectedIndex].value;
    colorArray.forEach(item => {
        if (value == 'Select a Color')
            return false;
        //else document.style.backgroundcolor = Brown;
    })
}