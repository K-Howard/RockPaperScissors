class Game {
  constructor() {

}

}
function computeScore(string1) {
    if (string1.includes("win")) {
        humanScore++;
    } else if (string1.includes("lose")) {
        computerScore++;
    }
    document.getElementById("humanScorePoints").innerHTML = humanScore;
    document.getElementById("robotScorePoints").innerHTML = computerScore;

    if (humanScore === 5) {
        document.getElementById("roundConclusion").innerHTML = "The winner by unanimous decision is the Human!";
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
