function computerPlay() {
    num = Math.ceil(Math.random() * 3)

    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function roundResult(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "Tie! Rock";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock crushes Scissors";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You Win! Paper suffocates Rock";
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "Tie! Paper";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors cut Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock crushes Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors cut Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "Tie! Scissors";
    } else {
        return "Please type either Rock, Paper, or Scissors, it's case insensitive! (:"
    }
}
;;
const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
const computerSelection = computerPlay();

function winRound() {
    // if "you win" then playwin + 1
    if (roundResult(playerSelection, computerSelection).slice(0, 7) === "You Win") {
        alert(roundResult(playerSelection, computerSelection))
        playerWin = playerWin + 1;
    }
    // if "you lose" then compwin + 1
    if (roundResult(playerSelection, computerSelection).slice(0, 7) === "You Los") {
        alert(roundResult(playerSelection, computerSelection))
        compWin = compWin + 1;
    }
}
// if player wins 5 times, return you win
// if computer wins 5 times, return you lose
for (let i = 0; i < 11; i++) {
    let playerWin = 0;
    let compWin = 0;
    computerPlay();
    winRound();
    roundResult(playerSelection, computerSelection);
    if (playerWin === 5) {
        prompt("Player Win")
        break
    }
    if (compWin === 5) {
        prompt("Computer Win")
        break
    }
}