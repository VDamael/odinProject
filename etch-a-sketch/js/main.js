function generateNewFlexGrid(){
    let nbSquarePerLineAndPerRow = 0;
    let wantedFlexBasic;

    while(nbSquarePerLineAndPerRow == 0 ||isNaN(nbSquarePerLineAndPerRow)){
        nbSquarePerLineAndPerRow = parseInt(prompt("Enter a valid number to define how many line and row must be created"));
    }

    let container = document.querySelector(".container");
    container.innerHTML = "";
    wantedFlexBasic = 100/nbSquarePerLineAndPerRow;
    console.warn(wantedFlexBasic);

    for(let i=0;i<nbSquarePerLineAndPerRow;i++){
        for(let j=0;j<nbSquarePerLineAndPerRow;j++){
            let divTooAdd = document.createElement("div");
            divTooAdd.classList.add("block");
            divTooAdd.style.flex = "1 0 calc("+wantedFlexBasic+"% - 4px)";
            container.appendChild(divTooAdd);
        }
    }
}

document.querySelector("#generateNewFlexGrid").addEventListener("click",generateNewFlexGrid);