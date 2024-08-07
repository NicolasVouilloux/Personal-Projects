let newGameBTN = document.getElementById("NewGameButton");
let nbSize = document.getElementById("MineSweeperSize");
let body = document.body;

function setSize(){
    let tbl = document.createElement("table");
    for (let i=0;i<nbSize.value;i++){
        let tr = document.createElement("tr");
        tbl.appendChild(tr);
        for(let j=0; j<nbSize.value;j++){
            let td = document.createElement("td");
            tr.appendChild(td);
        }
    }
    body.appendChild(tbl);
}



function newGame(){
    setSize();
}

newGameBTN.addEventListener("click",newGame);