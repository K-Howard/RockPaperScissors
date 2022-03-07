var computerScore = 0;
var humanScore = 0;
var playChoice = '';
var myArray = ['rock', 'paper', 'scissors'];
var rocks = document.getElementById("rock");
var papers = document.getElementById("paper");
var scissors = document.getElementById("scissors");

document.getElementById("paragraph").innerHTML = "ROCK PAPER SCISSORS!";
document.getElementById("humanScoreBanner").innerHTML = "Your Score";
document.getElementById("humanScorePoints").innerHTML = "0";
document.getElementById("robotScoreBanner").innerHTML = "Computer Score";
document.getElementById("robotScorePoints").innerHTML = "0";

rocks.addEventListener('click', () => pick('rock'));
papers.addEventListener('click', () => pick('paper'));
scissors.addEventListener('click', () => pick('scissors'));

function pick(choice) {
  if (choice === 'rock') {
              humanPlay(choice);
              return;
          }
          else if (choice === 'paper') {
              humanPlay(choice);
              return;
          }
          else if (choice === 'scissors') {
              humanPlay(choice);
              return;
          } else {
              return;
  };
    document.getElementById("paragraph").innerHTML = "You picked " + choice + "!";
}

function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
}

function humanPlay(choice) {
    var playerSelection = choice;
    var computerSelection = computerPlay();
    var result = playRound(playerSelection, computerSelection);
    computeScore(result);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === computerSelection) {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! Tie game!"
        return ("tie")

    } else {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
        return ("lose")
    }
}
