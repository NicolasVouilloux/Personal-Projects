let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

//checking the txt before creatng the listElement
function isNotEmplty(){
	if (input.value == "" )
		return false;
	 return true;
} 

function createListElement() {
	if (isNotEmplty()){
		//variable
		let isMarked = false;
		//taking the content of the txt
		let li = document.createElement("li");
		let txt = document.createTextNode(input.value);
		//making the crossbutton
		let btnX = document.createElement('button');
		btnX.innerText = "X";
		//adding everything
		li.appendChild(txt);
		li.appendChild(btnX);
		ul.appendChild(li);
		input.value="";
		//function for delete and marking the li
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
		//action listener for the function 
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