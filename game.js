class Game {
  constructor() {

}
  computeScore(string1) {
    if (string1.includes("win")) {
        humanScore++;
    } else if (string1.includes("lose")) {
        computerScore++;
    }
    document.getElementById("humanScorePoints").innerHTML = humanScore;
    document.getElementById("robotScorePoints").innerHTML = computerScore;

    if (humanScore === 5) {
        document.getElementById("roundConclusion").innerHTML = "The winner by unanimous decision is YOU!";
        humanScore = 0;
        computerScore = 0;
        document.getElementById("humanScorePoints").innerHTML = "0";
        document.getElementById("robotScorePoints").innerHTML = "0";

    } else if (computerScore === 5) {
        document.getElementById("roundConclusion").innerHTML = "The winner by unanimous decision is the Computer!";
        humanScore = 0;
        computerScore = 0;
        document.getElementById("humanScorePoints").innerHTML = "0";
        document.getElementById("robotScorePoints").innerHTML = "0";
    }
  }
   playRound(playerSelection, computerSelection) {
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

      } else if (playerSelection === 'scissors' && computerSelection === 'turkey') {
            document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
            return ("win")

      } else if (playerSelection === 'paper' && computerSelection === 'turkey') {
            document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
            return ("win")

      } else if (playerSelection === 'rock' && computerSelection === 'lizard') {
            document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
            return ("win")

      } else if (playerSelection === 'turkey' && computerSelection === 'lizard') {
            document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
            return ("win")

      } else if (playerSelection === 'turkey' && computerSelection === 'rock') {
            document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
            return ("win")

      } else if (playerSelection === 'lizard' && computerSelection === 'paper') {
            document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
            return ("win")

      } else if (playerSelection === 'lizard' && computerSelection === 'scissors') {
            document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
            return ("win")

      } else {
          document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
          return ("lose")

      }
  };
}
