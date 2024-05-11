let humanScore = 0;
let computerScore = 0;
let round = 0;
let humanScoreElement =  document.querySelector("#humanScore");
let computerScoreElement =  document.querySelector("#computerScore");

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

function playRound(){
    console.warn("passe ici");
    let humanChoice = this.textContent;
    let computerChoice = getComputerChoice();
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

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    round++;
    isGameContinue();
}

function isGameContinue(){
    if(round>=5){
        let resultText;
        let resultElement = document.querySelector("#result");
        userChoices.forEach(userChoice => {
            userChoice.parentElement.removeChild(userChoice);
        });

        if(humanScore > computerScore){resultText = "vous avez gagné!";}
        else if(humanScore < computerScore){resultText = "vous avez perdu!";}
        else if(humanScore == computerScore){resultText = "vous avez fait égalité!";}

        resultElement.textContent = resultText;
    }
}

let userChoices = document.querySelectorAll(".humanChoice");
userChoices.forEach(userChoice => {
    userChoice.addEventListener("click",playRound);
});
