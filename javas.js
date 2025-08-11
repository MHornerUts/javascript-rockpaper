//console.log("Hello World!")
//playGame()

const buttons = document.querySelectorAll("button");

const div = document.querySelector("#container");
const para = document.querySelector("p");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {  
    button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice())
    });  
});

/*
function playGame () {
    let compScore = 0
    let humanScore = 0
   

    if (humanScore > compScore) {console.log("You won! With a score " + humanScore + " to " + compScore)}
    else if (humanScore < compScore) {console.log("You lost! With a score " + humanScore + " to " + compScore)}
    else {console.log("It's a tie!!!")}
}
*/

function playRound (humanChoice, computerChoice) {
    let winner = 0

    switch (humanChoice) {
        case "PAPER":
            if (computerChoice == "ROCK") {
                winner = 1;
            }
             else if (computerChoice == "SCISSORS") {
                winner = 2;
             }
             break;
        case "SCISSORS":
            if (computerChoice == "PAPER") {
                winner = 1;
            }
             else if (computerChoice == "ROCK") {
                winner = 2;
             }
             break;
        default:
            if (computerChoice == "SCISSORS") {
                winner = 1;
            }
             else if (computerChoice == "PAPER") {
                winner = 2;
             }
             break;
    }

    if (humanScore < 5 && computerScore < 5 ) {

        if (winner == 0) {
            para.textContent = ("Nobody won! You both chose " + humanChoice)
            
        }
        else if (winner == 1) {
            para.textContent = ("You won! " + humanChoice + " beats " + computerChoice)
            humanScore = humanScore + 1
        }
        else if (winner == 2) {
            para.textContent = ("You lose! " + computerChoice + " beats " + humanChoice)
            computerScore = computerScore + 1
        }
    } else {
        if (humanScore > computerScore) {
            para.textContent = ("You won! With a score " + humanScore + " to " + computerScore)
        }
        else if (humanScore < computerScore) {
            para.textContent = ("You lost! With a score " + humanScore + " to " + computerScore)
        }
        else {
            para.textContent = ("It's a tie!!!")
        }
        
        humanScore = 0;
        computerScore = 0;
        div.remove()
    }

}

function getComputerChoice () {
    let guessNum = Math.floor(Math.random() * 3)
    let guess = ""

    switch (guessNum) {
        case 0:
            guess = "ROCK"
            break
        case 1:
            guess = "PAPER"
            break
        default:
            guess = "SCISSORS"

    }

    return guess
    
}

function getHumanChoice () {
    let guess = prompt("ROCK, PAPER or SCISSORS")

    guess = guess.toUpperCase()

    return guess
}



//btn1.addEventListener("click", playRound("ROCK", getComputerChoice()));
//btn2.addEventListener("click", playRound("PAPER", getComputerChoice()));
//btn3.addEventListener("click", playRound("SCISSORS", getComputerChoice()));

