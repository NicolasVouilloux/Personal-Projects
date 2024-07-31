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
		let isMarked = false;
		let li = document.createElement("li");
		let txt = document.createTextNode(input.value);
		let btnX = document.createElement('button');
		btnX.innerText = "X";
		li.appendChild(txt);
		li.appendChild(btnX);
		ul.appendChild(li);
		input.value="";
		function deleteItem(){
			li.parentNode.removeChild(li);
		}
		function mark(){
			if (isMarked == false){
				li.style.backgroundColor = "#51DF70";
				isMarked = true;
			}
			else {
				li.style.backgroundColor = "#4EB9CD";
				isMarked = false;
			}
		}
		btnX.addEventListener("click",deleteItem);
		li.addEventListener("click",mark);
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