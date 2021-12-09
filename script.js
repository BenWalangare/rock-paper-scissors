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

// step 2: we create the rule of the game
// this function dictates the rule of the game
function roundResult(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Rock") {
        alert("Tie! Rock");
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert("You Lose! Paper beats Rock");
        return compPoint += 1;
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        alert("You Win! Rock crushes Scissors");
        return playerPoint += 1
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        alert("You Win! Paper suffocates Rock");
        return playerPoint += 1;
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        alert("Tie! Paper");
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert("You Lose! Scissors cut Paper");
        return compPoint += 1;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert("You lose! Rock crushes Scissors")
        return compPoint += 1;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        alert("You Win! Scissors cut Paper")
        return playerPoint += 1;
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        alert("Tie! Scissors");
    } else {
        alert("Please type either Rock, Paper, or Scissors, it's case insensitive! (:")
    }
}

// putting the variable outside for loop to increments 
let playerPoint = 0;
let compPoint = 0;

/*
// step 3: we are looping the game and put the score outside the loop up until the player or comp meet the first 5 and it breaks the loop
for (;;) { // this is the proper code to create infinite loop 
    const playerSelection = prompt("Rock, Paper, or Scissors? \n" + "The current score for Player = " +
                            playerPoint + " and for Computer = " + compPoint).toLowerCase();
    console.log(playerSelection);
    const computerSelection = computerPlay();
    roundResult(playerSelection, computerSelection);
    console.log(playerPoint);
    console.log(compPoint);
    // below are if condition, it calculates the variable and will break the loops if it meets its condition
    if (playerPoint === 5) {
        alert("Player Win");
        break;
    }
    if (compPoint === 5) {
        alert("Computer Win");
        break;
    }
}
*/