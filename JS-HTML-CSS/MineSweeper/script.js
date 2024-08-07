let newGameBTN = document.getElementById("NewGameButton");
let nbSize = document.getElementById("MineSweeperSize");
let nbBomb = document.getElementById("MineSweeperBomb");
let body = document.body;

function setSize(){
    let tbl = document.createElement("table");
    for (let i=0;i<nbSize.value;i++){
        let tr = document.createElement("tr");
        tbl.appendChild(tr);
        for(let j=0; j<nbSize.value;j++){
            let td = document.createElement("td");
            let btn = document.createElement("button");
            btn.innerText = "    ";
            td.appendChild(btn);
            tr.appendChild(td);
        }
    }
    body.appendChild(tbl);
}
function setBomb(){
    for (let i=0; i<nbBomb.value;i++){
        
    }
}
function randomInt(){
    return Math.floor(math.random * (nbSize.value));
}


function newGame(){
    setSize();
}

newGameBTN.addEventListener("click",newGame);