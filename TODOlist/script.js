let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function isNotEmplty(){
	if (input.value == "" )
		return false;
	 return true;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	if (isNotEmplty()){
		let li = document.createElement("li");
		let txt = document.createTextNode(input.value);
		let btn = document.querySelector('button');
		li.appendChild(txt);
		//li.appendChild(btn);
		ul.appendChild(li);
		input.value="";
	}
	
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