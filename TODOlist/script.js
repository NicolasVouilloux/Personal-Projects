let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function isEmplty(){
	//if (input.value == "" )
} 

function listLength(){
	return item.length;
}

function createListElement() {
	//START STRIKETHROUGH
	let li = document.createElement("li");
	let txt = document.createTextNode(input.value);
	li.appendChild(txt);  
	ul.appendChild(li);
	input.value="";

	
}


function addListAfterClick(){
	createListElement();
}

function addListAfterKeypress(event) {
	if (event.code=="Enter")
		createListElement();
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keydown",addListAfterKeypress);