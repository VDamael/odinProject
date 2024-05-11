let humanScore = 0;
let computerScore = 0;
playGame();

function getComputerChoice(){
    let randomNumberToChoice = Math.round(Math.random() * 2);

    if(randomNumberToChoice == 2){
        return "rock";
    }
    else if(randomNumberToChoice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice;
    let availableChoices = ["rock","paper","scissors"];

    while (!availableChoices.includes(humanChoice)){
        humanChoice = prompt("Enter your choices bewteen rock, paper and scissors !");
    }
    return humanChoice;
}

function playRound(humanChoice,computerChoice){
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){ computerScore++;}
        else if(computerChoice == "scissors"){humanScore++;}
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){ computerScore++;}
        else if(computerChoice == "rock"){humanScore++;}
    }
    else{
        if(computerChoice == "rock"){ computerScore++;}
        else if(computerChoice == "paper"){humanScore++;}
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        let humanSelection = getHumanChoice();
        humanSelection = humanSelection.toLowerCase();
        computerSelection = getComputerChoice();
        console.warn(humanSelection);
        console.warn(computerSelection);
        playRound(humanSelection,computerSelection);
        console.warn(humanScore);
        console.warn(computerScore);
    }

    if(humanScore > computerScore){console.warn("vous avez gagné!");}
    else if(humanScore < computerScore){console.warn("vous avez perdu!");}
    else if(humanScore == computerScore){console.warn("vous avez fait égalité!");}
}