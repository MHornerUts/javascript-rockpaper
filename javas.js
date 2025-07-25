console.log("Hello World!")
playGame()


function playGame () {
    let compScore = 0
    let humanScore = 0
    let result
    let humanChoice
    let computerChoice

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        result = playRound(humanChoice, computerChoice)

        if (result == 1) {humanScore++}
        else if (result == 2) {compScore++}
    }

    if (humanScore > compScore) {console.log("You won! With a score " + humanScore + " to " + compScore)}
    else if (humanScore < compScore) {console.log("You lost! With a score " + humanScore + " to " + compScore)}
    else {console.log("It's a tie!!!")}
}

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

    if (winner == 0) {console.log("Nobody won! You both chose " + humanChoice)}
    else if (winner == 1) {console.log("You won! " + humanChoice + " beats " + computerChoice)}
    else if (winner == 2) {console.log("You lose! " + computerChoice + " beats " + humanChoice)}

    return winner
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

