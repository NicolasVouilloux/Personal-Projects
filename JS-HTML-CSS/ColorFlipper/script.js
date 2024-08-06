let colorArray = ['Black', 'Red', 'Yellow', 'Orange'];


function fill(array) {
    let selectElement = document.getElementById('color-select');
    array.forEach(item => {
        let option = document.createElement('option');
        option.value = item;
        option.text = item;
        selectElement.appendChild(option);
    });
}

fill(colorArray);