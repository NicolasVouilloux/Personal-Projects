var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
	}
	//END STRIKETHROUGH

	// START ADD DELETE BUTTON

	// END ADD DELETE BUTTON

	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
}

function addListAfterKeypress(event) {
}


enterButton.addEventListener();
input.addEventListener();