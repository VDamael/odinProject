let result;
let operator;
let firstNumber;
let secondNumber;
let oneOperationAlreadyMade = false;
let displayInput = document.querySelector(".result");


function display(numberToShow){
    displayInput.value = numberToShow;
}

function add(firstNumber,secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber,secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber,secondNumber){
    return firstNumber / secondNumber;
}

function oparate(firstNumberValue,secondNumberValue){
    switch(operator){
        case "+":
            firstNumber = add(firstNumberValue,secondNumberValue);
            break;
        case "-":
            firstNumber = subtract(firstNumberValue,secondNumberValue);
        break;
        case "*":
            firstNumber = multiply(firstNumberValue,secondNumberValue);
            break;
        case "/":
            if(secondNumberValue == 0){return alert("you can't divide by 0");}
            firstNumber = divide(firstNumberValue,secondNumberValue),2;
            break;
        default:
            return alert("Error in entering");            
    }

    oneOperationAlreadyMade = true;
    secondNumber=undefined;
    operator=undefined;
    if(!Number.isInteger(firstNumber)){firstNumber = RoundToTwoDecimals(firstNumber);}
    firstNumber=String(firstNumber);
    display(firstNumber);
        
}

function numberIsClicked(){
    console.warn(operator);
    if(typeof operator === "undefined"){
        if(typeof firstNumber === "undefined" || oneOperationAlreadyMade){
            firstNumber = this.value;
            if(oneOperationAlreadyMade) oneOperationAlreadyMade = false;
        }
        else{
            firstNumber += this.value;
        }

        display(firstNumber);
    }
    else{
        if(typeof secondNumber === "undefined"){
            secondNumber = this.value;
        }
        else{
            secondNumber += this.value;
        }

        display(secondNumber);
    }
}

function operatorIsClicked(){
    console.warn(this.value);
    if(typeof firstNumber === "undefined"){
        alert("First number must been given");
    }

    operator = this.value;
    console.warn(operator);
}

function equalIsClicked(){
    if(typeof operator === "undefined" || typeof firstNumber === "undefined" || typeof secondNumber === "undefined"){
        alert("Error ! an operator or two number must be given !")
    }
    else{
        oparate(Number(firstNumber),Number(secondNumber));
    }
}

function clearCalculator(){
    displayInput.value = "";
    oneOperationAlreadyMade = false;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
}

function RoundToTwoDecimals(numberToRound){
    return numberToRound.toFixed(2);
}


let numberButtons = document.querySelectorAll(".number_button");
console.warn(numberButtons);
numberButtons.forEach( numberButton => {
    numberButton.addEventListener("click",numberIsClicked);
});

let operatorButtons = document.querySelectorAll(".operator_button");
operatorButtons.forEach( operatorButton => {
    operatorButton.addEventListener("click",operatorIsClicked);
});

document.querySelector('.equal_button').addEventListener("click",equalIsClicked);
document.querySelector('.clear_button').addEventListener("click",clearCalculator);