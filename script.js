// step 1: we create the function for the computer behaviour
// below is the computer behaviour
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

function gameFinish() {
    if (playerPoint === 5) {
        return alert("Player Win");
    };
    if (compPoint === 5) {
        return alert("Computer Win");
    };
}

// step 2: we create the rule of the game
// this function dictates the rule of the game
function roundResult(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Rock") {
        alert("Tie! Rock");
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert("You Lose! Paper beats Rock");
        compPoint += 1;
        gameFinish();
        console.log(playerPoint, compPoint);
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        alert("You Win! Rock crushes Scissors");
        playerPoint += 1;
        gameFinish();
        console.log(playerPoint, compPoint)
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        alert("You Win! Paper suffocates Rock");
        playerPoint += 1;
        gameFinish();
        console.log(playerPoint, compPoint)
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        alert("Tie! Paper");
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert("You Lose! Scissors cut Paper");
        compPoint += 1;
        gameFinish();
        console.log(playerPoint, compPoint);
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert("You lose! Rock crushes Scissors")
        compPoint += 1;
        gameFinish();
        console.log(playerPoint, compPoint);
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        alert("You Win! Scissors cut Paper")
        playerPoint += 1;
        gameFinish();
        console.log(playerPoint, compPoint)
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        alert("Tie! Scissors");
    }
}

// putting the variable outside for loop to increments 
let playerPoint = 0;
let compPoint = 0;


const choices = document.querySelectorAll("buttons")

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// step 3: we are looping the game and put the score outside the loop up until the player or comp meet the first 5 and it breaks the loop
// this is the proper code to create infinite loop 

if (rock.addEventListener("click", () => {
    console.log(playerSelection = "rock");
    computerSelection = computerPlay();
    console.log(roundResult(playerSelection, computerSelection));
}));

if (paper.addEventListener("click", () => {
    console.log(playerSelection = "paper");
    computerSelection = computerPlay();
    console.log(roundResult(playerSelection, computerSelection));
}));

if (scissors.addEventListener("click", () => {
    console.log(playerSelection = "scissors");
    computerSelection = computerPlay();
    console.log(roundResult(playerSelection, computerSelection));
}));


// below are if condition, it calculates the variable and will break the loops if it meets its condition

/*
const playerSelection = prompt("Rock, Paper, or Scissors? \n" + "The current score for Player = " +
playerPoint + " and for Computer = " + compPoint).toLowerCase();
console.log(playerSelection);
*/